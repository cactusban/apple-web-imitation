import type { FC, ReactNode } from 'react'
import {
  AppleFilled,
  SearchOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'
import { TopBarWrapper } from './style'
import { Link } from 'react-router-dom'
interface Iprops {
  children?: ReactNode
}
const TopBar: FC<Iprops> = () => {
  return (
    <>
      <TopBarWrapper>
        <ul>
          <li>
            <Link to="/login">
              <AppleFilled />
            </Link>
          </li>
          <li>
            <Link to="/shop">商店</Link>
          </li>
          <li>
            <Link to="/mac">Mac</Link>
          </li>
          <li>
            <Link to="/ipad">iPad</Link>
          </li>
          <li>
            <Link to="/iphone">iphone</Link>
          </li>
          <li>
            <Link to="/watch">Watch</Link>
          </li>
          <li>AirPods</li>
          <li>家居</li>
          <li>娱乐</li>
          <li>配件</li>
          <li>技术支持</li>
          <li>
            <SearchOutlined />
          </li>
          <li>
            <ShoppingOutlined />
          </li>
        </ul>
      </TopBarWrapper>
    </>
  )
}
export default TopBar
