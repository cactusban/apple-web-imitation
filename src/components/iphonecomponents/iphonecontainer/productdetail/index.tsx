import { memo, useEffect, useRef, useState, type ReactNode } from 'react'
import { Container, ProductContainer } from './style'

interface Iprops {
  children?: ReactNode
}

// 产品数据配置
const PRODUCT_DATA = [
  {
    id: 'ip',
    name: 'iPhone 17 Pro',
    desc: '创新设计，打造巅峰性能和超长续航。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/v/iphone/home/cf/images/overview/select/iphone_17pro__0s6piftg70ym_large_2x.jpg',
  },
  {
    id: 'i',
    name: 'iPhone Air',
    desc: '迄今最薄 iPhone，身藏高能内核。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/v/iphone/home/cf/images/overview/select/iphone_air__f0t56fef3oey_large_2x.jpg',
  },
  {
    id: 'ia',
    name: 'iPhone 17',
    desc: '拉高好感度，再添耐用性。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/iphone/home/images/overview/select/iphone_17__ck7zzemcw37m_large_2x.jpg',
  },
  {
    id: 'imi',
    name: 'iPhone 16',
    desc: '表现惊人，设计经用。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/iphone/home/images/overview/select/iphone_16__drr03yfz644m_large_2x.jpg',
  },
  {
    id: 'imie',
    name: 'iPhone 16e',
    desc: '处处亮眼，价格动心。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/iphone/home/images/overview/select/iphone_16e__dar81seif0cy_large_2x.jpg',
  },
] as const
const ProductDetail: React.FC<Iprops> = () => {
  const [scrollLeft, setScrollLeft] = useState(0)
  const productListRef = useRef<HTMLUListElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const goLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      })
    }
  }
  const goRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      })
    }
  }
  const checkScrollPosition = () => {
    const productList = productListRef.current
    if (productList) {
      const { scrollWidth, clientWidth, scrollLeft } = productList
      const canScroll = scrollWidth > clientWidth
      setShowLeft(canScroll && scrollLeft > 0)
      setShowRight(canScroll && scrollLeft + clientWidth < scrollWidth - 1)
    }
  }
  useEffect(() => {
    checkScrollPosition()
    const productList = productListRef.current

    if (productList) {
      productList.addEventListener('scroll', checkScrollPosition)
      window.addEventListener('resize', checkScrollPosition) // 监听窗口大小变化
      return () => {
        productList.removeEventListener('scroll', checkScrollPosition)
        window.removeEventListener('resize', checkScrollPosition)
      }
    }
  }, [])
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [visibleItem, setVisibleItem] = useState<Set<number>>(new Set())
  useEffect(() => {
    const observeOption = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    }
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')

          // 延迟添加动画，创建顺序效果
          setTimeout(() => {
            setVisibleItem((prev) => new Set(prev).add(index))
          }, index * 150) // 每个项目延迟150ms
        }
      })
    }
    const observer = new IntersectionObserver(observerCallback, observeOption)
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
      <Container>
        <div className="headertop">
          <h1>全系产品细细看</h1>
          <h3>比较各款机型 {'>'}</h3>
        </div>

        <ProductContainer>
          <ul className="productlist" ref={productListRef}>
            {PRODUCT_DATA.map((product, index) => (
              <li
                key={product.id}
                className={`productitem ${
                  visibleItem.has(index) ? 'visible' : ''
                }`}
                data-index={index}
                ref={(el: HTMLLIElement | null) => {
                  itemRefs.current[index] = el
                }}
              >
                <img src={product.image} alt={product.name} />
                <div className="top">
                  <div className="name">{product.name}</div>
                  <div className="desc">{product.desc}</div>
                  <div className="price">
                    <h1>{product.price}</h1>
                    <h1>{product.fullPrice}</h1>
                  </div>
                  <button>进一步了解</button>
                </div>
              </li>
            ))}
          </ul>
        </ProductContainer>
        <div className="buttoncontainer">
          {' '}
          <button className={`btn ${showLeft ? '' : 'nobtn'}`} onClick={goLeft}>
            <h1>{'<'}</h1>
          </button>
          <button
            className={`btn ${showRight ? '' : 'nobtn'}`}
            onClick={goRight}
          >
            <h1>{'>'}</h1>
          </button>
        </div>
      </Container>
    </>
  )
}

export default memo(ProductDetail)
