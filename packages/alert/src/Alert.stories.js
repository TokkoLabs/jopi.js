import React from 'react'

import { Alert } from '.'

export default {
  component: Alert,
  title: 'Design System|Alert',
}

export const success = () => (
  <Alert text="Éxito!!! Pudiste hacer todo lo que querías y te salió pipi cucu!" />
)

export const warning = () => <Alert type="warning" text="Danger Zone!!!!" />

export const danger = () => (
  <Alert type="danger" text="NOOOOOO!!! Perdonanos, explotó todo! :(" />
)
