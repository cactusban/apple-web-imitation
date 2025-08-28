import type { FC, ReactNode } from 'react'
import { Container } from './style'
import { memo, useRef } from 'react'
interface Iprops {
  children?: ReactNode
}
const MacVidieo: FC<Iprops> = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlVidieo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <Container>
      <video
        ref={videoRef}
        onClick={controlVidieo}
        className="video"
        width="1100px"
        height="100%"
        autoPlay
        loop
        muted
      >
        <source
          src="https://www.apple.com.cn/assets-www/en_WW/mac/welcome/7ba0e8f66_large_2x.mp4"
          type="video/mp4"
        />
      </video>
      <button className="playbtn" onClick={controlVidieo}>
        {' '}
        播放
      </button>
    </Container>
  )
}
export default memo(MacVidieo)
