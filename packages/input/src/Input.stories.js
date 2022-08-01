import React from 'react'
import { Add } from '@oneloop/icons'

import { Input } from '.'

export default {
  component: Input,
  title: 'Input',
}

export const input = () => <Input placeholder="Placeholder text" />

export const inputWithErrors = () => (
  <Input errors="Minimo 8 caracteres." placeholder="Placeholder text" />
)

export const inputWithInfoAlert = () => (
  <Input infoAlert="Campo Requerido" placeholder="Placeholder text" />
)

export const disabled = () => <Input disabled placeholder="Hello World!" />

export const readOnly = () => <Input readonly placeholder="Hello World!" />

export const inputMedium = () => <Input placeholder="Placeholder text" variantSize='inputMedium' />

export const inputSmall = () => <Input placeholder="Placeholder text" variantSize='inputSmall' />


export const inputWithIcon = () => (
  <Input prefix={<span className='icon-email'/>} placeholder="Hello World!" />
)
export const inputWithIconMedium = () => (
  <Input prefix={<span className='icon-email'/>} placeholder="Hello World!" variantSize='inputMedium' />
)
export const inputWithIconSmall = () => (
  <Input prefix={<span className='icon-email'/>} placeholder="Hello World!" variantSize='inputSmall' />
)

export const inputWithLabel = () => (
  <Input label="Label de prueba" placeholder="Hello World!" />
)

export const inputWithLabelIcon = () => (
  <Input prefix={<span className='icon-email'/>} label="Label de prueba" placeholder="Hello World!" />
)

export const inputTransparent = () => <Input placeholder="Placeholder text" variant="inputTransparent" />

export const inputInlineLabel = () => (
  <Input label="Label" placeholder="Hello World!" inline />
)

export const inputWithPassword = () => (
  <Input label="Label de prueba" placeholder="Hello World!" password />
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
