import type { ReactNode } from 'react'
import { Container } from './style'

interface Iprops {
  children?: ReactNode
}
const MacCard: React.FC<Iprops> = () => {
  return (
    <Container>
      <h1>高校生用 Mac</h1>
      <div className="imagebg">
        {' '}
        <div className="text-overlay">
          <h2>学什么专业， Mac 都专业。</h2>
          <button className="btn">进一步了解</button>
        </div>
        <img
          src="https://www.apple.com.cn/mac/college-students/images/campaign/hero_mac_student__b14mk6idt8xe_large_2x.jpg"
          alt=""
        />
      </div>
    </Container>
  )
}
export default MacCard
