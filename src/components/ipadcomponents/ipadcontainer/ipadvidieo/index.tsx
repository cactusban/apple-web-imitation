import type { FC, ReactNode } from 'react'
import { ContainerStyle, PlayBtnStyle, VideoContainerStyle } from './style'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
interface Iprops {
  children?: ReactNode
}
const IpadVidieo: FC<Iprops> = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [videoScale, setVideoScale] = useState(1)
  const [videoBorderRadius, setVideoBorderRadius] = useState(0)
  const [playBtnPosition, setPlayBtnPosition] = useState({ x: 90, y: 10 })

  const animationFrameId = useRef<number | null>(null)
  const lastScrollTime = useRef<number>(0)
  // 控制视频播放/暂停
  const controlVideo = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [])

  // 懒加载 - 监听元素是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2, // 当元素10%进入视口时触发
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // 滚动效果 - 视频缩放和播放按钮位置
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // 计算容器在视口中的位置
      const containerTop = rect.top
      const containerBottom = rect.bottom
      const containerHeight = rect.height
      // 当容器完全在视口中时
      if (containerTop >= 0 && containerBottom <= windowHeight) {
        // 视频占100vw
        setVideoScale(1)
        setVideoBorderRadius(50)
        setPlayBtnPosition({ x: 90, y: 10 })
      }
      // 当容器部分或完全离开视口时
      else if (containerTop < 0 || containerBottom > windowHeight) {
        // 计算滚动进度 (0-1)
        let progress = 0

        if (containerTop < 0) {
          // 向下滚动
          progress = Math.min(Math.abs(containerTop) / containerHeight, 1)
        }

        // 视频缩放从100vw到80vw (scale从1到0.8)
        const scale = 1 - progress * 0.2
        setVideoScale(Math.max(scale, 0.9))
        setVideoBorderRadius(progress * 100)
        // 播放按钮从右上角移动到右下角
        const btnX = 90 // X轴保持在右侧
        const btnY = 10 + progress * 80 // Y轴从10%移动到90%
        setPlayBtnPosition({
          x: btnX,
          y: Math.min(btnY, 90),
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始化

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ContainerStyle ref={containerRef}>
      <VideoContainerStyle
        videoScale={videoScale}
        videoBorderRadius={videoBorderRadius}
      >
        {isVisible && (
          <video
            ref={videoRef}
            onClick={controlVideo}
            autoPlay
            loop
            muted
            playsInline
            className="videostyle"
          >
            <source
              src="https://www.apple.com.cn/assets-www/en_WW/ipad/welcome/4e825557d_large_2x.mp4"
              type="video/mp4"
            />
            您的浏览器不支持视频播放。
          </video>
        )}

        {/* 播放按钮 */}
        <PlayBtnStyle playBtnPosition={playBtnPosition} onClick={controlVideo}>
          <h1>{isPlaying ? '❚❚' : '▶'}</h1>
        </PlayBtnStyle>
      </VideoContainerStyle>
    </ContainerStyle>
  )
}
export default memo(IpadVidieo)
