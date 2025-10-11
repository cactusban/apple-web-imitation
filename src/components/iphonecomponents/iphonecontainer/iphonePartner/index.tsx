import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Container, Inner } from './style'

const IphonePartner: FC = () => {
  const data = [
    {
      id: 1,
      title: 'iPhone 与 Mac',
      desc: `有 iPhone 镜像功能，在 Mac 上就能看到 iPhone 屏幕画面，还能直接进行操控，不拿起手机也照样用手机。利用连续互通功能，可直接用 Mac 接听 iPhone 上的来电或回信息。从 iPhone 拷贝图片、视频或文字，也可再粘贴到手边 Mac 上的其他 app 中。借助 iCloud，用其中哪个设备都能访问自己的文件。`,
      img: 'https://www.apple.com.cn/iphone/home/images/overview/augment/mac__gmrv6vyz8x6q_large_2x.jpg',
    },
    {
      id: 2,
      title: 'iPhone 和 Apple Watch',
      desc: `iPhone 又在跟你捉迷藏？最新的 Apple Watch 表款就能指出它所在的大致方位和距离14。控制 iPhone 自拍合影也很方便，只要站好位置，然后在 Apple Watch 上取景按快门就好。另外，用 Apple Watch 接的电话，只要点一下 iPhone，就能切换过去继续聊。`,
      img: 'https://www.apple.com.cn/iphone/home/images/overview/augment/watch__fxtwpvwdf3mi_large_2x.jpg',
    },
    {
      id: 3,
      title: 'iPhone 和 AirPods',
      desc: `在 iPhone 上轻点一下，即可轻松完成 AirPods 的设置。自适应音频这个功能你一定喜欢，它可自动调节噪声控制的程度，在各种环境和日常交互中提供出色的聆听体验。`,
      img: 'https://www.apple.com.cn/iphone/home/images/overview/augment/airpods__ehyxlx24f5g2_large_2x.jpg',
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)

  const setActive = (index: number) => {
    if (index === activeIndex || isTransitioning) return

    setIsTransitioning(true)

    setTimeout(() => {
      setDisplayIndex(index)
      setActiveIndex(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  const [inView, setInview] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInview(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (innerRef.current) observer.observe(innerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Container>
      <Inner>
        <h1>亲密好拍档</h1>
        <div
          ref={innerRef}
          className={`content ${inView ? 'slidein' : 'hidden'}`}
        >
          <div className="left">
            {data.map((item, index) => (
              <div key={item.id} className="ts">
                <div>
                  <div className="title" onClick={() => setActive(index)}>
                    {item.title}
                  </div>
                  {activeIndex === index && (
                    <div className="desc">{item.desc}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="right">
            <div className="image">
              <img
                src={data[displayIndex]?.img}
                alt=""
                className={isTransitioning ? 'fadeout' : 'fadein'}
              />
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  )
}

export default IphonePartner
