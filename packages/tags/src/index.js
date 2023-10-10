import React from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'
import { Icon } from '@oneloop/icons'

export const Tags = ({
  children,
  closeIcon,
  variant,
  noClick = false,
  ...props
}) => {
  return (
    <Box
      as="div"
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
        cursor: !noClick ? 'pointer' : 'default',
        border: 'solid 1px transparent',
        pointerEvents: noClick && 'none',
      }}
    >
      {children}
      {closeIcon && (
        <Icon
          icon="icon-cerrar"
          onClick={closeIcon}
          fontSize="8px"
          style={{ cursor: 'pointer' }}
        />
      )}
    </Box>
  )
}
