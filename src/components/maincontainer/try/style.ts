import styled from 'styled-components'
interface CardWrapperProps {
  $backgroundImage?: string
}

export const NewContainer = styled.div<CardWrapperProps>`
  height: 500px;
  min-width: 425px;
  border-radius: 16px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);

  // Hover effect
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }

  .content {
    h1 {
      margin-right: 100px;
      margin-left: 30px;
      font-size: 26px;
      font-weight: 500;
      color: black;
      line-height: 1.2;
    }
    h2 {
      margin-top: 30px;
      margin-right: 30px;
      margin-left: 30px;
      font-size: 14px;
      font-weight: 350;
      color: black;
    }
    h3 {
      margin-top: 30px;
      margin-right: 50px;
      margin-left: 30px;
      font-size: 11px;
      font-weight: 400;
      color: black;
      min-height: 20px;
    }
  }
`

export const NewWarpper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f7;
  padding: 24px 0;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
  .hidden {
    opacity: 0;
    transition: all 0.3s ease;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 0 60px;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export const LeftArrow = styled(ArrowButton)`
  left: 10px;
`

export const RightArrow = styled(ArrowButton)`
  right: 10px;
`
