import styled from 'styled-components'
export const Container = styled.div`
  background-color: white;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin: 50px auto;

  .left {
    .buyname {
      font-size: 35px;
      font-weight: bold;

      margin-bottom: 20px;
    }
    .buydesc {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .discount {
      padding: 15px 20px;
      margin-left: auto;
      margin-bottom: 20px;

      font-size: 10px;
      border-radius: 30px;
      background-color: rgb(245, 245, 247);
    }
  }
`
export const BuyDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 95vw;
  margin: auto;
  position: relative;
  padding-left: 3vw;
  .left {
    width: 65vw;
    .carousel {
      .images {
        img {
          border-radius: 30px;
          width: 70vw;
        }
      }
    }
  }

  .right {
    width: 23vw;
    height: 480px;
    overflow: auto;
    margin-right: 40px;
    scroll-behavior: smooth;
    h1 {
      font-size: 20px;
      font-weight: 600;

      color: #1d1d1f;
    }
    /* 隐藏滚动条 */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    .type,
    .color,
    .ram,
    .web {
      padding: 20px 0;
    }

    .type {
      padding: 40px 0;
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        margin: 20px 0;
        border: 1px solid #d2d2d7;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        &.active {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }
        &:hover {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }

        .lefttype {
          font-size: 17px;
          font-weight: 400;
          color: #1d1d1f;
        }

        .righttype {
          text-align: right;

          h2 {
            font-size: 14px;
            font-weight: 400;
            margin: 2px 0;

            &:first-child {
              color: #86868b;
            }
            &:last-child {
              color: #1d1d1f;
              font-weight: 600;
            }
          }
        }
      }
    }

    .color {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0;
      .colordesc {
        min-width: 32%;

        display: flex;

        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px 20px;
        margin: 10px 5px;
        border: 1px solid #d2d2d7;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        &.active {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }
        &:hover {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }

        img {
          justify-content: center;
          align-items: center;

          width: 40px;
          height: 40px;
        }

        h3 {
          justify-content: center;
          align-items: center;

          font-size: 11px;
          font-weight: 400;
          color: #1d1d1f;
        }
      }
    }

    .ram {
      display: flex;
      flex-wrap: wrap;
      .ramdesc {
        width: 35%;
        padding: 15px 15px;
        margin: 10px 5px;
        border: 1px solid #d2d2d7;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        &.active {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }
        &:hover {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }

        h2 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1d1d1f;
        }

        h3 {
          font-size: 12px;
          font-weight: 400;
          margin: 2px 0;

          &:first-of-type {
            color: #86868b;
          }
          &:last-of-type {
            color: #1d1d1f;
            font-weight: 600;
          }
        }
      }
    }

    .web {
       .webdes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        margin: 20px 0;
        border: 1px solid #d2d2d7;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        &.active {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }
        &:hover {
          border-color: #0071e3;
          box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
        }

        .lefttype {
          font-weight: 400;
          width:200px;
          color: #1d1d1f;
          h2{
          font-size: 14px;
          font-weight: 500;
          }
          h3{
          font-size: 11px;
          font-weight: 300;}
        }

        .righttype {
          text-align: right;

          h3 {
            font-size: 12px;
            font-weight: 400;
            margin: 2px 0;


          }
        }
      }
    }
    }
  }

  /* 滚动指示器容器 */
  .scroll-indicator {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    z-index: 10;
  }

  .indicator-dot {
    width: 4px;
    height: 10px;
    background-color: #d2d2d7;
    border-radius: 2px;
    transition: all 0.3s ease;

    &.active {
      height: 40px;
      background-color: #1d1d1f;
    }
  }
`
export const Package = styled.div`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin: 130px auto;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-bottom: 50px;
  }
  .pic {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 800px;
    margin: 0 auto;

    background-color: #f5f5f7;
    img {
      height: 339px;
    }
  }
`
export const Compare = styled.div`
  h1 {
    width: 1200px;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      .title {
        min-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        border-bottom: 1px solid rgb(122, 122, 122);
        h2 {
          width: 110px;
          text-align: center;
          font-size: 20px;
          margin-bottom: 30px;
        }
        h3 {
          width: 110px;
          text-align: center;
          font-size: 12px;
          margin-bottom: 30px;
          font-weight: 300;
        }
      }
      img {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        max-width: 196px;
        max-height: 199px;
        margin-bottom: 50px;
      }
      h2 {
        font-size: 15px;
        margin-bottom: 30px;
        text-align: center;
      }
      h3 {
        font-size: 11px;
        font-weight: 300;
        text-align: center;
        margin-bottom: 30px;
      }
      .display {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: 56px;
          height: 56px;
          margin-bottom: 10px;
        }
        h3 {
          font-size: 11px;
          font-weight: 300;
          margin-bottom: 10px;
        }
      }
    }
  }
`
