import React from 'react'
import { Add } from '@oneloop/icons'

import { Input } from '.'

export default {
  component: Input,
  title: 'Input',
}

export const input = () => <Input placeholder="Hello World!" />

export const inputWithIcon = () => (
  <Input prefix={<Add />} placeholder="Hello World!" />
)

export const inputWithLabel = () => (
  <Input label="Label de prueba" placeholder="Hello World!" />
)

// export const error = () => (
//   <Input placeholder="Hello World!" borderColor="danger" />
// )

// export const success = () => (
//   <Input placeholder="Hello World!" borderColor="success" />
// )

// export const warning = () => (
//   <Input placeholder="Hello World!" borderColor="warning" />
// )

// export const disabled = () => <Input disabled placeholder="Hello World!" />

export const search = () => (
  <Input
    prefix={<Add />}
    suffix={<Add />}
    placeholder="Buscar contactos, propiedades, emprendimientos o usuarios..."
    sx={{
      borderRadius: 'input',
      mb: 0,
      bg: '#FFF',
      border: 'none',
      width: '100%',
      '::placeholder': {
        color: '#6C4B47',
      },
    }}
  />
)
