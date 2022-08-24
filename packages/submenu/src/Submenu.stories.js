import React from 'react'
import { ButtonHoldPress } from '@oneloop/button'
import { useToggle } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { Submenu } from '.'

export default {
  component: Submenu,
  title: 'Submenu',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Variantes disponibles del submenu: [ \'submenu\', \'tooltip\' ]',
    },
    placement: {
      name: 'placement',
      description: 'Posición del tooltip o submenu: [ \'right\', \'left\', \'top\', \'bottom\' ]',
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

// Este metodo que esta aparte, lo pongo en el hook y nos retorna un booleano, que usamos para determinar el hover

export const SubmenuNormal = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)

  const checkOver = (e) => {
    const tooltipId = 'tooltip0'
    const parentId = 'parent0'
    const placement = 'bottom'
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop
    const positionParent = document.getElementById(parentId).getBoundingClientRect()
    const positionTooltip = document.getElementById(tooltipId).getBoundingClientRect()
    if ((placement === 'right' && (x <= positionParent.right || x > positionTooltip.right || y < positionTooltip.top || y > positionTooltip.bottom )) ||
      (placement === 'left' && (x >= positionParent.left || x < positionTooltip.left || y < positionTooltip.top || y > positionTooltip.bottom )) ||
      (placement === 'top' && (y >= positionParent.top || y < positionTooltip.top ||  x < positionTooltip.left || x > positionTooltip.right )) ||
      (placement === 'bottom' && (y < positionParent.bottom || y > positionTooltip.bottom || x < positionTooltip.left || x > positionTooltip.right ))) {
      setHover(false);
    }
  }
  return (
    <div style={{ background: '#F3F6F8', padding: '200px', paddingTop: '50px', borderRadius: '10px', height: '200px' }}>
      <div style={{ width: 'fit-content', height: 'fit-content' }} onMouseOver={() => setHover(true)}>
        <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => checkOver(e)} id="parent0" aria-describedby="tooltip0"/>
        <div id="tooltip0" role="tooltip0" hidden={!active && !hover} onMouseOut={(e) => checkOver(e)}>
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
    </div>
  )
}

export const SubmenuWithOutIcon = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ background: '#F3F6F8', padding: '20px', paddingTop: '125px', borderRadius: '10px', height: '135px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent1" aria-describedby="tooltip1"/>
      <div id="tooltip1" role="tooltip1" hidden={!active && !hover}>
        <Submenu parentId='parent1' childrenId='tooltip1' width='202px'>
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

export const Tooltip = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)

  return (
    <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} id="parent2" aria-describedby="tooltip2"/>
      <div id="tooltip2" role="tooltip2" hidden={!active && !hover}>
        <Submenu parentId='parent2' childrenId='tooltip2' variant='tooltip'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Submenu>
      </div>
    </div>
  )
}
