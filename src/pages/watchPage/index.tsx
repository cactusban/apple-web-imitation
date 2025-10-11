import { lazy, type FC, type ReactNode } from 'react'
import { Container } from './style'
const IpadTopBar = lazy(
  () => import('../../components/ipadcomponents/ipadtopbar')
)
const IpadIntro = lazy(
  () => import('../../components/ipadcomponents/ipadintro')
)

const IpadComponent = lazy(
  () => import('../../components/ipadcomponents/ipadcontainer')
)
const FootBar = lazy(() => import('../../components/footbar'))
const Footer = lazy(() => import('../../components/footer'))
interface Iprops {
  children?: ReactNode
}
const WatchPage: FC<Iprops> = () => {
  return (
    <>
      {' '}
      <IpadTopBar></IpadTopBar>
      <IpadIntro></IpadIntro>
      <IpadComponent></IpadComponent>
      <Footer></Footer>
      <FootBar></FootBar>
    </>
  )
}
export default WatchPage
