import { lazy, memo, type FC, type ReactNode } from 'react'
import MacPartner from './macPartner'
const MacVidieo = lazy(() => import('./macvidieo'))
const MacCard = lazy(() => import('./maccard'))
const MacCompre = lazy(() => import('./maccompre'))
const ProductDetail = lazy(() => import('./productdetail'))
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
      <MacPartner></MacPartner>
    </div>
  )
}

export default memo(MacComponent)
