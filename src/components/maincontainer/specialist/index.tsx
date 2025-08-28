import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import {
  Container,
  LeftArrow,
  NewContainer,
  NewWarpper,
  RightArrow,
} from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const BackGroundIMG = {
  url: [
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-help-202506?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrUkxnN3NTOHN5WTV1c3NEYkc1TXhDMWorUGRVSzBNTnk4aWVXZTBsSnJkbEhjUnA4dFc4UjhxaGJyeTZ4TGxiTlExd2w0cFRwTkFXcVMrRy8xS0hPK0wvSlYzalNtQnlZRDd0YzdTaUlhTlo',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=VXV6Z09DaTFST3FqTnRkTjNkSENPM1ZnVFR5VGxOMG5WYlh6ZVpnWVpmOVNTeEZoVVBncVRqTkNMNS9uNklFcGdNL0tvRHFBWjFabEJvUTIxa3lDRWI2aER5OTZhZjhhVzlPaThxMkc0QVE',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_CN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFhHZjJBWFBWT2pMQnNFR2RGWlEwWlNLRUlsMkFxY1ZMQzZzY0tkenJrbjd6ZDJSY3VoN2haS2M3WjdkSERyZVM3UUxhTDY4VmxnT1pqOEpldm1McjB0RmgycTRGTHI3SUVxVFVFNFI5QzhKZ29PWVdEenFlRjYwbS95VjVHbnI',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=UjZWNjB3VDZRK09HelFpSjJDWXROSXFFVHJmY3pQTE80cGIxc1pFQ1VBQWYzUHRVc053YldlK2NuZForb0M1V0tRNjVHZTlIV04vVjZjbEh0Rm5SYzRmTnpyOVBFZDFPdWR2WFZpUzNkaDA',
  ],
}
interface Iprops {
  children?: ReactNode
  backGroundImages?: string[]
}

const Specialist: FC<Iprops> = ({ backGroundImages = BackGroundIMG.url }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
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
      setShowLeft(canScroll && scrollLeft > 0)
      setShowRight(canScroll && scrollLeft + clientWidth < scrollWidth - 1)
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
        window.addEventListener('resize', checkScrollPosition) // 监听窗口大小变化
      }
    }
  }, [])
  return (
    <>
      <NewWarpper>
        <LeftArrow onClick={goLeft} className={`${showLeft ? '' : 'hidden'}`}>
          <LeftOutlined style={{ fontWeight: 800 }} />
        </LeftArrow>

        <Container ref={containerRef}>
          {' '}
          <NewContainer backgroundImage={backGroundImages[0]}>
            {' '}
            <div className="content">
              {' '}
              <h3>APPLE SPECIALIST 专家 </h3>
              <h1>Specialist 专家可在线一对一帮你选购。</h1>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[1]}>
            {' '}
            <div className="content">
              <h3>TODAY AT APPLE</h3>
              <h1>参加 Apple Store 零售店的免费课程。</h1>
              <h2>了解各种最新功能以及如何充分运用 Apple 设备</h2>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[2]}>
            {' '}
            <div className="content">
              <h3>个人设置辅导</h3>
              <h1>设置新设备，有 Specialist 专家帮你。</h1>
              <h2>
                参加一对一在线辅导，让我们带你转移数据、了解最新功能，玩转更多精彩。
              </h2>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[3]}>
            {' '}
            <div className="content">
              <h1>来 Genius Bar 天才吧，</h1>
              <h1>可获取专业服务和技术支持</h1>
            </div>
          </NewContainer>
        </Container>
        <RightArrow
          className={`${showRight ? '' : 'hidden'}`}
          onClick={goRight}
        >
          <RightOutlined />
        </RightArrow>
      </NewWarpper>
    </>
  )
}
export default Specialist
