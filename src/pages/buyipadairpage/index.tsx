import type { FC, ReactNode } from 'react'
import BuyPage from '../../components/buypage'
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
