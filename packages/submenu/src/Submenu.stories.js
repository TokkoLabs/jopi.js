import React from 'react'
import { ButtonHoldPress } from '@oneloop/button'
import { useToggle } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { createPopper } from '@popperjs/core'
import { Submenu, Tooltip } from '.'

export default {
  component: Submenu,
  title: 'Submenu',
}

export const normal = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)

  const popcorn = document.querySelector('#popcorn')
  const tooltip = document.querySelector('#tooltip')
  if (popcorn != null && tooltip != null) {
    createPopper(popcorn, tooltip, {
      placement: 'right',
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
    <> 
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="popcorn" aria-describedby="tooltip"/>
        <div id="tooltip" role="tooltip" hidden={!active && !hover}>
          <Tooltip>
            <Text variant='body.fontSiz13'>Sitios Webs</Text>
          </Tooltip>
        </div>
    </>
  )
}
