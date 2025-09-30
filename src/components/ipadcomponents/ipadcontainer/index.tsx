import { lazy, memo, type FC, type ReactNode } from 'react'
const IpadPartner = lazy(() => import('./ipadPartner'))

const IpadVidieo = lazy(() => import('./ipadvidieo'))
const IpadCompre = lazy(() => import('./ipadcompre'))
const ProductDetail = lazy(() => import('./productdetail'))
interface Iprops {
  children?: ReactNode
}
const MacComponent: FC<Iprops> = () => {
  return (
    <div>
      {' '}
      <IpadVidieo></IpadVidieo>
      <IpadCompre />
      <ProductDetail></ProductDetail>
      <IpadPartner></IpadPartner>
    </div>
  )
}

export default memo(MacComponent)
