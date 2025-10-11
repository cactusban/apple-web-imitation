import { lazy, type FC, type ReactNode } from 'react'
const BuyPage = lazy(() => import('../../components/buypage/buyIpadpage'))

interface Iprops {
  children?: ReactNode
}
const BuyIpadAirPage: FC<Iprops> = () => {
  return (
    <>
      <BuyPage />
    </>
  )
}
export default BuyIpadAirPage
