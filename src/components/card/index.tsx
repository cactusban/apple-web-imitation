import type { FC, ReactNode } from 'react'
import { CardContainer } from './style'

interface Iprops {
  children?: ReactNode
  title: string
  subtitle: string
}

const Card: FC<Iprops> = ({ title, subtitle }) => {
  return (
    <>
      <CardContainer>
        <div className="container">
          <h1>
            <span className="black">{title}</span>

            <span className="gray">{subtitle}</span>
          </h1>
        </div>
      </CardContainer>
    </>
  )
}
export default Card
