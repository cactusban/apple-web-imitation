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
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-edu-apple-college-202404?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=MmpGZUY3bjMwS2lBemh6aDUvVmdVdFlJMUtBdnhjS2hHMStCakNCR0Nid2RZemk4Y2UzVEpqbFJ1RVMwSTk0anN2Mmx4a3VvSnUzaFUvSVlVRUJkbEwrbElCY3Jrbmw1Mlo3RlI0czNyTnZRYzd6Mnc5MG00K0tyTWZKZTFZeDM',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-edu-community-202404?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=MmpGZUY3bjMwS2lBemh6aDUvVmdVc2JtQVY2VHhpMy9GTDFyc1gzRlB2NGVId3RZWVJZb2NDaWpOWGxjWmVFdFN5aWNYUFpIbkFhdm03T3BzSjdVSXpBVEpkVmRFWEcvQU1mWlFyRFpVSDU5Ukc0STdLNE5qWUVicExtbXMrcDI',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-edu-success-202404?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=TysyM3c4L0xvQ1dZWVNWTXZ0ekxPSEp3TFRYSjlOcXF4bkZCZnpUQ2w0bHFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1hrRzhwQ0QvOEF6OU1ZYkZheTUvRTVlb0IzaTJXWEVhYWZ1NUNybnJZWmQ',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-edu-swift-202503_GEO_CN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=TysyM3c4L0xvQ1dZWVNWTXZ0ekxPTk9jaG02WjhMWFlsYjFTazZYMW5OYTN2RkN3V1VNTTZobUxGd082SXJ6djczTGJ1bkVZOVdxMC9CSUwydmQ4a0xlbm0wRTlQNFlCSkVMY2xHV2FsVlRtQllGNXZXbTRqOEtoZVZ5L2VCN0o',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-edu-careers-202404?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=TysyM3c4L0xvQ1dZWVNWTXZ0ekxPR2F0aUVPamlWUTBVNU1ERmhETk8vTnFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K2VRb3l6VjN1cEVieG9rRTk5QmY5OGtOZnVPWGRXSForVW95dWNpSkZQMzM',
  ],
}
interface Iprops {
  children?: ReactNode
  backGroundImages?: string[]
}

const Study: FC<Iprops> = ({ backGroundImages = BackGroundIMG.url }) => {
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
            <div className="white">
              {' '}
              <h3>APPLE 与高校生活</h3>
              <h1>实力出众，校内校外都出圈。</h1>
              <h2>Mac 和 iPad 在手，助你攻克各门学业，课外项目也游刃有余</h2>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[1]}>
            {' '}
            <div className="content">
              <h3>APPLE EDUCATION COMMUNITY</h3>
              <h1>为教师添实力，来激发学生潜力。</h1>
              <h2>通过 APPLE 获取免费的教学资源和新的灵感</h2>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[2]}>
            {' '}
            <div className="content">
              <h3></h3>
              <h1>探索成功案例。</h1>
              <h2>
                看看学生和教育工作者们分享的故事，了解如何用 Apple
                技术实现大突破
              </h2>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[3]}>
            {' '}
            <div className="content">
              <h3>学习构建APP</h3>
              <h1>Swift 知识学起来</h1>
              <h2>从写下第一行代码到创建第一个app，这些工具一路挺你</h2>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[4]}>
            {' '}
            <div className="content">
              <h3></h3>
              <h1>眼界开大。</h1>
              <h2>把握实习和工作机会，打好事业基础。</h2>
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
export default Study
