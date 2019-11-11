import React from 'react'
import { Box } from '@oneloop/box'

export const Button = props => (
  <Box
    as="button"
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-block',
      lineHeight: 'inherit',
      textTransform: 'uppercase',
      fontFamily: 'body',
      textAlign: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
      outline: 'none',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 'circle',
    }}
  />
)
