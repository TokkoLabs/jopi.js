import React from 'react'
import { Box } from '@oneloop/box'

export const Badge = props => (
  <Box
    as="span"
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      lineHeight: '14px',
      display: 'inline-block',
      fontSize: 1,
      textAlign: 'right',
      px: 2,
      py: '2px',
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 'circle',
      minWidth: '32px',
      fontFamily: 'body',
    }}
  />
)
