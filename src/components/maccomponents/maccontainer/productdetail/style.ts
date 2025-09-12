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
    .tab-button {
    }
  }
`
export const ProductDetail = styled.div``
