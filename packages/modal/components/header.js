import React, { useEffect, useRef, useState } from 'react'
import { Flex } from '@oneloop/box'
import PropTypes from 'prop-types'
import { Text } from '@oneloop/text'
import { Icon } from '@oneloop/icons'
import theme from '@oneloop/theme'

export const ModalHeader = ({ closeIcon, headerPosition = 'start', text, textSize, ...props }) => {
  const [justifyContent, setJustifyContent] = useState()
  const headerRef = useRef(null)

  useEffect(() => {
    setJustifyContent(headerRef.current.childElementCount > 1 ? 'space-between' : headerPosition)
  }, [])

  return (
    <Flex ref={headerRef} className={`modalHeader ${textSize === 'l' ? 'textL' : 'textSm'}`} {...props} __css={{ justifyContent: justifyContent }}>
      <Text className={'modalTitleText'}>{text}</Text>
      {closeIcon && <Icon icon='icon-cerrar' fontSize='18px' color={theme.colors.neutralGray5} onClick={closeIcon} />}
    </Flex>
  )
}

ModalHeader.propTypes = {
  headerPosition: PropTypes.oneOf(['center']),
  textSize: PropTypes.oneOf(['l', 'sm']),
  text: PropTypes.string.isRequired,
  closeIcon: PropTypes.func,
}
