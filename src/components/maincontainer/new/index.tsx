import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import {
  Container,
  LeftArrow,
  NewContainer,
  NewWarpper,
  RightArrow,
} from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import EducateModal from '../../modal/educationModal'
import { useNavigate } from 'react-router-dom'

const BackGroundIMG = {
  url: [
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXUHpnd0VsRWFiaWRaRHRaUXBvNTNkalNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R1lXVzNzT2dSajRTd2tFaEdoYUp2VnY1WVJVT21DTzBZRFlBTTZySFFMbHY',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-offer-featured-202505_GEO_CN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5UWt3NHc3dStlS1AxQU12Y29qK3NjQlpNcWNRQVR0TFhsTFZlMXJJb0x5bS9mNDM5eHVLS1dJSTkyYTRRL1B3TWNmSGN3NTUxbDRHZDZXK1V3b1o4a1FTSjVlenhKM3hUaVppeUwrbVBMQXJGblJodVFEaGgxMERMNjl1RlVMTnp3',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-cns-202506?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=Z0ZrZ1dhR3lNbXZkbngwaDFxVFdPZVpyWWVSbzlGWmlXZkd6RS9RWENiSlNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaG43NGZ2K0hCckYzWEZPMmc0MVlwc3M',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXRFJ0OFRiWngrNGllYTMvQ1dlWDBQZjZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWEdJV2RaUklyUnViT0c4OGJXRWhUTnArYWpGdS9XeFgvbS9ITnNYOEhYaG4',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbGtrQjBqdmhJbWlLcCtlQTMwc01SdjkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVlSek45NHpYUG91NnZ3YmlDQlpUYnArYWpGdS9XeFgvbS9ITnNYOEhYaG4',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_CN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSzRWdVVUSklyLzFIUnk0cUZLSXhCWGlZbWZpRm1lUlBtTXNXSkhqVStYc1JSeXJaL3JqNm9jc2psYU5Qelh0TnFFRDlwcFZaQWVjT2lvdWQ3WVFsYTZDMGVvdGNjSFBmdEJiOENQWEUwNVQ',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-202503_GEO_CN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXS1QrUU5tTlFRVXhTbnpXZ2JySVBJMXFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1pJa3h1d2NzUi9CSFVmaUZFaGVvZzBxSVdENTJISlRjSXc2eExBZjdqR1o',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSHNhd1RFMExoRHFBcWNCalJOblBtbjkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVQ1UEcwSy9Yd3FpT0wveFRydDk3cE4rYWpGdS9XeFgvbS9ITnNYOEhYaG4',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_CN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbHdYN09OOVhGMkJZZWFPTlJDYlZ0WDV5ajlySTlSUFJoZ1lMbXVwUFRERnAwckMxbExydC8yeDhtUjlFVHdKVnRSR0liZklwWjJ2eGlOd1dxRHFuOXIyckxCMk5XenBPaHMvL01Zb1RoamI',
  ],
}
interface Iprops {
  children?: ReactNode
  backGroundImages?: string[]
}

