// Tips.tsx
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'
import { CarouselWrapper } from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useRef } from 'react'

const Tips = () => {
  const carousel = useRef<CarouselRef>(null)

  const goNext = () => {
    carousel.current?.next()
  }

  const goPrev = () => {
    carousel.current?.prev()
  }

  return (
    <CarouselWrapper>
      <LeftOutlined className="anticon" onClick={goPrev} />

      <Carousel
        className="carousel"
        ref={carousel}
        dots={false}
        arrows={false}
        infinite={true}
      >
        <div className="carousel-content">
          <h3>
            指定产品享国家补贴，至高省 RMB 2000。仅限 Apple Store 在线商店
            (北京收货地址) 及零售店 (上海)∇。在线商店还可享 24 个月免息分期²。
            <a href=""> 进一步了解 &gt;</a>
          </h3>
        </div>
        <div className="carousel-content">
          <h3>
            通过花呗或指定银行最长可享 24 个月免息分期。
            <a href="">进一步了解 &gt;</a>
          </h3>
        </div>
      </Carousel>
      <RightOutlined className="anticon" onClick={goNext} />
    </CarouselWrapper>
  )
}

export default Tips
