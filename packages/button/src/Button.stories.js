import React from 'react'

import { Button, ButtonIcon, ButtonRoundIcon, ButtonRound, ButtonMain } from '.'

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

export const iconPrimary = () => (
  <ButtonIcon icon="icon-agregar" variant="iconPrimary">{'text'}</ButtonIcon>
)

export const iconSecondary = () => (
  <ButtonIcon variant="iconSecondary"/>
)

export const iconDisabled = () => (
  <ButtonIcon variant="iconDisabled"/>
)

export const primaryOutlineIcon = () => (
  <ButtonIcon variant="primaryOutline"/>
)

export const secondaryOutlineIcon = () => (
  <ButtonIcon variant="secondaryOutlineIcon"/>
)

export const outlineIconDisabled = () => (
  <ButtonIcon variant="outlineDisabled"/>
)

export const subtleIcon = () => (
  <ButtonIcon variant="subtleIcon"/>
)

export const subtleIconDisabled = () => (
  <ButtonIcon variant="iconDisabled"/>
)

export const roundIconButton = () => (
  <ButtonRoundIcon icon="icon-agregar" variant="primary"/>
)

export const subtleRoundIconButton = () => (
  <ButtonRoundIcon icon="icon-agregar" variant="subtleIcon"/>
)

export const roundIconArrowButton = () => (
  <ButtonRoundIcon icon="icon-dropdown" variant="roundIconArrow"/>
)

export const roundIconButtonDisabled = () => (
  <ButtonRoundIcon icon="icon-agregar" variant="iconDisabled"/>
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
