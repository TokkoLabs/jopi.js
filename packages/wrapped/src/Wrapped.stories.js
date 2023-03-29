import React from 'react'

import { Wrapped } from '.'

export default {
  component: Wrapped,
  title: 'Wrapped',
}

export const WrappedComponent = () => {
  const misItems = ['Pedro', 'Pepito', 'Jose', 'Marcelo', 'Roberto', 'Marian Font', 'Lauti', 'Agus']

  return (
    <Wrapped items={misItems} />
  )
}
