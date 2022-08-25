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
      <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} badgeVariant='primary' onClick={() => setActive(active)} onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip5', 'parent5', 'right'))} id="parent5" aria-describedby="tooltip5"/>
      <div id="tooltip5" role="tooltip5" hidden={!active && !hover}>
        <Tooltip parentId='parent5' childrenId='tooltip5'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}
