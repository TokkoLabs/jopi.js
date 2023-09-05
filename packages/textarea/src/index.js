import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Label } from '@oneloop/label'
import { Text } from '@oneloop/text'

export const Textarea = ({
  prefix,
  suffix,
  contL,
  contR,
  contT,
  contB,
  ...props
}) => (
  <Box display="inline-block" ml={contL} mr={contR} mt={contT} mb={contB}>
    {prefix && (
      <Label __css={{
        fontWeight: '700',
        fontSize: '12px',
        marginLeft: '5px',
        marginBottom: '5px',
        color: '#384248',
        fontFamily: 'Nunito Sans',
      }}>
        {prefix}
      </Label>
    )}
    <Box
      as="textarea"
      type="text"
      tx="forms"
      variant="textarea"
      {...props}
      __css={{
        borderRadius: '8px',
        border: 'none',
        caretColor: '#757575',
        color: '#757575',
        fontFamily: 'Nunito Sans',
        backgroundColor: '#F3F6F8',
        resize: 'none',
        fontSize: '14px',
        height: 170,
        width: 390,
        py: 11,
        px: 5,
        '&::placeholder': {
          fontWeight: '400',
          fontSize: '14px',
          color: '#485C66',
        },
        '&:disabled': {
          color: '#999999',
          backgroundColor: '#EBEBEB',
          cursor: 'not-allowed',
        },
        '&:focus': {
          outline: 'none',
          border: '1px solid #94A2AB',
          boxShadow: 'none',
        },
        '&:active': {
          outline: 'none',
          border: '1px solid #4268EF',
          boxShadow: '2px 2px 6px rgba(56, 109, 244, 0.2)',
        },
      }}
    />
    {suffix && (
      <Text fontWeight= '400' color='#384248' fontSize= '12px' variant="large" marginLeft="5px">
        {suffix}
      </Text>
    )}
  </Box>
)

Textarea.propTypes = {
  placeholder: PropTypes.string,
}

Textarea.defaultProps = {
  disabled: false,
}
