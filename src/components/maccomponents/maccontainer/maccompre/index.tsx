import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Btn, Container, ContainerWrap, Title } from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface Iprops {
  children?: ReactNode
}

const backgroundImages = [
  'https://www.apple.com.cn/assets-www/en_WW/mac/feature_card/small/fc_performance_146e4ec4d_2x.jpg',
  'https://www.apple.com.cn/assets-www/zh_CN/mac/feature_card/small/fc_iphone_3cd40406a_2x.jpg',
  'https://www.apple.com.cn/assets-www/zh_CN/mac/feature_card/small/fc_compatibility_5ffb923d8_2x.jpg',
  'https://www.apple.com.cn/assets-www/en_WW/mac/feature_card/small/fc_security_d657f45ef_2x.jpg',
  'https://www.apple.com.cn/assets-www/en_WW/mac/feature_card/small/fc_durability_71941f319_2x.jpg',
  'https://www.apple.com.cn/assets-www/en_WW/mac/feature_card/small/fc_values_e2012f396_2x.jpg',
]
const items = [
  {
    background: backgroundImages[0],
    className: 'white',
    h2: '性能和电池续航',
    h1: ['跑的快，跑的久。'],
  },
  {
    background: backgroundImages[1],
    className: 'black',
    h2: 'Mac 和 iPhone',
    h1: ['梦幻好队友。'],
  },
  {
    background: backgroundImages[2],
    className: 'black',
    h2: '兼容性',
    h1: ['各种常用App，', 'Mac 都能跑。'],
  },
  {
    background: backgroundImages[3],
    className: 'white',
    h2: '隐私和安全',
    h1: ['你的私事，', '只关你的事。'],
  },
  {
    background: backgroundImages[4],
    className: 'white',
    h2: '耐用性',
    h1: ['精心打造，', '经得起时间考验。'],
  },
  {
    background: backgroundImages[5],
    className: 'white',
    h2: 'Apple价值观',
    h1: ['我们的价值观，', '处处有体现。'],
  },
]
const MacCompre: React.FC<Iprops> = () => {
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
export default MacCompre
