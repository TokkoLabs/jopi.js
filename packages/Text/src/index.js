import React from 'react'
import { Box } from '@oneloop/box'
//import '../../../public/fonts.css'
import { fonts } from '@oneloop/fonts'
//import '../../fonts/src/index'

export const Text = (props) => (
  <Box
    as="p"
    tx="text"
    {...props}
    __css={{
      fontFamily: 'primary',
      color: 'neutral.6',
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
