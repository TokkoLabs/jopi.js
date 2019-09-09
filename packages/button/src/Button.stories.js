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
  <Button size="small" variant="default">
    {'O'}
  </Button>
)

export const medium = () => <Button size="medium">{'Button'}</Button>

export const large = () => <Button size="large">{'Button'}</Button>
