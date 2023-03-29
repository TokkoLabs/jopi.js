import React from 'react'

import { Loader } from '.'

export default {
  component: Loader,
  title: 'Loader',
}

export const spinner = () => <Loader variant='spinner' />

export const bounce = () => <Loader variant='bounce'/>

export const bounceMedium = () => <Loader size='medium' kind='secondary' variant='bounce'/>
