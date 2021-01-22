import React from 'react'
import { Add } from '@oneloop/icons'

import { Input } from '.'

export default {
  component: Input,
  title: 'Input',
}

export const placeholder = () => <Input placeholder="Hello World!" />

export const error = () => (
  <Input placeholder="Hello World!" borderColor="danger" />
)

export const success = () => (
  <Input placeholder="Hello World!" borderColor="success" />
)

export const warning = () => (
  <Input placeholder="Hello World!" borderColor="warning" />
)

export const disabled = () => <Input disabled placeholder="Hello World!" />

export const search = () => (
  <Input
    prefix={<Add />}
    suffix={<Add />}
    placeholder="Buscar"
    sx={{
      borderRadius: 'circle',
      mb: 0,
      bg: '#EBA49A',
      border: 'none',
      width: '294px',
      '::placeholder': {
        color: '#6C4B47',
      },
      ':focus': {
        border: 'none',
      },
    }}
  />
)
