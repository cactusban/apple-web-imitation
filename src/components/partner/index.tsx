// MacPartner.tsx
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Container, Inner } from './style'

interface Data {
  id: string
  title: string
  desc: string
  img: string
}

interface PartnerProps {
  data: Data[]
}

const MacPartner: FC<PartnerProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)

  const setActive = (index: number) => {
    if (index === activeIndex || isTransitioning) return

    setIsTransitioning(true)

    // 先淡出
    setTimeout(() => {
      // 切换图片
      setDisplayIndex(index)
      setActiveIndex(index)

      // 短暂延迟后淡入
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

export default MacPartner
