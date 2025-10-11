import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 25px auto;
  height: 130px;
  overflow-x: auto;
  overflow-y: hidden;
  /* 隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  animation: slideInFromRight 0.5s ease-in-out;
  .item {
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: auto;
      height: 61px;
    }
    h3 {
      margin-top: 10px;
      font-size: 12px;
      font-weight: 400;
      color: black;
    }
  }
`
export const Wrapper = styled.div`
  position: relative;
  width: 900px;
  margin: 25px auto;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  .btn {
    background-color: #fff;
    font-size: 16px;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
  }
  .hidden {
    opacity: 0;
  }
`
