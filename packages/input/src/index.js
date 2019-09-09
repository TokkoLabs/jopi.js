import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'

export const Input = props => (
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
      px: 16,
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
)

Input.propTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
}
