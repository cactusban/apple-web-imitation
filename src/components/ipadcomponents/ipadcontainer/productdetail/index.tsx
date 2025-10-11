import { memo, useEffect, useRef, useState, type ReactNode } from 'react'
import { Container, FloatingMenu, ProductContainer } from './style'

interface Iprops {
  children?: ReactNode
}

// 产品数据配置
const PRODUCT_DATA = [
  {
    id: 'ip',
    name: 'iPad Pro',
    desc: '前沿技术，终极 iPad 体验。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_pro_a34a77d86_2x.png',
    sections: {
      size: {
        title: '13 或 11 英寸',
        details: [
          '超精视网膜 XDR 显示屏',
          'ProMotion 自适应刷新率技术',
          'P3 广色域',
          '1TB 和 2TB 机型可选配 纳米纹理显示屏玻璃',
        ],
      },
      chip: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg',
        details: ['M4 芯片'],
      },
      camera: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadpro13.gen7.camera_elevated_8b1ecd6e5.svg',
        details: ['1200 万像素广角摄像头', '4K 的 ProRes 视频拍摄'],
      },
      ai: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg',
        details: ['为 Apple 智能预备好'],
      },
      pencil: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg',
        details: ['支持 Apple Pencil Pro', '支持 Apple Pencil (USB‑C)'],
      },
    },
  },
  {
    id: 'i',
    name: 'iPad Air',
    desc: '重量级实力，轻装上阵。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_air_4012b0696_2x.png',
    sections: {
      size: {
        title: '13 或 11 英寸',
        details: ['Liquid 视网膜显示屏', 'P3 广色域'],
      },
      chip: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.m3_elevated_8df677ac2.svg',
        details: ['M3 芯片'],
      },
      camera: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg',
        details: ['1200 万像素广角摄像头', '4K 视频拍摄'],
      },
      ai: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg',
        details: ['为 Apple 智能预备好'],
      },
      pencil: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg',
        details: ['支持 Apple Pencil Pro', '支持 Apple Pencil (USB‑C)'],
      },
    },
  },
  {
    id: 'ia',
    name: 'iPad',
    desc: '多彩的全面屏 iPad，天天玩得转。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_11th_gen_02f1eb993_2x.png',
    sections: {
      size: {
        title: '13 或 11 英寸',
        details: ['Liquid 视网膜显示屏', 'sRGB 色域'],
      },
      chip: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.a16_elevated_028264261.svg',
        details: ['A16 芯片'],
      },
      camera: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg',
        details: ['1200 万像素广角摄像头', '4K 的 ProRes 视频拍摄'],
      },
      ai: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg',
        details: ['为 Apple 智能预备好'],
      },
      pencil: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg',
        details: ['支持 Apple Pencil Pro', '支持 Apple Pencil (USB‑C)'],
      },
    },
  },
  {
    id: 'imi',
    name: 'iPad mini',
    desc: '全 iPad 体验，超便携设计。',
    price: 'RMB 375/月 (24 期) 起',
    fullPrice: '或 RMB 8999 起',
    image:
      'https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_mini_4d0eb45f4_2x.png',
    sections: {
      size: {
        title: '8.3 英寸',
        details: ['Liquid 视网膜显示屏', 'sRGB 色域'],
      },
      chip: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.a17pro_elevated_e2e306da4.svg',
        details: ['A17 Pro 芯片'],
      },
      camera: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg',
        details: ['1200 万像素广角摄像头', '4K 的 ProRes 视频拍摄'],
      },
      ai: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg',
        details: ['为 Apple 智能预备好'],
      },
      pencil: {
        image:
          'https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg',
        details: ['支持 Apple Pencil Pro', '支持 Apple Pencil (USB‑C)'],
      },
    },
  },
] as const
const ProductDetail: React.FC<Iprops> = () => {
  const [activeTab, setActiveTab] = useState<'ip' | 'i' | 'ia' | 'imi'>('ip')
  const [showMenu, setShowMenu] = useState(false)
  const [scrollLeft, setScrollLeft] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const productListRef = useRef<HTMLUListElement>(null)

  const handleTabClick = (tab: 'ip' | 'i' | 'ia' | 'imi') => {
    setActiveTab(tab)
  }

  const getSliderTransform = () => {
    switch (activeTab) {
      case 'ip':
        return 'translateX(0)'
      case 'i':
        return 'translateX(138px)'
      case 'ia':
        return 'translateX(273px)'
      case 'imi':
        return 'translateX(411px)'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (bottomRef.current) {
        const bottomRect = bottomRef.current.getBoundingClientRect()
        const elementTop = bottomRect.top
        const elementBottom = bottomRect.bottom

        // 只有当元素顶部在100px范围内，且元素底部还没有接近顶部时才显示
        const shouldShow = elementTop <= 100 && elementBottom >= 100
        setShowMenu(shouldShow)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const productList = productListRef.current

    const handleProductScroll = () => {
      if (productList) {
        setScrollLeft(productList.scrollLeft)
      }
    }

    if (productList) {
      productList.addEventListener('scroll', handleProductScroll)
      return () => {
        productList.removeEventListener('scroll', handleProductScroll)
      }
    }
  }, [])

  return (
    <>
      <Container>
        <div className="headertop">
          <h1>全系产品细细看</h1>
          <h3>比较各款机型 {'>'}</h3>
        </div>

        <FloatingMenu className={showMenu ? 'show' : 'hide'}>
          <div
            className="menu-content"
            style={{ transform: `translateX(-${scrollLeft}px)` }}
          >
            {PRODUCT_DATA.map((product) => (
              <div key={product.id} className="menu-item">
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <h3>{product.fullPrice}</h3>
              </div>
            ))}
          </div>
        </FloatingMenu>

        <ProductContainer>
          <ul className="productlist" ref={productListRef}>
            {PRODUCT_DATA.map((product, index) => (
              <li key={product.id} className="productitem">
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
                <div className="bottom" ref={index === 0 ? bottomRef : null}>
                  <div className="size">
                    <h1>{product.sections.size.title}</h1>
                    {product.sections.size.details.map((detail, index) => (
                      <div key={index} className="detail">
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="chip">
                    <img src={product.sections.chip.image} alt="芯片" />
                    {product.sections.chip.details.map((detail, index) => (
                      <div key={index} className="detail">
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="camera">
                    <img src={product.sections.camera.image} alt="摄像头" />
                    {product.sections.camera.details.map((detail, index) => (
                      <div key={index} className="detail">
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="ai">
                    <img src={product.sections.ai.image} alt="AI" />
                    {product.sections.ai.details.map((detail, index) => (
                      <div key={index} className="detail">
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="pencil">
                    <img src={product.sections.pencil.image} alt="手写笔" />
                    {product.sections.pencil.details.map((detail, index) => (
                      <div key={index} className="detail">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ProductContainer>
      </Container>
    </>
  )
}

export default memo(ProductDetail)
