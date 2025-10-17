import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import {
  AppleFilled,
  SearchOutlined,
  ShoppingOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import {
  TopBarWrapper,
  NavList,
  NavItem,
  MobileMenuButton,
  MobileMenu,
  MobileOverlay,
} from './style'
import { Link } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
}

const TopBar: FC<Iprops> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <TopBarWrapper>
        <NavList>
          <NavItem className="logo">
            <Link to="/login" onClick={closeMobileMenu}>
              <AppleFilled />
            </Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/shop">商店</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/mac">Mac</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/ipad">iPad</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/iphone">iPhone</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/watch">Watch</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/airpods">AirPods</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/home">家居</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/entertainment">娱乐</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/accessories">配件</Link>
          </NavItem>
          <NavItem className="desktop-only">
            <Link to="/support">技术支持</Link>
          </NavItem>
          <NavItem className="search-icon">
            <SearchOutlined />
          </NavItem>
          <NavItem className="cart-icon">
            <Link to="/cart">
              <ShoppingOutlined />
            </Link>
          </NavItem>
          <NavItem className="mobile-only">
            <MobileMenuButton onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </MobileMenuButton>
          </NavItem>
        </NavList>
      </TopBarWrapper>

      {/* 移动端菜单遮罩 */}
      <MobileOverlay
        className={mobileMenuOpen ? 'open' : ''}
        onClick={closeMobileMenu}
      />

      {/* 移动端菜单 */}
      <MobileMenu className={mobileMenuOpen ? 'open' : ''}>
        <NavItem>
          <Link to="/shop" onClick={closeMobileMenu}>
            商店
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/mac" onClick={closeMobileMenu}>
            Mac
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/ipad" onClick={closeMobileMenu}>
            iPad
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/iphone" onClick={closeMobileMenu}>
            iPhone
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/watch" onClick={closeMobileMenu}>
            Watch
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/airpods" onClick={closeMobileMenu}>
            AirPods
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/home" onClick={closeMobileMenu}>
            家居
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/entertainment" onClick={closeMobileMenu}>
            娱乐
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/accessories" onClick={closeMobileMenu}>
            配件
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/support" onClick={closeMobileMenu}>
            技术支持
          </Link>
        </NavItem>
      </MobileMenu>
    </>
  )
}

export default TopBar
