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
  <Button height='38px' borderRadius='10px' fontSize='14px' >{'Label'}</Button>
)

export const primarySmall = () => (
  <Button height='32px' borderRadius='6px' fontSize='12px' >{'Label'}</Button>
)

export const primaryExtraSmall = () => (
  <Button height='26px' borderRadius='6px' fontSize='12px' >{'Label'}</Button>
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
  <ButtonIcon icon="icon-agregar" variant="iconPrimary" />
)

export const iconPrimaryMedium = () => (
  <ButtonIcon icon="icon-agregar" variant="iconPrimary" height='38px' width='38px' borderRadius='10px' fontSize='20px'/>
)

export const iconPrimarySmall = () => (
  <ButtonIcon icon="icon-agregar" variant="iconPrimary" height='32px' width='32px' borderRadius='6px' fontSize='12px'/>
)

export const iconPrimaryExtraSmall = () => (
  <ButtonIcon icon="icon-agregar" variant="iconPrimary" height='26px' width='26px' borderRadius='4px' fontSize='8px'/>
)

export const iconPrimaryExtraSmallX2 = () => (
  <ButtonIcon icon="icon-agregar" variant="iconPrimary" height='22px' width='22px' borderRadius='4px' fontSize='8px' padding='28%'/>
)

export const iconPrimaryExtraSmallX3 = () => (
  <ButtonIcon icon="icon-agregar" variant="iconPrimary" height='18px' width='18px' borderRadius='4px' fontSize='8px' padding='18%'/>
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
  <ButtonIcon icon="icon-agregar" variant="subtleIcon"/>
)

export const subtleIconDisabled = () => (
  <ButtonIcon icon="icon-agregar" variant="iconDisabled"/>
)

export const roundIconButton = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="primary"/>
)

export const subtleRoundIconButton = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-agregar" variant="subtleIcon"/>
)

export const roundIconArrowButton = () => (
  <ButtonIcon isRounded borderRadius={99999} icon="icon-dropdown" variant="roundIconArrow"/>
)

export const roundIconButtonDisabled = () => (
  <ButtonIcon isRounded={true} icon="icon-agregar" variant="iconDisabled"/>
)

export const roundButton = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant="primary"/>
)

export const roundButtonColourFeedback = () => (
  <ButtonRound text="Label" icon="icon-check" variant="colourFeedback"/>
)

export const roundButtonDisabled = () => (
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
