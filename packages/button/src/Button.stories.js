import React from 'react'

import { Button } from '.'

export default {
  component: Button,
  title: 'Button',
}

export const primary = () => <Button>{'Button'}</Button>

export const secondary = () => <Button variant="secondary">{'Button'}</Button>

export const text = () => <Button variant="text">{'Button'}</Button>

// export const success = () => <Button variant="success">{'Button'}</Button>

// export const warning = () => <Button variant="warning">{'Button'}</Button>

// export const danger = () => <Button variant="danger">{'Button'}</Button>

// export const def = () => <Button variant="default">{'Button'}</Button>

export const disabled = () => <Button variant="disabled">{'Button'}</Button>

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
