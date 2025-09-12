import type { ReactNode } from 'react'
import { Container, ProductContainer } from './style'

interface Iprops {
  children?: ReactNode
}

const ProductDetail: React.FC<Iprops> = () => {
  return (
    <>
      <Container>
        <div className="top">
          <h1>全系产品细细看</h1>
          <h3>比较各款机型 {'>'}</h3>
        </div>
        <ProductContainer>
          <div className="tab-navigation">
            <div className="tab-button">笔记本电脑</div>
            <div className="tab-button">台式电脑</div>
            <div className="tab-button">显示器</div>
          </div>
          <ProductDetail></ProductDetail>
        </ProductContainer>
      </Container>
    </>
  )
}
export default ProductDetail
