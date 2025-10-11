import { lazy, memo, type FC, type ReactNode } from 'react'
const IphonePartner = lazy(() => import('./iphonePartner'))

const IphoneCompre = lazy(() => import('./iphonecompre'))
const ProductDetail = lazy(() => import('./productdetail'))
interface Iprops {
  children?: ReactNode
}
const MacComponent: FC<Iprops> = () => {
  return (
    <div>
      {' '}
      <ProductDetail></ProductDetail>
      <IphoneCompre />
      <IphonePartner></IphonePartner>
    </div>
  )
}

export default memo(MacComponent)
