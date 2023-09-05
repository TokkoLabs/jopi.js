import React from 'react'
import { Box } from '@oneloop/box'
import { Button, ButtonIcon } from '.'
import { useToggle } from '@oneloop/hooks'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    variant: {
      name: 'variant',
      description: '\n* **Variantes de color disponibles:** [ \'primary\', \'primaryDisabled\', \'secondary\', ' +
        '\'secondaryDisabled\', \'primaryOutlined\', \'secondaryOutlined\', \'outlinedDisabled\', \'iconPrimary\', ' +
        '\'iconSecondary\', \'iconDisabled\', \'subtleIconButton\', \'subtleTrasnparentIconClearButton\', ' +
        '\'subtleTrasnparentIconObscureButton\', \'smallIconButtonTransparent\', \'roundIconArrow\', ' +
        '\'colourFeedback\', \'mainItemSmall\', \'mainButton\', \'mainButtonIcon\', \'userButton\', \'collapseButtonOpen\', ' +
        '\'collapseButtonClosed\', \'roundIconArrowRed\', \'subtleTrasnparentPretrokoPressed\', \'subtleTrasnparentPretroko\' ]' +
        '\n*       **Variantes de tamaño disponibles:** [ \'large\', \'medium\', \'small\', \'extraSmall\', \'iconLarge\', ' +
        '\'iconMedium\', \'iconSmall\', \'iconExtraSmall\', \'iconExtraSmall22px\', \'iconExtraSmall18px\',' +
        '\'roundIconLarge\', \'roundIconMedium\', \'roundIconSmall\', \'roundIconExtraSmall\', ' +
        '\'roundIconExtraSmall22px\', \'roundIconExtraSmall18px\', \'roundLarge\', \'roundMedium\', \'roundSmall\', ' +
        '\'roundExtraSmall\', \'roundIconSmallIcon14px\', \'iconExtraSmall24pxWithIcon14px\' ]' +
        '\n* **Variantes de texto disponibles:** [ \'primaryText\', \'secondaryText\', \'subtleText\', \'textDisabled\' ' +
        '\'link\', \'linkSubtle\', \'linkDisabled\', \'subtleButton\' ]',
      type: 'text',
      control: { type: 'none' },
    },
    icon: {
      name: 'icon',
      description: 'Valor del icono a agregar (Se debe usar el tipo ButtonIcon)',
      type: 'text',
      control: { type: 'none' },
    },
    text: {
      name: 'text',
      description: 'El texto asignado al button.',
      type: 'text',
      control: { type: 'none' },
    },
    active: {
      name: 'active',
      description: 'Determina si el boton esta activo. (para los casos que se quiere que el boton quede activado)',
      type: 'text',
      control: { type: 'none' },
    },
    onClick: {
      name: 'onClick',
      description: 'Pasamos la accion por parametro, que seteara que se activo el boton.',
      type: 'text',
      control: { type: 'none' },
    },
    badgeValue: {
      name: 'badgeValue',
      description: 'Valor numérico de la cantidad a mostrar en el badge.',
      type: 'number',
      control: { type: 'none' },
    },
    badgeVariant: {
      name: 'badgeVariant',
      description: 'Variant del badge (variants disponibles en el componente Badge).',
      type: 'text',
      control: { type: 'none' },
    },
    maxWidth: {
      name: 'maxWidth',
      description: 'Booleano que determina si usa el maximo width posible.',
      type: 'boolean',
      control: { type: 'none' },
    },
    srcImage: {
      name: 'srcImage',
      description: 'Ruta de la imagen.',
      type: 'text',
      control: { type: 'none' },
    },
    hasCheckbox: {
      name: 'hasCheckbox',
      description: 'Booleano que determina si el boton al principio tiene un checkbox.',
      type: 'boolean',
      control: { type: 'none' },
    },
    isCollapsible: {
      name: 'isCollapsible',
      description: 'Booleano que determina si el boton es colapsible, en ese caso se agrega el icono al final ' +
        'que indica que se puede desplegar.',
      type: 'boolean',
      control: { type: 'none' },
    },
    disabled: {
      name: 'disabled',
      description: 'Booleano para determinar que el checkbox quede disabled.',
      type: 'boolean',
      control: { type: 'none' },
    },
    holdPress: {
      name: 'holdPress',
      description: 'Booleano que se utiliza en los botones que requieran quedar activos, hasta que se los vuelva a seleccionar.',
      type: 'boolean',
      control: { type: 'none' },
    },
  },
}

export const primary = () => (
  <Button variant={['primary', 'large']}>{'Label'}</Button>
)

export const primaryLarge = () => (
  <Button variant={['primary', 'large']}>{'Label'}</Button>
)

