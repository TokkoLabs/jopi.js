import React from 'react'
import { Button, ButtonIcon, ButtonRound, ButtonMain, ButtonHoldPress, ButtonUser } from '.'
import { useToggle } from '@oneloop/hooks'

export default {
  component: Button,
  title: 'Button',
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
  <Button variant={['primaryDisabled', 'large']}>{'Label'}</Button>
)

export const primaryOutline = () => (
  <Button variant={['primaryOutline', 'large']}>{'Label'}</Button>
)

export const secondaryOutline = () => (
  <Button variant={['secondaryOutlineIcon', 'large']}>{'Label'}</Button>
)

export const outlineDisabled = () => (
  <Button variant={['outlineDisabled', 'large']}>{'Label'}</Button>
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

export const primaryOutlineIcon = () => (
  <ButtonIcon icon='icon-agregar' variant={['primaryOutline', 'iconLarge']}/>
)

export const secondaryOutlineIcon = () => (
  <ButtonIcon icon='icon-agregar' variant={['secondaryOutlineIcon', 'iconLarge']}/>
)

export const outlineIconDisabled = () => (
  <ButtonIcon icon='icon-agregar' variant={['outlineDisabled', 'iconLarge']}/>
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
  <ButtonIcon isRounded icon='icon-agregar' variant={['iconPrimary', 'roundIconLarge']}/>
)

export const roundIconMedium = () => (
  <ButtonIcon isRounded icon='icon-agregar' variant={['iconPrimary', 'roundIconMedium']}/>
)

export const roundIconSmall = () => (
  <ButtonIcon isRounded icon='icon-agregar' variant={['iconPrimary', 'roundIconSmall']}/>
)

export const roundIconExtraSmall = () => (
  <ButtonIcon isRounded icon='icon-agregar' variant={['iconPrimary', 'roundIconExtraSmall']}/>
)

export const roundIconExtraSmall22px = () => (
  <ButtonIcon isRounded icon='icon-agregar' variant={['iconPrimary', 'roundIconExtraSmall22px']}/>
)

export const roundIconExtraSmall18px = () => (
  <ButtonIcon isRounded icon='icon-agregar' variant={['iconPrimary', 'roundIconExtraSmall18px']}/>
)

export const subtleRoundIcon = () => (
  <ButtonIcon isRounded icon='icon-agregar' variant={['subtleIconButton', 'roundIconLarge']}/>
)

export const roundIconArrow = () => (
  <ButtonIcon isRounded icon='icon-dropdown' variant={['roundIconArrow', 'roundIconLarge']}/>
)

export const roundIconDisabled = () => (
  <ButtonIcon isRounded icon='icon-agregar' variant={['iconDisabled', 'roundIconLarge']}/>
)

export const roundLarge = () => (
  <ButtonRound text='Label' icon='icon-unificar' variant={['primary', 'roundLarge']}/>
)

export const roundMedium = () => (
  <ButtonRound text='Label' icon='icon-unificar' variant={['primary', 'roundMedium']}/>
)

export const roundSmall = () => (
  <ButtonRound text='Label' icon='icon-unificar' variant={['primary', 'roundSmall']}/>
)

export const roundExtraSmall = () => (
  <ButtonRound text='Label' icon='icon-unificar' variant={['primary', 'roundExtraSmall']}/>
)

export const roundColourFeedback = () => (
  <ButtonRound text='Label' icon='icon-check' variant='colourFeedback'/>
)

export const roundDisabled = () => (
  <ButtonRound text='Label' icon='icon-unificar' variant='primaryDisabled'/>
)

export const link = () => (
  <Button variant='link'>{'Link button'}</Button>
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
    <ButtonHoldPress variant='mainItemSmall' active={active} onClick={toggle} text={'Label'}/>
  )
}

export const MainButton = () => {
  const [active, setActive] = useToggle(false)

  return (
    <ButtonMain variant='mainButton' icon='icon-propiedades' text='Emprendimientos' active={active} onClick={setActive}/>
  )
}

export const MainButtonCollapsible = () => {
  const [active, setActive] = useToggle(false)

  return (
    <ButtonMain variant='mainButton' icon='icon-propiedades' text='Emprendimientos' isCollapsible active={active} onClick={setActive}/>
  )
}

export const userButton = () => (
  <ButtonUser variant='userButton' text='Nombre Usuario' style={{ backgroundColor: '#798B97' }}/>
)

export const userButtonWithImage = () => (
  <ButtonUser variant='userButton' srcImage='https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' text='Nombre Usuario' />
)

export const MainIconButtonHoldPressed = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' active={active} onClick={toggle} badgeValue='20' badgeVariant='primary'/>
  )
}

export const iconWhiteHelp = () => (
  <ButtonIcon icon='icon-dudas' variant='whiteExtraSmall24px' style={{ backgroundColor: '#798B97', paddingTop: '10px', paddingRight: '7.2px' }}/>
)

export const MainIconSubtleHoldPressed = () => {
  const [active, toggle] = useToggle(false)

  return (
    <ButtonHoldPress variant={['subtleIcon', 'iconExtraSmall22px']} icon='icon-propiedades' active={active} onClick={toggle} isInput/>
  )
}

export const iconArrowDrawer = () => {
  return (
    <ButtonIcon isRounded icon='icon-atras' variant={'collapseButtonOpen'}/>
  )
}
