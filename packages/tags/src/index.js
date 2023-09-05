import React from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'
import { Icon } from '@oneloop/icons'

export const Tags = ({ children, closeIcon, variant, ...props }) => {
  return (
    <>
      <Box
        as='span'
        tx="tags"
        variant={variant}
        {...props}
        __css={{
          fontFamily: 'Nunito Sans',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '3px 4px',
          gap: '5px',
          height: '20px',
          borderRadius: '4px',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '12px',
          cursor: 'pointer',
          border: 'solid 1px transparent',
        }}
      >
        {children}
        {closeIcon && <Icon icon='icon-cerrar' onClick={closeIcon} fontSize='8px' style={{ cursor: 'pointer' }} />}
      </Box>
    </>
  )
}
