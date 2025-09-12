import type { FC, ReactNode } from 'react'
import MacVidieo from './macvidieo'
import MacCard from './maccard'
import MacCompre from './maccompre'
import ProductDetail from './productdetail'
interface Iprops {
  children?: ReactNode
}
const MacComponent: FC<Iprops> = () => {
  return (
    <div>
      {' '}
      <MacVidieo></MacVidieo>
      <MacCard></MacCard>
      <MacCompre />
      <ProductDetail></ProductDetail>
    </div>
  )
}

export default MacComponent
