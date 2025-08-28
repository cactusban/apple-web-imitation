import styled from 'styled-components'
interface CardWrapperProps {
  backgroundImage: string
  isFirst?: boolean
}

export const NewContainer = styled.div<CardWrapperProps>`
  height: 500px;
  min-width: ${({ isFirst }) => (isFirst ? '400px' : '300px')};

  border-radius: 16px;
  background-image: url(${({ backgroundImage }) => backgroundImage});

  background-size: cover;
  background-position: center;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }

  .content {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    img {
      margin-top: 60px;
      margin-left: 35px;
      width: 230px;
    }
    h4 {
      min-height: 20px;
      margin: 20px 30px 0;
      color: rgb(182, 68, 0);
      font-size: 12px;
      font-weight: 500;
    }
    h1 {
      margin: 30px 30px 0;
      font-size: 25px;
      font-weight: 600;
      color: black;
      line-height: 1.2;
    }
    h2 {
      font-size: 16px;
      font-weight: 500;
      color: black;
      margin-top: 30px;
      margin-left: 30px;
      margin-right: 30px;
      min-height: 50px;
    }
    h3 {
      margin-left: 30px;
      margin-right: 30px;
      margin-top: 30px;
      font-size: 11px;
      font-weight: 400;
      color: black;
    }
  }
`

export const NewWarpper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f7;
  padding: 24px 0;
  width: 100%;
  transition: all 0.5s ease;
  position: relative;
  .hidden {
    transition: all 0.5s ease;
    opacity: 0;
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
