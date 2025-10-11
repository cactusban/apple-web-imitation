// useSequentialAnimation.ts
import { useState, useEffect, useRef } from 'react'

interface UseLazyAnimationOptions {
  /** IntersectionObserver 的 threshold，默认 0.1 */
  threshold?: number
  /** IntersectionObserver 的 rootMargin，默认 '0px' */
  rootMargin?: string
  /** 每个元素的延迟时间（毫秒），默认 100 */
  delay?: number
  /** 是否启用动画，默认 true */
  enabled?: boolean
  /** 自定义 root 元素 */
  root?: Element | null
  /** 触发器索引，默认 0（第一个元素） */
  triggerIndex?: number
}

interface UseLazyAnimationReturn<T extends HTMLElement> {
  /** 触发元素的引用 */
  triggerRef: React.RefObject<T>
  /** 可见元素的索引集合 */
  visibleItems: Set<number>
  /** 检查某个索引是否可见 */
  isVisible: (index: number) => boolean
  /** 获取触发元素的 ref */
  getTriggerRef: () => React.RefObject<T>
  /** 获取元素的 props（不需要 ref） */
  getItemProps: (index: number) => {
    'data-index': number
  }
  /** 手动触发动画 */
  trigger: () => void
  /** 手动重置所有可见状态 */
  reset: () => void
  /** 动画是否已触发 */
  isTriggered: boolean
}

/**
 * 顺序动画 Hook - 当触发元素进入视口后，所有元素按顺序依次出现
 *
 * @example
 * ```tsx
 * const { getTriggerRef, getItemProps, isVisible } = useSequentialAnimation<HTMLDivElement>({
 *   delay: 100,
 *   triggerIndex: 0
 * })
 *
 * return (
 *   <div>
 *     {items.map((item, index) => (
 *       <div
 *         key={index}
 *         ref={index === 0 ? getTriggerRef() : undefined}
 *         {...getItemProps(index)}
 *         className={isVisible(index) ? 'visible' : 'hidden'}
 *       >
 *         {item.content}
 *       </div>
 *     ))}
 *   </div>
 * )
 * ```
 */
export function useLazyAnimation<T extends HTMLElement = HTMLElement>(
  options: UseLazyAnimationOptions = {}
): UseLazyAnimationReturn<T> {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    delay = 100,
    enabled = true,
    root = null,
    triggerIndex = 0,
  } = options

  const triggerRef = useRef<T>(null) as React.RefObject<T>
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [isTriggered, setIsTriggered] = useState(false)
  const timeoutsRef = useRef<number[]>([])

  // 手动触发动画
  const trigger = (totalItems?: number) => {
    if (isTriggered) return

    setIsTriggered(true)

    // 清除之前的定时器
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []

    // 如果没有指定总数，则逐个添加（适用于动态列表）
    // 否则一次性创建所有定时器
    if (totalItems !== undefined) {
      for (let i = 0; i < totalItems; i++) {
        const timeoutId = window.setTimeout(() => {
          setVisibleItems((prev) => new Set(prev).add(i))
        }, i * delay)
        timeoutsRef.current.push(timeoutId)
      }
    }
  }

  // 添加单个元素（用于动态添加）
  const addItem = (index: number) => {
    const timeoutId = window.setTimeout(() => {
      setVisibleItems((prev) => new Set(prev).add(index))
    }, index * delay)
    timeoutsRef.current.push(timeoutId)
  }

  useEffect(() => {
    if (!enabled || !triggerRef.current) return

    const observeOption: IntersectionObserverInit = {
      root,
      rootMargin,
      threshold,
    }

    const observeCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isTriggered) {
          trigger()
        }
      })
    }

    const observer = new IntersectionObserver(observeCallback, observeOption)
    observer.observe(triggerRef.current)

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
      // 清除所有定时器
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [enabled, threshold, rootMargin, root, isTriggered])

  // 检查某个索引是否可见
  const isVisible = (index: number): boolean => {
    return visibleItems.has(index)
  }

  // 获取触发元素的 ref
  const getTriggerRef = () => triggerRef

  // 获取元素所需的 props
  const getItemProps = (index: number) => {
    // 当触发时，为每个索引设置定时器
    if (isTriggered && !visibleItems.has(index)) {
      addItem(index)
    }

    return {
      'data-index': index,
    }
  }

  // 手动重置
  const reset = () => {
    setVisibleItems(new Set())
    setIsTriggered(false)
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  return {
    triggerRef,
    visibleItems,
    isVisible,
    getTriggerRef,
    getItemProps,
    trigger,
    reset,
    isTriggered,
  }
}

// 导出类型
export type { UseLazyAnimationOptions, UseLazyAnimationReturn }