export const primaryMedium = () => (
  <Button variant={['primary', 'medium']}>{'Label'}</Button>
)

export const primarySmall = () => (
  <Button variant={['primary', 'small']}>{'Label'}</Button>
)

export const primaryExtraSmall = () => (
  <Button variant={['primary', 'extraSmall']}>{'Label'}</Button>
)

export const primaryDisabled = () => (
  <Button variant={['primaryDisabled', 'large']}>{'Label'}</Button>
)

export const secondary = () => (
  <Button variant={['secondary', 'large']}>{'Label'}</Button>
)

export const secondaryDisabled = () => (
  <Button variant={['secondaryDisabled', 'large']}>{'Label'}</Button>
)

export const primaryOutlined = () => (
  <Button variant={['primaryOutlined', 'large']}>{'Label'}</Button>
)

export const secondaryOutlined = () => (
  <Button variant={['secondaryOutlined', 'large']}>{'Label'}</Button>
)

export const outlinedDisabled = () => (
  <Button variant={['outlinedDisabled', 'large']}>{'Label'}</Button>
)

export const primaryText = () => (
  <Button variant='primaryText'>{'Label'}</Button>
)

export const secondaryText = () => (
  <Button variant='secondaryText'>{'Label'}</Button>
)

export const subtleText = () => (
  <Button variant='subtleText'>{'Label'}</Button>
)

export const textDisabled = () => (
  <Button variant='textDisabled'>{'Label'}</Button>
)

export const iconPrimaryLarge = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'iconLarge']}/>
)

export const iconPrimaryMedium = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'iconMedium']}/>
)

export const iconPrimarySmall = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'iconSmall']}/>
)

export const iconPrimaryExtraSmall = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'iconExtraSmall']}/>
)

export const iconPrimaryExtraSmall22px = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'iconExtraSmall22px']}/>
)

export const iconPrimaryExtraSmall18px = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'iconExtraSmall18px']}/>
)

export const iconSecondary = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconSecondary', 'iconLarge']}/>
)

export const iconDisabled = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconDisabled', 'iconLarge']}/>
)

export const primaryOutlinedIcon = () => (
  <ButtonIcon icon='icon-agregar' variant={['primaryOutlined', 'iconLarge']}/>
)

export const secondaryOutlinedIcon = () => (
  <ButtonIcon icon='icon-agregar' variant={['secondaryOutlined', 'iconLarge']}/>
)

export const outlinedIconDisabled = () => (
  <ButtonIcon icon='icon-agregar' variant={['outlinedDisabled', 'iconLarge']}/>
)

export const subtleIcon = () => (
  <ButtonIcon icon='icon-agregar' variant={['subtleIconButton', 'iconLarge']}/>
)

export const subtleTransparentIconClear = () => (
  <ButtonIcon icon='icon-agregar' variant={['subtleTrasnparentIconClearButton', 'iconLarge']}/>
)

export const subtleTransparentIconObscure = () => (
  <ButtonIcon icon='icon-agregar' variant={['subtleTrasnparentIconObscureButton', 'iconLarge']}/>
)

export const subtleIconDisabled = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconDisabled', 'iconLarge']}/>
)

export const iconSecondaryWithBadge = () => (
  <ButtonIcon icon='icon-pinup' variant={['smallIconButtonTransparent', 'iconSmall']} badgeValue='20' badgeVariant='primary'/>
)

export const roundIconLarge = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'roundIconLarge']}/>
)

export const roundIconMedium = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'roundIconMedium']}/>
)

export const roundIconSmall = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'roundIconSmall']}/>
)

export const roundIconExtraSmall = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'roundIconExtraSmall']}/>
)

export const roundIconExtraSmall22px = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'roundIconExtraSmall22px']}/>
)

export const roundIconExtraSmall18px = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconPrimary', 'roundIconExtraSmall18px']}/>
)

export const subtleRoundIcon = () => (
  <ButtonIcon icon='icon-agregar' variant={['subtleIconButton', 'roundIconLarge']}/>
)

export const roundIconArrow = () => (
  <ButtonIcon icon='icon-dropdown' variant={['roundIconArrow', 'roundIconLarge']}/>
)

export const roundIconDisabled = () => (
  <ButtonIcon icon='icon-agregar' variant={['iconDisabled', 'roundIconLarge']}/>
)

export const roundLarge = () => (
  <ButtonIcon text='Label' icon='icon-link' variant={['primary', 'roundLarge']}/>
)

export const roundMedium = () => (
  <ButtonIcon text='Label' icon='icon-link' variant={['primary', 'roundMedium']}/>
)

export const roundSmall = () => (
  <ButtonIcon text='Label' icon='icon-link' variant={['primary', 'roundSmall']}/>
)

