import React from 'react'
import { ButtonHoldPress } from '@oneloop/button'
import { useToggle, isMouseOutTooltip } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { Tooltip } from '.'

export default {
  component: Tooltip,
  title: 'Tooltip',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Variantes disponibles del tooltip: [ \'tooltip\' ]',
    },
    placement: {
      name: 'placement',
      description: 'Posición del tooltip: [ \'right\', \'left\', \'top\', \'bottom\' ]',
      type: 'text',
      control: { type: 'none' },
    },
    parentId: {
      name: 'parentId',
      required: true,
      description: 'Es el Id del componente desde donde saldra el tooltip.',
      type: 'text',
    },
    childrenId: {
      name: 'childrenId',
      required: true,
      description: 'Es el Id del componente que encapsula el tooltip.',
      type: 'text',
    },
    offset: {
      name: 'offset',
      required: true,
      description: 'El valor del distanciamiento entre el tooltip y el objeto de referencia.',
      type: 'number',
    },
  },
}

export const TooltipRight = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)

  return (
    <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip0', 'parent0', 'right'))} id="parent0" aria-describedby="tooltip0"/>
      <div id="tooltip0" role="tooltip0" hidden={!active && !hover}>
        <Tooltip parentId='parent0' childrenId='tooltip0' document={document}>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipLeft = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)

  return (
    <div style={{ background: '#F3F6F8', paddingTop: '10px', borderRadius: '10px', height: '50px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip1', 'parent1', 'left'))} id="parent1" aria-describedby="tooltip1" style={{ position: 'absolute', right: '200px' }}/>
      <div id="tooltip1" role="tooltip1" hidden={!active && !hover}>
        <Tooltip parentId='parent1' childrenId='tooltip1' placement='left' document={document}>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipTop = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)

  return (
    <div style={{ background: '#F3F6F8', padding: '40px', borderRadius: '10px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip2', 'parent2', 'top'))} id="parent2" aria-describedby="tooltip2"/>
      <div id="tooltip2" role="tooltip2" hidden={!active && !hover}>
        <Tooltip parentId='parent2' childrenId='tooltip2' placement='top' document={document}>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipBottom = () => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)

  return (
    <div style={{ background: '#F3F6F8', padding: '40px', borderRadius: '10px' }}>
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip3', 'parent3', 'bottom'))} id="parent3" aria-describedby="tooltip3"/>
      <div id="tooltip3" role="tooltip3" hidden={!active && !hover}>
        <Tooltip parentId='parent3' childrenId='tooltip3' placement='bottom' document={document}>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}
