import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
interface Iprops {
  children?: React.ReactNode
}
const RequireAuth: React.FC<Iprops> = ({ children }) => {
  const isAuth = localStorage.getItem('token')
  const location = useLocation()
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  return <>{children}</>
}
export default RequireAuth
