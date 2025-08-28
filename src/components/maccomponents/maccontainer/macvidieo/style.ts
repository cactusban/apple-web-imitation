import styled from 'styled-components'
export const Container = styled.div`
  width: 1100px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;

  .video {
    border-radius: 50px;
    &:hover {
      cursor: pointer;
    }
  }
  .playbtn {
    position: absolute;
    left: 90%;
    top: 60%;
  }
`
