import React from 'react'
import { ButtonIcon } from '@oneloop/button'
import { useToggle, isMouseOutTooltip, isMouseOutParent } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { ParentSubmenu, Submenu } from '.'

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
      description: 'Posición del submenu: [ \'right-start\', \'right\', \'right-end\', \'left-start\', \'left\', \'left-end\', ' +
      '\'top-start\', \'top\', \'top-end\', \'bottom-start\', \'bottom\', \'bottom-end\' ]',
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

export const SubmenuNormalRightStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent0', 'right'))} id="parent0" aria-describedby="tooltip0" setHover={setHover} hover={hover} offset={20}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip0" role="tooltip0" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip0', 'parent0', 'right'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent0' childrenId='tooltip0' width='202px' offset={20} placement='right-start'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalRight = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent1', 'right'))} id="parent1" aria-describedby="tooltip1" setHover={setHover} hover={hover} offset={20}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip1" role="tooltip1" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip1', 'parent1', 'right'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent1' childrenId='tooltip1' width='202px' offset={20} placement='right'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalRightEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent2', 'right'))} id="parent2" aria-describedby="tooltip2" setHover={setHover} hover={hover} offset={20}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip2" role="tooltip2" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip2', 'parent2', 'right'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent2' childrenId='tooltip2' width='202px' offset={20} placement='right-end'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalBottomStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent3', 'bottom'))} id="parent3" aria-describedby="tooltip3" setHover={setHover} hover={hover} offset={20} placement='bottom'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip3" role="tooltip3" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip3', 'parent3', 'bottom'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent3' childrenId='tooltip3' width='202px' offset={20} placement='bottom-start'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalBottom = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent4', 'bottom'))} id="parent4" aria-describedby="tooltip4" setHover={setHover} hover={hover} offset={20} placement='bottom'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip4" role="tooltip4" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip4', 'parent4', 'bottom'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent4' childrenId='tooltip4' width='202px' offset={20} placement='bottom'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalBottomEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent5', 'bottom'))} id="parent5" aria-describedby="tooltip5" setHover={setHover} hover={hover} offset={20} placement='bottom'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip5" role="tooltip5" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip5', 'parent5', 'bottom'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent5' childrenId='tooltip5' width='202px' offset={20} placement='bottom-end'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalLeftStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent6', 'left'))} id="parent6" aria-describedby="tooltip6" setHover={setHover} hover={hover} offset={20} placement='left'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip6" role="tooltip6" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip6', 'parent6', 'left'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent6' childrenId='tooltip6' width='202px' offset={20} placement='left-start'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalLeft = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent7', 'left'))} id="parent7" aria-describedby="tooltip7" setHover={setHover} hover={hover} offset={20} placement='left'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip7" role="tooltip7" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip7', 'parent7', 'left'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent7' childrenId='tooltip7' width='202px' offset={20} placement='left'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalLeftEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent8', 'left'))} id="parent8" aria-describedby="tooltip8" setHover={setHover} hover={hover} offset={20} placement='left'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip8" role="tooltip8" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip8', 'parent8', 'left'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent8' childrenId='tooltip8' width='202px' offset={20} placement='left-end'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalTopStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '310px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent9', 'top'))} id="parent9" aria-describedby="tooltip9" setHover={setHover} hover={hover} offset={20} placement='top'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip9" role="tooltip9" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip9', 'parent9', 'top'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent9' childrenId='tooltip9' width='202px' offset={20} placement='top-start'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalTop = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '310px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent10', 'top'))} id="parent10" aria-describedby="tooltip10" setHover={setHover} hover={hover} offset={20} placement='top'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip10" role="tooltip10" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip10', 'parent10', 'top'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent10' childrenId='tooltip10' width='202px' offset={20} placement='top'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuNormalTopEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '310px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent11', 'top'))} id="parent11" aria-describedby="tooltip11" setHover={setHover} hover={hover} offset={20} placement='top'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip11" role="tooltip11" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip11', 'parent11', 'top'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent11' childrenId='tooltip11' width='202px' offset={20} placement='top-end'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
          <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
        </Submenu>
      </div>
    </div>
  )
}

export const SubmenuWithOutIcon = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingLeft: '400px', paddingTop: '110px', borderRadius: '10px', height: '300px' }}>
      <ParentSubmenu onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent12', 'right'))} id="parent12" aria-describedby="tooltip12" setHover={setHover} hover={hover} offset={20}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentSubmenu>
      <div id="tooltip12" role="tooltip12" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip12', 'parent12', 'right'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Submenu parentId='parent12' childrenId='tooltip12' width='202px' offset={20} placement='right'>
          <Text variant='submenuTitle'>Crear</Text>
          <ButtonIcon variant='submenu' text='Contactos' maxWidth/>
          <ButtonIcon variant='submenu' text='Empresa' maxWidth/>
          <ButtonIcon variant='submenu' text='Propiedad' maxWidth/>
          <ButtonIcon variant='submenu' text='Emprendimientos' maxWidth badgeValue={1850} />
          <ButtonIcon variant='submenu' text='Email' maxWidth badgeValue={30} />
        </Submenu>
      </div>
    </div>
  )
}
