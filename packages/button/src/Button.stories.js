import React from 'react'

import { Button } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const primary = () => <Button>{'Button'}</Button>

export const primaryHover = () => (
  <Button variant="primaryHover">{'Button'}</Button>
)

export const primaryPressed = () => (
  <Button variant="pressed">{'Button'}</Button>
)

export const primaryDisabled = () => (
  <Button variant="primaryDisabled">{'Button'}</Button>
)

export const secondary = () => <Button variant="secondary">{'Button'}</Button>

export const secondaryHover = () => (
  <Button variant="secondaryHover">{'Button'}</Button>
)

export const secondaryPressed = () => (
  <Button variant="pressed">{'Button'}</Button>
)

export const secondaryDisabled = () => (
  <Button variant="secondaryDisabled">{'Button'}</Button>
)

export const text = () => <Button variant="text">{'Button'}</Button>

export const textHover = () => <Button variant="textHover">{'Button'}</Button>

export const textPressed = () => (
  <Button variant="textPressed">{'Button'}</Button>
)

export const textDisabled = () => (
  <Button variant="textDisabled">{'Button'}</Button>
)

// export const success = () => <Button variant="success">{'Button'}</Button>

// export const warning = () => <Button variant="warning">{'Button'}</Button>

// export const danger = () => <Button variant="danger">{'Button'}</Button>

// export const def = () => <Button variant="default">{'Button'}</Button>

export const small = () => (
  <Button px={8} py={3} borderRadius={7}>
    {'Small'}
  </Button>
)

export const medium = () => (
  <Button px={6} py={4} fontSize={2} borderRadius={10}>
    {'Button'}
  </Button>
)

export const large = () => (
  <Button px={8} py={4} fontSize={3}>
    {'Button'}
  </Button>
)
