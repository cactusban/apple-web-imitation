import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display',
    'SF Pro Text', 'Helvetica Neue', sans-serif;
  color: black;
  padding: 20px;
`

export const LoginCard = styled.div`
  background: white;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 48px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

export const Logo = styled.div`
  font-size: 48px;
  text-align: center;
  margin-bottom: 12px;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
  color: black;
`

export const Subtitle = styled.p`
  font-size: 17px;
  color: black;
  text-align: center;
  margin: 0 0 40px 0;
  font-weight: 400;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: black;
  padding-left: 4px;
`

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 17px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: black;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.12);
    border-color: #0071e3;
    box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.2);
  }

  &::placeholder {
    color: #86868b;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 17px;
  font-weight: 500;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background: #0077ed;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 113, 227, 0.4);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const LogoutButton = styled(Button)`
  background: rgba(63, 63, 63, 0.08);
  border: 1px solid rgba(104, 104, 104, 0.2);
  color: rgb(83, 83, 83);

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }
`

export const UserInfo = styled.div`
  text-align: center;
  margin-bottom: 32px;
`

export const UserAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const UserName = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 4px 0;
  letter-spacing: -0.5px;
  color: black;
`

export const UserEmail = styled.p`
  font-size: 17px;
  color: black;
  margin: 0;
`

export const ErrorMessage = styled.div`
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid rgba(255, 59, 48, 0.3);
  color: #ff453a;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
  animation: shake 0.3s ease;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-4px);
    }
    75% {
      transform: translateX(4px);
    }
  }
`
