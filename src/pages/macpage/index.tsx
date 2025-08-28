import type { FC, ReactNode } from 'react'
import { Container } from './style'
import FootBar from '../../components/footbar'
import Footer from '../../components/footer'
import MacTopBar from '../../components/maccomponents/mactopbar'
import MacIntro from '../../components/maccomponents/macintro'
import MacComponent from '../../components/maccomponents/maccontainer'
interface Iprops {
  children?: ReactNode
}
const MacPage: FC<Iprops> = () => {
  return (
    <Container>
      <MacTopBar></MacTopBar>
      <MacIntro></MacIntro>
      <MacComponent></MacComponent>
      <Footer></Footer>
      <FootBar></FootBar>
    </Container>
  )
}
export default MacPage
