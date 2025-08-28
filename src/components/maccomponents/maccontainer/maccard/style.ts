import styled from 'styled-components'
export const Container = styled.div`
  width: 1160px;
  display: flex;
  margin: 50px auto;
  flex-direction: column;
  h1 {
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 50px;
    color: rgba(0, 0, 0, 0.85);
  }
  .imagebg {
    position: relative;
    .text-overlay {
      position: absolute;
      top: 150px;
      left: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .btn {
        margin-top: 50px;
        z-index: 1;
        border-radius: 50px;
        width: 160px;
        height: 50px;
        &:hover {
          cursor: pointer;
        }
      }
      h2 {
        &:hover {
          cursor: pointer;
        }
        display: flex;
        z-index: 1;
        font-size: 30px;

        color: white;
      }
    }
    img {
      width: 1160px;
      border-radius: 50px;
      object-fit: cover;
      object-position: -170px 0;
      height: 480px;
      &:hover {
        cursor: pointer;
        transform: scale(1.02);
        transition: all 0.5s;
      }
      //   没有hover的时候,动画效果回到初始状态
      &:not(:hover) {
        transform: scale(1);
        transition: all 0.5s;
      }
    }
  }
`
