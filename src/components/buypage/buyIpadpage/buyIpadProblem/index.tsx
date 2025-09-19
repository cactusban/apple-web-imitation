import { useState, type FC, type ReactNode } from 'react'
import { Container } from './style'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
interface Iprops {
  children?: ReactNode
}
interface FAQItem {
  id: number
  question: string
  answer: string
}
const IpadAirProblemList: FAQItem[] = [
  {
    id: 1,
    question: '哪款 Apple Pencil 适用于这款 iPad？',
    answer:
      'Apple Pencil Pro 和 Apple Pencil (USB-C) 均兼容这款 iPad Air。\n Apple Pencil Pro 支持无线配对，并可通过磁力吸附在设备上，便于充电和收纳。\n Apple Pencil (USB-C) 通过 USB-C 充电线配对，并可通过磁力吸附在设备上，便于收纳。\n',
  },
  {
    id: 2,
    question: '哪款 键盘 适用于这款 iPad？',
    answer: '适用于 iPad Air 的妙控键盘兼容这款 iPad。\n也可选择第三方键盘。',
  },
  {
    id: 3,
    question: 'eSIM 是什么？',
    answer:
      'eSIM 是一种数码 SIM 卡，让你无需再使用实体 SIM 卡。你能在线快速转移已有的蜂窝网络数据计划或开通新计划，还能在一部设备上存储多个蜂窝网络数据计划 (8 个以上，取决于运营商)。而且 eSIM 的安全性极高：当你的 iPad 丢失或被盗时，它不会像实体 SIM 卡那样被人轻易移除。只需简单几步做好设置，你便可以保持连线和上网浏览。进一步了解 eSIM。** 并非所有运营商都支持 eSIM。请联系你的运营商了解更多详情。eSIM 技术适用于 iPad Pro (M4)、11 英寸 iPad Pro (第一代至第四代)、12.9 英寸 iPad Pro (第三代至第六代)、iPad Air (M2 和 M3)、iPad Air (第三代至第五代)、iPad (A16)、iPad (第七代及后续机型)、iPad mini (A17 Pro) 和 iPad mini (第五代和第六代)。在中国大陆，有关 13 英寸 iPad Pro (M4) 型号 A3007、11 英寸 iPad Pro (M4) 型号 A3006、13 英寸 iPad Air (M3) 型号 A3271、11 英寸 iPad Air (M3) 型号 A3270、iPad mini (A17 Pro) 型号 A2996 和 iPad (A16) 型号 A3356 的 eSIM 可用性，请联系中国联通了解更多详情。',
  },
  {
    id: 4,
    question: 'Apple Trade In 换购计划是如何运作的？',
    answer:
      'Apple Trade In 换购计划让你可轻松换购新 iPad，享受折抵优惠。你只需回答几个关于设备的问题。即使你的 iPad 有镌刻信息，也有可能符合折抵换购条件。我们会根据你提供的信息，给出设备预估的折抵金额*。如果你的设备不符合折抵条件，你可以免费将其回收处理。如果你在 Apple Store 零售店内接受折抵金额估价，我们将直接为你提供折抵优惠来购买新产品。如果你在线接受折抵金额估价，我们会将你的地址提供给我们的服务合作伙伴，他们会联系你并安排上门收取设备。我们收到你的折抵设备后，会有专门的团队检查设备并核实其状况。如果设备状况与你的描述相符，我们会通过你的原付款方式返还折抵金额。你也可以选择以银行转账的方式来接收折抵返款。通常情况下，在线折抵流程将在你的新设备发货后 2-3 周完成。进一步了解 Apple Trade In 换购计划',
  },
  {
    id: 5,
    question: 'AppleCare+ 服务计划可提供哪些保障？',
    answer:
      '适用于 iPad 的 AppleCare+ 服务计划可从购买该计划之日起，为 iPad、Apple Pencil 以及 Apple 品牌的 iPad 键盘提供专家技术支持以及额外硬件保修服务，包括不限次数的意外损坏保修服务，每次收取相应的服务费：对于 11 英寸 iPad Pro (M4)、13 英寸 iPad Pro (M4)、11 英寸 iPad Air (M2) 和 13 英寸 iPad Air (M2)，针对屏幕维修收取 RMB 188 的服务费，针对其他意外损坏维修收取 RMB 628 的服务费；对于其他所有 iPad 机型，针对意外损坏维修收取 RMB 368 的服务费；对于 Apple Pencil 或 Apple 品牌的 iPad 键盘，维修收取 RMB 188 的服务费。进一步了解 AppleCare+ 服务计划(在新窗口中打开) ',
  },
]
const BuyIpadPromblem: FC<Iprops> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFAQId, setOpenFAQId] = useState<number | null>(null)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setOpenFAQId(null)
    }
  }
  const toggleFAQ = (id: number) => {
    setOpenFAQId(openFAQId === id ? null : id)
  }
  return (
    <Container>
      <button onClick={toggleMenu}>
        <div className="content">
          {' '}
          <h1>常见问题解答</h1>
          {isMenuOpen ? (
            <FaChevronDown className="icon" />
          ) : (
            <FaChevronUp className="icon" />
          )}
        </div>
      </button>
      {isMenuOpen && (
        <div className="faq-list">
          {IpadAirProblemList?.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button onClick={() => toggleFAQ(faq.id)} className="btn">
                <div className="question">{faq.question}</div>
                <span
                  className={`arrow ${openFAQId === faq.id ? 'down' : 'up'}`}
                >
                  {openFAQId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openFAQId === faq.id && (
                <div
                  className={`answer ${
                    openFAQId === faq.id ? 'open' : 'close'
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Container>
  )
}
export default BuyIpadPromblem
