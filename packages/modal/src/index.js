import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Text } from '@oneloop/text'
import { Icon } from '@oneloop/icons'

export const Modal = ({ children, variant, modalBG, ...props }) => {
  return (
    <Box __css={{
      position: 'fixed',
      zIndex: '100',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {modalBG && <Box __css={{
        backgroundColor: '#485C66',
        opacity: '0.7',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
      }}></Box>}
      <Box as="modal" tx="modals" {...props} __css={{
        padding: '34px',
        maxWidth: '900px',
        minWidth: '380px !important',
        background: theme.colors.white,
        borderRadius: '16px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        boxShadow: '8px 8px 16px rgba(77, 91, 100, 0.15)',
      }} variant={variant}>
        {children}
      </Box>
    </Box>
  )
}

const ModalHeader = ({ closeIcon, variant, text, textSize, ...props }) => {
  const [justifyContent, setJustifyContent] = useState()
  const headerRef = useRef(null)

  useEffect(() => {
    setJustifyContent(headerRef.current.childElementCount > 1 ? 'space-between' : variant[0])
  }, [])

  return (
    <Flex
      as="modal"
      tx="modals"
      ref={headerRef}
      variant={variant[1]}
      __css={{
        justifyContent: justifyContent,
        alignItems: 'center',
      }}
      {...props}
    >
      <Text
        style={{
          fontWeight: '700',
          color: theme.colors.neutralGray1,
        }}
      >
        {text}
      </Text>
      {closeIcon &&
        <Icon style={{ cursor: 'pointer' }} icon='icon-cerrar' fontSize='18px' color={theme.colors.neutralGray5} onClick={closeIcon} />
      }
    </Flex>
  )
}

const ModalBody = props => (
  <Box
    {...props}
  />
)

const ModalFooter = ({ variant = 'start', ...props }) => (
  <Flex
    as="modal"
    tx="modals"
    __css={{
      justifyContent: variant,
      alignItems: 'center',
      gap: '24px',
    }}
    {...props}
  />
)

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
