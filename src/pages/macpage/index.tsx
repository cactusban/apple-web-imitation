import { lazy, type FC, type ReactNode } from 'react'
const FootBar = lazy(() => import('../../components/footbar'))
const Footer = lazy(() => import('../../components/footer'))
const MacTopBar = lazy(() => import('../../components/maccomponents/mactopbar'))
const MacIntro = lazy(() => import('../../components/maccomponents/macintro'))
const MacComponent = lazy(
  () => import('../../components/maccomponents/maccontainer')
)

interface Iprops {
  children?: ReactNode
}
const MacPage: FC<Iprops> = () => {
  return (
    <>
      <MacTopBar></MacTopBar>
      <MacIntro></MacIntro>
      <MacComponent></MacComponent>
      <Footer></Footer>
      <FootBar></FootBar>
    </>
  )
}
export default MacPage
