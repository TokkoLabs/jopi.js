import React from 'react'

import { Button } from '.'

export default {
  component: Button,
  title: 'Design System|Button',
}

export const primary = () => <Button>{'Button'}</Button>

export const secondary = () => <Button variant="secondary">{'Button'}</Button>

export const success = () => <Button variant="success">{'Button'}</Button>

export const warning = () => <Button variant="warning">{'Button'}</Button>

export const danger = () => <Button variant="danger">{'Button'}</Button>

export const def = () => <Button variant="default">{'Button'}</Button>

export const small = () => (
  <Button size={24} p={2} fontSize={2} lineHeight={0} variant="default">
    {'O'}
  </Button>
)

export const medium = () => (
  <Button px={6} py={4} fontSize={2}>
    {'Button'}
  </Button>
)

export const large = () => (
  <Button px={8} py={4} fontSize={3}>
    {'Button'}
  </Button>
)
