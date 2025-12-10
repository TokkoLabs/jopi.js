/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ButtonIcon } from '@quintoandar-tokko/button'
import { useToggle, isMouseOutTooltip, isMouseOutParent } from '@quintoandar-tokko/hooks'
import { Text } from '@quintoandar-tokko/text'
import { ParentTooltip, Tooltip } from '.'

export default {
  component: Tooltip,
  title: 'Tooltip',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Variantes disponibles del tooltip: [ \'tooltip\', \'tooltipBlack\' ]',
    },
    placement: {
      name: 'placement',
      description: 'Posición del tooltip: [ \'right-start\', \'right\', \'right-end\', \'left-start\', \'left\', \'left-end\', ' +
      '\'top-start\', \'top\', \'top-end\', \'bottom-start\', \'bottom\', \'bottom-end\' ]',
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
    arrow: {
      name: 'arrow',
      required: false,
      description: 'Booleano que agrega un arrow hacia el elemento padre.',
      type: 'boolean',
    },
  },
}

export const TooltipRightStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent0', 'right'))} id="parent0" aria-describedby="tooltip0" setHover={setHover} hover={hover}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip0" role="tooltip0" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip0', 'parent0', 'right'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent0' childrenId='tooltip0' placement='right-start' arrow>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipRight = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent1', 'right'))} id="parent1" aria-describedby="tooltip1" setHover={setHover} hover={hover}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip1" role="tooltip1" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip1', 'parent1', 'right'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent1' childrenId='tooltip1' placement='right' arrow>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipRightEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent2', 'right'))} id="parent2" aria-describedby="tooltip2" setHover={setHover} hover={hover}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip2" role="tooltip2" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip2', 'parent2', 'right'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent2' childrenId='tooltip2' placement='right-end' arrow>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipBottomStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', paddingLeft: '100px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent3', 'bottom'))} id="parent3" aria-describedby="tooltip3" setHover={setHover} hover={hover} placement='bottom'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip3" role="tooltip3" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip3', 'parent3', 'bottom'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent3' childrenId='tooltip3' placement='bottom-start'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipBottom = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', paddingLeft: '100px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent4', 'bottom'))} id="parent4" aria-describedby="tooltip4" setHover={setHover} hover={hover} placement='bottom'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip4" role="tooltip4" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip4', 'parent4', 'bottom'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent4' childrenId='tooltip4' placement='bottom'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipBottomEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', paddingLeft: '100px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent5', 'bottom'))} id="parent5" aria-describedby="tooltip5" setHover={setHover} hover={hover} placement='bottom'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip5" role="tooltip5" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip5', 'parent5', 'bottom'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent5' childrenId='tooltip5' placement='bottom-end'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipLeftStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', paddingLeft: '200px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent6', 'left'))} id="parent6" aria-describedby="tooltip6" setHover={setHover} hover={hover} placement='left'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip6" role="tooltip6" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip6', 'parent6', 'left'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent6' childrenId='tooltip6' placement='left-start'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipLeft = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', paddingLeft: '200px', borderRadius: '10px', height: '50px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent7', 'left'))} id="parent7" aria-describedby="tooltip7" setHover={setHover} hover={hover} placement='left'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip7" role="tooltip7" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip7', 'parent7', 'left'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent7' childrenId='tooltip7' placement='left'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipLeftEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', paddingLeft: '200px', borderRadius: '10px', height: '60px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent8', 'left'))} id="parent8" aria-describedby="tooltip8" setHover={setHover} hover={hover} placement='left'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip8" role="tooltip8" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip8', 'parent8', 'left'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent8' childrenId='tooltip8' placement='left-end'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipTopStart = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingTop: '40px', paddingLeft: '200px', borderRadius: '10px', height: '60px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent9', 'top'))} id="parent9" aria-describedby="tooltip9" setHover={setHover} hover={hover} placement='top'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip9" role="tooltip9" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip9', 'parent9', 'top'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent9' childrenId='tooltip9' placement='top-start'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipTop = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingTop: '40px', paddingLeft: '200px', borderRadius: '10px', height: '60px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent10', 'top'))} id="parent10" aria-describedby="tooltip10" setHover={setHover} hover={hover} placement='top'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip10" role="tooltip10" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip10', 'parent10', 'top'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent10' childrenId='tooltip10' placement='top'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipTopEnd = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', paddingTop: '40px', paddingLeft: '200px', borderRadius: '10px', height: '60px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent11', 'top'))} id="parent11" aria-describedby="tooltip11" setHover={setHover} hover={hover} placement='top'>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip11" role="tooltip11" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip11', 'parent11', 'top'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip parentId='parent11' childrenId='tooltip11' placement='top-end'>
          <Text variant='body.fontSize13'>Sitios Webs</Text>
        </Tooltip>
      </div>
    </div>
  )
}

export const TooltipBlack = () => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = useToggle(false)
  return (
    <div style={{ backgroundColor: '#F3F6F8', padding: '20px', borderRadius: '10px', height: '100px' }}>
      <ParentTooltip onMouseOver={() => setHover(true)} onMouseOut={(e) => setHover(isMouseOutParent(e, 'parent12', 'bottom'))} id="parent12" aria-describedby="tooltip12" setHover={setHover} hover={hover}>
        <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} badgeVariant='primary' onClick={() => setActive(active)}/>
      </ParentTooltip>
      <div id="tooltip12" role="tooltip12" onMouseOut={(e) => setHover(isMouseOutTooltip(e, 'tooltip12', 'parent12', 'bottom'))} style={{ width: 'fit-content', visibility: (hover || active) ? 'visible' : 'hidden' }}>
        <Tooltip variant='tooltipBlack' txVariant='arrowTooltipBlack' parentId='parent12' childrenId='tooltip12' placement='bottom' arrow height='52px' width='420px'>
          <Text variant={['body.fontSize13', 'wordBreak']} width='420px'>Write contact's name or email, then select 'New contact'
            It will help you to check if it already exists and avoid duplicates.</Text>
        </Tooltip>
      </div>
    </div>
  )
}
