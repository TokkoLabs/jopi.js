import React from 'react'
import { createPopper } from '@popperjs/core'
import { Box } from '@quintoandar-tokko/box'
import { isMouseOutJoin } from '@quintoandar-tokko/hooks'

export const ParentSubmenu = ({ children, setHover, hover, placement = 'right', offset = 8, ...props }) => {
  let styles = { position: 'absolute', width: offset + 'px' }
  if (typeof window === 'object' && document !== undefined && document.getElementById(props.id) !== null) {
    const values = document.getElementById(props.id).getBoundingClientRect()
    if (placement === 'right') {
      styles = { position: 'fixed', width: offset + 'px', height: values.height + 50, marginLeft: values.width, transform: 'translateY(-25px)' }
    } else if (placement === 'bottom') {
      styles = { position: 'fixed', width: values.width, height: offset + 'px', marginTop: values.width }
    } else if (placement === 'left') {
      styles = { position: 'fixed', width: offset + 'px', height: values.height, marginLeft: -offset + 'px' }
    } else if (placement === 'top') {
      styles = { position: 'fixed', width: values.width, height: offset + 'px', marginTop: -offset + 'px' }
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

export const Submenu = ({ parentId, childrenId, variant = 'submenu', placement = 'right', offset = 8, arrow, ...props }) => {
  const popcorn = (typeof window === 'object' && document !== undefined) ? document.querySelector('#' + parentId) : null
  const tooltip = (typeof window === 'object' && document !== undefined) ? document.querySelector('#' + childrenId) : null
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
      { arrow &&
        <Box
          tx='arrowTooltip'
          variant={placement}
          id="arrow"
          __css={{
            position: 'absolute',
            background: 'inherit',
            transform: 'translate(-50%)',
          }}
          data-popper-arrow
        />
      }
    </Box>
  )
}