export const roundExtraSmall = () => (
  <ButtonIcon text='Label' icon='icon-link' variant={['primary', 'roundExtraSmall']}/>
)

export const roundColourFeedback = () => (
  <ButtonIcon text='Label' icon='icon-check' variant={['colourFeedback', 'roundLarge']}/>
)

export const roundDisabled = () => (
  <ButtonIcon text='Label' icon='icon-link' variant={['primaryDisabled', 'roundLarge']}/>
)

export const link = () => (
  <Button variant='link'>{'Link button'}</Button>
)

export const linkTwoLines = () => (
  <Button variant='linkTwoLines' width='120px'>{'Link button de dos lineas'}</Button>
)

export const linkSubtle = () => (
  <Button variant='linkSubtle'>{'Link button'}</Button>
)

export const linkDisabled = () => (
  <Button variant='linkDisabled'>{'Link button'}</Button>
)

export const subtleButton = () => (
  <Button variant='subtleButton'>{'Label'}</Button>
)

export const mainItemSmall = () => (
  <Button variant='mainItemSmall'>{'Label'}</Button>
)

export const MainItemSmallHoldPressed = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonIcon variant='mainItemSmall' holdPress active={active} onClick={toggle} text={'Label'}/>
  )
}

export const MainButtonHoldPressed = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonIcon variant='mainButton' icon='icon-propiedades' holdPress text='Emprendimientos' active={active} onClick={toggle}/>
  )
}

export const MainButtonHoldPressedCollapsible = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Box __css={{ width: '200px' }}>
      <ButtonIcon variant='mainButton' icon='icon-propiedades' holdPress text='Emprendimientos' isCollapsible active={active} onClick={setActive} maxWidth/>
    </Box>
  )
}

export const MainButtonHoldPressedWithBadge = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Box __css={{ width: '200px' }}>
      <ButtonIcon variant='mainButton' icon='icon-propiedades' holdPress text='Emprendimientos' active={active} onClick={setActive} maxWidth badgeValue='20' badgeVariant='primary'/>
    </Box>
  )
}

export const MainButtonIconHoldPressed = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} onClick={toggle}/>
  )
}

export const MainButtonIconHoldPressedWithBadge = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress active={active} onClick={toggle} badgeValue='20' badgeVariant='primary'/>
  )
}

export const MainIconSubtleHoldPressed = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonIcon variant={['subtleIcon', 'iconExtraSmall22px']} holdPress icon='icon-propiedades' active={active} onClick={toggle} isInput/>
  )
}

export const userButton = () => (
  <ButtonIcon variant='userButton' userImage text='Nombre Usuario' style={{ backgroundColor: '#798B97' }}/>
)

export const userButtonWithImage = () => (
  <ButtonIcon variant='userButton' userImage srcImage='https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' text='Nombre Usuario' />
)

export const iconWhiteHelp = () => (
  <ButtonIcon icon='icon-dudas' variant='whiteSmallIcon' style={{ backgroundColor: '#798B97' }}/>
)

export const IconArrowDrawer = () => {
  const [isCollapse, setCollapse] = useToggle(false)

  return (
    <ButtonIcon icon='icon-atras' onClick={setCollapse} variant={isCollapse ? 'collapseButtonOpen' : 'collapseButtonClosed'} style={{ transition: '0.5s' }}/>
  )
}

export const RoundIconArrow14px = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonIcon icon='icon-dropdown' variant={['roundIconArrowRed', 'roundIconSmallIcon14px']} holdPress active={active} onClick={toggle}/>
  )
}

export const IconSubtleExtraSmall18px = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonIcon icon='icon-agregar' variant={[active ? 'subtlePetrokoIconPressed' : 'subtlePetrokoIcon', 'iconSmallSize18px']} holdPress active={active} onClick={toggle}/>
  )
}

export const buttonWithImage = () => (
  <ButtonIcon variant='mainButton' srcImage='https://static.tokkobroker.com/static/img/cec.icon.svg' text='Messenger' widthImage='16px' heightImage='16px'/>
)

export const IconInputHeader = () => {
  const [active, toggle] = useToggle(false)
  return (
    <ButtonIcon icon='icon-contactos' variant={[active ? 'subtleTrasnparentPretrokoPressed' : 'subtleTrasnparentPretroko', 'iconExtraSmall24pxWithIcon14px']} holdPress active={active} onClick={toggle}/>
  )
}

export const IconInputHeader2 = () => {
  const [active, toggle] = useToggle(false)
  return (
    <ButtonIcon icon='icon-agregar' variant={[active ? 'subtlePetrokoIconPressed' : 'subtlePetrokoIcon', 'iconSmallSize18px']} holdPress active={active} onClick={toggle}/>
  )
}
