import type { FC, ReactNode } from 'react'
import { Container } from './style'

interface Iprops {
  children?: ReactNode
}
const MacTopBar: FC<Iprops> = () => {
  return (
    <Container>
      {' '}
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/macbookair15.macbookair13_7e8b978ec.svg"
          alt=""
        />
        <h1>MacBook Air</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/macbookpro16.macbookpro14_c495bb45b.svg"
          alt=""
        />
        <h1>MacBook Pro</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/imac24_065a2bf21.svg"
          alt=""
        />
        <h1>iMac</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/macmini_f7eabee7b.svg"
          alt=""
        />
        <h1>Mac mini</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/macstudio_d48bbc5a3.svg"
          alt=""
        />
        <h1>Mac Studio</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/macpro_a0f334173.svg"
          alt=""
        />
        <h1>Mac Pro</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/compare_e6faa4436.svg"
          alt=""
        />
        <h1>机型比较</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/displays_ce60bd4d1.svg"
          alt=""
        />
        <h1>显示器</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/accessories_3bf8fc936.svg"
          alt=""
        />
        <h1>配件</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/macos_a763f3f5e.svg"
          alt=""
        />
        <h1>Tahoe 26</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/mac/chapternav/shop_mac_b01536048.svg"
          alt=""
        />
        <h1>选购 Mac</h1>
      </div>
    </Container>
  )
}
export default MacTopBar
