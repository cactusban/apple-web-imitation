import React, { useEffect, useState } from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalTitle,
  CloseButton,
  ModalHeader,
  ModalDescription,
  ProductSection,
  ProductCard,
  ProductDiscount,
  ProductGrid,
  ProductName,
  TabNavigation,
  TabButton,
} from './style'
interface ModalProps {
  visible: boolean
  onClose: () => void
  selectedItem?: string | null
  selectedImage?: string | null
  selectedDesc?: string | null
}
interface Product {
  name: string
  discount: string
}
interface ProductProps {
  ipad: Product[]
  MacBoock: Product[]
  iMac: Product[]
}
const products: ProductProps = {
  ipad: [
    { name: 'Apple Pencil Pro', discount: '(立省 RMB 899)' },
    { name: 'AirPods 4', discount: '(立省 RMB 999)' },
    {
      name: 'AirPods 4 (支持主动降噪)',
      discount: '(立省 RMB 999，实付 RMB 400)',
    },
    { name: 'AirPods Pro 3', discount: '(立省 RMB 999，实付 RMB 900)' },
    {
      name: '妙控键盘 – 适用于 11 英寸 iPad Air',
      discount: '(立省 RMB 899，实付 RMB 1,100)',
    },
    {
      name: '妙控键盘 – 适用于 13 英寸 iPad Air',
      discount: '(立省 RMB 899，实付 RMB 1,300)',
    },
    {
      name: '妙控键盘 – 适用于 11 英寸 iPad Pro',
      discount: '(立省 RMB 899，实付 RMB 1,300)',
    },
    {
      name: '妙控键盘 – 适用于 13 英寸 iPad Pro',
      discount: '(立省 RMB 899，实付 RMB 1,700)',
    },
  ],
  MacBoock: [
    {
      name: 'AirPods 4 (支持主动降噪)',
      discount: '(立省 RMB 1,399)',
    },
    { name: 'AirPods Pro 3', discount: '(立省 RMB 1,399，实付 RMB 500)' },
    { name: '妙控鼠标', discount: '(立省 RMB 549–RMB 699)' },
    { name: '妙控板', discount: '(立省 RMB 899–RMB 1,049)' },
    {
      name: '带有触控 ID 和数字小键盘的妙控键盘',
      discount: '(立省 RMB 1,249–RMB 1,399)',
    },
  ],
  iMac: [
    { name: 'AirPods 4 (支持主动降噪)', discount: '(立省 RMB 1,399)' },
    { name: 'AirPods Pro 3', discount: '(立省 RMB 1,399，实付 RMB 500)' },
  ],
}
const EducateModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  selectedItem,
  selectedImage,
  selectedDesc,
}) => {
  const [productcurrent, setProductcurrent] = useState<
    'ipad' | 'MacBoock' | 'iMac'
  >('ipad')
  // 阻止背景滚动
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [visible])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // 监听 ESC 键关闭
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (visible) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [visible, onClose])

  if (!visible) return null
  const handleProductChange = (product: 'ipad' | 'MacBoock' | 'iMac') => {
    setProductcurrent(product)
  }
  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalHeader>
          {' '}
          {selectedImage && (
            <ModalImage src={selectedImage} alt="Modal content" />
          )}
          <ModalTitle>{selectedItem ? ` ${selectedItem}` : ''}</ModalTitle>
          <ModalDescription>
            {selectedDesc ? `${selectedDesc}` : ''}
          </ModalDescription>
        </ModalHeader>
        <ProductSection>
          <TabNavigation>
            <TabButton
              className={productcurrent === 'ipad' ? 'active' : ''}
              onClick={() => handleProductChange('ipad')}
            >
              iPad
            </TabButton>
            <TabButton
              className={productcurrent === 'MacBoock' ? 'active' : ''}
              onClick={() => handleProductChange('MacBoock')}
            >
              MacBoock
            </TabButton>
            <TabButton
              className={productcurrent === 'iMac' ? 'active' : ''}
              onClick={() => handleProductChange('iMac')}
            >
              iMac
            </TabButton>
          </TabNavigation>
          <ProductGrid>
            {products[productcurrent].map((product, index) => (
              <ProductCard key={index}>
                <ProductName>{product.name}</ProductName>
                <ProductDiscount>{product.discount}</ProductDiscount>
              </ProductCard>
            ))}
          </ProductGrid>
        </ProductSection>
      </ModalContent>
    </ModalOverlay>
  )
}

export default EducateModal
