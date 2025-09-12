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
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-applecare-202503?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDaXRXOGV1M2ZHcDVxZzhMK2cxK3dsTUloZHRRYWt5UUpyTGVwNEhDZEV3VXg4ZHpEbm5XWGdaM3BiNVRDaG55Ukc2ZjdMSUNqeUNFYjF1MU1sS2U0a3E1dDgvV3BhU1hoSzFPUEZjam5HQ2g',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-edu-apple-music-202404_GEO_CN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=MmpGZUY3bjMwS2lBemh6aDUvVmdVdHBOOWpqYUxuK2U0UGN5a081WlNKZU1qaE04RTJWbXVMd3FFbklRb25TeUg5ejdWTERjRzFudm5KM1dmcUF1VmlrT3VSbnZSMWpmMWVuSlI3UlowWE03alRsaU1kTmVPa2Y3Y3hFaXdmc08',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-icloud-202503_GEO_CN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=T2s0NC9CZFFsV0EyMUEyMkZwZVliYkZUSExHUk9MVXNjaGFOMnRDMlZuVDJtaE9nejNBS0FrclhJMVJoVXB1MUprY3crUWRsN1dqVjRnMHR5S1hVbkRSc0VHYWZQZnlTNkEyOFJKVGZWWTM4bWFqUXY2enE5QloxeXNnNlI4U1Q',
  ],
}
interface Iprops {
  children?: ReactNode
  backGroundImages?: string[]
}

const Try: FC<Iprops> = ({ backGroundImages = BackGroundIMG.url }) => {
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
      setShowLeft(scrollLeft > 0)
      setShowRight(scrollLeft + clientWidth < scrollWidth)
    }
  }
  useEffect(() => {
    checkScrollPosition()
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollPosition)
      return () => {
        container.removeEventListener('scroll', checkScrollPosition)
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
          <NewContainer $backgroundImage={backGroundImages[0]}>
            {' '}
            <div className="content">
              {' '}
              <h3>APPLECARE+ 服务计划</h3>
              <h1>周全保护有保障。</h1>
              <h2>
                符合条件的师生和教职员工购买适用于 Mac 或 iPad 的 AppleCare+
                服务计划，最高可享九折优惠。
              </h2>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[1]}>
            {' '}
            <div className="content">
              <h3></h3>
              <h1>有 Apple Music 学生方案可订阅°°。</h1>
              <h2>学生可享优惠价。</h2>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[2]}>
            {' '}
            <div className="content">
              <h3>ICLOUD+</h3>
              <h1>获取需要的储存空间，</h1>
              <h1>尽享应得的隐私保护。</h1>
              <h1>立即升级方案***。</h1>
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
export default Try
