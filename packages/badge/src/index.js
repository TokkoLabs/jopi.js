import React from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'

export const Badge = ({ isMedium, ...props }) => (
  <Box
    as="button"
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      lineHeight: '9px',
      height: isMedium ? '20px' : '11px',
      display: 'inline-block',
      fontSize: '8px',
      fontFamily: 'primary',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      px: 2,
      py: '2px',
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: isMedium ? '12px' : '8px',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1px 5px',
      position: 'static',
      flex: 'none',
      order: 0,
      flexGrow: 0,
      margin: '0px 0px',
    }}
  />
)
