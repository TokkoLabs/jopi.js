import React from 'react'
import ReactDOM from 'react-dom'
import { Box, Flex } from '@oneloop/box'

export const Modal = ({ children, ...props }) => {
  return ReactDOM.createPortal(
    <Box
      __css={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        bg: 'rgba(4, 4, 4, 0.79)',
      }}
    >
      <Box
        {...props}
        __css={{
          margin: '40px auto 0px auto',
          width: '690px',
          height: 'auto',
          bg: 'neutral.1',
          borderRadius: '9px',
        }}
      >
        {children}
      </Box>
    </Box>,
    document.body
  )
}

const ModalHeader = props => (
  <Flex {...props} __css={{ p: '10px', justifyContent: 'space-between' }} />
)
const ModalBody = props => (
  <Box
    {...props}
    __css={{
      height: '200px',
      overflow: 'auto',
      margin: '4px 0px 4px 0px',
      padding: '10px',
    }}
  />
)
const ModalFooter = props => (
  <Flex
    {...props}
    __css={{
      textAlign: 'center',
      borderTop: '1px solid #c4c4c4',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
    }}
  />
)

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
