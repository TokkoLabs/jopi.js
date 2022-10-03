import React from 'react'

import { Input } from '.'
import { ButtonIcon } from '@oneloop/button'
import { useToggle } from '@oneloop/hooks'
import { Icon } from '@oneloop/icons'

export default {
  component: Input,
  title: 'Input',
}

export const input = () => <Input placeholder="Placeholder text" width='300px'/>

export const inputWithErrors = () => (
  <Input errors="Minimo 8 caracteres." placeholder="Placeholder text" width='300px'/>
)

export const inputWithInfoAlert = () => (
  <Input infoAlert="Campo Requerido" placeholder="Placeholder text" width='300px'/>
)

export const disabled = () => <Input disabled placeholder="Hello World!" width='300px'/>

export const readOnly = () => <Input readonly placeholder="Hello World!" width='300px'/>

export const inputMedium = () => <Input placeholder="Placeholder text" variantSize='inputMedium' width='300px'/>

export const inputSmall = () => <Input placeholder="Placeholder text" variantSize='inputSmall' width='300px'/>

export const inputWithIcon = () => (
  <Input prefix={<Icon icon='icon-email' fontSize='14px'/>} placeholder="Hello World!" width='300px'/>
)
export const inputWithIconMedium = () => (
  <Input prefix={<Icon icon='icon-email' fontSize='12px'/>} placeholder="Hello World!" variantSize='inputMedium' width='300px'/>
)
export const inputWithIconSmall = () => (
  <Input prefix={<Icon icon='icon-email' fontSize='11px'/>} placeholder="Hello World!" variantSize='inputSmall' width='300px'/>
)

export const inputWithLabel = () => (
  <Input label="Label de prueba" placeholder="Hello World!" width='300px'/>
)

export const inputWithLabelIcon = () => (
  <Input prefix={<Icon icon='icon-email' fontSize='14px'/>} label="Label de prueba" placeholder="Hello World!" width='300px'/>
)

export const inputTransparent = () => <Input placeholder="Placeholder text" variant="inputTransparent" width='300px'/>

export const inputInlineLabel = () => (
  <Input label="Label" placeholder="Hello World!" inline width='300px'/>
)

export const InputWithPassword = () => {
  const [pass, setPass] = useToggle(true)

  return (
    <Input
      suffix={<Icon icon={pass ? 'icon-ocultar' : 'icon-ver'} fontSize='14px' onClick={() => setPass()}/>}
      label="Label de prueba"
      placeholder="Hello World!"
      password={pass}
      width='300px'
    />
  )
}

export const Search = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<Icon icon='icon-buscar' fontSize='14px'/>}
      suffix={ text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => setText('')}/> : undefined }
      placeholder="Search"
      variant='inputSearch'
      width='300px'
      onChange={e => setText(e.target.value)}
      value={text}
    />
  )
}

export const SearchTransparent = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<Icon icon='icon-buscar' fontSize='14px'/>}
      suffix={ text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => setText('')}/> : undefined }
      placeholder="Search"
      variant='inputSearchTransparent'
      width='300px'
      onChange={e => setText(e.target.value)}
      value={text}
    />
  )
}

export const SearchOutlined = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<Icon icon='icon-buscar' fontSize='14px'/>}
      suffix={ text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => setText('')}/> : undefined }
      placeholder="Search"
      variant='inputSearchOutlined'
      width='300px'
      onChange={e => setText(e.target.value)}
      value={text}
    />
  )
}

export const SearchTransparentBold = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<Icon icon='icon-buscar' fontSize='14px'/>}
      suffix={ text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => setText('')}/> : undefined }
      placeholder="Search"
      variant='inputSearchTransparent'
      bold
      width='300px'
      onChange={e => setText(e.target.value)}
      value={text}
    />
  )
}

export const SearchPrefixSuffix = () => (
  <Input
    prefix={<Icon icon='icon-buscar' fontSize='14px'/>}
    suffix={<Icon icon='icon-propiedades' fontSize='14px'/>}
    placeholder="Buscar contactos, propiedades, emprendimientos o usuarios..."
    variant='inputSearchTransparent'
    width='500px'
  />
)
