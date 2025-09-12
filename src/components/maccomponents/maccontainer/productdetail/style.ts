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
  .tab-navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 4px;
    .tab-button {
    }
  }
`
export const ProductDetail = styled.div``
