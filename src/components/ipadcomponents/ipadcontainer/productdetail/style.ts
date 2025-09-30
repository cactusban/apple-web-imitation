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
export const ProductContainer = styled.div`
  .productlist {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    overflow-x: scroll;
    margin-top: 50px;

    /* 隐藏滚动条但保持滚动功能 (可选) */
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
      .bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          .detail {
            margin-top: 10px;
            line-height: 1.5;
            font-size: 12px;
            font-weight: 300;
          }
        }
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
        }
      }
      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%; /* 确保宽度一致 */
        padding-bottom: 20px; /* 添加底部内边距 */
        border-bottom: 1px solid rgb(189, 189, 189); /* 在容器底部添加边框 */

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
        .size {
          img {
            width: 30px;
          }
        }
        .chip {
          img {
            width: 30px;
          }
        }
        .camera {
          img {
            width: 30px;
          }
        }
        .ai {
          img {
            width: 30px;
          }
        }
        .pencil {
          img {
            width: 18px;
          }
        }
      }
    }
  }
`
export const FloatingMenu = styled.div`
  height: 100px;
`
