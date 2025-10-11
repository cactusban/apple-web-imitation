import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import { Container, Wrapper } from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface Iprops {
  children?: ReactNode
}
interface Data {
  id: number
  name: string
  desc: string
  img: string
}
const dataList = [
  {
    id: 1,
    name: 'iPhone 17 Pro',
    desc: 'new',
    img: 'https://www.apple.com.cn/iphone/home/images/overview/chapternav/nav_iphone_17pro__d60uog2c064i_large_2x.png',
  },
  {
    id: 2,
    name: 'iPhone 17',
    desc: 'new',
    img: 'https://www.apple.com.cn/iphone/home/images/overview/chapternav/nav_iphone_17__ffxyxejeezqm_large_2x.png',
  },
  {
    id: 3,
    name: 'iPhone Air',
    desc: 'new',
    img: 'https://www.apple.com.cn/v/iphone/home/cf/images/overview/chapternav/nav_iphone_air__bbj6j2c39efm_large_2x.png',
  },
  {
    id: 4,
    name: 'iPhone 16',
    desc: 'old',
    img: 'https://www.apple.com.cn/iphone/home/images/overview/chapternav/nav_iphone_16__kcscr25z9num_large_2x.png',
  },
  {
    id: 5,
    name: 'iPhone 16e',
    desc: 'old',
    img: 'https://www.apple.com.cn/iphone/home/images/overview/chapternav/nav_iphone_16e__3qxl86zrk0yq_large_2x.png',
  },
  {
    id: 6,
    name: '机型比较',
    desc: 'old',
    img: 'https://www.apple.com.cn/v/iphone/home/cf/images/overview/chapternav/nav_compare__fka067e4fgq6_large_2x.png',
  },
  {
    id: 7,
    name: '配件',
    desc: 'old',
    img: 'https://www.apple.com.cn/iphone/home/images/overview/chapternav/nav_accessories__e5zgfl9e0vwy_large_2x.png',
  },
  {
    id: 8,
    name: '选购',
    desc: 'old',
    img: 'https://www.apple.com.cn/v/iphone/home/cf/images/overview/chapternav/nav_shop__ehl4csfdphg2_large_2x.png',
  },
  {
    id: 9,
    name: 'IOS',
    desc: 'old',
    img: 'https://www.apple.com.cn/v/iphone/home/cf/images/overview/chapternav/nav_ios__efygxkc3oqs2_large_2x.png',
  },
]
const IphoneTopBar: FC<Iprops> = () => {
  const dataRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const goLeft = () => {
    if (dataRef.current) {
      dataRef.current.scrollBy({ left: -150, behavior: 'smooth' })
    }
  }
  const goRight = () => {
    if (dataRef.current) {
      dataRef.current.scrollBy({ left: 150, behavior: 'smooth' })
    }
  }
  const checkScrollPosition = () => {
    if (dataRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = dataRef.current
      const canScroll = scrollWidth > clientWidth
      setShowLeft(canScroll && scrollLeft > 0)
      setShowRight(canScroll && scrollLeft + clientWidth < scrollWidth - 1)
    }
  }
  useEffect(() => {
    checkScrollPosition()
    const container = dataRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollPosition)
      window.addEventListener('resize', checkScrollPosition) // 监听窗口大小变化
      return () => {
        container.removeEventListener('scroll', checkScrollPosition)
        window.removeEventListener('resize', checkScrollPosition)
      }
    }
  }, [])
  return (
    <Wrapper>
      {' '}
      <button className={`btn ${showLeft ? '' : 'hidden'}`} onClick={goLeft}>
        {'<'}
      </button>
      <Container ref={dataRef}>
        {dataList.map((item, id) => {
          return (
            <div className="item">
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
            </div>
          )
        })}
      </Container>
      <button className={`btn ${!showRight && 'hidden'}`} onClick={goRight}>
        {'>'}
      </button>
    </Wrapper>
  )
}
export default IphoneTopBar
