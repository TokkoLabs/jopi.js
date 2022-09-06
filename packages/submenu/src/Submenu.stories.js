import React from 'react'
import { ButtonHoldPress } from '@oneloop/button'
import { useToggle, isMouseOutTooltip } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { Submenu } from '.'

export default {
  component: Submenu,
  title: 'Submenu',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Variantes disponibles del submenu: [ \'submenu\' ]',
    },
    placement: {
      name: 'placement',
      description: 'Posición del submenu: [ \'right\', \'left\', \'top\', \'bottom\' ]',
      type: 'text',
      control: { type: 'none' },
    },
    parentId: {
      name: 'parentId',
      required: true,
      description: 'Es el Id del componente desde donde saldra el submenu.',
      type: 'text',
    },
    childrenId: {
      name: 'childrenId',
      required: true,
      description: 'Es el Id del componente que encapsula el Submenu.',
      type: 'text',
    },
    offset: {
      name: 'offset',
      required: true,
      description: 'El valor del distanciamiento entre el submenu y el objeto de referencia.',
      type: 'number',
    },
  },
}

export const SubmenuNormalRight = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '150px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip0', 'parent0', 'right'))} id="parent0" aria-describedby="tooltip0"/>
      <div id="tooltip0" role="tooltip0" hidden={!active && !hover} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip0', 'parent0', 'right'))}>
        <Submenu parentId='parent0' childrenId='tooltip0' width='202px'>
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

export const SubmenuNormalLeft = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', paddingLeft: '400px', paddingTop: '140px', borderRadius: '10px', height: '180px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip1', 'parent1', 'left'))} id="parent1" aria-describedby="tooltip1" style={{ position: 'absolute', right: '200px' }}/>
      <div id="tooltip1" role="tooltip1" hidden={!active && !hover} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip1', 'parent1', 'left'))}>
        <Submenu parentId='parent1' childrenId='tooltip1' width='202px' placement='left'>
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

export const SubmenuNormalTop = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', paddingLeft: '400px', paddingTop: '270px', borderRadius: '10px', height: '150px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip2', 'parent2', 'top'))} id="parent2" aria-describedby="tooltip2"/>
      <div id="tooltip2" role="tooltip2" hidden={!active && !hover} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip2', 'parent2', 'top'))}>
        <Submenu parentId='parent2' childrenId='tooltip2' width='202px' placement='top'>
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

export const SubmenuNormalBottom = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', paddingLeft: '400px', paddingTop: '5px', borderRadius: '10px', height: '300px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip3', 'parent3', 'bottom'))} id="parent3" aria-describedby="tooltip3"/>
      <div id="tooltip3" role="tooltip3" hidden={!active && !hover} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip3', 'parent3', 'bottom'))}>
        <Submenu parentId='parent3' childrenId='tooltip3' width='202px' placement='bottom'>
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
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip4', 'parent4', 'right'))} id="parent4" aria-describedby="tooltip4"/>
      <div id="tooltip4" role="tooltip4" hidden={!active && !hover} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip4', 'parent4', 'right'))}>
        <Submenu parentId='parent4' childrenId='tooltip4' width='202px'>
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
