import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@oneloop/box'

export const Input = ({ prefix, suffix, ...props }) => (
  <Flex
    __css={{
      position: 'relative',
      '> *:first-child': prefix
        ? { position: 'absolute', top: '9px', left: '12px' }
        : {},
      '> *:last-child': suffix
        ? { position: 'relative', top: '9px', right: '30px' }
        : {},
    }}
  >
    {prefix}
    <Box
      as="input"
      type="text"
      tx="forms"
      variant="input"
      {...props}
      __css={{
        borderRadius: 4,
        border: '1px solid #DADADA',
        boxShadow: 'none',
        caretColor: '#757575',
        color: '#757575',
        display: 'block',
        fontSize: 1,
        height: 36,
        lineHeight: 14,
        px: suffix || prefix ? 40 : 16,
        py: 11,
        marginBottom: 5,
        outline: 'none',
        '&:disabled': {
          color: '#999999',
          backgroundColor: '#EBEBEB',
          cursor: 'not-allowed',
        },
      }}
    />
    {suffix}
  </Flex>
)

Input.propTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
}
