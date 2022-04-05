import React from 'react'

import { Button } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const primary = () => <Button>{'Button'}</Button>

export const primaryDisabled = () => (
  <Button variant="primaryDisabled">{'Button'}</Button>
)

export const secondary = () => <Button variant="secondary">{'Button'}</Button>

export const secondaryDisabled = () => (
  <Button variant="secondaryDisabled">{'Button'}</Button>
)

export const text = () => <Button variant="text">{'Button'}</Button>

export const textDisabled = () => (
  <Button variant="textDisabled">{'Button'}</Button>
)

export const icon = () => (
  <Button px={5} py={3} fontSize={5} variant="icon">
    {'+'}
  </Button>
)

export const iconDisabled = () => (
  <Button px={5} py={3} fontSize={5} variant="iconDisabled">
    {'+'}
  </Button>
)

export const iconSecondary = () => (
  <Button px={5} py={3} fontSize={5} variant="iconSecondary">
    {'+'}
  </Button>
)

export const iconSecondaryDisabled = () => (
  <Button px={5} py={3} fontSize={5} variant="iconDisabled">
    {'+'}
  </Button>
)

export const primaryOutlineIcon = () => (
  <Button px={5} py={3} fontSize={5} variant="primaryOutlineIcon">
    {'+'}
  </Button>
)

export const secondaryOutlineIcon = () => (
  <Button px={5} py={3} fontSize={5} variant="secondaryOutlineIcon">
    {'+'}
  </Button>
)

export const outlineIconDisabled = () => (
  <Button px={5} py={3} fontSize={5} variant="outlineIconDisabled">
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

// export const success = () => <Button variant="success">{'Button'}</Button>

// export const warning = () => <Button variant="warning">{'Button'}</Button>

// export const danger = () => <Button variant="danger">{'Button'}</Button>

// export const def = () => <Button variant="default">{'Button'}</Button>

// export const small = () => (
//   <Button px={8} py={3} borderRadius={7}>
//     {'Small'}
//   </Button>
// )

// export const medium = () => (
//   <Button px={6} py={4} fontSize={2} borderRadius={10}>
//     {'Button'}
//   </Button>
// )

// export const large = () => (
//   <Button px={8} py={4} fontSize={3}>
//     {'Button'}
//   </Button>
// )
