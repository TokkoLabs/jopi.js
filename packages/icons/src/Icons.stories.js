import React from 'react'

import { Times, Check, Exclamation } from '.'

export default {
  component: Times,
  title: 'Design System|Icons',
}

export const times = () => (
  <React.Fragment>
    <Times />
    <Times color="#757575" />
    <Times color="white" />
  </React.Fragment>
)

export const check = () => <Check />

export const exclamation = () => <Exclamation />
