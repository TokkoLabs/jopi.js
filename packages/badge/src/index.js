import React from 'react'
import { Box } from '@quintoandar-tokko/box'
import '@quintoandar-tokko/fonts'

export const Badge = ({ variant = ['badgeNormal', 'primary'], isNotButton, ...props }) => (
  <Box
    as={ isNotButton ? '' : 'button' }
    tx="buttons"
    variant={variant}
    {...props}
    __css={{
      lineHeight: '14px',
      display: 'inline-block',
      fontSize: '10px',
      fontFamily: 'primary',
      textAlign: 'center',
      fontWeight: 'bold',
      border: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'static',
    }}
  />
)
