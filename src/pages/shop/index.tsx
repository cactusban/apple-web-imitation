import type { FC, ReactNode } from 'react'
import Tips from '../../components/shopcomponents/tips'
import ShopTop from '../../components/shopcomponents/shoptop'
import ProductList from '../../components/maincontainer/productlist'
import RowProduct from '../../components/shopcomponents/rowproduct'
import { Container } from './style'
import Footer from '../../components/footer'
import FootBar from '../../components/footbar'
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
export default Shop
