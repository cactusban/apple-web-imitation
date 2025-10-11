import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`

export const Inner = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 50px;
    align-self: flex-start;
    width: 100%;
  }

  .content {
    width: 100%;
    height: 800px;
    background-color: #f5f5f5;
    display: flex;
    border-radius: 30px;

    &.hidden {
      opacity: 0;
      transform: translateY(50px);
    }

    &.slidein {
      opacity: 1;
      transform: translateY(0px);
      transition: all 0.5s ease-in-out;
    }

    .left {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 50px;

      .ts {
        padding-top: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d9d9d9;

        .title {
          font-size: 27px;
          font-weight: 500;
          margin-bottom: 20px;

          &:hover {
            cursor: pointer;
            color: #0066cc;
          }
        }

        .desc {
          line-height: 1.5;
          font-size: 15px;
          font-weight: 300;
          width: 90%;
          animation: slideDown 0.3s ease-out;
        }
      }
    }

    .right {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;

      .image {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;

        img {
          margin-left: 50px;
          height: 750px;
          object-fit: cover;
          object-position: left;
          transition: opacity 0.3s ease-in-out;

          &.fadeout {
            opacity: 0;
          }

          &.fadein {
            opacity: 1;
          }
        }
      }
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
