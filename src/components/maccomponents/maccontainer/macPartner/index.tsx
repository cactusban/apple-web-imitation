// MacPartner.tsx
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Container, Inner } from './style'

const MacPartner: FC = () => {
  const data = [
    {
      title: 'Mac 与 iPhone',
      desc: `直接用 Mac 接听 iPhone 上的来电或回信息；
        借助 iPhone 镜像功能，在 Mac 上就能看到 iPhone 屏幕内容并进行操控；
        通用剪贴板让你能从 iPhone 拷贝图片、视频或文字，再粘贴到手边 Mac 上的其他 app 中；
        而得益于 iCloud，无论是用 iPhone 还是 Mac，你都能访问自己的文件。这样的精妙配合举不胜举。`,
      img: 'https://www.apple.com.cn/assets-www/zh_CN/mac/image_accordion/xlarge/mac_iphone_241d4f9ce_2x.jpg',
    },
    {
      title: 'Mac 与 iPad',
      desc: `在 iPad 上的手绘，当即就能在 Mac 上显现；
        用 Mac 工作时，可将 iPad 当作第二块显示屏，方便参考其他资料；
        你甚至可以用 iPad 开工 Final Cut Pro 项目，再转到 Mac 上继续完成。`,
      img: 'https://www.apple.com.cn/assets-www/zh_CN/mac/image_accordion/xlarge/mac_ipad_668f8a65c_2x.jpg',
    },
    {
      title: 'Mac 与 Apple Watch',
      desc: `戴着 Apple Watch 并启用了自动解锁功能时，
        可自动登录你的 Mac，无需再输入密码。`,
      img: 'https://www.apple.com.cn/assets-www/zh_CN/mac/image_accordion/xlarge/mac_watch_65bf4c67b_2x.jpg',
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [fade, setFade] = useState(false)
  const setActive = (index: number) => {
    if (index === activeIndex) return
    setFade(true)
    setTimeout(() => {
      setActiveIndex(index)
      setFade(false)
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
              <div className="ts">
                {' '}
                <div key={index}>
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
                src={data[activeIndex]?.img}
                alt=""
                className={fade ? 'fadeout' : 'fadein'}
              />
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  )
}

export default MacPartner
