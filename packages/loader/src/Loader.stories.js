import React from 'react'

import { Loader, Spinner } from '.'

export default {
  component: Loader,
  title: 'Loader',
}

export const normal = () => <Loader />

export const withText = () => <Loader text="Loading" />

export const spinner = () => <Spinner />
