import React from 'react'

import Button from '.'

export default {
  component: Button,
  title: 'Design System|Button',
}

export const primary = () => <Button>{'Button'}</Button>

export const secondary = () => <Button kind="secondary">{'Button'}</Button>

export const small = () => <Button size="small">{'Button'}</Button>

export const medium = () => <Button size="medium">{'Button'}</Button>

export const large = () => <Button size="large">{'Button'}</Button>
