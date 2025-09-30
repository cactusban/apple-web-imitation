import styled from 'styled-components'
export const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;
  animation: moveUpDown 0.5s ease-in-out;
  h1 {
    font-size: 82px;
    font-weight: 500;
  }
  .right {
    font-size: 22px;
  }
  @keyframes moveUpDown {
    from {
      transform: translateY(10%);
    }
    to {
      transform: translateY(0);
    }
  }
`
