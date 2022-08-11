import React from 'react'
import { createPopper } from '@popperjs/core'
import { Box } from '@oneloop/box'

export const Submenu = ({ parentId, childrenId, variant = 'submenu', placement = 'right', ...props }) => {
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
        tx='panelSubmenu'
        variant={variant}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          alignItems: 'flex-start',
          whiteSpace: 'nowrap',
          border: 'none',
          fontFamily: 'Nunito Sans',
          background: '#FFFFFF',
          justifyContent: 'center',
        }}
      />
    </Box>
  )
}
