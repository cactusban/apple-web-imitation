import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 960px;
  margin: 0 auto;
  height: 80px;

  /* 箭头按钮样式 */
  .anticon {
    margin-left: 100px;
    margin-right: 100px;
    font-size: 13px;
    color: #333;
    cursor: pointer;
  }

  /* 轮播容器样式 */
  .carousel {
    width: 100%;
    /* 内容区域最大宽度 */
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h3 {
      max-width: 700px;
      margin: 0;
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;
      color: #333;
    }

    a {
      color: #007aff;
      text-decoration: none;
      margin-left: 8px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
