import styled from 'styled-components'
export const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f5f5f7;
  ul {
    width: 960px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      font-size: 11px;
      justify-content: center;

      align-items: center;
      color: #333;
      cursor: pointer;
      &:hover {
        color: rgb(0, 0, 0);
      }
      svg {
        font-size: 18px;
      }
    }
  }
`
