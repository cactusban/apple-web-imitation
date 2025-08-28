import type { FC, ReactNode } from 'react'
import { Container } from './style'

interface Iprops {
  children?: ReactNode
}
const MacIntro: FC<Iprops> = () => {
  return (
    <Container>
      <h1>Mac</h1>
      <div className="right">
        <h2>你想的出，</h2>
        <h2>Mac 助你做得到。</h2>
      </div>
    </Container>
  )
}
export default MacIntro
