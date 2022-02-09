import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Heading, Text } from '@oneloop/text'

export const Input = ({ prefix, suffix, label, errors, ...props }) => (
  <>
    {label && (
      <Box
        __css={{
          px: 16,
          py: 1,
        }}
      >
        <Heading as="h6" variant="heading.5">
          {label}
        </Heading>
      </Box>
    )}
    <Box
      __css={{
        position: 'relative',
        height: 'fit-content',
        '> *:first-child': prefix
          ? { position: 'absolute', top: '9px', left: '12px' }
          : {},
        '> *:last-child': suffix
          ? { position: 'absolute', top: '9px', right: '12px' }
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
          borderRadius: 10,
          border: 'none',
          boxShadow: 'none',
          fontFamily: 'primary',
          display: 'block',
          fontSize: 1,
          height: 36,
          px: suffix || prefix ? 40 : 16,
          py: 11,
          outline: 'none',
          backgroundColor: errors ? 'inputErrors' : 'inputBackground',
          '::placeholder': {
            color: errors ? 'error' : 'inputPlaceholderColor',
          },
        }}
      />
      {suffix}
    </Box>
    {errors && (
      <Box
        __css={{
          px: 16,
          py: 1,
        }}
      >
        <Text variant="inputMessageErrors.0">{errors}</Text>
      </Box>
    )}
  </>
)

Input.propTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
}
