import styled from 'styled-components'

// 断点定义
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
}

export const TopBarWrapper = styled.nav`
  background: rgba(244, 244, 244, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 44px;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display',
    'SF Pro Text', 'Helvetica Neue', sans-serif;

  @media (max-width: ${breakpoints.mobile}) {
    height: 48px;
  }
`

export const NavList = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 22px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
    justify-content: space-between;
  }
`

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    opacity: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 0 8px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #f5f5f7;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 80%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding: 0 4px;
    }
  }

  &.logo {
    font-size: 18px;
    opacity: 1;

    a::after {
      display: none;
    }
  }

  &.search-icon,
  &.cart-icon {
    font-size: 16px;

    a::after {
      display: none;
    }
  }

  /* 桌面端隐藏移动菜单按钮 */
  &.mobile-only {
    display: none;

    @media (max-width: ${breakpoints.mobile}) {
      display: flex;
    }
  }

  /* 移动端隐藏导航项 */
  &.desktop-only {
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile}) {
    font-size: 11px;

    a {
      padding: 0 6px;
    }
  }
`

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
  }
`

export const MobileOverlay = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 998;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  background: rgba(201, 201, 201, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  ${NavItem} {
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    a {
      width: 100%;
      padding: 16px 24px;
      font-size: 16px;
      font-weight: 400;

      &::after {
        display: none;
      }

      &:active {
        background: rgba(240, 240, 240, 0.83);
      }
    }

    &:last-child {
      border-bottom: none;
    }
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }

  /* 自定义滚动条样式 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.9);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`
