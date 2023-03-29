import React from 'react'

import { Loader, Spinner } from '.'

export default {
  component: Loader,
  title: 'Loader',
}

export const normal = () => <Loader variant='normal'/> 

export const spinner = () => <Loader variant='spinner' />

export const bounce = () => <Loader variant='normal'/>
