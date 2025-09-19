import styled, { keyframes } from 'styled-components'
const fadeIn = keyframes`
  from {
    height: 0;
  }
  to {
    max-height: 200px;
  }
`

// 苹果风格的淡出动画
const fadeOut = keyframes`
  from {
  max-height: 200px;
  }
  to {
    height: 0;
  }
`

const rotateDown = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(10deg);
  }
`

const rotateUp = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`
const expandAnswer = keyframes`
  from {
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  to {
    max-height: 1000px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

// 答案收起动画 - 高度逐渐收缩
const collapseAnswer = keyframes`
  from {
    max-height: 1000px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  to {
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`
export const Container = styled.div`
  margin-top: 100px;
  .faq-list {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;

    .faq-item {
      border-bottom: 1px solid #e5e5e5;
      .answer {
        margin-left: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 14px;
        max-width: 800px;
        font-weight: 400;
        line-height: 2;
        white-space: pre-line;
        &.open {
          animation: ${expandAnswer} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        &.close {
          animation: ${collapseAnswer} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
      }
      .btn {
        border: none;
        display: flex;
        height: 60px;
        &:hover {
          cursor: pointer;
        }
        .question {
          font-size: 17px;
          font-weight: 550;
        }
        .arrow {
          font-size: 20px;
          color: rgb(169, 169, 169);
          margin-right: 8px;
          &.down {
            // animation: ${rotateDown} 0.3s ease forwards;
          }
          &.up {
            // animation: ${rotateUp} 0.3s ease forwards;
          }
        }
      }
    }
  }
  button {
    display: flex;
    background: none;
    width: 1050px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    :hover {
      cursor: pointer;
    }
    .content {
      width: 1050px;
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
      }
      .icon {
        font-size: 35px;
        color: rgb(169, 169, 169);
        transition: all 0.3s ease;
        &.down {
          animation: ${rotateDown} 0.3s ease forwards;
        }
        &.up {
          animation: ${rotateUp} 0.3s ease forwards;
        }
      }
    }
  }
`
