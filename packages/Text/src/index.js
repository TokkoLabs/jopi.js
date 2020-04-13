import React from 'react'
import { Box } from '@oneloop/box'

export const Text = props => (
  <Box
    as="p"
    tx="text"
    {...props}
    __css={{
      fontFamily: 'body',
      color: 'neutral.6',
    }}
  />
)

export const Heading = props => (
  <Box
    as="h2"
    tx="text"
    {...props}
    __css={{
      fontSize: 4,
      fontWeight: 'heading',
      fontFamily: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      color: 'neutral.6',
    }}
  />
)
