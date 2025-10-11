import type { FC, ReactNode } from 'react'
import { Container } from './style'

interface Iprops {
  children?: ReactNode
}
const IphoneIntro: FC<Iprops> = () => {
  return (
    <Container>
      <h1>iPhone</h1>
    </Container>
  )
}
export default IphoneIntro
