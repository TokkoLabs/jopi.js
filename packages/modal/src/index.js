import React from 'react'
import { Box } from '@oneloop/box'
import '../styles/styles.css'
import '@oneloop/theme/styles/globals.css'
import { ModalHeader } from '../components/header'
import { ModalBody } from '../components/body'
import { ModalFooter } from '../components/footer'

export const Modal = ({ children, modalPosition, modalBG = false, modalShadow = false, ...props }) => {
  const ModalPosition = {
    top: 'modalPositionTop',
    bottom: 'modalPositionBottom',
  }

  return (
    <Box className='modalContainer'>
      {modalBG && <Box className='modalBG'></Box>}
      <Box {...props} className={`modalComponent ${ModalPosition[modalPosition] || ''} ${modalShadow && 'modalShadow'}`}>
        {children}
      </Box>
    </Box>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
