import type { FC, ReactNode } from 'react'
import { TopContainer } from './style'
import { AppleOutlined } from '@ant-design/icons'
interface Iprops {
  children?: ReactNode
}
const ShopTop: FC<Iprops> = () => {
  return (
    <>
      <TopContainer>
        <div className="container">
          <div className="left">
            <h1>
              <span className="store">这个商店，</span>
              <span className="products">产品都称心，</span>
              <span className="experience">体验更如意。</span>
            </h1>
          </div>
          <div className="right">
            <div className="righttop">
              {' '}
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-chat-specialist-icon-202506_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=VXRDQVlxMTJJMXBPUzZKYmlVSjB4Q2o1cW5aOTRSYzl1SGhPbEp1WkI0OStwZU80U3QwWHgwLzZ2TXQ4Mmc1WkozZ243MkhSa3VZM0pFUXd0a3pwWEtyTlBEcFBOb2UveU5OS3ZEZjUxRkZnOUVHY2NMcW1WREozaWRXa2dldEI"
                alt=""
              />
              <div className="righttopwrite">
                <h2>需要协助选购？ </h2>
                <a href="">咨询 Specialist 专家↗</a>
              </div>
            </div>
            <div className="rightbottom">
              <AppleOutlined className="righticon" />

              <div className="rightbotwrite">
                <h2>前往 Apple Store 零售店</h2>
                <a href="">查找附近的零售店↗</a>
              </div>
            </div>
          </div>
        </div>
      </TopContainer>
    </>
  )
}
export default ShopTop
