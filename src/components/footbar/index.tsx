import type { FC, ReactNode } from 'react'
import {
  Container,
  Content,
  ContentWrapper,
  FootContainer,
  Navigation,
  NavSection,
} from './style'
import { AppleFilled, RightOutlined } from '@ant-design/icons'

interface Iprops {
  children?: ReactNode
}
const FootBar: FC<Iprops> = () => {
  return (
    <Container>
      <ContentWrapper>
        {' '}
        <Content>
          <AppleFilled className="apple" />
          <RightOutlined className="right" />
          <h1>Apple Store 在线商店</h1>
        </Content>
        <Navigation>
          <NavSection>
            <h3>选购及了解</h3>
            <ul>
              <li>商店</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Vision</li>
              <li>AirPods</li>
              <li>家居</li>
              <li>AirTag</li>
              <li>配件</li>
              <li>App Store 充值卡</li>
              <h3>Apple 钱包</h3>
              <ul>
                <li>Apple Pay</li>
              </ul>
            </ul>
          </NavSection>
          <NavSection>
            <h3>账户</h3>
            <ul>
              <li>管理你的 Apple 账户</li>
              <li>Apple Store 账户</li>
              <li>iCloud.com</li>
            </ul>
            <h3>娱乐</h3>
            <ul>
              <li>Apple Music</li>
              <li>Apple 播客</li>
              <li>App Store</li>
            </ul>
          </NavSection>
          <NavSection>
            <h3>Apple Store 商店</h3>
            <ul>
              <li>查找零售店</li>
              <li>Genius Bar 天才吧</li>
              <li>Today at Apple</li>
              <li>Apple 夏令营</li>
              <li>Field Trip 课外活动</li>
              <li>Apple Store App</li>
              <li>翻新和优惠</li>
              <li>分期付款</li>
              <li>Apple Trade In 换购计划</li>
              <li>订单状态</li>
              <li>选购帮助</li>
            </ul>
          </NavSection>
          <NavSection>
            <h3>商务应用</h3>
            <ul>
              <li>Apple 与商务</li>
              <li>商务选购</li>
            </ul>
            <h3>教育应用</h3>
            <ul>
              <li>Apple 与教育</li>
              <li>高校师生选购</li>
            </ul>
          </NavSection>
        </Navigation>
        <h1 className="copyright">
          更多选购方式：
          <a
            href="https://www.apple.com.cn/retail/"
            style={{ color: 'rgb(0,102,204)', textDecoration: 'underline' }}
          >
            查找你附近的 Apple Store 零售店
          </a>
          及
          <a
            href="https://locate.apple.com/cn/zh"
            style={{ color: 'rgb(0,102,204)', textDecoration: 'underline' }}
          >
            更多门店，
          </a>
          或者致电 400-666-8800。
        </h1>
      </ContentWrapper>
      <FootContainer>
        <h1>Copyright © 2025 Apple Inc. 保留所有权利。</h1>
      </FootContainer>
    </Container>
  )
}
export default FootBar
