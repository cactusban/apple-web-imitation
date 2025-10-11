import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f5f5f5;
  .headertop {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    h1 {
      margin-top: 50px;
      font-size: 50px;
      font-weight: 550;
    }
    h3 {
      margin-top: 50px;
      color: #0070c9;
      font-weight: 350;
      font-size: 16px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`

export const FloatingMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background-color: #f5f5f5;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &.hide {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }

  &.show {
    transform: translateY(0);
    opacity: 1;
  }

  .menu-content {
    width: 1100px;
    display: flex;

    .menu-item {
      flex: 0 0 345px; /* 与下方产品项宽度一致 (1100px * 0.35) */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      width: 200px;

      h1 {
        font-size: 22px;
        font-weight: 650;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 16px;
        font-weight: 350;
        text-align: center;
      }
    }
  }
`

export const ProductContainer = styled.div`
  .productlist {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    overflow-x: scroll;
    margin-top: 50px;
    scroll-behavior: smooth;

    /* 隐藏滚动条但保持滚动功能 */
    &::-webkit-scrollbar {
      display: none;
    }

    .productitem {
      flex: 0 0 35%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 200px;
      }

      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(189, 189, 189);

        .name {
          font-size: 27px;
          font-weight: 600;
          margin-top: 30px;
          margin-bottom: 20px;
        }
        .desc {
          font-size: 16px !important;
          font-weight: 300;
        }
        button {
          padding: 10px 20px;
          border-radius: 50px;
          background-color: #0070c9;
          color: white;
          margin-top: 20px;
          margin-bottom: 30px;
          cursor: pointer;
          border: none;

          &:hover {
            background-color: #0077d4;
          }
        }
        .price {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 20px;
          h1 {
            font-size: 16px;
            font-weight: 550;
          }
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .size {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 280px;
          h1 {
            margin-top: 40px;
            margin-bottom: 20px;
            font-size: 27px;
            font-weight: 550;
          }
          .detail {
            margin-bottom: 20px;
            line-height: 1.5;
            font-size: 12px;
            font-weight: 300;
          }
          img {
            width: 30px;
          }
        }

        .chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
          }
          .detail {
            margin-top: 10px;
            margin-bottom: 20px;
            line-height: 1.5;
            font-size: 12px;
            font-weight: 300;
          }
        }

        .camera {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
          }
          .detail {
            margin-top: 10px;
            line-height: 1.5;
            font-size: 12px;
            font-weight: 300;
          }
        }

        .ai {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
          }
          .detail {
            margin-top: 10px;
            line-height: 1.5;
            font-size: 12px;
            font-weight: 300;
          }
        }

        .pencil {
          margin-top: 30px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 18px;
          }
          .detail {
            margin-top: 10px;
            line-height: 1.5;
            font-size: 12px;
            font-weight: 300;
          }
        }
      }
    }
  }
`
