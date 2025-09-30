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
        <div className="top">
          <h1>全系产品细细看</h1>
          <h3>比较各款机型 {'>'}</h3>
        </div>
        <FloatingMenu className={showMenu ? 'show' : 'hide'}>
          {activeTab === 'macbook' ? (
            <>
              <div className="container">
                <div className="content">
                  <h1>MacBook Air</h1>
                  <h1>13 英寸和 15 英寸</h1>
                  <h3>RMB 333/月或 RMB 7999 起*</h3>
                </div>
                <div className="content">
                  {' '}
                  <h1>MacBook Pro</h1>
                  <h1>14 英寸和 16 英寸</h1>
                  <h3>RMB 542/月或 RMB 12999 起*</h3>
                </div>
              </div>
            </>
          ) : activeTab === 'imac' ? (
            <>
              <div className="container">
                <div className="content">
                  <h1>MacBook Air</h1>
                  <h1>13 英寸和 15 英寸</h1>
                  <h3>RMB 333/月或 RMB 7999 起*</h3>
                </div>
                <div className="content">
                  {' '}
                  <h1>MacBook Pro</h1>
                  <h1>14 英寸和 16 英寸</h1>
                  <h3>RMB 542/月或 RMB 12999 起*</h3>
                </div>
              </div>
            </>
          ) : activeTab === 'display' ? (
            <>
              <div className="container">
                <div className="content">
                  <h1>MacBook Air</h1>
                  <h1>13 英寸和 15 英寸</h1>
                  <h3>RMB 333/月或 RMB 7999 起*</h3>
                </div>
                <div className="content">
                  {' '}
                  <h1>MacBook Pro</h1>
                  <h1>14 英寸和 16 英寸</h1>
                  <h3>RMB 542/月或 RMB 12999 起*</h3>
                </div>
              </div>
            </>
          ) : null}
        </FloatingMenu>
        <ProductContainer>
          <div className="tab-navigation">
            <div
              className="slider"
              style={{ transform: getSliderTransform() }}
            ></div>
            <div
              className={
                activeTab === 'macbook' ? 'tab-button active' : 'tab-button'
              }
              onClick={() => handleTabClick('macbook')}
            >
              笔记本电脑
            </div>
            <div
              className={
                activeTab === 'imac' ? 'tab-button active' : 'tab-button'
              }
              onClick={() => handleTabClick('imac')}
            >
              台式电脑
            </div>
            <div
              className={
                activeTab === 'display' ? 'tab-button active' : 'tab-button'
              }
              onClick={() => handleTabClick('display')}
            >
              显示器
            </div>
          </div>
          <div className="product-list">
            {activeTab === 'macbook' && (
              <>
                <ul className="product">
                  <li className="product-item">
                    {' '}
                    <img
                      src="https://www.apple.com.cn/assets-www/en_WW/mac/product_tile/large/mba_13_15_297e3c914_2x.png"
                      alt=""
                    />
                    <div className="content">
                      {' '}
                      <h1>MacBook Air</h1>
                      <h1>13 英寸和 15 英寸</h1>
                      <h2>M4 芯片</h2>
                      <h3>超薄超快超便携， </h3>
                      <h3>玩转工作创作和娱乐。</h3>
                      <h2>RMB 333/月或 RMB 7999 起</h2>
                      <div className="btn">
                        {' '}
                        <button>进一步了解</button>
                        <h4>购买</h4>
                      </div>
                    </div>
                    <hr ref={hrRef} />
                    <div className="after">
                      <h1>13.6 英寸或 15.3 英寸</h1>
                      <h5>
                        Liquid 视网膜显示屏亮度达 500 尼特，支持 10 亿色彩
                      </h5>
                      <img
                        src="https://www.apple.com.cn/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg"
                        alt=""
                      />
                      <h5>Apple M4 芯片</h5>
                      <h5>最长达</h5>
                      <h1>18 小时</h1>
                      <h5>电池续航</h5>
                      <div className="double">
                        {' '}
                        <h1>四个端口</h1>
                        <h5>两个雷雳 4 (USB‑C) 端口、耳机插孔、MagSafe 端口</h5>
                      </div>
                      <h1>1.24 千克或 1.51 千克</h1>
                      <h5 ref={downRef}>重量</h5>
                    </div>
                  </li>
                  <li className="product-item">
                    {' '}
                    <img
                      src="https://www.apple.com.cn/assets-www/en_WW/mac/product_tile/large/mbp_14_16_84af52ffc_2x.png"
                      alt=""
                    />
                    <div className="content">
                      <h1>MacBook Pro </h1>
                      <h1>14 英寸和 16 英寸</h1>
                      <h2>M4、M4 Pro 或 M4 Max 芯片</h2>
                      <h3>超先进的 Mac 笔电，</h3>
                      <h3>艰巨任务巨拿手。</h3>
                      <h2>RMB 542/月或 RMB 12,999 起</h2>
                      <div className="btn">
                        {' '}
                        <button>进一步了解</button>
                        <h4>购买</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="after">
                      <h1>13.6 英寸或 15.3 英寸</h1>
                      <h5>
                        Liquid 视网膜显示屏亮度达 500 尼特，支持 10 亿色彩
                      </h5>
                      <img
                        src="https://www.apple.com.cn/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg"
                        alt=""
                      />
                      <h5>Apple M4 芯片</h5>
                      <h5>最长达</h5>
                      <h1>18 小时</h1>
                      <h5>电池续航</h5>

                      <div className="double">
                        {' '}
                        <h1>四个端口</h1>
                        <h5>
                          三个雷雳 4 (USB‑C) 端口或三个雷雳 5 (USB‑C) 端口、
                        </h5>
                      </div>
                      <h1>1.55 千克或 2.14 千克</h1>
                      <h5 ref={downRef}>重量</h5>
                    </div>
                  </li>
                </ul>
              </>
            )}
            {activeTab === 'imac' && (
              <>
                <ul className="product">
                  <li className="product-item">
                    {' '}
                    <img
                      src="https://www.apple.com.cn/assets-www/en_WW/mac/product_tile/large/imac_24_6233f1ec7_2x.png"
                      alt=""
                    />
                    <div className="content">
                      <h1>MacBook Pro </h1>
                      <h1>14 英寸和 16 英寸</h1>
                      <h2>M4、M4 Pro 或 M4 Max 芯片</h2>
                      <h3>超先进的 Mac 笔电，</h3>
                      <h3>艰巨任务巨拿手。</h3>
                      <h2>RMB 542/月或 RMB 12,999 起</h2>
                      <div className="btn">
                        {' '}
                        <button>进一步了解</button>
                        <h4>购买</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="after">
                      <h1>13.6 英寸或 15.3 英寸</h1>
                      <h5>
                        Liquid 视网膜显示屏亮度达 500 尼特，支持 10 亿色彩
                      </h5>
                      <img
                        src="https://www.apple.com.cn/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg"
                        alt=""
                      />
                      <h5>Apple M4 芯片</h5>
                      <h5>最长达</h5>
                      <h1>18 小时</h1>
                      <h5>电池续航</h5>

                      <div className="double">
                        {' '}
                        <h1>四个端口</h1>
                        <h5>
                          三个雷雳 4 (USB‑C) 端口或三个雷雳 5 (USB‑C) 端口、
                        </h5>
                      </div>
                      <h1>1.55 千克或 2.14 千克</h1>
                      <h5 ref={downRef}>重量</h5>
                    </div>
                  </li>
                  <li className="product-item">
                    {' '}
                    <img
                      src="https://www.apple.com.cn/assets-www/en_WW/mac/product_tile/large/mac_mini_eda8b2c0c_2x.png"
                      alt=""
                    />
                    <div className="content">
                      <h1>MacBook Pro </h1>
                      <h1>14 英寸和 16 英寸</h1>
                      <h2>M4、M4 Pro 或 M4 Max 芯片</h2>
                      <h3>超先进的 Mac 笔电，</h3>
                      <h3>艰巨任务巨拿手。</h3>
                      <h2>RMB 542/月或 RMB 12,999 起</h2>
                      <div className="btn">
                        {' '}
                        <button>进一步了解</button>
                        <h4>购买</h4>
                      </div>
                    </div>
                    <hr ref={hrRef} />
                    <div className="after">
                      <h1>13.6 英寸或 15.3 英寸</h1>
                      <h5>
                        Liquid 视网膜显示屏亮度达 500 尼特，支持 10 亿色彩
                      </h5>
                      <img
                        src="https://www.apple.com.cn/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg"
                        alt=""
                      />
                      <h5>Apple M4 芯片</h5>
                      <h5>最长达</h5>
                      <h1>18 小时</h1>
                      <h5>电池续航</h5>

                      <div className="double">
                        {' '}
                        <h1>四个端口</h1>
                        <h5>
                          三个雷雳 4 (USB‑C) 端口或三个雷雳 5 (USB‑C) 端口、
                        </h5>
                      </div>
                      <h1>1.55 千克或 2.14 千克</h1>
                      <h5 ref={downRef}>重量</h5>
                    </div>
                  </li>
                  <li className="product-item">
                    {' '}
                    <img
                      src="https://www.apple.com.cn/assets-www/en_WW/mac/product_tile/large/mac_studio_af116abb2_2x.png"
                      alt=""
                    />
                    <div className="content">
                      <h1>MacBook Pro </h1>
                      <h1>14 英寸和 16 英寸</h1>
                      <h2>M4、M4 Pro 或 M4 Max 芯片</h2>
                      <h3>超先进的 Mac 笔电，</h3>
                      <h3>艰巨任务巨拿手。</h3>
                      <h2>RMB 542/月或 RMB 12,999 起</h2>
                      <div className="btn">
                        {' '}
                        <button>进一步了解</button>
                        <h4>购买</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="after">
                      <h1>13.6 英寸或 15.3 英寸</h1>
                      <h5>
                        Liquid 视网膜显示屏亮度达 500 尼特，支持 10 亿色彩
                      </h5>
                      <img
                        src="https://www.apple.com.cn/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg"
                        alt=""
                      />
                      <h5>Apple M4 芯片</h5>
                      <h5>最长达</h5>
                      <h1>18 小时</h1>
                      <h5>电池续航</h5>

                      <div className="double">
                        {' '}
                        <h1>四个端口</h1>
                        <h5>
                          三个雷雳 4 (USB‑C) 端口或三个雷雳 5 (USB‑C) 端口、
                        </h5>
                      </div>
                      <h1>1.55 千克或 2.14 千克</h1>
                      <h5 ref={downRef}>重量</h5>
                    </div>
                  </li>
                </ul>
              </>
            )}
            {activeTab === 'display' && (
              <>
                <ul className="product">
                  <li className="product-item">
                    {' '}
                    <img
                      src="https://www.apple.com.cn/assets-www/en_WW/mac/product_tile/large/studio_display_6169ec976_2x.png"
                      alt=""
                    />
                    <div className="content">
                      <h1>MacBook Pro </h1>
                      <h1>14 英寸和 16 英寸</h1>
                      <h2>M4、M4 Pro 或 M4 Max 芯片</h2>
                      <h3>超先进的 Mac 笔电，</h3>
                      <h3>艰巨任务巨拿手。</h3>
                      <h2>RMB 542/月或 RMB 12,999 起</h2>
                      <div className="btn">
                        {' '}
                        <button>进一步了解</button>
                        <h4>购买</h4>
                      </div>
                    </div>
                    <hr ref={hrRef} />
                    <div className="after">
                      <h1>13.6 英寸或 15.3 英寸</h1>
                      <h5>
                        Liquid 视网膜显示屏亮度达 500 尼特，支持 10 亿色彩
                      </h5>
                      <img
                        src="https://www.apple.com.cn/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg"
                        alt=""
                      />
                      <h5>Apple M4 芯片</h5>
                      <h5>最长达</h5>
                      <h1>18 小时</h1>
                      <h5>电池续航</h5>

                      <div className="double">
                        {' '}
                        <h1>四个端口</h1>
                        <h5>
                          三个雷雳 4 (USB‑C) 端口或三个雷雳 5 (USB‑C) 端口、
                        </h5>
                      </div>
                      <h1>1.55 千克或 2.14 千克</h1>
                      <h5 ref={downRef}>重量</h5>
                    </div>
                  </li>
                  <li className="product-item">
                    {' '}
                    <img
                      src="https://www.apple.com.cn/assets-www/en_WW/mac/product_tile/large/pro_display_80f05c380_2x.png"
                      alt=""
                    />
                    <div className="content">
                      <h1>MacBook Pro </h1>
                      <h1>14 英寸和 16 英寸</h1>
                      <h2>M4、M4 Pro 或 M4 Max 芯片</h2>
                      <h3>超先进的 Mac 笔电，</h3>
                      <h3>艰巨任务巨拿手。</h3>
                      <h2>RMB 542/月或 RMB 12,999 起</h2>
                      <div className="btn">
                        {' '}
                        <button>进一步了解</button>
                        <h4>购买</h4>
                      </div>
                    </div>
                    <hr ref={hrRef} />
                    <div className="after">
                      <h1>13.6 英寸或 15.3 英寸</h1>
                      <h5>
                        Liquid 视网膜显示屏亮度达 500 尼特，支持 10 亿色彩
                      </h5>
                      <img
                        src="https://www.apple.com.cn/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg"
                        alt=""
                      />
                      <h5>Apple M4 芯片</h5>
                      <h5>最长达</h5>
                      <h1>18 小时</h1>
                      <h5>电池续航</h5>

                      <div className="double">
                        {' '}
                        <h1>四个端口</h1>
                        <h5>
                          三个雷雳 4 (USB‑C) 端口或三个雷雳 5 (USB‑C) 端口、
                        </h5>
                      </div>
                      <h1>1.55 千克或 2.14 千克</h1>
                      <h5 ref={downRef}>重量</h5>
                    </div>
                  </li>
                </ul>
              </>
            )}
          </div>
        </ProductContainer>
      </Container>
    </>
  )
}
export default memo(ProductDetail)
