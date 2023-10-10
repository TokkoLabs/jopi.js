import React from 'react'

import { Loader } from '.'

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    variant: {
      name: 'variant',
      description: '\n* **Variantes que admite:** _spinner / bounce _',
    },
    kind: {
      description: 'Color de loader bounce \n* **Variantes que admite:** _primary / secondary _',
    },
    size: {
      description: 'Tamaño del loader tipo _bounce_ \n* **Variantes que admite:** _small / medium_',
      control: { type: 'none' },
    },
  },
}

export const spinner = () => <Loader variant='spinner' />

export const spinnerMedium = () => <Loader variant='spinner' size='medium' />

export const bounce = () => <Loader variant='bounce'/>

export const bounceMedium = () => <Loader size='medium' kind='secondary' variant='bounce'/>
