import styled, { keyframes, createGlobalStyle } from 'styled-components'
// 定义动画
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

// 创建样式组件
export const ModalContainer = styled.div`
  text-align: center;
  padding: 20px;
`

export const OpenModalButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  overflow: auto;
`

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 816px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.3s ease-out;
  // position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`

export const ModalImage = styled.img`
  width: 590px;
  height: 350px;
  align-items: center;
  justify-content: center;
`

export const ModalTitle = styled.h2`
  margin-top: 0;
  width: 350px;
  color: #333;
  margin-top: 50px;
  font-size: 37px;
  font-weight: bold;
`

export const ModalText = styled.p`
  margin-top: 30px;
  margin-bottom: 20px;
  line-height: 1.5;
  font-size: 20px;
  width: 600px;
  text-align: center;
  justify-content: center;
`

export const ModalActions = styled.div`
  text-align: right;
`

export const CloseModalButton = styled.button`
  background-color: rgb(218, 217, 217);
  color: black;
  border: none;
  align-items: center;
  border-radius: 100%;
  margin: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: gray;
    color: rgb(255, 255, 255);
  }
`

// 全局样式（用于禁用背景滚动）
export const globalStyles = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`
