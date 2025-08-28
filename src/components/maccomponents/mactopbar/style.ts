import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  width: 1100px;
  margin: 25px auto;
  animation: slideInFromRight 0.5s ease-in-out;
  .macproduct {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 12px;
      font-weight: 300;
    }
  }
  @keyframes slideInFromRight {
    from {
      transform: translateX(15%);
    }
    to {
      transform: translateX(0);
    }
  }
`
