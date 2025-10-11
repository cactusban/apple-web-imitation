import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Btn, Container, ContainerWrap, Title } from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface Iprops {
  children?: ReactNode
}

const backgroundImages = [
  'https://www.apple.com.cn/v/iphone/home/cf/images/overview/consider/innovation__ce13717o3vhy_small_2x.jpg',
  'https://www.apple.com.cn/v/iphone/home/cf/images/overview/consider/camera__f389jji00bee_small_2x.jpg',
  'https://www.apple.com.cn/v/iphone/home/cf/images/overview/consider/chip__6hy1uruuluaa_small_2x.jpg',
  'https://www.apple.com.cn/iphone/home/images/overview/consider/ios__02vczxaa3siu_small_2x.jpg',
  'https://www.apple.com.cn/v/iphone/home/cf/images/overview/consider/environment__ct6r1r1bigsy_small_2x.jpg',
  'https://www.apple.com.cn/iphone/home//images/overview/consider/safety__faiti3j3g0mm_small_2x.jpg',
]
const items = [
  {
    background: backgroundImages[0],
    className: 'white',
    h2: '创新',
    h1: ['设计到位，', '耐看又耐用。'],
  },
  {
    background: backgroundImages[1],
    className: 'white',
    h2: '超先进拍摄系统',
    h1: ['拍照、拍视频，', '出手成片。'],
  },
  {
    background: backgroundImages[2],
    className: 'white',
    h2: '芯片和电池续航',
    h1: ['一直飙一直快。'],
  },
  {
    background: backgroundImages[3],
    className: 'white',
    h2: 'IOS',
    h1: ['新面貌，上手更奇妙。'],
  },
  {
    background: backgroundImages[4],
    className: 'white',
    h2: '环保',
    h1: ['设计，为地球设想。'],
  },

  {
    background: backgroundImages[5],
    className: 'white',
    h2: '安心无忧',
    h1: ['实用安全功能，', '有备无患。'],
  },
]
const IphoneCompre: React.FC<Iprops> = () => {
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
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  useEffect(() => {
    const observeOption = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    }
    const observeCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          setTimeout(() => {
            setVisibleItems((prev) => new Set(prev).add(index))
          }, index * 250)
        }
      })
    }
    const observer = new IntersectionObserver(observeCallback, observeOption)
    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item)
      }
    })
    return () => {
      itemRefs.current.forEach((item) => {
        if (item) {
          observer.unobserve(item)
        }
      })
    }
  }, [])

  return (
    <>
      <Title>
        <h1>来了解一下 iPhone</h1>
      </Title>

      <Container ref={containerRef}>
        {items.map((item, index) => (
          <ContainerWrap
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            data-index={index}
            background={item.background}
            className={visibleItems.has(index) ? 'visible' : 'hidden'}
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
export default IphoneCompre
