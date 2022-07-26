import React from 'react'
import { Box } from '@oneloop/box'

export const Text = (props) => (
  <Box
    as="p"
    tx="text"
    {...props}
    __css={{
      fontFamily: 'primary',
    }}
  />
)

export const Heading = (props) => (
  <Box
    as="h2"
    tx="text"
    {...props}
    __css={{
      fontSize: 4,
      fontWeight: 'heading',
      fontFamily: 'primary',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      color: 'neutral.6',
    }}
  />
)
