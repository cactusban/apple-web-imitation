import type { FC, ReactNode } from 'react'
import BuyPage from '../../components/buypage/buyIpadpage'
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
