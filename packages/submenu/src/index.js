import React from 'react'
import { createPopper } from '@popperjs/core'
import { Box } from '@oneloop/box'
import { isMouseOutJoin } from '@oneloop/hooks'

export const Parent = ({ children, placement = 'right', setHover, hover, offset = 8, ...props }) => {
  let styles = { position: 'absolute', width: offset + 'px' }
  if (document.getElementById(props.id) !== null) {
     const values = document.getElementById(props.id).getBoundingClientRect()
     styles = { position: 'absolute', width: offset + 'px', height: values.height, marginLeft: values.width }
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        {...props}
        __css={{
          display: 'flex',
          width: 'fit-content',
        }}
      >
        {children}
        { hover &&
          <div id='join0' role="join0"
            onMouseOut={(e) => setHover(isMouseOutJoin(e, 'join0', 'right'))}
            style={styles}
          />
        }
      </Box>
    </Box>
  )
}


export const Submenu = ({ parentId, childrenId, variant = 'submenu', placement = 'right', offset = 8, ...props }) => {
  const popcorn = document.querySelector('#' + parentId)
  const tooltip = document.querySelector('#' + childrenId)
  if (popcorn != null && tooltip != null) {
    createPopper(popcorn, tooltip, {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, offset],
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
