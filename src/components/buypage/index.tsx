import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import Tips from '../shopcomponents/tips'
import { BuyDetail, Container, ContentContainer } from './style'
import Footer from '../footer'
import FootBar from '../footbar'
import { Carousel } from 'antd'
interface Iprops {
  children?: ReactNode
  buyname?: string
  discount?: string
  images?: string[]
}
const BuyPage: FC<Iprops> = ({ buyname, discount, images }) => {
  const [activeSection, setActiveSection] = useState(0)
  const rightRef = useRef<HTMLDivElement>(null)
  const sections = ['type', 'color', 'ram', 'web']
  useEffect(() => {
    const handleScroll = () => {
      const container = rightRef.current
      if (!container) return
      const scrollTop = container.scrollTop
      const containerHeight = container.clientHeight
      const scrollHeight = container.scrollHeight
      const sectionHeight = scrollHeight / sections.length
      let currentSection = Math.floor(scrollTop / sectionHeight)
      if (scrollTop + containerHeight >= scrollHeight - 10) {
        currentSection = sections.length - 1
      }
      setActiveSection(
        Math.max(0, Math.min(currentSection, sections.length - 1))
      )
    }
    const container = rightRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return (
    <>
      <Container>
        <Tips></Tips>
        <ContentContainer>
          <div className="left">
            {' '}
            <div className="buyname">{buyname}购买ipadAir</div>
            <div className="buydesc">{discount}RMB 1466/月或 4399</div>
          </div>
          <div className="right">
            <div className="discount">折扣优惠RMB 225-RMB 6100 ＋</div>
            <div className="discount">可享最长 3 个月分期服务↗</div>
          </div>
        </ContentContainer>
        <BuyDetail>
          <div className="left">
            {' '}
            <Carousel className="carousel">
              <div className="images">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-model-unselect-gallery-1-202405?wid=5120&hei=2880&fmt=webp&qlt=90&.v=azZtTlRzREZ3NzhWaHRDQW5YeUV0UEs0TkxxOFYxN2dtSHJMdW5sNDFVK3MxV2hYTmJkSS9ZdDBsUEkxd0lnTE9UVDVQbVhkcDIxQlRzeDZXVVpQSzYyL0ZSTzZrMWlpUU5CQlpuNHNUZys4amtPUS9xbkZadzF0WklDMm5nNTU&traceId=1"
                  alt=""
                />
              </div>
              <div className="images">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-model-unselect-gallery-2-202405?wid=5120&hei=2880&fmt=webp&qlt=90&.v=azZtTlRzREZ3NzhWaHRDQW5YeUV0UEs0TkxxOFYxN2dtSHJMdW5sNDFVK1p4MGdFOVMzRG8xZXVzVEN1YWdzY09UVDVQbVhkcDIxQlRzeDZXVVpQSzYyL0ZSTzZrMWlpUU5CQlpuNHNUZzhPbGNFY1R3VUMzZXoxd1VwVW00UE8&traceId=1"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
          <div className="right" ref={rightRef}>
            <div className="type">
              <h1>机型： 选择尺寸。</h1>
              <div className="content">
                <div className="lefttype">11英寸机型</div>
                <div className="righttype">
                  <h2>RMB 1466月起或</h2>
                  <h2>RMB 4399起</h2>
                </div>
              </div>
              <div className="content">
                <div className="lefttype">13英寸机型</div>
                <div className="righttype">
                  <h2>RMB 2033月起或</h2>
                  <h2>RMB 6099起</h2>
                </div>
              </div>
            </div>
            <h1>外观： 选择你喜欢的颜色。</h1>
            <div className="color">
              <div className="colordesc">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-space-gray-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmM0wza2p0WU43T3RXMHpWelJ0Z1ljWjhGb3BKNDVIeWJsQVdTWDFMQ0FXbm15d1FhSDJ0bkR0ZGZtUjZJNmFveFNQYlZ5WTdMK0prTmVPK2lqSWFURGc"
                  alt=""
                />
                <h3>深空灰色</h3>
              </div>
              <div className="colordesc">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-blue-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmNExwdHdOOFZTdDRKVnFQblBWUGhlNTF3LzRNdUJCYTB0TG9zaC81Y25RMnkwbzNOdlpXZndGQ0tadDF3TW5BQmxQQkNONkJIOE1iRjR6U3lUZ3F2L28"
                  alt=""
                />
                <h3>蓝色</h3>
              </div>

              <div className="colordesc">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-purple-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmdzFpK1lBcFh3bnZsSkY5RURKUVB4VzV6OEVURmVLZnVoTVhhY29UaDNjZXZiZnVuR3ZTSkRob1BrVGFpRG00T201R3dpZE5CYkpzN3hjNzBTcU10L1k"
                  alt=""
                />
                <h3>紫色</h3>
              </div>
              <div className="colordesc">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-starlight-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmd1JUbjBDblc4NzFacnp1WkdybHhSeEtZOXNpMGxwZituTHFUckNtNFA0QTAzOVFHb3N0MkVmS01ZcFh0d1Y4R3A0aVYzRUNPUUUrUmJXMXRSemZXY1k"
                  alt=""
                />
                <h3>星光色</h3>
              </div>
            </div>
            <div className="ram">
              <h1>存储容量： 选择你需要的存储空间。</h1>
              <div className="ramdesc">
                <h2>128GB</h2>
                <h3>RMB 1466/月起或</h3>
                <h3>RMB 4399起</h3>
              </div>
              <div className="ramdesc">
                <h2>256GB</h2>
                <h3>RMB 1633/月起或</h3>
                <h3>RMB 4899起</h3>
              </div>
              <div className="ramdesc">
                <h2>512GB</h2>
                <h3>RMB 2200/月起或</h3>
                <h3>RMB 6599起</h3>
              </div>
              <div className="ramdesc">
                <h2>1TB</h2>
                <h3>RMB 2633/月起或</h3>
                <h3>RMB 7899起</h3>
              </div>
            </div>
            <div className="web"></div>
            <div className="scroll-indicator">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`indicator-dot ${
                    index === activeSection ? 'active' : ''
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </BuyDetail>
        <Footer></Footer>
        <FootBar></FootBar>
      </Container>
    </>
  )
}
export default BuyPage
