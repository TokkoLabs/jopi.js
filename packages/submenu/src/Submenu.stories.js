import React from 'react'
import { ButtonHoldPress } from '@oneloop/button'
import { useToggle } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { Submenu } from '.'

export default {
  component: Submenu,
  title: 'Submenu',
}

export const Tooltip = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)

  return (
    <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent" aria-describedby="tooltip"/>
      <div id="tooltip" role="tooltip" hidden={!active && !hover}>
        <Submenu parentId='parent' childrenId='tooltip' variant='tooltip'>
          <Text variant='body.fontSiz13'>Sitios Webs</Text>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormal = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', padding: '20px', paddingTop: '125px', borderRadius: '10px', height: '135px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent2" aria-describedby="tooltip2"/>
      <div id="tooltip2" role="tooltip2" hidden={!active && !hover}>
        <Submenu parentId='parent2' childrenId='tooltip2' width='202px'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonHoldPress variant='submenu' icon='icon-contacto' text='Contacto' maxWidth/>
          <ButtonHoldPress variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonHoldPress variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonHoldPress variant='submenu' icon='icon-emprendimiento' text='Emprendimiento' maxWidth/>
          <ButtonHoldPress variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuWithOutIcon = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', padding: '20px', paddingTop: '125px', borderRadius: '10px', height: '135px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent3" aria-describedby="tooltip3"/>
      <div id="tooltip3" role="tooltip3" hidden={!active && !hover}>
        <Submenu parentId='parent3' childrenId='tooltip3' width='202px'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonHoldPress variant='submenu' text='Contacto' maxWidth/>
          <ButtonHoldPress variant='submenu' text='Empresa' maxWidth/>
          <ButtonHoldPress variant='submenu' text='Propiedad' maxWidth/>
          <ButtonHoldPress variant='submenu' text='Emprendimiento' maxWidth badgeValue={1850} />
          <ButtonHoldPress variant='submenu' text='Email' maxWidth badgeValue={30} />
        </Submenu>
      </div>
    </div>
  )
}
