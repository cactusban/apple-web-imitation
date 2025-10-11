import type { FC, KeyboardEvent, ReactNode } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../store/authSlice'
interface Iprops {
  children?: ReactNode
}
const Login: FC<Iprops> = () => {
  return <div className="container"></div>
}
export default Login
