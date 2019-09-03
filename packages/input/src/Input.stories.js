import React from 'react'

import Input from '.'

export default {
  component: Input,
  title: 'Design System|Input',
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
