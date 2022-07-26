import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'

export const Image = ({ textBadge, ...props }) => (
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
    {textBadge && <Badge variant="badgeInfoRow" style={{ position: 'absolute', left: '0px', bottom: '0px', width: '100%' }}>{textBadge}</Badge> }
  </Box>
)
