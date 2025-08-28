import styled from 'styled-components'
export const AtClick = styled.div`
  background-color: #f5f5f5;
  display: flex;
  margin-left: 70px;
  .content {
    margin-top: 20px;
    width: 1100px;
    button {
      border: 1px solid #000;
      padding: 0.7rem 1rem;
      margin-right: 20px;
      border-radius: 1.1rem;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`
