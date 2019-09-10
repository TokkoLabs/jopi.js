import React from 'react'

import { Loader } from '.'

export default {
  component: Loader,
  title: 'Design System|Loader',
}

export const normal = () => <Loader />

export const withText = () => <Loader text="Loading" />
