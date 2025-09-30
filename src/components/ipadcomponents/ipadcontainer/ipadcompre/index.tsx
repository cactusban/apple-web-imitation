import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Btn, Container, ContainerWrap, Title } from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface Iprops {
  children?: ReactNode
}

const backgroundImages = [
  'https://www.apple.com.cn/assets-www/en_WW/ipad/feature_card/xsmall/fc_productivity_f46549789_2x.jpg',
  'https://www.apple.com.cn/assets-www/en_WW/ipad/feature_card/xsmall/fc_creativity_4537cc454_2x.jpg',
  'https://www.apple.com.cn/assets-www/en_WW/ipad/feature_card/xsmall/fc_learning_f1289dde1_2x.jpg',
  'https://www.apple.com.cn/assets-www/zh_CN/ipad/feature_card/xsmall/fc_entertainment_35d8aedca_2x.jpg',
  'https://www.apple.com.cn/assets-www/zh_CN/ipad/feature_card/xsmall/fc_ipados_361474746_2x.jpg',
]
const items = [
  {
    background: backgroundImages[0],
    className: 'white',
    h2: '生产力',
    h1: ['有事，随处都能做。'],
  },
  {
    background: backgroundImages[1],
    className: 'white',
    h2: '创造力',
    h1: ['释放你的创作欲。'],
  },
  {
    background: backgroundImages[2],
    className: 'white',
    h2: '学习',
    h1: ['哪里都能当课堂。'],
  },
  {
    background: backgroundImages[3],
    className: 'white',
    h2: '娱乐',
    h1: ['休闲玩乐，', '乐到不停。'],
  },
  {
    background: backgroundImages[4],
    className: 'white',
    h2: 'iPadOS+APP',
    h1: ['内置强大功能', '事事擅长。'],
  },
]
const IpadCompre: React.FC<Iprops> = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)
  const [leftStyle, setLeftStyle] = useState<boolean>(false)
  const [rightStyle, setRightStyle] = useState<boolean>(true)
  const [visible, setVisible] = useState<boolean>(false)

  const goLeft = () => {
    containerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
  }
  const goRight = () => {
    containerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })
  }
  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      const canScroll = scrollWidth > clientWidth
      setLeftStyle(canScroll && scrollLeft > 0)
      setRightStyle(canScroll && scrollLeft + clientWidth < scrollWidth - 1)
    }
  }
  useEffect(() => {
    checkScrollPosition()
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollPosition)
      window.addEventListener('resize', checkScrollPosition) // 监听窗口大小变化
      return () => {
        container.removeEventListener('scroll', checkScrollPosition)
        window.removeEventListener('resize', checkScrollPosition)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (firstRef.current) {
      observer.observe(firstRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Title>
        <h1>来了解一下 Mac</h1>
      </Title>

      <Container ref={containerRef}>
        {items.map((item, index) => (
          <ContainerWrap
            key={index}
            ref={index === 0 ? firstRef : null}
            background={item.background}
            visible={visible}
          >
            {(visible || index === 0) && (
              <div className={item.className}>
                <h2>{item.h2}</h2>
                {item.h1.map((text, i) => (
                  <h1 key={i}>{text}</h1>
                ))}
              </div>
            )}
          </ContainerWrap>
        ))}
      </Container>
      <Btn>
        <button
          onClick={goLeft}
          className={`${leftStyle ? 'usebtn' : 'nousebtn'}`}
        >
          <LeftOutlined className={`${leftStyle ? 'use' : 'no'}`} />
        </button>
        <button
          onClick={goRight}
          className={`${rightStyle ? 'usebtn' : 'nousebtn'}`}
        >
          <RightOutlined className={`${rightStyle ? 'use' : 'no'}`} />
        </button>
      </Btn>
    </>
  )
}
export default IpadCompre
