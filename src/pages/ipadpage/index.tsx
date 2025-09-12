import type { FC, ReactNode } from 'react'
import { Container } from './style'
interface Iprops {
  children?: ReactNode
}
const IpadPage: FC<Iprops> = () => {
  return <Container>IPHONEPAGE</Container>
}
export default IpadPage
