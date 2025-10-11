import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Container, Inner } from './style'

const IpadPartner: FC = () => {
  const data = [
    {
      id: 1,
      title: 'iPad 和 iPhone',
      desc: `iPad 仿佛一块沉浸式的画布，让一切看起来都栩栩如生，用来呈现 iPhone 拍摄的内容再合适不过。你可以用 iPhone 拍摄视频和照片，然后在 iPad 宽大的显示屏上进行剪辑、添加动画效果等。还能借助接力功能，从之前操作中断的地方继续。`,
      img: 'https://www.apple.com.cn/assets-www/zh_CN/ipad/image_accordion/xlarge/ipad_iphone_6c1af1864_2x.jpg',
    },
    {
      id: 2,
      title: 'iPad 和 Mac',
      desc: `iPad 和 Mac 经过精心设计，协作起来默契十足，堪称创意好组合。凭借随航功能，iPad 上画的草稿当即就能在 Mac 上显现。然后你可以用 Apple Pencil 在 iPad 上进一步描绘、修图，或是将 iPad 当作第二块显示屏来用。你还可以在其他地方开展工作，而重返办公桌后，可以借助通用控制功能，用一套鼠标或触控板在两部设备间顺畅工作。`,
      img: 'https://www.apple.com.cn/assets-www/zh_CN/ipad/image_accordion/xlarge/ipad_mac_0ae373b72_2x.jpg',
    },
    {
      id: 3,
      title: 'iPad 和 Apple Watch',
      desc: `iPad 宽大的显示屏，可以更出色呈现 Apple Watch 追踪的各项健康数据，健康 app 中的趋势和重点也都一目了然。你还可以邀请亲友以安全方式和你分享他们的健康信息，给你一份安心，也同他们心连心。`,
      img: 'https://www.apple.com.cn/assets-www/zh_CN/ipad/image_accordion/xlarge/ipad_watch_3c272d6a3_2x.jpg',
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)

  const setActive = (index: number) => {
    if (index === activeIndex || isTransitioning) return

    setIsTransitioning(true)

    setTimeout(() => {
      setDisplayIndex(index)
      setActiveIndex(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  const [inView, setInview] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInview(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (innerRef.current) observer.observe(innerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Container>
      <Inner>
        <h1>亲密好拍档</h1>
        <div
          ref={innerRef}
          className={`content ${inView ? 'slidein' : 'hidden'}`}
        >
          <div className="left">
            {data.map((item, index) => (
              <div key={item.id} className="ts">
                <div>
                  <div className="title" onClick={() => setActive(index)}>
                    {item.title}
                  </div>
                  {activeIndex === index && (
                    <div className="desc">{item.desc}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="right">
            <div className="image">
              <img
                src={data[displayIndex]?.img}
                alt=""
                className={isTransitioning ? 'fadeout' : 'fadein'}
              />
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  )
}

export default IpadPartner
