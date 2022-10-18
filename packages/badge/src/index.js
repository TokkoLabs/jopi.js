import React from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'

export const Badge = ({ isMedium, hasIcon, isNotButton, isRounded, isBig, ...props }) => (
  <Box
    as={ isNotButton ? '' : 'button' }
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      lineHeight: '14px',
      height: isMedium ? '22px' : (isBig ? '30px' : '16px'),
      width: isBig && '30px',
      display: 'inline-block',
      fontSize: '10px',
      fontFamily: 'primary',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      px: 2,
      py: '2px',
      border: 0,
      borderRadius: isMedium ? '14px' : (isRounded ? 99999 : '8px'),
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
