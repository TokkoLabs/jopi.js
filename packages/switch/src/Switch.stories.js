import React from 'react'

import { Switch } from '.'

export default {
  component: Switch,
  title: 'Design System|Switch',
}

export const normal = () => <Switch />
export const alt = () => <Switch variant="alt" />
export const disabled = () => <Switch disabled />
