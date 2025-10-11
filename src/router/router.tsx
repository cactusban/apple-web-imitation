import { Navigate, type RouteObject } from 'react-router-dom'

import { lazy } from 'react'
import BuyIpadAirPage from '../pages/buyipadairpage'
const Shop = lazy(() => import('../pages/shop'))
const Watch = lazy(() => import('../pages/watchPage'))
const MacPage = lazy(() => import('../pages/macpage'))
const IphonePage = lazy(() => import('../pages/iphonepage'))
const IpadPage = lazy(() => import('../pages/ipadpage'))

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
  {
    path: '/iphone',
    element: <IphonePage />,
  },
  { path: '/ipad', element: <IpadPage /> },
  {
    path: '/watch',
    element: <Watch />,
  },
  {
    path: '/buyipadair',
    element: <BuyIpadAirPage />,
  },
]
export default routes
