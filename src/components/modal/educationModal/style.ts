import styled, { keyframes } from 'styled-components'
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const slideUp = keyframes`
  from {
    transform: translate(-50%, -40%) scale(0.9);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`

export const scaleIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

// 样式组件
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: auto;
`

export const ModalContent = styled.div`
  background: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  width: 90vw;
  max-width: 900px;
  margin-top: 50px;
  height: 100%;
  overflow: auto;
  position: relative;
  animation: ${scaleIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* 自定义滚动条 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 10;
  font-size: 30px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #000;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const ModalHeader = styled.div`
  padding: 60px 60px 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 30px 30px;
  }
`

export const ModalImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  margin-bottom: 30px;
`

export const ModalTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 20px;
  letter-spacing: -0.02em;
  padding: 0 150px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`

export const ModalDescription = styled.p`
  font-size: 21px;
  color: #86868b;
  line-height: 1.4;
  margin: 0;
  font-weight: 400;
  padding: 0 100px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const ProductSection = styled.div`
  padding: 0 60px 60px;

  @media (max-width: 768px) {
    padding: 0 30px 40px;
  }
`

export const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 4px;
`

export const TabButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  border: none;
  background: transparent;
  color: #86868b;
  font-size: 17px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;

  &.active {
    background: white;
    color: #1d1d1f;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:not(.active):hover {
    color: #1d1d1f;
  }
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const ProductCard = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 8px;
`

export const ProductDiscount = styled.p`
  font-size: 12px;
  color: rgb(110,110,115)
  margin: 0;
  font-weight: 300;
`

export const DemoContainer = styled.div`
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OpenButton = styled.button`
  background: #007aff;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background: #0051d5;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 122, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`
