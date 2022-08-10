import React from 'react'
import { ButtonHoldPress, ButtonIcon } from '@oneloop/button'
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
    <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent" aria-describedby="tooltip"/>
      <div id="tooltip" role="tooltip" hidden={!active && !hover}>
        <Tooltip parentId='parent' childrenId='tooltip'>
          <Text variant='body.fontSiz13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const submenu = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', padding: '20px', paddingTop: '100px', borderRadius: '10px', height: '500px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent2" aria-describedby="tooltip2"/>
      <div id="tooltip2" role="tooltip2" hidden={!active && !hover}>
        <Submenu parentId='parent2' childrenId='tooltip2' title='Crear'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contacto' text='Contacto' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}
