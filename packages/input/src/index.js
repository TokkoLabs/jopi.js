import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Heading } from '@oneloop/text'

export const Input = ({ prefix, suffix, label, ...props }) => (
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
          // caretColor: '#757575',
          display: 'block',
          fontSize: 1,
          height: 36,
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
    </Box>
  </>
)

Input.propTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
}
