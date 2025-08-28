import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px 0;
`

export const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0;
  .copyright {
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: 350;
    color: gray;
  }
`
export const Content = styled.div`
  display: flex;

  .apple {
    font-size: 19px;
    color: rgba(0, 0, 0, 0.7);
    margin-right: 10px;

    &:hover {
      cursor: pointer;
      color: black;
    }
  }

  .right {
    margin-right: 10px;
    font-size: 14px;
  }

  h1 {
    font-size: 14px;
    font-weight: 300;
  }
`
export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  h3 {
    font-size: 15px;
    font-weight: 500;
    color: #1d1d1f;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
    font-size: 14px;
    color: #515154;
    font-weight: 300;

    &:hover {
      color: black;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export const Navigation = styled.div`
  max-width: 1100px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
`
export const FootContainer = styled.div`
  max-width: 1100px;
  margin: 10px auto;
  h1 {
    margin-bottom: 20px;
    justify-content: center;
    font-size: 12px;
    font-weight: 300;
    color: gray;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
