import React from 'react'

import { Button, ButtonIcon, ButtonRound, ButtonMain } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const primary = () => (
  <Button>{'Label'}</Button>
)

export const primaryLarge = () => (
  <Button>{'Label'}</Button>
)

export const primaryMedium = () => (
  <Button variant={["primary", "medium"]}>{'Label'}</Button>
)

export const primarySmall = () => (
  <Button variant={["primary", "small"]}>{'Label'}</Button>
)

export const primaryExtraSmall = () => (
  <Button variant={["primary", "extraSmall"]}>{'Label'}</Button>
)

export const primaryDisabled = () => (
  <Button variant="primaryDisabled">{'Label'}</Button>
)

export const secondary = () => (
  <Button variant="secondary">{'Label'}</Button>
)

export const secondaryDisabled = () => (
  <Button variant="primaryDisabled">{'Label'}</Button>
)

export const primaryOutline = () => (
  <Button variant="primaryOutline">{'Label'}</Button>
)

export const secondaryOutline = () => (
  <Button variant="secondaryOutlineIcon">{'Label'}</Button>
)

export const outlineDisabled = () => (
  <Button variant="outlineDisabled">{'Label'}</Button>
)

export const primaryText = () => (
  <Button variant="primaryText">{'Label'}</Button>
)

export const secondaryText = () => (
  <Button variant="secondaryText">{'Label'}</Button>
)

export const subtleText = () => (
  <Button variant="subtleText">{'Label'}</Button>
)

export const textDisabled = () => (
  <Button variant="textDisabled">{'Label'}</Button>
)

export const iconPrimaryLarge = () => (
  <ButtonIcon icon="icon-agregar" variant={["iconPrimary", "iconLarge"]}/>
)

export const iconPrimaryMedium = () => (
  <ButtonIcon icon="icon-agregar" variant={["iconPrimary", "iconMedium"]}/>
)

export const iconPrimarySmall = () => (
  <ButtonIcon icon="icon-agregar" variant={["iconPrimary", "iconSmall"]}/>
)

export const iconPrimaryExtraSmall = () => (
  <ButtonIcon icon="icon-agregar" variant={["iconPrimary", "iconExtraSmall"]}/>
)

export const iconPrimaryExtraSmall22px = () => (
  <ButtonIcon icon="icon-agregar" variant={["iconPrimary", "iconExtraSmall22px"]}/>
)

export const iconPrimaryExtraSmall18px = () => (
  <ButtonIcon icon="icon-agregar" variant={["iconPrimary", "iconExtraSmall18px"]} py='5px' px='9px' heightIcon='12px'/>
)

export const iconSecondary = () => (
  <ButtonIcon icon="icon-agregar" variant="iconSecondary"/>
)

export const iconDisabled = () => (
  <ButtonIcon icon="icon-agregar" variant="iconDisabled"/>
)

export const primaryOutlineIcon = () => (
  <ButtonIcon icon="icon-agregar" variant="primaryOutline"/>
)

export const secondaryOutlineIcon = () => (
  <ButtonIcon icon="icon-agregar" variant="secondaryOutlineIcon"/>
)

export const outlineIconDisabled = () => (
  <ButtonIcon icon="icon-agregar" variant="outlineDisabled"/>
)

export const subtleIcon = () => (
  <ButtonIcon icon="icon-agregar" variant="subtleIconButton"/>
)

export const subtleTransparentIconClear = () => (
  <ButtonIcon icon="icon-agregar" variant="subtleTrasnparentIconClearButton"/>
)

export const subtleTransparentIconObscure = () => (
  <ButtonIcon icon="icon-agregar" variant="subtleTrasnparentIconObscureButton"/>
)

export const subtleIconDisabled = () => (
  <ButtonIcon icon="icon-agregar" variant="iconDisabled"/>
)

export const roundIconLarge = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="primary"/>
)

export const roundIconMedium = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="iconPrimary" height='38px' width='38px'/>
)

export const roundIconSmall = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="iconPrimary" height='32px' width='32px' fontSize='22px' heightIcon='22px'/>
)

export const roundIconExtraSmall = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="iconPrimary" height='26px' width='26px' fontSize='16px' heightIcon='16px' py='5px' px='12px'/>
)

export const roundIconExtraSmall22px = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="iconPrimary" height='22px' width='22px' fontSize='16px' heightIcon='16px' py='4px' px='10px'/>
)

export const roundIconExtraSmall18px = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="iconPrimary" height='18px' width='18px' fontSize='12px' heightIcon='12px' py='4px' px='8px'/>
)

export const subtleRoundIcon = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="subtleIconButton"/>
)

export const roundIconArrow = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-dropdown" variant="roundIconArrow"/>
)

export const roundIconDisabled = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="iconDisabled"/>
)

export const roundLarge = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant="primary"/>
)

export const roundMedium = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant="primary" height='38px' borderRadius='20px' fontSize='14px' heightIcon='16px' py='10px' px='24px' fontSizeIcon='16px' gap='4px'/>
)

export const roundSmall = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant="primary" height='32px' borderRadius='16px' fontSize='12px' heightIcon='16px' py='8px' px='14px' fontSizeIcon='16px' gap='4px'/>
)

export const roundExtraSmall = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant="primary" height='26px' borderRadius='12px' fontSize='12px' heightIcon='16px' py='5px' px='12px' fontSizeIcon='16px' gap='4px'/>
)

export const roundColourFeedback = () => (
  <ButtonRound text="Label" icon="icon-check" variant="colourFeedback"/>
)

export const roundDisabled = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant="primaryDisabled"/>
)

export const link = () => (
  <Button variant="link">{'Link button'}</Button>
)

export const linkSubtle = () => (
  <Button variant="linkSubtle">{'Link button'}</Button>
)

export const linkDisabled = () => (
  <Button variant="linkDisabled">{'Link button'}</Button>
)

export const subtleButton = () => (
  <Button variant="subtleButton">{'Label'}</Button>
)

export const mainButton = () => (
  <ButtonMain variant="mainButton" icon="icon-propiedades" text="Emprendimientos"/>
)

export const mainButtonCollapsible = () => (
  <ButtonMain variant="mainButton" icon="icon-propiedades" text="Emprendimientos" isCollapsible/>
)
