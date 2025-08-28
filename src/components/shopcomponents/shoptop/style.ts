import styled from 'styled-components'
export const TopContainer = styled.div`
  background-color: #f5f5f7;
  display: flex;
  justify-content: center;
  .container {
    margin-top: 80px;
    margin-bottom: 80px;
    display: flex;
    width: 1100px;
    justify-content: space-between;
    align-items: center;
    .left {
      flex: 1;
      max-width: 480px;
      h1 {
        font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, sans-serif;
        font-size: 43px;
        font-weight: 600;
        line-height: 1.5;
        margin: 0;
        color: #6e6e73; /* 默认灰色 */
        font-weight: 500;
        .store {
          color: #000000; /* “这个商店”黑色 */
        }

        .experience {
          display: block; /* “体验更如意”另起一行 */
        }
      }
    }
    .right {
      margin-top: 30px;
      .righttop {
        display: flex;
        margin-bottom: 20px;
        img {
          width: 35px;
          height: 35px;
          margin-right: 10px;
        }
        .righttopwrite {
          h2 {
            font-size: 12px;
            font-weight: 500;
          }
          a {
            font-size: 12px;
            color: #007aff;
          }
        }
      }
      .rightbottom {
        display: flex;
        .righticon {
          font-size: 33px;
          margin-right: 12px;
        }
        .rightbotwrite {
          h2 {
            font-size: 12px;
            font-weight: 500;
          }
          a {
            font-size: 12px;
            color: #007aff;
          }
        }
      }
    }
  }
`
