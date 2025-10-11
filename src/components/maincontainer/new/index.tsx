// New.tsx - 修改后的组件
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
import { useLazyAnimation } from '../../../Hook/useLazyAnimation'
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
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null)
  const navigate = useNavigate()

  // 👇 新增：懒加载相关状态
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

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
    setSelectedItem(item)
    setSelectedImage(image)
    setSelectedDesc(desc)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedItem(null)
  }

  const showEducateModal = (item: string, image: string, desc: string) => {
    setShowModal(true)
    setSelectedItem(item)
    setSelectedImage(image)
    setSelectedDesc(desc)
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

  // 监听滚动位置
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

  // 👇 新增：懒加载动画效果
  useEffect(() => {
    const observeOption = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observeCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          setTimeout(() => {
            setVisibleItems((prev) => new Set(prev).add(index))
          }, index * 100) // 每个元素延迟 100ms
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

  // 产品配置数据
  const products = [
    {
      image: backGroundImages[0],
      className: 'white',
      title: 'iPhone 16 Pro',
      subtitle: 'iPhone 的巅峰之作',
      price: 'RMB 333/月 (0% 费率 24 个月分期)起或 RMB 7999 起',
      onClick: goIphone,
    },
    {
      image: backGroundImages[1],
      className: 'black',
      title: '超值入手 Mac 或 iPad 上高校, 选购 AirPods 或指定配件',
      onClick: () =>
        showEducateModal(
          '超值入手 Mac 或 iPad 上高校，选购 AirPods 或指定配件省更多 脚注 ◊◊。',
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/bts-overlay-store-202505-header_GEO_CN?wid=1180&hei=700&fmt=png-alpha&.v=TXJKWi8wdDdyci9CaUs1Njd6N1I4N3RZNmpma3F1N0dJK21RRFRmSFl4TE04TklzOUJVRkpMSERuWUVYTXRLbXBDMC9DcUlMOGZhUy9VQTNBRUEraHdxNDVlY1NrVjB0R3pUd0MzUTRpTDd3NkpCYVpYY1pUdEZ3YXowNjNuWE8',
          '限时特惠，入手 Mac 或 iPad 上高校享教育优惠，选购 AirPods 或指定配件省更多。'
        ),
    },
    {
      image: backGroundImages[2],
      className: 'black',
      title: '指定产品享国家补贴，至高省 RMB 2000。',
      subtitle: '仅限 Apple Store 零售店(上海)',
      onClick: () =>
        showModalFunc('指定产品享国家补贴', backGroundImages[2], ''),
    },
    {
      image: backGroundImages[3],
      className: 'black',
      title: 'iPad Air',
      subtitle: '快如飞',
      price: 'RMB 200/月 (0% 费率 24 个月分期)起或 RMB 4799 起',
      onClick: goBuyIpadAir,
    },
    {
      image: backGroundImages[4],
      className: 'black',
      title: 'MacBook Air',
      subtitle: '身轻身手快',
      price: 'RMB 333/月 (0% 费率 24 个月分期)起或 RMB 7999 起',
      onClick: () => showModalFunc('MacBook Air', backGroundImages[4], ''),
    },
    {
      image: backGroundImages[5],
      className: 'black',
      title: 'Apple Watch Series 10',
      subtitle: '薄爆表',
      price: 'RMB 2999 起',
      onClick: () =>
        showModalFunc('Apple Watch Series 10', backGroundImages[5], ''),
    },
    {
      image: backGroundImages[6],
      className: 'black',
      title: 'iPhone 16e',
      subtitle: 'iPhone 上新, 超值刷新',
      price: 'RMB 187/月 (0% 费率 24 个月分期)起或 RMB 4499 起',
      onClick: () => showModalFunc('iPhone 16e', backGroundImages[6], ''),
    },
    {
      image: backGroundImages[7],
      className: 'black',
      title: 'iPad',
      subtitle: '可圈可点可画心',
      price: 'RMB 125/月 (0% 费率 24 个月分期)起或 RMB 2999 起',
      onClick: () => showModalFunc('iPad', backGroundImages[7], ''),
    },
    {
      image: backGroundImages[8],
      className: 'white',
      title: 'iPhone 16',
      subtitle: '实打实的实力',
      price: 'RMB 350/月 (0% 费率 24 个月分期)起或 RMB 5999 起',
      onClick: () => showModalFunc('iPhone 16', backGroundImages[8], ''),
    },
    {
      image: backGroundImages[9],
      className: 'white',
      title: 'Apple Watch Ultra 2',
      subtitle: '野出新一面',
      price: 'RMB 6499 起',
      onClick: () =>
        showModalFunc('Apple Watch Ultra 2', backGroundImages[9], ''),
    },
  ]
  const { getTriggerRef, getItemProps, isVisible } =
    useLazyAnimation<HTMLDivElement>({
      delay: 100,
      threshold: 0.5,
    })
  return (
    <>
      <NewWarpper>
        <LeftArrow onClick={goLeft} className={`${showLeft ? '' : 'hidden'}`}>
          <LeftOutlined style={{ fontWeight: 800 }} />
        </LeftArrow>
        <Container ref={containerRef}>
          {products.map((product, index) => (
            <NewContainer
              key={index}
              ref={index === 0 ? getTriggerRef() : undefined}
              {...getItemProps(index)}
              $backgroundImage={product.image}
              onClick={product.onClick}
              className={isVisible(index) ? 'visible' : 'hidden'}
            >
              <div className={product.className}>
                <h1>{product.title}</h1>
                {product.subtitle && <h2>{product.subtitle}</h2>}
                {product.price && <h3>{product.price}</h3>}
              </div>
            </NewContainer>
          ))}
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
