import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f5f5f5;
  .buttoncontainer {
    display: flex;
    padding-bottom: 20px;
    padding-right: 50px;
    justify-content: flex-end;
    .btn {
      margin-left: 20px;
      align-items: center;
      justify-content: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgb(222, 222, 226);
      &:hover {
        cursor: pointer;
        background-color: rgb(231, 231, 231);
        color: rgb(97, 97, 99);
      }
      h1 {
        color: rgb(97, 97, 99);
      }
    }
    .nobtn {
      background-color: rgb(236, 236, 238);
      h1 {
        color: rgb(196, 196, 196);
      }

      &:hover {
        cursor: default;
        background-color: rgb(236, 236, 238);
        h1 {
          color: rgb(196, 196, 196);
        }
      }
    }
  }
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
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  .productlist {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 50px;
    scroll-behavior: smooth;

    /* 隐藏滚动条但保持滚动功能 */
    &::-webkit-scrollbar {
      display: none;
    }

    .productitem {
      flex: 0 0 33%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.5s ease;
      &.visible {
        opacity: 1;
        transform: translateY(0px);
      }

      img {
        width: 334px;
        border-radius: 10%;
        transition: all 0.5s ease;
        &:hover {
          transform: scale(1.01);
          cursor: pointer;
        }
      }

      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-bottom: 20px;
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
    }
  }
`
