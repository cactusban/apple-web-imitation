import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 80px;
    width: 1100px;
    border-bottom: 1px solid #e0e0e0;
    h3 {
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 300;
      color: rgb(108, 108, 108);
    }
    h2 {
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 400;
      color: rgb(108, 108, 108);
    }
  }
`
