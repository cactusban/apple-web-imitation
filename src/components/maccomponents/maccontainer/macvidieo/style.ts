import styled from 'styled-components'

export const ContainerStyle = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

interface VideoScale {
  videoScale?: number
  videoBorderRadius?: number
}
export const VideoContainerStyle = styled.div<VideoScale>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  transform: scale(${(props) => props.videoScale || 1});
  width: 100vw;

  .videostyle {
    cursor: pointer;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${(props) => props.videoBorderRadius || '0px'}px;
  }
`

interface PlayBtnProps {
  playBtnPosition?: {
    x?: number
    y?: number
  }
}
export const PlayBtnStyle = styled.div<PlayBtnProps>`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;

  justify-content: center;
  z-index: 100;
  left: ${(props) => props.playBtnPosition?.x ?? 90}%;
  top: ${(props) => props.playBtnPosition?.y ?? 20}%;
  h1 {
    font-size: 30px;
    justify-content: center;
    align-items: center;
  }
`
