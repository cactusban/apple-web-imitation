import type { FC, ReactNode } from 'react'
import React, { useState, useEffect } from 'react'
import { loginRequest } from '../../service/login'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  ErrorMessage,
  Input,
  InputWrapper,
  Label,
  LoginCard,
  Logo,
  LogoutButton,
  PageContainer,
  StyledForm,
  Subtitle,
  Title,
  UserAvatar,
  UserEmail,
  UserInfo,
  UserName,
} from './style'

interface Iprops {
  children?: ReactNode
}

interface User {
  name?: string
  email: string
}

const Login: FC<Iprops> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/shop'

  // 检查是否已登录
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (e) {
        console.error('解析用户数据失败', e)
      }
    }
  }, [])

  // 获取用户名首字母
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('请输入邮箱和密码')
      return
    }

    setIsLoading(true)

    try {
      const res = await loginRequest({ email, password })
      if (res && res.accessToken) {
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('user', JSON.stringify(res.user))
        setUser(res.user)
        navigate(from, { replace: true })
      } else {
        setError('账户或密码错误')
      }
    } catch (err) {
      setError('登录失败，请重试')
      console.error('登录错误:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setEmail('')
    setPassword('')
    setError('')
  }

  return (
    <PageContainer>
      <LoginCard>
        {user ? (
          <>
            <UserInfo>
              <UserAvatar>
                {user.name
                  ? getInitials(user.name)
                  : user.email[0].toUpperCase()}
              </UserAvatar>
              <UserName>{user.name || '用户'}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserInfo>
            <LogoutButton onClick={handleLogout}>退出登录</LogoutButton>
          </>
        ) : (
          <>
            <Logo></Logo>
            <Title>登录</Title>
            <Subtitle>使用您的账户继续</Subtitle>

            <StyledForm onSubmit={handleLogin}>
              <InputWrapper>
                <Label>邮箱</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  autoComplete="email"
                />
              </InputWrapper>

              <InputWrapper>
                <Label>密码</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="输入密码"
                  autoComplete="current-password"
                />
              </InputWrapper>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? '登录中...' : '继续'}
              </Button>
            </StyledForm>

            {error && <ErrorMessage>{error}</ErrorMessage>}
          </>
        )}
      </LoginCard>
    </PageContainer>
  )
}

export default Login
