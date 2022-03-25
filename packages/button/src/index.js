import React from 'react'
import { Box } from '@oneloop/box'

export const Button = (props) => (
  <Box
    as="button"
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-block',
      lineHeight: 'inherit',
      fontFamily: 'body',
      fontWeight: 'bold',
      textAlign: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
      outline: 'none',
      px: 26,
      py: 14,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 'button',
    }}
  />
)
    