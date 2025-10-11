import styled from 'styled-components'

export const Title = styled.div`
  width: 1100px;
  margin: 50px auto;
`

export const Container = styled.div`
  display: flex;
  margin: 30px auto;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

interface ContainerProps {
  background?: string
}

export const ContainerWrap = styled.div<ContainerProps>`
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 344px;
  height: 628px;

  display: flex;
  background: url(${(props) => props.background}) no-repeat center center;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);

  /* 👇 添加初始状态和动画 */
  &.hidden {
    opacity: 0;
    transform: translateY(70px);
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  /* hover 效果 */
  &:hover {
    cursor: pointer;
    transform: scale(1.02) translateY(0) !important;
    transition: all 0.5s;
  }

  .white {
    display: flex;
    flex-direction: column;

    h2 {
      margin-top: 30px;
      margin-left: 30px;
      color: white;
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    h1 {
      margin-left: 30px;
      font-size: 25px;
      color: white;
    }
  }

  .black {
    display: flex;
    flex-direction: column;
    h2 {
      margin-top: 30px;
      margin-left: 30px;
      color: black;
      font-size: 18px;
    }
    h1 {
      margin-top: 20px;
      margin-left: 30px;
      font-size: 25px;
      color: black;
    }
  }
`

export const Btn = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  margin-bottom: 100px;
  .usebtn {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    background-color: rgb(230, 230, 230);
    margin-right: 20px;

    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;
    }
  }
  .nousebtn {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    background-color: rgb(236, 236, 236);
    margin-right: 20px;
  }
  .no {
    color: #bfbfbf;
  }
  .use {
    color: black;
  }
`
