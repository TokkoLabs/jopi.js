import { Box } from '@oneloop/box'
import React from 'react'
import theme from '@oneloop/theme'

export const ButtonGallery = ({ text, ...props }) => {
  return (
    <Box
      __css={{
        padding: '6px 12px',
        color: '#FFF',
        borderRadius: '32px',
        background: theme.colors.secondary,
        border: '1px solid #A2D4E5',
        fontFamily: 'Nunito Sans',
        fontSize: '12px',
        fontWeight: '600',
        cursor: 'pointer',
        ':hover': {
          background: '#A2D4E5',
          color: theme.colors.secondary,
        },
        ':active': {
          color: theme.colors.secondaryHover,
          borderColor: theme.colors.secondary,
        },
      }}
      {...props}
    >
      {text}
    </Box>
  )
}
