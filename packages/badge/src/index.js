import React from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'

export const Badge = ({ isMedium, hasIcon, isNotButton, ...props }) => (
  <Box
    as={ isNotButton ? "" : "button" }
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      lineHeight: '14px',
      height: isMedium ? '22px' : '16px',
      display: 'inline-block',
      fontSize: '10px',
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
      borderRadius: isMedium ? '14px' : '8px',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: hasIcon ? '4px 8px' : '1px 5px',
      position: 'static',
      flex: 'none',
      order: 0,
      flexGrow: 0,
      margin: '0px 0px',
    }}
  />
)
