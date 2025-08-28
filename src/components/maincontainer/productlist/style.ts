import styled from 'styled-components'

export const NewContainer = styled.div`
  height: 240px;

  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  margin-bottom: 30px;

  .content {
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
    }
    .desc {
      margin-top: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
      font-size: 18px;
      font-weight: 500;
      color: black;
      line-height: 1.4;
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
  transition: all 0.5s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
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
