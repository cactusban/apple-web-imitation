import type { FC, ReactNode } from 'react'
import { Container } from './style'

interface Iprops {
  children?: ReactNode
}
const IpadTopBar: FC<Iprops> = () => {
  return (
    <Container>
      {' '}
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/ipad_pro_b05b29e18.svg"
          alt=""
        />
        <h1>iPad Pro</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/ipad_air_b05b29e18.svg"
          alt=""
        />
        <h1>iPad Air</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/ipad_ec6ec9ee7.svg"
          alt=""
        />
        <h1>iPad</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/ipad_mini_ca78d03ea.svg"
          alt=""
        />
        <h1>iPad mini</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/compare_ipad_93f95f0a1.svg"
          alt=""
        />
        <h1>机型比较</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/apple_pencil_607b17f9f.svg"
          alt=""
        />
        <h1>Apple Pencil</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/keyboard_ipad_0113a1a87.svg"
          alt=""
        />
        <h1>键盘</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/accessories_ipad_1d680a4ad.svg"
          alt=""
        />
        <h1>配件</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/ipados_1e9806c02.svg"
          alt=""
        />
        <h1>iPadOS 26</h1>
      </div>
      <div className="macproduct">
        <img
          src="https://www.apple.com.cn/assets-www/en_WW/ipad/chapternav/shop_ipad_a90662b1a.svg"
          alt=""
        />
        <h1>选购 iPad</h1>
      </div>
    </Container>
  )
}
export default IpadTopBar
