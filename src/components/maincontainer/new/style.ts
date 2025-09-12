import styled from 'styled-components'
interface CardWrapperProps {
  $backgroundImage?: string
}

export const NewContainer = styled.div<CardWrapperProps>`
  height: 500px;
  min-width: 400px;
  border-radius: 16px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  margin: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }
  .white {
    h1 {
      margin: 40px 24px 0;
      font-size: 28px;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      line-height: 1.2;
    }
    h2 {
      margin: 16px 24px 0;
      font-size: 18px;
      font-weight: 500;
      color: #f5f5f5;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      line-height: 1.3;
    }
    h3 {
      margin: 16px 24px 0;
      font-size: 14px;
      font-weight: 400;
      color: #e5e5e5;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
  .black {
    h1 {
      margin: 40px 24px 0;
      font-size: 28px;
      font-weight: 600;
      color: black;
      line-height: 1.2;
    }
    h2 {
      margin: 16px 24px 0;
      font-size: 18px;
      font-weight: 500;
      color: black;
      line-height: 1.3;
    }
    h3 {
      margin: 16px 24px 0;
      font-size: 12px;
      font-weight: 300;
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
