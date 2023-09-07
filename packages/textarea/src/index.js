import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Label } from '@oneloop/label'
import { Text } from '@oneloop/text'
import theme from '@oneloop/theme'

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
      <Label
        __css={{
          fontWeight: '700',
          fontSize: '12px',
          marginLeft: '5px',
          marginBottom: '5px',
          color: '#384248',
          fontFamily: 'Nunito Sans',
        }}
      >
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
        border: 'solid 1px transparent',
        caretColor: '#757575',
        color: theme.colors.neutralGray1,
        fontFamily: 'Nunito Sans',
        backgroundColor: theme.colors.neutralGray8,
        resize: 'none',
        fontSize: '14px',
        height: 170,
        width: 390,
        py: 11,
        px: 5,
        '&::placeholder': {
          fontWeight: '400',
          fontSize: '14px',
          color: theme.colors.neutralGray2,
        },
        '&:disabled': {
          color: '#999999',
          backgroundColor: '#EBEBEB',
          cursor: 'not-allowed',
        },
        '&:focus': {
          outline: 'none',
          border: `1px solid ${theme.colors.neutralGray3}`,
          boxShadow: 'none',
        },
        '&:active': {
          outline: 'none',
        },
        '&:hover': {
          '&::placeholder': {
            color: theme.colors.black,
          },
        },
      }}
    />
    {suffix && (
      <Text
        fontWeight="400"
        color="#384248"
        fontSize="12px"
        variant="large"
        marginLeft="5px"
      >
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
