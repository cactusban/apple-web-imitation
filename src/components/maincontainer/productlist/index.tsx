import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import {
  Container,
  LeftArrow,
  NewContainer,
  NewWarpper,
  RightArrow,
} from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
interface Iprops {
  children?: ReactNode
}
const ProductList: FC<Iprops> = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // 检查滚动位置，动态显示/隐藏箭头
  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      const canScroll = scrollWidth > clientWidth
      setShowLeftArrow(canScroll && scrollLeft > 0)
      setShowRightArrow(canScroll && scrollLeft < scrollWidth - clientWidth - 1) // -1 防止浮点误差
    }
  }

  // 初始化检查和监听滚动事件
  useEffect(() => {
    checkScrollPosition()
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollPosition)
      window.addEventListener('resize', checkScrollPosition) // 监听窗口大小变化
      return () => container.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -150, behavior: 'smooth' })
    }
  }
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 150, behavior: 'smooth' })
    }
  }
  return (
    <>
      <NewWarpper>
        <LeftArrow
          onClick={scrollLeft}
          className={`${showLeftArrow ? '' : 'hidden'}`}
        >
          <LeftOutlined style={{ fontWeight: 800 }} />
        </LeftArrow>

        <Container ref={containerRef}>
          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4VEpBUDFBeEhMZS9GUnNSYXdEd0hscisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazVVcFlOTkdoMWg4ZkdDS1ovMUlzcW8"
                alt=""
              />
              <div className="desc">Mac</div>
            </div>
          </NewContainer>
          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXOG9vbGw5MnhRZ3BpYVMwQTIvb2xsaDVoZlhhY1p4QWdsTjFNaGRHM3FYWW15d1FhSDJ0bkR0ZGZtUjZJNmFveFVockp1czQ4Q0pvWUU1bC9ERnl2dFE"
                alt=""
              />
              <div className="desc">iPhone</div>
            </div>
          </NewContainer>
          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg"
                alt=""
              />
              <div className="desc">iPad</div>
            </div>
          </NewContainer>
          <NewContainer>
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkNDJNVmlnVytwalkvOTJ2M1BKWUREdkh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2oxdUo4aWtyK05IRkZuWjBWbW5HM00"
                alt=""
              />
              <div className="desc">Apple Watch</div>
            </div>
          </NewContainer>
          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=VzVpanYvTldHb05iVXFhc0xveWRLM25jd0w4dXFwc1hFbWZkNm9IcUR2bytSMWt1ZUNyTGx4SjRKL1pSL0ZDeGpCeVFkSWhuN0RJazJDeHBqaFFac0hlZzcwajlwb1R2dHNlazl1dldSUGQ5RzBLTDk5c25YRG5wR2ZpUlI4RFM"
                alt=""
              />
              <div className="desc">Apple Vision Pro</div>
            </div>
          </NewContainer>
          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yNlJ5eGFhR1FVd2NNNDB0VWRUSzVCUFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFI0R1M4eFpKRTFIclV0ZHRqakVRd1k"
                alt=""
              />
              <div className="desc">AirPods</div>
            </div>
          </NewContainer>
          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFltc1ByWXViNGVYdEdGdkhJbjJoMGs"
                alt=""
              />
              <div className="desc">AirTag</div>
            </div>
          </NewContainer>

          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA"
                alt=""
              />
              <div className="desc">HomePad</div>
            </div>
          </NewContainer>
          <NewContainer>
            {' '}
            <div className="content">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aUJGVHdnWkxMaklDeW9JYU5tT3FWeVBrcjVFNVdueFRVbVY3TGtiL2RjUVhQYS92MS9scmN4eTZLbFFkMHVzTVhuL2FLN3hwSUJhbzdFUHltVU1ldnQ"
                alt=""
              />
              <div className="desc">配件</div>
            </div>
          </NewContainer>
        </Container>
        <RightArrow
          className={`${showRightArrow ? '' : 'hidden'}`}
          onClick={scrollRight}
        >
          <RightOutlined />
        </RightArrow>
      </NewWarpper>
    </>
  )
}
export default ProductList
