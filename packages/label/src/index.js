import React from 'react'
import { Flex } from '@oneloop/box'

export const Label = props => (
  <Flex
    as="label"
    tx="forms"
    variant="label"
    {...props}
    __css={{
      width: '100%',
      fontFamily: 'sans-serif',
    }}
  />
)
