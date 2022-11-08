import React from 'react'
import { createPopper } from '@popperjs/core'
import { Box } from '@oneloop/box'
import { isMouseOutJoin } from '@oneloop/hooks'

export const ParentTooltip = ({ children, setHover, hover, placement = 'right', offset = 8, ...props }) => {
  let styles = { position: 'absolute', width: offset + 'px' }
  if (document !== undefined && document.getElementById(props.id) !== null) {
    const values = document.getElementById(props.id).getBoundingClientRect()
    if (placement === 'right') {
      styles = { position: 'absolute', width: offset + 'px', height: values.height, marginLeft: values.width }
    } else if (placement === 'bottom') {
      styles = { position: 'absolute', width: values.width, height: offset + 'px', marginTop: values.width }
    } else if (placement === 'left') {
      styles = { position: 'absolute', width: offset + 'px', height: values.height, marginLeft: -offset + 'px' }
    } else if (placement === 'top') {
      styles = { position: 'absolute', width: values.width, height: offset + 'px', marginTop: -offset + 'px' }
    }
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
          <div id={ 'join' + props.id } role={ 'join' + props.id }
            onMouseOut={(e) => setHover(isMouseOutJoin(e, 'join' + props.id, placement))}
            style={styles}
          />
        }
      </Box>
    </Box>
  )
}

export const Tooltip = ({ parentId, childrenId, variant = 'tooltip', placement = 'right', offset = 8, ...props }) => {
  const popcorn = document !== undefined ? document.querySelector('#' + parentId) : null
  const tooltip = document !== undefined ? document.querySelector('#' + childrenId) : null
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
        tx='panelTooltip'
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
