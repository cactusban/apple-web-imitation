import type { FC, ReactNode } from 'react'
import Card from '../../card'
import New from '../../maincontainer/new'
import Specialist from '../../maincontainer/specialist'
import Reason from '../../maincontainer/reason'
import Accessory from '../../maincontainer/accessory'
import Study from '../../maincontainer/studyapple'
import Try from '../../maincontainer/try'
import { AtClick } from './style'
interface Iprops {
  children?: ReactNode
}
const cardData = [
  {
    title: '上新了，',
    subtitle: '快来认识一下这些新朋友。',
  },
  {
    title: '帮手在此，',
    subtitle: '时时待命你所需。',
  },
  {
    title: 'Apple Store 有特色，',
    subtitle: '在此选购有的是理由。',
  },
  { title: '配件。 ', subtitle: '款款必备，和你的设备绝配。' },
  {
    title: '激发无限潜力。 ',
    subtitle: '携手 Apple，教⁠与⁠学⁠都⁠更⁠上⁠层⁠楼。',
  },

  {
    title: '全方位 Apple 体验。',
    subtitle: '让 Apple 产品和服务助你大显身手。',
  },
  { title: '快速链接', subtitle: ' ' },
  { title: '', subtitle: ' ' },
]
const RowProduct: FC<Iprops> = () => {
  return (
    <>
      <Card title={cardData[0].title} subtitle={cardData[0].subtitle}></Card>
      <New></New>
      <Card title={cardData[1].title} subtitle={cardData[1].subtitle}></Card>
      <Specialist></Specialist>
      <Card title={cardData[2].title} subtitle={cardData[2].subtitle}></Card>
      <Reason></Reason>
      <Card title={cardData[3].title} subtitle={cardData[3].subtitle}></Card>
      <Accessory></Accessory>
      <Card title={cardData[4].title} subtitle={cardData[4].subtitle}></Card>
      <Study></Study>
      <Card title={cardData[5].title} subtitle={cardData[5].subtitle}></Card>
      <Try></Try>
      <Card title={cardData[6].title} subtitle={cardData[6].subtitle}></Card>
      <AtClick>
        <div className="content">
          {' '}
          <button>查找零售店↗</button>
          <button>订单状态↗</button>
          <button>购买帮助↗</button>
          <button>退货↗</button>
          <button>你的收藏↗</button>
        </div>
      </AtClick>
    </>
  )
}
export default RowProduct
