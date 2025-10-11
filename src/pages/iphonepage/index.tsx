import { lazy, memo, type FC, type ReactNode } from 'react'
const IphoneIntro = lazy(
  () => import('../../components/iphonecomponents/iphoneintro')
)
const IphoneTopBar = lazy(
  () => import('../../components/iphonecomponents/iphonetopbar')
)
const IphoneComponent = lazy(
  () => import('../../components/iphonecomponents/iphonecontainer')
)
const FootBar = lazy(() => import('../../components/footbar'))
const Footer = lazy(() => import('../../components/footer'))
interface Iprops {
  children?: ReactNode
}
const IphonePage: FC<Iprops> = () => {
  return (
    <>
      {' '}
      <IphoneIntro></IphoneIntro>
      <IphoneTopBar></IphoneTopBar>
      <IphoneComponent></IphoneComponent>
      <Footer></Footer>
      <FootBar></FootBar>
    </>
  )
}
export default memo(IphonePage)
