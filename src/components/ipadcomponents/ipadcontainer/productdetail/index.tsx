import { memo, useEffect, useRef, useState, type ReactNode } from 'react'
import { Container, FloatingMenu, ProductContainer } from './style'

interface Iprops {
  children?: ReactNode
}

const ProductDetail: React.FC<Iprops> = () => {
  const [activeTab, setActiveTab] = useState<'macbook' | 'imac' | 'display'>(
    'macbook'
  )
  const handleTabClick = (tab: 'macbook' | 'imac' | 'display') => {
    setActiveTab(tab)
  }
  const getSliderTransform = () => {
    switch (activeTab) {
      case 'macbook':
        return 'translateX(0)'
      case 'imac':
        return 'translateX(138px)'
      case 'display':
        return 'translateX(273px)'
    }
  }
  const hrRef = useRef<HTMLHRElement>(null)
  const [showMenu, setShowMenu] = useState(false)
  const floatMenuRef = useRef<HTMLDivElement>(null)
  const downRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (hrRef.current) {
        const hrRect = hrRef.current.getBoundingClientRect()
        setShowMenu(hrRect.top <= 130)
      }
      if (downRef.current) {
        const downRect = downRef.current.getBoundingClientRect()
        if (downRect.top <= 0) {
          setShowMenu(false)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Container>
        <div className="headertop">
          <h1>全系产品细细看</h1>
          <h3>比较各款机型 {'>'}</h3>
        </div>
        <FloatingMenu className={showMenu ? 'show' : 'hide'}></FloatingMenu>
        <ProductContainer>
          <ul className="productlist">
            <li className="productitem">
              <img
                src="https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_pro_a34a77d86_2x.png"
                alt=""
              />
              <div className="top">
                {' '}
                <div className="name">iPad Pro</div>
                <div className="desc">前沿技术，终极 iPad 体验。</div>
                <div className="price">
                  <h1>RMB 375/月 (24 期) 起 </h1>
                  <h1>或 RMB 8999 起</h1>
                </div>
                <button>进一步了解</button>
              </div>
              <div className="bottom">
                <div className="size">
                  <h1>13 或 11 英寸</h1>
                  <div className="detail">超精视网膜 XDR 显示屏</div>
                  <div className="detail"> ProMotion 自适应刷新率技术</div>
                  <div className="detail">P3 广色域</div>
                  <div className="detail">
                    {' '}
                    1TB 和 2TB 机型可选配 纳米纹理显示屏玻璃
                  </div>
                </div>
                <div className="chip">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg"
                    alt=""
                  />
                  <div className="detail">M4 芯片</div>
                </div>
                <div className="camera">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadpro13.gen7.camera_elevated_8b1ecd6e5.svg"
                    alt=""
                  />
                  <div className="detail">1200 万像素广角摄像头</div>
                  <div className="detail">4K 的 ProRes 视频拍摄</div>
                </div>
                <div className="ai">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg"
                    alt=""
                  />
                  <div className="detail">为 Apple 智能预备好</div>
                </div>
                <div className="pencil">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg"
                    alt=""
                  />
                  <div className="detail">支持 Apple Pencil Pro</div>
                  <div className="detail">支持 Apple Pencil (USB‑C)</div>
                </div>
              </div>
            </li>
            <li className="productitem">
              <img
                src="https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_air_4012b0696_2x.png"
                alt=""
              />
              <div className="top">
                {' '}
                <div className="name">iPad Air</div>
                <div className="desc">重量级实力，轻装上阵。</div>
                <div className="price">
                  <h1>RMB 375/月 (24 期) 起 </h1>
                  <h1>或 RMB 8999 起</h1>
                </div>
                <button>进一步了解</button>
              </div>
              <div className="bottom">
                <div className="size">
                  <h1>13 或 11 英寸</h1>
                  <div className="detail">Liquid 视网膜显示屏</div>
                  <div className="detail"> P3 广色域</div>
                </div>
                <div className="chip">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.m3_elevated_8df677ac2.svg"
                    alt=""
                  />
                  <div className="detail">M3 芯片</div>
                </div>
                <div className="camera">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg"
                    alt=""
                  />
                  <div className="detail">1200 万像素广角摄像头</div>
                  <div className="detail">4K 视频拍摄</div>
                </div>
                <div className="ai">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg"
                    alt=""
                  />
                  <div className="detail">为 Apple 智能预备好</div>
                </div>
                <div className="pencil">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg"
                    alt=""
                  />
                  <div className="detail">支持 Apple Pencil Pro</div>
                  <div className="detail">支持 Apple Pencil (USB‑C)</div>
                </div>
              </div>
            </li>
            <li className="productitem">
              <img
                src="https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_11th_gen_02f1eb993_2x.png"
                alt=""
              />
              <div className="top">
                {' '}
                <div className="name">iPad</div>
                <div className="desc">多彩的全面屏 iPad，天天玩得转。</div>
                <div className="price">
                  <h1>RMB 375/月 (24 期) 起 </h1>
                  <h1>或 RMB 8999 起</h1>
                </div>
                <button>进一步了解</button>
              </div>
              <div className="bottom">
                <div className="size">
                  <h1>13 或 11 英寸</h1>
                  <div className="detail">Liquid 视网膜显示屏</div>
                  <div className="detail">sRGB 色域</div>
                </div>
                <div className="chip">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.a16_elevated_028264261.svg"
                    alt=""
                  />
                  <div className="detail">A16 芯片</div>
                </div>
                <div className="camera">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg"
                    alt=""
                  />
                  <div className="detail">1200 万像素广角摄像头</div>
                  <div className="detail">4K 的 ProRes 视频拍摄</div>
                </div>
                <div className="ai">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg"
                    alt=""
                  />
                  <div className="detail">为 Apple 智能预备好</div>
                </div>
                <div className="pencil">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg"
                    alt=""
                  />
                  <div className="detail">支持 Apple Pencil Pro</div>
                  <div className="detail">支持 Apple Pencil (USB‑C)</div>
                </div>
              </div>
            </li>
            <li className="productitem">
              <img
                src="https://www.apple.com.cn/assets-www/en_WW/ipad/product_tile/large/ipad_mini_4d0eb45f4_2x.png"
                alt=""
              />
              <div className="top">
                {' '}
                <div className="name">iPad mini</div>
                <div className="desc">全 iPad 体验，超便携设计。</div>
                <div className="price">
                  <h1>RMB 375/月 (24 期) 起 </h1>
                  <h1>或 RMB 8999 起</h1>
                </div>
                <button>进一步了解</button>
              </div>
              <div className="bottom">
                <div className="size">
                  <h1>8.3 英寸</h1>
                  <div className="detail">Liquid 视网膜显示屏</div>
                  <div className="detail">sRGB 色域</div>
                </div>
                <div className="chip">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/chip.a17pro_elevated_e2e306da4.svg"
                    alt=""
                  />
                  <div className="detail">A17 Pro 芯片</div>
                </div>
                <div className="camera">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg"
                    alt=""
                  />
                  <div className="detail">1200 万像素广角摄像头</div>
                  <div className="detail">4K 的 ProRes 视频拍摄</div>
                </div>
                <div className="ai">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/apple.intelligence_elevated_f063342ae.svg"
                    alt=""
                  />
                  <div className="detail">为 Apple 智能预备好</div>
                </div>
                <div className="pencil">
                  <img
                    src="https://www.apple.com.cn/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg"
                    alt=""
                  />
                  <div className="detail">支持 Apple Pencil Pro</div>
                  <div className="detail">支持 Apple Pencil (USB‑C)</div>
                </div>
              </div>
            </li>
          </ul>
        </ProductContainer>
      </Container>
    </>
  )
}
export default memo(ProductDetail)
