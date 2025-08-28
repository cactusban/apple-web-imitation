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
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-accessories-202505_GEO_CN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5YzZSK2l1dFo2R2EvVVdYRWxiWndaNW5TVlRIazNudjRzQkRtcHVVbTQvWGNNcUZ5WEhzRG5zWTFDbnVCRk96ZmlrT3VSbnZSMWpmMWVuSlI3UlowWE44RExYeERoaHBlb0xqenZwUHUrMVg',
  ],
}
interface Iprops {
  children?: ReactNode
  backGroundImages?: string[]
}

const Accessory: FC<Iprops> = ({ backGroundImages = BackGroundIMG.url }) => {
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
          <NewContainer isFirst backgroundImage={backGroundImages[0]}>
            {' '}
            <div className="content">
              {' '}
              <h1>学习天团，原地出道。</h1>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[20]}>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=RjlhOFBxWlM5RUNuemg5bVk0UkM1ZllvYS9naDJJdU9KTWdGWjhKWFRmTDg1MEFKWWNMUG9Rb3dXVmNIY08yN3BPSDJJa3AzaC96dU9WMVFWZ2lmZlE"
                alt=""
              />
              <h4>免费镌刻服务</h4>
              <h2>Apple Pencil Pro</h2>
              <h3>RMB 899(教育优惠)</h3>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[2]}>
            {' '}
            <div className="content">
              {' '}
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDFW4CH?wid=400&hei=400&fmt=jpeg&qlt=90&.v=RDQ2WnhvT0dJT0sxeGxqL29lYWNweHdQd0l5eW55OEMwTmUwTXIrVTBtR0dFSUlBSXBMWjRzbi9Ea2hZT2t3eFNLTmpVYVFOMnE5UUF4bStxZU13cmc"
                alt=""
              />
              <h4></h4>
              <h2>妙控键盘 – 适用于 13 英寸 iPad Air (M3) – 中文 (拼音)</h2>
              <h3>RMB 2,199(教育优惠价)</h3>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[3]}>
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDEQ4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=UlhnRE5zUDhFWGdIdHhGZjBXUjNZL1lvYS9naDJJdU9KTWdGWjhKWFRmS2hCVGNYbDE0ZGxZZCsrejdWVk03blhyOTU0MDdBOGYrbnpMSVd5RkhXV2c"
                alt=""
              />
              <h4></h4>
              <h2>智能双面夹-适用于 iPad （A16）-晴空蓝色</h2>
              <h3>RMB 599</h3>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[4]}>
            {' '}
            <div className="content">
              {' '}
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWR53CH?wid=400&hei=400&fmt=jpeg&qlt=90&.v=UnY5c05hQkt6Y1ZvV1AzMGxtcHdNeHdQd0l5eW55OEMwTmUwTXIrVTBtRm9hb1J0UngyOXRSQkZUdDg3dk5mcGVtM0RML0M2Y0tUVjAxVzZWb3o1bmc"
                alt=""
              />
              <h4></h4>
              <h2>妙控键盘 – 适用于 13 英寸 iPad (M4) – 中文 (拼音)</h2>
              <h3>RMB 2,599(教育优惠价)</h3>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[5]}>
            {' '}
            <div className="content">
              {' '}
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDG14?wid=400&hei=400&fmt=jpeg&qlt=90&.v=WjhEUVBLUFcwL1RSRU8zYWtqdjJMUFlvYS9naDJJdU9KTWdGWjhKWFRmS1ZGS1d3SDlTVjBOQWIxNCszUkpvN1V3SUV1QldRdW1lVTd6QlcrVXdiQ0E"
                alt=""
              />
              <h4></h4>
              <h2>iPhone 16 Pro 专用 MagSafe 硅胶保护壳 - 淡蓝紫色</h2>
              <h3>RMB 399</h3>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[6]}>
            {' '}
            <div className="content">
              {' '}
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96bThJMURFZUhTTm9tejgvK2t1SGM0aEQ4eDQxcUNOL3l1WDd2VTYzMXJYbkJkRlpCNVhYU3AwTldRQldlSnpRa01rSksyTE9QS1lFVXpHNmJsRVlaOWM"
                alt=""
              />
              <h4>免费镌刻服务</h4>
              <h2>AirPods 4(支持主动降噪)</h2>
              <h3>RMB 1,399</h3>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[7]}>
            {' '}
            <div className="content">
              {' '}
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQDP3CH?wid=400&hei=400&fmt=jpeg&qlt=90&.v=b3dQTWN1QW82blBhaEhsTVpkZWZLaHdQd0l5eW55OEMwTmUwTXIrVTBtSHBwS2U4US92SDZFV2VzZlJ3cDRhbHN1VEpmMk1aQ0FZeWo4M3pqVFV6dVE"
                alt=""
              />
              <h4></h4>
              <h2>适用于 iPad (A16)的妙控键盘双面夹 - 中文(拼音)</h2>
              <h3>RMB 1,819(教育优惠价)</h3>
            </div>
          </NewContainer>
          <NewContainer backgroundImage={backGroundImages[8]}>
            {' '}
            <div className="content">
              {' '}
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDQE4ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=RE80LytvRFBoV0w4a1BvNFcwemhXZGVidldMUGJjaXo4L3NxcmNtKzZhU3Y0ZFQvV0F3cjdZL2VNNHBLRlA0Um1ycFFQTDlFZTgyWW1wZFRRNnRUVFE"
                alt=""
              />
              <h4></h4>
              <h2>46 毫米牡丹色单圈表带 - 6 号</h2>
              <h3>RMB 379</h3>
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
export default Accessory
