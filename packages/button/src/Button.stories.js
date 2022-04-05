import React from 'react'

import { Button } from '.'

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
  <Button px={48} py={48} borderRadius={12} variant="iconPrimary">
    
  </Button>
)

export const iconSecondary = () => (
  <Button px={5} py={3} fontSize={5} variant="iconSecondary">
    {'+'}
  </Button>
)

export const iconDisabled = () => (
  <Button px={5} py={3} fontSize={5} variant="iconDisabled">
    {'+'}
  </Button>
)

export const primaryOutlineIcon = () => (
  <Button px={5} py={3} fontSize={5} variant="primaryOutline">
    {'+'}
  </Button>
)

export const secondaryOutlineIcon = () => (
  <Button px={5} py={3} fontSize={5} variant="secondaryOutlineIcon">
    {'+'}
  </Button>
)

export const outlineIconDisabled = () => (
  <Button px={5} py={3} fontSize={5} variant="outlineDisabled">
    {'+'}
  </Button>
)

export const subtleIcon = () => (
  <Button px={5} py={3} fontSize={5} variant="subtleIcon">
    {'+'}
  </Button>
)

export const subtleIconDisabled = () => (
  <Button px={5} py={3} fontSize={5} variant="iconDisabled">
    {'+'}
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
