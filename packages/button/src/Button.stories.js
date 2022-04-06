import React from 'react'
import { Svg } from '@oneloop/icons'

import { Button } from '.'
import { ButtonIcon } from '.'
import { ButtonRoundIcon } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const primary = () => (
  <Button>{'Button'}</Button>
)

export const primaryDisabled = () => (
  <Button variant="primaryDisabled">{'Button'}</Button>
)

export const secondary = () => (
  <Button variant="secondary">{'Button'}</Button>
)

export const secondaryDisabled = () => (
  <Button variant="secondaryDisabled">{'Button'}</Button>
)

export const primaryOutline = () => (
  <Button variant="primaryOutline">{'Button'}</Button>
)

export const secondaryOutline = () => (
  <Button variant="secondaryOutlineIcon">{'Button'}</Button>
)

export const outlineDisabled = () => (
  <Button variant="outlineDisabled">{'Button'}</Button>
)

export const primaryText = () => (
  <Button variant="primaryText">{'Button'}</Button>
)

export const secondaryText = () => (
  <Button variant="secondaryText">{'Button'}</Button>
)

export const subtleText = () => (
  <Button variant="subtleText">{'Button'}</Button>
)

export const textDisabled = () => (
  <Button variant="textDisabled">{'Button'}</Button>
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
 <ButtonRoundIcon variant="primary"></ButtonRoundIcon>
)

export const subtleRoundIconButton = () => (
  <ButtonRoundIcon variant="subtleIcon"></ButtonRoundIcon>
)

export const roundIconButtonDisabled = () => (
  <ButtonRoundIcon variant="iconDisabled"></ButtonRoundIcon>
)

// Falta el de la flecha para abajo


// Round Button

export const roundButton = () => (
  <Button borderRadius={24} height={48}>
    {'Label'}
  </Button>
)




export const link = () => (
  <Button px={0} py={0} variant="link">
    {'Button'}
  </Button>
)

export const linkDisabled = () => (
  <Button px={0} py={0} variant="linkDisabled">
    {'Button'}
  </Button>
)
