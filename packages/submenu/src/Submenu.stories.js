import React from 'react'
import { ButtonHoldPress, ButtonMain } from '@oneloop/button'
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

  return (
    <> 
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent" aria-describedby="tooltip"/>
        <div id="tooltip" role="tooltip" hidden={!active && !hover}>
          <Tooltip parentId='parent' childrenId='tooltip'>
            <Text variant='body.fontSiz13'>Sitios Webs</Text>
          </Tooltip>
        </div>
    </>
  )
}
/*
export const submenu = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)
  return (
    <> 
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent2" aria-describedby="tooltip2"/>
        <div id="tooltip2" role="tooltip2" hidden={!active && !hover}>
          <Submenu parentId='parent2' childrenId='tooltip2'>
            <ButtonMain variant='submenuTitle' icon='icon-contacto' text='Contacto' />
          </Submenu>
        </div>
    </>
  )
}
*/