import { Navigate, type RouteObject } from 'react-router-dom'

import { lazy } from 'react'
const Shop = lazy(() => import('../pages/shop'))
const MacPage = lazy(() => import('../pages/macpage'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/shop"></Navigate>,
  },
  {
    path: '/mac',
    element: <MacPage />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
]
export default routes
