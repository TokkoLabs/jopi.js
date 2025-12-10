import React from 'react'
import { Box } from '@quintoandar-tokko/box'
import theme from '@quintoandar-tokko/theme'

export const Card = ({ variant = 'normal', active, ...props }) => {
  const variantValues = Object.values(theme.card)[Object.keys(theme.card).indexOf(variant)]
  const backgroundColor = active ? variantValues[':focus'].backgroundColor : variantValues.backgroundColorValue
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        tx='card'
        variant={variant}
        {...props}
        __css={{
          fontFamily: 'primary',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          position: 'relative',
          gap: '8px',
          cursor: 'pointer',
        }}
        />
    </Box>
  )
}
