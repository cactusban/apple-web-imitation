import type { FC, ReactNode } from 'react'
import { Container } from './style'

interface Iprops {
  children?: ReactNode
}
const IpadIntro: FC<Iprops> = () => {
  return (
    <Container>
      <h1>iPad</h1>
      <div className="right">
        <h2>可点、可画、可打字，</h2>
        <h2>各种妙用集一身。</h2>
      </div>
    </Container>
  )
}
export default IpadIntro
