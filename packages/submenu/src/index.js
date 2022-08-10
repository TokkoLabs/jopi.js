import React from 'react'
import { createPopper } from '@popperjs/core';
import { Box } from '@oneloop/box'

// 1. Padre, boton o imagen, que cuando se selecciona abre el submenu al costado
export const Tooltip = ({ variant, parentId, childrenId, placement = 'right', ...props })  => {
  const popcorn = document.querySelector('#' + parentId)
  const tooltip = document.querySelector('#' + childrenId)
  if (popcorn != null && tooltip != null) {
    createPopper(popcorn, tooltip, {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    })
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          position: 'relative',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          border: 'none',
          fontFamily: 'Nunito Sans',
          // ********
          px: '4px',
          py: '10px',
          gap: '14px',
          height: '26px',
          background: '#FFFFFF',
          boxShadow: '4px 4px 4px rgba(112, 126, 134, 0.15)',
          borderRadius: '6px',
        }}
      />
    </Box>
  )
}

export const Submenu = ({ variant, parentId, childrenId, placement = 'right', ...props })  => {
  const popcorn = document.querySelector('#' + parentId)
  const tooltip = document.querySelector('#' + childrenId)
  if (popcorn != null && tooltip != null) {
    createPopper(popcorn, tooltip, {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    })
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0px 0px 8px',
          gap: '6px',
          whiteSpace: 'nowrap',
          border: 'none',
          fontFamily: 'Nunito Sans',
          // ********
          width: '202px',
          background: '#FFFFFF',
          boxShadow: '4px 4px 12px rgba(87, 95, 99, 0.1)',
          borderRadius: '10px',
        }}
      />
    </Box>
  )
}
