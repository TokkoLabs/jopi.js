import React from 'react'
import { Box } from '@oneloop/box'

export const Image = props => (
  <Box as="img" {...props} __css={{ maxWidth: '100%', height: 'auto', alignItems: "center", justifyContent: "center" }} />
)
