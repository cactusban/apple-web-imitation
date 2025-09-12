import React, { useEffect } from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalTitle,
  ModalText,
  ModalActions,
  CloseModalButton,
} from './style.ts'
interface ModalProps {
  visible: boolean
  onClose: () => void
  selectedItem?: string | null
  selectedImage?: string | null
  selectedDesc?: string | null
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  selectedItem,
  selectedImage,
  selectedDesc,
}) => {
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

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        {selectedImage && (
          <ModalImage src={selectedImage} alt="Modal content" />
        )}
        <ModalTitle>{selectedItem ? ` ${selectedItem}` : ''}</ModalTitle>
        <ModalText>{selectedDesc ? `${selectedDesc}` : ''}</ModalText>
        <ModalActions>
          <CloseModalButton onClick={onClose}>×</CloseModalButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
