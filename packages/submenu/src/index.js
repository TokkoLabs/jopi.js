import React from 'react'
import { createPopper } from '@popperjs/core';
import { Box } from '@oneloop/box'

// 1. Padre, boton o imagen, que cuando se selecciona abre el submenu al costado
export const Tooltip = ({ variant, ...props })  => (
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

export const Submenu = ({ children, placement = 'right', ...props }) => (
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
)/*

// 2. Creacion del Submenu
export const Submenu = ({ placement = 'right', ...props }) => {
  const popper = createPopper(popcorn, tooltip, {
    placement: {placement},
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
  return (
    <Box
      as='list'
    />
  )
}


const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip'); */
