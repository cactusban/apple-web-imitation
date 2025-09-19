import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import Tips from '../../shopcomponents/tips'
import {
  BuyDetail,
  Compare,
  Container,
  ContentContainer,
  Package,
} from './style'
import Footer from '../../footer'
import FootBar from '../../footbar'
import { Carousel } from 'antd'
import BuyIpadPromblem from './buyIpadProblem'
import { Top } from '../buyTopBar/style'
import BuyTopBar from '../buyTopBar'
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
  const [size, setSize] = useState(0)
  const [color, setColor] = useState('')
  const [visible, setVisible] = useState(false)

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
  useEffect(() => {
    const handleScroll = () => {
      // 模拟滚动到BuyDetail组件时显示TopBar
      const scrollPosition = window.scrollY
      setVisible(scrollPosition > 200 && scrollPosition < 850)
      if (scrollPosition > 850) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const nextSectioncolorraf = useRef<HTMLDivElement>(null)
  const changeSize = (a: number) => {
    if (size === a) {
      setSize(0)
    } else {
      setSize(a)
      setTimeout(() => {
        if (nextSectioncolorraf.current) {
          nextSectioncolorraf.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    }
  }
  const nextSectionramraf = useRef<HTMLDivElement>(null)
  const changeColor = (a: string) => {
    if (color === a) {
      setColor('0')
    } else {
      setColor(a)
      setTimeout(() => {
        if (nextSectionramraf.current) {
          nextSectionramraf.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    }
  }
  const nextSectionwebraf = useRef<HTMLDivElement>(null)
  const [ram, setRam] = useState('0')
  const changeRam = (a: string) => {
    if (ram === a) {
      setRam('0')
    } else {
      setRam(a)
      setTimeout(() => {
        if (nextSectionwebraf.current) {
          nextSectionwebraf.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    }
  }
  const [web, setweb] = useState('0')
  const changeWeb = (a: string) => {
    if (ram === a) {
      setweb('0')
    } else {
      setweb(a)
    }
  }
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
        <BuyTopBar name="ipad Air" price={9999} isVisible={visible}></BuyTopBar>
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
              <div
                className={`content ${size === 11 ? 'active' : ''}`}
                onClick={() => changeSize(11)}
              >
                <div className="lefttype">11英寸机型</div>
                <div className="righttype">
                  <h2>RMB 1466月起或</h2>
                  <h2>RMB 4399起</h2>
                </div>
              </div>
              <div
                className={`content ${size === 13 ? 'active' : ''}`}
                onClick={() => changeSize(13)}
              >
                <div className="lefttype">13英寸机型</div>
                <div className="righttype">
                  <h2>RMB 2033月起或</h2>
                  <h2>RMB 6099起</h2>
                </div>
              </div>
            </div>
            <div ref={nextSectioncolorraf}></div>
            <h1>外观： 选择你喜欢的颜色。</h1>
            <div className="color">
              <div
                className={`colordesc ${color === 'spacegray' ? 'active' : ''}`}
                onClick={() => changeColor('spacegray')}
              >
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-space-gray-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmM0wza2p0WU43T3RXMHpWelJ0Z1ljWjhGb3BKNDVIeWJsQVdTWDFMQ0FXbm15d1FhSDJ0bkR0ZGZtUjZJNmFveFNQYlZ5WTdMK0prTmVPK2lqSWFURGc"
                  alt=""
                />
                <h3>深空灰色</h3>
              </div>
              <div
                className={`colordesc ${color === 'blue' ? 'active' : ''}`}
                onClick={() => changeColor('blue')}
              >
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-blue-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmNExwdHdOOFZTdDRKVnFQblBWUGhlNTF3LzRNdUJCYTB0TG9zaC81Y25RMnkwbzNOdlpXZndGQ0tadDF3TW5BQmxQQkNONkJIOE1iRjR6U3lUZ3F2L28"
                  alt=""
                />
                <h3>蓝色</h3>
              </div>

              <div
                className={`colordesc ${color === 'purple' ? 'active' : ''}`}
                onClick={() => changeColor('purple')}
              >
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-purple-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmdzFpK1lBcFh3bnZsSkY5RURKUVB4VzV6OEVURmVLZnVoTVhhY29UaDNjZXZiZnVuR3ZTSkRob1BrVGFpRG00T201R3dpZE5CYkpzN3hjNzBTcU10L1k"
                  alt=""
                />
                <h3>紫色</h3>
              </div>
              <div
                className={`colordesc ${color === 'silver' ? 'active' : ''}`}
                onClick={() => changeColor('silver')}
              >
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-starlight-2024?wid=208&amp;hei=208&amp;fmt=png-alpha&amp;.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmd1JUbjBDblc4NzFacnp1WkdybHhSeEtZOXNpMGxwZituTHFUckNtNFA0QTAzOVFHb3N0MkVmS01ZcFh0d1Y4R3A0aVYzRUNPUUUrUmJXMXRSemZXY1k"
                  alt=""
                />
                <h3>星光色</h3>
              </div>
            </div>
            <div ref={nextSectionramraf}></div>
            <div className="ram">
              <h1>存储容量： 选择你需要的存储空间。</h1>
              <div
                className={`ramdesc ${ram === '64GB' ? 'active' : ''}`}
                onClick={() => changeRam('128GB')}
              >
                <h2>128GB</h2>
                <h3>RMB 1466/月起或</h3>
                <h3>RMB 4399起</h3>
              </div>
              <div
                className={`ramdesc ${ram === '256GB' ? 'active' : ''}`}
                onClick={() => changeRam('256GB')}
              >
                <h2>256GB</h2>
                <h3>RMB 1633/月起或</h3>
                <h3>RMB 4899起</h3>
              </div>
              <div
                className={`ramdesc ${ram === '512GB' ? 'active' : ''}`}
                onClick={() => changeRam('512GB')}
              >
                <h2>512GB</h2>
                <h3>RMB 2200/月起或</h3>
                <h3>RMB 6599起</h3>
              </div>
              <div
                className={`ramdesc ${ram === '1TB' ? 'active' : ''}`}
                onClick={() => changeRam('1TB')}
              >
                <h2>1TB</h2>
                <h3>RMB 2633/月起或</h3>
                <h3>RMB 7899起</h3>
              </div>
            </div>
            <div ref={nextSectionwebraf}></div>
            <div className="web">
              <h1>连接： 选择连线方式。</h1>
              <div
                className={`webdes ${web === 'wifi' ? 'active' : ''}`}
                onClick={() => changeWeb('wifi')}
              >
                <div className="lefttype">
                  <h2>无线局域网机型</h2>
                  <h3>每部 iPad 都能连接无线局域网，让你时刻连线。</h3>
                </div>
                <div className="righttype">
                  <h3>RMB 2,633/月或 RMB 7,899</h3>
                </div>
              </div>
              <div
                className={`webdes ${web === 'cellular' ? 'active' : ''}`}
                onClick={() => changeWeb('cellular')}
              >
                <div className="lefttype">
                  <h2>无线局域网 + 蜂窝网络机型</h2>
                  <h3>
                    {' '}
                    无线局域网 +
                    蜂窝网络机型让你在没有无线局域网可用时，也能连线上网。
                  </h3>
                </div>
                <div className="righttype">
                  <h3>RMB 3,066/月或 RMB 9,199 </h3>
                </div>
              </div>
            </div>
            <button
              style={{
                backgroundColor: 'rgb(62, 140, 243)',
                color: 'white',
                borderRadius: '10px',

                height: '44px',
                width: '90%',
                fontSize: '16px',
                fontWeight: '400',
                marginBottom: '40px',
                cursor: 'pointer',
              }}
            >
              继续
            </button>

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
        <Package>
          <h1>包装内容</h1>
          <div className="pic">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-witb-blue-11in-wifi-202405?wid=640&hei=680&fmt=jpeg&qlt=90&.v=Y1FabHpVdzRFSmNnZ1FXdGZOMldGVWJINXFId1UwQmFHVEFOS0h1Ryt0RFgxZnovblIzMkIyRkI3RHEzR2RkYVMwWnZwL3FIMTFsdjJkaGdCV1RvWWc4YkJIelhaQXI0V2J3SzRVSTltem5CUHlXTDIvL3dTZFJBeCtvNGwwaWE"
              alt=""
            />

            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-witb-cable-202405?wid=164&hei=680&fmt=jpeg&qlt=90&.v=RjdZUVJrN3NjSjAvd2F2N3YxNytEcEtCZXJJUE5uSmg1djMxWmlTaWRZZ0QxNEQxQ2h3SkorYmFoclZIMWdoeWdsbGZlRHV0Q3JlbHJxWXRlWjZpMmdoS0thQTExc0x1dHhhWk9GbUEreGc"
              alt=""
            />
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-witb-plug-202405_GEO_CN?wid=302&hei=678&fmt=jpeg&qlt=90&.v=cnZmdTN1bUVMT0s3eGd3Rlh2dVhQWmxxNDNkN3Zrb3NmRUZoMXVVQi9rR0F1OWk4WE1GRUtFN29NWVNYREdSQ2JGcXNRQnFCV0w3WVRjTExvdm1ic1NsUmFDZ2hLOG5nYkN3MlFNZmJQWng3elJuQlNOb1hBU2ZGc01uK0d5YTU"
              alt=""
            />
          </div>
        </Package>
        <Compare>
          <h1>iPad机型比较</h1>
          <ul>
            <li>
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-header-pro-202405?wid=392&hei=398&fmt=jpeg&qlt=90&.v=bk5Ha2llcUlIczRSRUt0WDVzK2I3aEpsdjhCN0cycWFLRklRalhsdmV1Y1k2Q3FubUg5cC93VlMzQkExanhMS3ZvdUZlR0V0VUdJSjBWaDVNVG95YkdNYVNzd1d2VDRpeVJyTW9MNWw3V28"
                alt=""
              />
              <div className="title">
                {' '}
                <h2>iPad Pro</h2>
                <h3>前沿技术 终极 iPad 体验。</h3>
                <h3>RMB 8099 起</h3>
              </div>
              <h2>13 英寸或 11 英寸</h2>
              <h3>超精视网膜 XDR 显示屏² </h3>
              <h3>ProMotion 自适应刷新率技术</h3>
              <h3>P3 广色域</h3>
              <h3>原彩显示</h3>
              <h3>抗反射涂层</h3>
              <h3>1TB 和 2TB 机型可选配纳米纹理玻璃面板</h3>
              <div className="display">
                {' '}
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-chip-m4-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5QXNCclAxbWZncEtlOVUwcU8vUDlmVTFNakRCVlEydlQ1SVd4NDl6RWdXRGJGcXNRQnFCV0w3WVRjTExvdm1ic2VuVXpYcjlKZUdQTGtITWhhMXA3S0pBU25Ob2N5dVQyQmxkN0IyWWVHdW0"
                  alt=""
                />
                <h3>M4 芯片</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-camera-pro-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5SjQ5QnkrRFZEUlFRK3F0UFpvOVgyWEtoQVV1aks0VUlqL2lLbmk0elp2czBlVjhlblYvK3B1cEVWNkpyRnNCM0dzSEtwQ1FTNG51NGJZL2hJZExnUkZRVm5sZklQazBrdG41cDM2M25nUW0"
                  alt=""
                />
                <h3>1200 万像素广角摄像头</h3>
                <h3>4K 的 ProRes 视频拍摄</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-front-cam-landscape-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5TWNmNXRLSUFPUjB5Y3F3MW9xVG9oRFAzdjI3MllrRE1ON21GY0N2MUpVTlBuODBIWHl1WncyVWMrbFpIb1VOWFRNZGEwYVUyTzcvZlg1UkxwTzJQS1hRaUVncVo2by94OG9JTkptNWhyQSs"
                  alt=""
                />
                <h3>横向 12MP Center Stage 摄像头</h3>
                <h3>原深感摄像头系统</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-pencil-pro-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5UGhXZlFwdmdLYlE4OGZ2eGpZRnJ2L0toQVV1aks0VUlqL2lLbmk0elp2czBlVjhlblYvK3B1cEVWNkpyRnNCM0dzSEtwQ1FTNG51NGJZL2hJZExnUkhDYmNrYWdpU21nWndGd0o3bkU4M0I"
                  alt=""
                />
                <h3>支持 Apple Pencil Pro </h3>
                <h3>支持 Apple Pencil (USB-C)</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-magickeyboard-m4-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5QU9hb1JTcG1wYWJ0bXMveGxoeGduNDg3UUlCaTZYcmFnamhGeE1FSTBpODNRbVZiTUJXR3RIbFVyZG8rQWRUbWw2UHhkQnJLVTZjaXNuR3d2OVNRZEpGVEtUQzJxcE94QjlKMGRwNW1BaGs"
                  alt=""
                />
                <h3>支持适用于 iPad Pro (M4) 的妙控键盘</h3>
              </div>
            </li>
            <li>
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-header-air-202405?wid=392&hei=398&fmt=jpeg&qlt=90&.v=bk5Ha2llcUlIczRSRUt0WDVzK2I3aEp0T1lvbEU5VzVUeFMyYUl3ZjA1RVk2Q3FubUg5cC93VlMzQkExanhMS3ZvdUZlR0V0VUdJSjBWaDVNVG95YkVYQ1pZa1YxMjRtaDB1ODB3aGhQRXM"
                alt=""
              />
              <div className="title">
                {' '}
                <h2>iPad Air</h2>
                <h3>重量级实力，轻装上阵。</h3>
                <h3>RMB 4399 起</h3>
              </div>
              <h2>13 英寸或 11 英寸</h2>
              <h3>Liquid 视网膜显示屏² </h3>
              <h3>-</h3>
              <h3>P3 广色域</h3>
              <h3>原彩显示</h3>
              <h3>抗反射涂层</h3>
              <h3>-</h3>
              <div className="display">
                {' '}
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-chip-m4-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5QXNCclAxbWZncEtlOVUwcU8vUDlmVTFNakRCVlEydlQ1SVd4NDl6RWdXRGJGcXNRQnFCV0w3WVRjTExvdm1ic2VuVXpYcjlKZUdQTGtITWhhMXA3S0pBU25Ob2N5dVQyQmxkN0IyWWVHdW0"
                  alt=""
                />
                <h3>M3 芯片</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-camera-air-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5T3RmQkh3ektWbTZXak5nd3FnU2N4N0toQVV1aks0VUlqL2lLbmk0elp2czBlVjhlblYvK3B1cEVWNkpyRnNCM0dzSEtwQ1FTNG51NGJZL2hJZExnUkVyVEhQb1ltcEwxNHZ5N250bjZxcjc"
                  alt=""
                />
                <h3>1200 万像素广角摄像头</h3>
                <h3>4K 视频</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-front-cam-landscape-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5TWNmNXRLSUFPUjB5Y3F3MW9xVG9oRFAzdjI3MllrRE1ON21GY0N2MUpVTlBuODBIWHl1WncyVWMrbFpIb1VOWFRNZGEwYVUyTzcvZlg1UkxwTzJQS1hRaUVncVo2by94OG9JTkptNWhyQSs"
                  alt=""
                />
                <h3>横向 12MP Center Stage 摄像头</h3>
                <h3>-</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-pencil-pro-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5UGhXZlFwdmdLYlE4OGZ2eGpZRnJ2L0toQVV1aks0VUlqL2lLbmk0elp2czBlVjhlblYvK3B1cEVWNkpyRnNCM0dzSEtwQ1FTNG51NGJZL2hJZExnUkhDYmNrYWdpU21nWndGd0o3bkU4M0I"
                  alt=""
                />
                <h3>支持 Apple Pencil Pro </h3>
                <h3>支持 Apple Pencil (USB-C)</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-magickeyboard-m4-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5QU9hb1JTcG1wYWJ0bXMveGxoeGduNDg3UUlCaTZYcmFnamhGeE1FSTBpODNRbVZiTUJXR3RIbFVyZG8rQWRUbWw2UHhkQnJLVTZjaXNuR3d2OVNRZEpGVEtUQzJxcE94QjlKMGRwNW1BaGs"
                  alt=""
                />
                <h3>支持适用于 iPad Air 的妙控键盘</h3>
              </div>
            </li>
            <li>
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-header-202405?wid=392&hei=398&fmt=jpeg&qlt=90&.v=bk5Ha2llcUlIczRSRUt0WDVzK2I3a3d5S3MwalZ0KzJYUzlaTEovR3lnMXhrTkt5M1lJY01pMTUvUDVpZHRFdmdsbGZlRHV0Q3JlbHJxWXRlWjZpMml3YlZRdkNpUkxhVFR3RzdFZGN4NGc"
                alt=""
              />
              <div className="title">
                {' '}
                <h2>iPad</h2>
                <h3>多彩的全面屏 iPad，天天玩得转。</h3>
                <h3>RMB 2799 起</h3>
              </div>
              <h2>11 英寸</h2>
              <h3>Liquid 视网膜显示屏² </h3>
              <h3>-</h3>
              <h3>sRGB 色域</h3>
              <h3>原彩显示</h3>
              <h3>-</h3>
              <h3>-</h3>
              <div className="display">
                {' '}
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-chip-a16-202503?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5SjhxbnUvNU16bGNiMEViZ0J4ODB1dWh6VHJWWWNSdjhEcTVRejFjc0s0WmZaMmlMZGx5eWZpb1IrM2gwMXRuZ1RDaFRvM0EzM0RqdzJMYUdVT1JCQUV6cmdmdG5TYWJ5Ujlld2hKcGZuaGc"
                  alt=""
                />
                <h3>A16 芯片</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-camera-gen10-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5QXlRSUNvMEdPS29zYVVUSVlzTGZLMWNaVERDTytxZTJkUzkzOWk4M2lhRW5tOHliVFEyVG1POTdXcWM1S2hqaCtCdGJLVVJnYStKUXJOSnlmd3pna1Z6UjcvNWVMWjVEUVhvaEdkNUVlYWs"
                  alt=""
                />
                <h3>1200 万像素广角摄像头</h3>
                <h3>4K视频</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-front-cam-landscape-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5TWNmNXRLSUFPUjB5Y3F3MW9xVG9oRFAzdjI3MllrRE1ON21GY0N2MUpVTlBuODBIWHl1WncyVWMrbFpIb1VOWFRNZGEwYVUyTzcvZlg1UkxwTzJQS1hRaUVncVo2by94OG9JTkptNWhyQSs"
                  alt=""
                />
                <h3>横向 12MP Center Stage 摄像头</h3>
                <h3>-</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-pencil-pro-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5UGhXZlFwdmdLYlE4OGZ2eGpZRnJ2L0toQVV1aks0VUlqL2lLbmk0elp2czBlVjhlblYvK3B1cEVWNkpyRnNCM0dzSEtwQ1FTNG51NGJZL2hJZExnUkhDYmNrYWdpU21nWndGd0o3bkU4M0I"
                  alt=""
                />
                <h3>支持 Apple Pencil (USB-C)</h3>
                <h3>支持 Apple Pencil (第一代)</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-magickeyboard-m4-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5QU9hb1JTcG1wYWJ0bXMveGxoeGduNDg3UUlCaTZYcmFnamhGeE1FSTBpODNRbVZiTUJXR3RIbFVyZG8rQWRUbWw2UHhkQnJLVTZjaXNuR3d2OVNRZEpGVEtUQzJxcE94QjlKMGRwNW1BaGs"
                  alt=""
                />
                <h3>支持妙控键盘双面夹</h3>
              </div>
            </li>
            <li>
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-header-mini-202410?wid=392&hei=398&fmt=jpeg&qlt=90&.v=bk5Ha2llcUlIczRSRUt0WDVzK2I3c04vK0oyZitPeVVabFo4Uk42WnozYmV3dlpHNHJuUVlvci9PTGsyUVRENTE1UUxLT2t0cW42N3FvQzVqaGhrVVNjaW5DWXdLZlVmSTkyWkd5L1IwSXQrYWpGdS9XeFgvbS9ITnNYOEhYaG4"
                alt=""
              />
              <div className="title">
                {' '}
                <h2>iPad Mini</h2>
                <h3>全 iPad 体验，超便携设计。</h3>
                <h3>RMB 3599 起</h3>
              </div>
              <h2>8.3 英寸</h2>
              <h3>Liquid 视网膜显示屏² </h3>
              <h3>-</h3>
              <h3>P3 广色域</h3>
              <h3>原彩显示</h3>
              <h3>-</h3>
              <h3>-</h3>
              <div className="display">
                {' '}
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-chip-a17pro-202410?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5Q3p4a2EweUczZWFPT3kxLzBtNUFQc2plZFExTndpSHpsVkt3NGQ3cng4dWRvaHdjSWdTTFRjQVV5aUtVOEViN1ZuRzdKcmxRY2VLV0oyQTZyL2Nka1hIWXc5bWMxOXNlcEM2TkNaTFplcS8"
                  alt=""
                />
                <h3>A17 pro 芯片</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-camera-mini-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5T2xhaGs2cE9tazVvcVk2OHZCV3hEMmZ5OHNrTzh6U0lzWE1mRHZWOG9sTGRvaHdjSWdTTFRjQVV5aUtVOEViN2JMY0t3VVlrV0VDREpYZGtsRUhhYVRldFhOSkY4QzVPOEVCM2dRYlI4b0Y"
                  alt=""
                />
                <h3>1200 万像素广角摄像头</h3>
                <h3>4K视频</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-front-cam-top-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5RU9yMnBZOWVLUmR5QmVqL2dYVVAwM2pTTDlMTnJUaDZ1MHFYYVZYcUpwQkQrWThPakc2N1l5dGNneFZGN0o5aWE4QWIvZ1d4RXpMTHI3N0txMlQwWXE4dVVZVkJZbWdXM3BkTTRyb2hSTXg"
                  alt=""
                />
                <h3>12MP Center Stage 摄像头</h3>
                <h3>-</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-pencil-pro-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5UGhXZlFwdmdLYlE4OGZ2eGpZRnJ2L0toQVV1aks0VUlqL2lLbmk0elp2czBlVjhlblYvK3B1cEVWNkpyRnNCM0dzSEtwQ1FTNG51NGJZL2hJZExnUkhDYmNrYWdpU21nWndGd0o3bkU4M0I"
                  alt=""
                />
                <h3>支持 Apple Pencil Pro </h3>
                <h3>支持 Apple Pencil (USB-C)</h3>
              </div>
              <div className="display">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-compare-icon-keyboard-bluetooth-202405?wid=112&hei=112&fmt=jpeg&qlt=90&.v=Sm93a0RRY2htdlZqejRLMVV1WXl5T3FXenMzV0lNaUt3OG91UmYvVmtlM0J4QjVUZytUa3RyeHI0ZGZZVVRocWNTSG0vajhUS2ZEOTBzR1Bxa2xjUkFYUldRZVYxMHFkRFZrQVZuaWMwSkNUVUZ4T2dnZHNkNEc4U2dtVVpuZ1Q"
                  alt=""
                />
                <h3>支持蓝牙键盘</h3>
              </div>
            </li>
          </ul>
        </Compare>
        <BuyIpadPromblem></BuyIpadPromblem>
        <Footer></Footer>
        <FootBar></FootBar>
      </Container>
    </>
  )
}
export default BuyPage