const New: FC<Iprops> = ({ backGroundImages = BackGroundIMG.url }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null) // Optional: Track which div was clicked
  const [selectedImage, setSelectedImage] = useState<string | null>(null) // Optional: Track which div was clicked
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null)
  const navigate = useNavigate()
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

  const showModalFunc = (item: string, image: string, desc: string) => {
    setShowModal(true)
    setSelectedItem(item) // Optional: Store clicked item for modal content
    setSelectedImage(image)
    setSelectedDesc(desc)
    console.log('模态框出现')
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedItem(null)
  }
  const showEducateModal = (item: string, image: string, desc: string) => {
    setShowModal(true)
    setSelectedItem(item) // Optional: Store clicked item for modal content
    setSelectedImage(image)
    setSelectedDesc(desc)
    console.log('模态框出现')
  }
  const handleCloseeducateModal = () => {
    setShowModal(false)
    setSelectedItem(null)
  }

  const goIphone = () => {
    navigate('/iphone')
  }
  const goBuyIpadAir = () => {
    navigate('/buyipadair')
  }
  useEffect(() => {
    checkScrollPosition()
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollPosition)
      window.addEventListener('resize', checkScrollPosition)
      return () => {
        container.removeEventListener('scroll', checkScrollPosition)
        window.removeEventListener('resize', checkScrollPosition)
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
          <NewContainer
            $backgroundImage={backGroundImages[0]}
            onClick={goIphone}
          >
            <div className="white">
              <h1>iPhone 16 Pro</h1>
              <h2>iPhone 的巅峰之作</h2>
              <h3>RMB 333/月 (0% 费率 24 个月分期)起或 RMB 7999 起</h3>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[1]}>
            <div
              className="black"
              onClick={() =>
                showEducateModal(
                  '超值入手 Mac 或 iPad 上高校，选购 AirPods 或指定配件省更多 脚注 ◊◊。',
                  'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/bts-overlay-store-202505-header_GEO_CN?wid=1180&hei=700&fmt=png-alpha&.v=TXJKWi8wdDdyci9CaUs1Njd6N1I4N3RZNmpma3F1N0dJK21RRFRmSFl4TE04TklzOUJVRkpMSERuWUVYTXRLbXBDMC9DcUlMOGZhUy9VQTNBRUEraHdxNDVlY1NrVjB0R3pUd0MzUTRpTDd3NkpCYVpYY1pUdEZ3YXowNjNuWE8',
                  '限时特惠，入手 Mac 或 iPad 上高校享教育优惠，选购 AirPods 或指定配件省更多。'
                )
              }
            >
              <h1>超值入手 Mac 或 iPad 上高校, 选购 AirPods 或指定配件</h1>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[2]}>
            <div
              className="black"
              onClick={() =>
                showModalFunc('指定产品享国家补贴', backGroundImages[2], '')
              }
            >
              <h1>指定产品享国家补贴，至高省 RMB 2000。</h1>
              <h2>仅限 Apple Store 零售店(上海)</h2>
            </div>
          </NewContainer>
          <NewContainer
            $backgroundImage={backGroundImages[3]}
            onClick={goBuyIpadAir}
          >
            <div
              className="black"
              onClick={() => showModalFunc('iPad Air', backGroundImages[3], '')}
            >
              <h1>iPad Air</h1>
              <h2>快如飞</h2>
              <h3>RMB 200/月 (0% 费率 24 个月分期)起或 RMB 4799 起</h3>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[4]}>
            <div
              className="black"
              onClick={() =>
                showModalFunc('MacBook Air', backGroundImages[4], '')
              }
            >
              <h1>MacBook Air</h1>
              <h2>身轻身手快</h2>
              <h3>RMB 333/月 (0% 费率 24 个月分期)起或 RMB 7999 起</h3>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[5]}>
            <div
              className="black"
              onClick={() =>
                showModalFunc('Apple Watch Series 10', backGroundImages[5], '')
              }
            >
              <h1>Apple Watch Series 10</h1>
              <h2>薄爆表</h2>
              <h3>RMB 2999 起</h3>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[6]}>
            <div
              className="black"
              onClick={() =>
                showModalFunc('iPhone 16e', backGroundImages[6], '')
              }
            >
              <h1>iPhone 16e</h1>
              <h2>iPhone 上新, 超值刷新</h2>
              <h3>RMB 187/月 (0% 费率 24 个月分期)起或 RMB 4499 起</h3>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[7]}>
            <div
              className="black"
              onClick={() => showModalFunc('iPad', backGroundImages[7], '')}
            >
              <h1>iPad</h1>
              <h2>可圈可点可画心</h2>
              <h3>RMB 125/月 (0% 费率 24 个月分期)起或 RMB 2999 起</h3>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[8]}>
            <div
              className="white"
              onClick={() =>
                showModalFunc('iPhone 16', backGroundImages[8], '')
              }
            >
              <h1>iPhone 16</h1>
              <h2>实打实的实力</h2>
              <h3>RMB 350/月 (0% 费率 24 个月分期)起或 RMB 5999 起</h3>
            </div>
          </NewContainer>
          <NewContainer $backgroundImage={backGroundImages[9]}>
            <div
              className="white"
              onClick={() =>
                showModalFunc('Apple Watch Ultra 2', backGroundImages[9], '')
              }
            >
              <h1>Apple Watch Ultra 2</h1>
              <h2>野出新一面</h2>
              <h3>RMB 6499 起</h3>
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
      <EducateModal
        visible={showModal}
        onClose={handleCloseeducateModal}
        selectedItem={selectedItem}
        selectedImage={selectedImage}
        selectedDesc={selectedDesc}
      />
    </>
  )
}

export default New
