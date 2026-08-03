/* eslint-disable no-unused-expressions */
import React from 'react'
import { Box } from '@quintoandar-tokko/box'
import '@quintoandar-tokko/fonts'
import { Icon } from '@quintoandar-tokko/icons'

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
        // Fallbacks without ThemeProvider. With provider, createTheme().tags.*
        // metrics (incl. brand fontFamily) win via tx="tags".
        fontFamily: 'primary',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        minHeight: '20px',
        padding: '3px 4px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        borderRadius: '4px',
        cursor: !noClick ? 'pointer' : 'default',
        border: 'solid 1px transparent',
        pointerEvents: noClick && 'none',
      }}
    >
      {children}
      {closeIcon && (
        <Icon
          icon="icon-cerrar"
          onClick={(event) => {
            event.stopPropagation()
            closeIcon()
          }}
          fontSize="8px"
          style={{ cursor: 'pointer' }}
        />
      )}
    </Box>
  )
}
