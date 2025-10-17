import { Navigate, type RouteObject } from 'react-router-dom'

import { lazy } from 'react'
import BuyIpadAirPage from '../pages/buyipadairpage'
const Shop = lazy(() => import('../pages/shop'))
const Watch = lazy(() => import('../pages/watchPage'))
const MacPage = lazy(() => import('../pages/macpage'))
const IphonePage = lazy(() => import('../pages/iphonepage'))
const IpadPage = lazy(() => import('../pages/ipadpage'))
const Login = lazy(() => import('../pages/login'))
import RequireAuth from './requireAuth'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/shop"></Navigate>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/mac',
    element: (
      <RequireAuth>
        <MacPage />
      </RequireAuth>
    ),
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/iphone',
    element: (
      <RequireAuth>
        <IphonePage />
      </RequireAuth>
    ),
  },
  {
    path: '/ipad',
    element: (
      <RequireAuth>
        <IpadPage />{' '}
      </RequireAuth>
    ),
  },
  {
    path: '/watch',
    element: (
      <RequireAuth>
        <Watch />
      </RequireAuth>
    ),
  },
  {
    path: '/buyipadair',
    element: (
      <RequireAuth>
        <BuyIpadAirPage />
      </RequireAuth>
    ),
  },
]
export default routes
