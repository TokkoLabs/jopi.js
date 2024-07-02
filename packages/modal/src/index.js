/* eslint-disable multiline-ternary */
import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Text } from '@oneloop/text'
import { Icon } from '@oneloop/icons'

export const Modal = ({
  children,
  variant,
  modalBG,
  blockScroll = false,
  closeModal = false,
  scrollHeight = '600px',
  fixedCLoseBtn = false,
  ...props
}) => {
  useEffect(() => {
    if (blockScroll) {
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = 'auto')
    }
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      closeModal()
    }
  }

  useEffect(() => {
    if (closeModal) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Box
      __css={{
        position: 'fixed',
        zIndex: '1000',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {modalBG && (
        <Box
          onClick={closeModal || undefined}
          __css={{
            backgroundColor: '#485C66',
            opacity: '0.7',
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: '-1',
          }}
        ></Box>
      )}
      <Box
        as="div"
        tx="modals"
        {...props}
        __css={{
          position: 'relative',
          maxWidth: '900px',
          minWidth: '380px !important',
          height: `${scrollHeight}`,
          background: theme.colors.white,
          borderRadius: '16px',
          boxSizing: 'border-box',
          boxShadow: '8px 8px 16px rgba(77, 91, 100, 0.15)',
        }}
        variant={variant}
      >
        {fixedCLoseBtn && (
          <Box
            onClick={closeModal}
            __css={{
              width: '24px',
              height: '24px',
              backgroundColor: '#FFF',
              position: 'absolute',
              borderRadius: '50%',
              top: '-7px',
              right: '-7px',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              boxShadow: '4px 4px 12px 0px rgba(87, 95, 99, 0.25)',
              zIndex: '1000',
            }}
          >
            <Icon
              icon="icon-cerrar"
              fontSize="12px"
              color={theme.colors.neutralGray1}
            />
          </Box>
        )}
        <Box
          __css={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            height: `${scrollHeight}`,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

const ModalHeader = ({ closeIcon, variant, text, textSize, ...props }) => {
  const [justifyContent, setJustifyContent] = useState()
  const headerRef = useRef(null)

  useEffect(() => {
    setJustifyContent(
      headerRef.current.childElementCount > 1 ? 'space-between' : variant[0]
    )
  }, [])

  return (
    <Flex
      as="div"
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
      {closeIcon && (
        <Icon
          style={{ cursor: 'pointer' }}
          icon="icon-cerrar"
          fontSize="18px"
          color={theme.colors.neutralGray5}
          onClick={closeIcon}
        />
      )}
    </Flex>
  )
}

const ModalBody = (props) => <Box {...props} />

const ModalFooter = ({ variant = 'start', ...props }) => (
  <Flex
    as="div"
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
