import React from 'react'

import { Input } from '.'
import { useToggle } from '@oneloop/hooks'

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

export const InputWithPassword = () => {
  const [pass, setPass] = useToggle(true)

  return (
    <Input
      suffix={<span className={pass ? 'icon-ocultar' : 'icon-mostrar'} onClick={() => setPass()}/>}
      label="Label de prueba"
      placeholder="Hello World!"
      password={pass}
    />
  )
}

export const search = () => (
  <Input
    prefix={<span className='icon-buscar'/>}
    placeholder="Search"
    variant='inputSearch'
  />
)

export const searchTransparent = () => (
  <Input
    prefix={<span className='icon-buscar'/>}
    placeholder="Search"
    variant='inputSearchTransparent'
  />
)

export const searchOutlined = () => (
  <Input
    prefix={<span className='icon-buscar'/>}
    placeholder="Search"
    variant='inputSearchOutlined'
  />
)

export const searchTransparentBold = () => (
  <Input
    prefix={<span className='icon-buscar'/>}
    placeholder="Search"
    variant='inputSearchTransparent'
    bold
  />
)

export const searchPrefixSuffix = () => (
  <Input
    prefix={<span className='icon-buscar'/>}
    suffix={<span className='icon-propiedades'/>}
    placeholder="Buscar contactos, propiedades, emprendimientos o usuarios..."
    variant='inputSearchTransparent'
    width='500px'
  />
)
