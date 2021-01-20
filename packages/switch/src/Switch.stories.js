import React from 'react'
import { useToggle } from '@oneloop/hooks'

import { Switch } from '.'

export default {
  component: Switch,
  title: 'Switch',
}

export const normal = () =>
  React.createElement(() => {
    const [on, toggle] = useToggle(false)
    return <Switch aria-checked={on} onClick={toggle} />
  })
export const alt = () =>
  React.createElement(() => {
    const [on, toggle] = useToggle(false)
    return <Switch aria-checked={on} onClick={toggle} variant="alt" />
  })
export const disabled = () => <Switch disabled />
