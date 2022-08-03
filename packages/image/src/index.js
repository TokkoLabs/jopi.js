import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'

export const Image = ({ textBadge, variantBadge = "badgeInfoRow", ...props }) => (
  <Box
    {...props}
    __css={{
      maxWidth: '100%',
      height: 'auto',
      position: 'relative',
      textAlign: 'center',
    }}
  >
    <Box
      as="img"
      {...props}
      __css={{
        maxWidth: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
    {textBadge && <Badge variant={variantBadge} style={{ position: 'absolute', left: '0px', bottom: '-1px', width: '100%', textTransform: 'none' }}>{textBadge}</Badge> }
  </Box>
)
