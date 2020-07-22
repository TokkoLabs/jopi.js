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
      <Label marginLeft="5px" marginBottom="5px">
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
        borderRadius: 4,
        border: '1px solid #DADADA',
        caretColor: '#757575',
        color: '#757575',
        fontSize: 1,
        height: 170,
        width: 390,
        py: 11,
        px: 5,
        '&:disabled': {
          color: '#999999',
          backgroundColor: '#EBEBEB',
          cursor: 'not-allowed',
        },
      }}
    />
    {suffix && (
      <Text variant="small" marginLeft="5px">
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
