import { lazy, memo, type FC, type ReactNode } from 'react'
const Tips = lazy(() => import('../../components/shopcomponents/tips'))
const ShopTop = lazy(() => import('../../components/shopcomponents/shoptop'))
const ProductList = lazy(
  () => import('../../components/maincontainer/productlist')
)
const RowProduct = lazy(
  () => import('../../components/shopcomponents/rowproduct')
)
const Footer = lazy(() => import('../../components/footer'))
const FootBar = lazy(() => import('../../components/footbar'))
import { Container } from './style'
interface Iprops {
  children?: ReactNode
}
const Shop: FC<Iprops> = () => {
  return (
    <>
      <Container>
        <Tips></Tips>
        <ShopTop></ShopTop>
        <ProductList></ProductList>
        <RowProduct></RowProduct>
        <Footer></Footer>
        <FootBar></FootBar>
      </Container>
    </>
  )
}
export default memo(Shop)
