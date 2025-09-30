import styled from 'styled-components'
export const Container = styled.div`
  background-color: #f5f5f5;
  .top {
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
  transition: all 0.3s ease;
  padding-bottom: 80px;
  .tab-navigation {
    position: relative;
    display: flex;
    width: 400px;
    margin-top: 50px;
    margin-bottom: 40px;
    margin-left: 80px;
    border-radius: 50px;
    padding: 4px;
    background: rgba(0, 0, 0, 0.05);

    .slider {
      position: absolute;
      top: 6px;
      left: 4px;
      width: 120px;
      height: 45px;
      background: rgb(26, 26, 26);
      border-radius: 50px;
      transition: transform 0.3s ease;
      z-index: 1;
    }

    .tab-button {
      position: relative;
      z-index: 2;
      margin: 0 auto;
      width: 120px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      font-size: 15px;
      font-weight: 350;
      transition: color 0.3s ease;
      cursor: pointer;

      &.active {
        color: white;
      }

      &:not(.active) {
        color: rgb(26, 26, 26);
      }

      &:hover:not(.active) {
        color: rgb(60, 60, 60);
      }
    }
  }
  .product-list {
    display: flex;
    margin-left: 80px;
    width: 75%;
    justify-content: space-around;
    flex-direction: column;
    .menu {
      position: fixed;
      top: -60px; /* 初始隐藏在顶部 */
      left: 0;
      width: 100%;
      background: white;
      padding: 15px 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      z-index: 1000;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      transition: all 0.3s ease;
      &.hide {
        top: -60px;
        transition: top 1s ease-in-out;
      }
      &.show {
        top: 0;
      }
    }
    .product {
      display: flex;
      justify-content: flex-start;
      align-items: end;

      .product-item {
        padding-right: 70px;
        justify-content: end;
        .after {
          display: flex;
          flex-direction: column;
          justify-content: end;
          align-items: center;
          min-height: 100px;

          .double {
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;
          }
          h1 {
            font-size: 22px;
            font-weight: 580;
            margin-top: 30px;
            height: 50px;
          }
          img {
            margin-top: 30px;
            justify-content: center;
            width: 50px;
            height: 100%;
          }
          h5 {
            font-size: 11px;
            font-weight: 350;
            margin-top: 10px;
          }
        }
        img {
          width: 300px;
          align-items: end;
        }
        .content {
          margin-top: 40px;
          display: flex;
          line-height: 30px;
          flex-direction: column;
          justify-content: end;
          align-items: center;

          h1 {
            font-size: 22px;
            font-weight: 580;
          }
          h2 {
            font-size: 18px;
            font-weight: 500;
            margin: 10px;
          }
          h3 {
            font-size: 15px;
            font-weight: 350;
          }
          .btn {
            margin-top: 20px;
            display: flex;
            margin-bottom: 20px;
            button {
              width: 130px;
              height: 40px;
              background-color: #0070c9;
              border-radius: 50px;
              color: white;
              margin-right: 30px;
              &:hover {
                cursor: pointer;
              }
            }
            h4 {
              color: #0070c9;

              font-weight: 500;
              line-height: 40px;
              &:hover {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`
export const FloatingMenu = styled.div`
  position: fixed;
  left: 0;
  height: 130px;
  width: 100%;
  background: #f5f5f5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  opacity: 0;
  &.show {
    top: 0;
    transition: all 0.3s ease;
    opacity: 1;
  }
  .container {
    display: flex;
    width: 65%;
    margin-left: 40px;
    margin-top: 20px;
    justify-content: space-around;
    .content {
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      h3 {
        font-size: 14px;
        font-weight: 350;
      }
    }
  }
`
