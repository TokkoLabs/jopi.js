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
  <ButtonIcon icon="icon-agregar" variant={["iconPrimary", "iconExtraSmall18px"]}/>
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
  <ButtonIcon isRounded icon="icon-agregar" variant={["iconPrimary", "roundIconLarge"]}/>
)

export const roundIconMedium = () => (
  <ButtonIcon isRounded icon="icon-agregar" variant={["iconPrimary", "roundIconMedium"]}/>
)

export const roundIconSmall = () => (
  <ButtonIcon isRounded icon="icon-agregar" variant={["iconPrimary", "roundIconSmall"]}/>
)

export const roundIconExtraSmall = () => (
  <ButtonIcon isRounded icon="icon-agregar" variant={["iconPrimary", "roundIconExtraSmall"]}/>
)

export const roundIconExtraSmall22px = () => (
  <ButtonIcon isRounded icon="icon-agregar" variant={["iconPrimary", "roundIconExtraSmall22px"]}/>
)

export const roundIconExtraSmall18px = () => (
  <ButtonIcon isRounded icon="icon-agregar" variant={["iconPrimary", "roundIconExtraSmall18px"]}/>
)

export const subtleRoundIcon = () => (
  <ButtonIcon isRounded icon="icon-agregar" variant={["subtleIconButton", "roundIconLarge"]}/>
)

export const roundIconArrow = () => (
  <ButtonIcon isRounded icon="icon-dropdown" variant={["roundIconArrow", "roundIconLarge"]}/>
)

export const roundIconDisabled = () => (
  <ButtonIcon isRounded icon="icon-agregar" variant={["iconDisabled", "roundIconLarge"]}/>
)

export const roundLarge = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant={["primary", "roundLarge"]}/>
)

export const roundMedium = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant={["primary", "roundMedium"]}/>
)

export const roundSmall = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant={["primary", "roundSmall"]}/>
)

export const roundExtraSmall = () => (
  <ButtonRound text="Label" icon="icon-unificar" variant={["primary", "roundExtraSmall"]}/>
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
