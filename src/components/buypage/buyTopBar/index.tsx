import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
  isVisible?: boolean
  price?: number
  name?: string
  monthly?: number
}
const BuyTopBar: FC<Iprops> = ({ name, price, monthly, isVisible }) => {
  const today = new Date()
  const sunday = new Date(today)
  sunday.setDate(today.getDate() + (7 - today.getDay()))

  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: 'white',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        boxShadow: isVisible ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          width: '100%',
          borderBottom: '1px solid #e0e0e0',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {' '}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            width: '1100px', // 设置宽度为100%
            margin: '0 auto', // 居中
          }}
        >
          <div style={{ fontSize: '23px', fontWeight: 'bold' }}>{name}</div>
          <div>
            RMB {monthly}/月 (3 期) 或 RMB {price} 起
          </div>
        </div>
        {/* 右侧配送信息 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
          }}
        >
          {/* 取货信息 */}
          <div>
            <div
              style={{
                color: '#1d1d1f',
                fontWeight: '400',
                marginBottom: '2px',
              }}
            ></div>
          </div>
        </div>
      </div>{' '}
      {/* 配送信息 */}
      <div
        style={{
          textAlign: 'center',

          height: '40px',
          lineHeight: '40px',
          display: 'flex',
          width: '1180px',
          margin: '0 auto',
          justifyContent: 'flex-end',
          fontSize: '14px',
          marginLeft: '20px',
        }}
      >
        <div style={{ marginRight: '20px' }}>Apple 今天 取货</div>
        <div
          style={{
            color: '#1d1d1f',
            marginBottom: '2px',
            fontSize: '14px',
          }}
        >
          送货至：蜀山区
          <span
            style={{
              fontSize: '14px',
              color: '#0066cc',
              textDecoration: 'none',
              cursor: 'pointer',
              marginLeft: '20px',
            }}
          >
            (了解送货日期)
          </span>
        </div>
        <div
          style={{
            marginBottom: '2px',
            marginLeft: '20px',
            fontSize: '14px',
          }}
        >
          不提供 3 小时快送服务
        </div>
        <div
          style={{
            color: '#1d1d1f',
            fontSize: '14px',
            marginLeft: '20px',
          }}
        >
          周日 {formatDate(sunday)} (免费)
        </div>
      </div>
    </div>
  )
}
export default BuyTopBar
