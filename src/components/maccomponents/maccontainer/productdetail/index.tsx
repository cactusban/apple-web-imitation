import type { ReactNode } from 'react'
import { Container } from './style'

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
      </Container>
    </>
  )
}
export default ProductDetail
