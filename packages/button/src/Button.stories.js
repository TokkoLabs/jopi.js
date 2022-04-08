import React from 'react'

import { Button, ButtonIcon, ButtonRoundIcon, ButtonRound, ButtonMain } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const primary = () => (
  <Button>{'Label'}</Button>
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
  <ButtonIcon variant="iconPrimary"/>
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
  <ButtonRoundIcon variant="primary"/>
)

export const subtleRoundIconButton = () => (
  <ButtonRoundIcon variant="subtleIcon"/>
)

export const roundIconArrowButton = () => (
  <ButtonRoundIcon variant="roundIconArrow"/>
)

export const roundIconButtonDisabled = () => (
  <ButtonRoundIcon variant="iconDisabled"/>
)

export const roundButton = () => (
  <ButtonRound text="Label" variant="primary"/>
)

export const roundButtonColourFeedback = () => (
  <ButtonRound text="Label" variant="colourFeedback"/>
)

export const roundButtonDisabled = () => (
  <ButtonRound text="Label" variant="primaryDisabled"/>
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
