import React from 'react'
import { Flex } from '@oneloop/box'
import PropTypes from 'prop-types'

export const ModalFooter = ({ position = 'start', ...props }) => (
  <Flex
    className='modalFooter'
    __css={{ justifyContent: position }}
    {...props}
  />
)

ModalFooter.propTypes = {
  position: PropTypes.oneOf(['center', 'end']),
}
