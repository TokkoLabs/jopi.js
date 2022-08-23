import React from 'react'

import { Input } from '.'
import { ButtonIcon } from '@oneloop/button'
import { useToggle } from '@oneloop/hooks'

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
  <Input prefix={<span className='icon-email'/>} placeholder="Hello World!" width='300px'/>
)
export const inputWithIconMedium = () => (
  <Input prefix={<span className='icon-email'/>} placeholder="Hello World!" variantSize='inputMedium' width='300px'/>
)
export const inputWithIconSmall = () => (
  <Input prefix={<span className='icon-email'/>} placeholder="Hello World!" variantSize='inputSmall' width='300px'/>
)

export const inputWithLabel = () => (
  <Input label="Label de prueba" placeholder="Hello World!" width='300px'/>
)

export const inputWithLabelIcon = () => (
  <Input prefix={<span className='icon-email'/>} label="Label de prueba" placeholder="Hello World!" width='300px'/>
)

export const inputTransparent = () => <Input placeholder="Placeholder text" variant="inputTransparent" width='300px'/>

export const inputInlineLabel = () => (
  <Input label="Label" placeholder="Hello World!" inline width='300px'/>
)

export const InputWithPassword = () => {
  const [pass, setPass] = useToggle(true)

  return (
    <Input
      suffix={<span className={pass ? 'icon-ocultar' : 'icon-mostrar'} onClick={() => setPass()}/>}
      label="Label de prueba"
      placeholder="Hello World!"
      password={pass}
      width='300px'
    />
  )
}

export const search = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<span className='icon-buscar'/>}
      suffix={ text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => setText('')}/> : undefined }
      placeholder="Search"
      variant='inputSearch'
      width='300px'
      onChange={e => setText(e.target.value)}
      value={text}
    />
  )
}

export const searchTransparent = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<span className='icon-buscar'/>}
      suffix={ text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => setText('')}/> : undefined }
      placeholder="Search"
      variant='inputSearchTransparent'
      width='300px'
      onChange={e => setText(e.target.value)}
      value={text}
    />
  )
}

export const searchOutlined = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<span className='icon-buscar'/>}
      suffix={ text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => setText('')}/> : undefined }
      placeholder="Search"
      variant='inputSearchOutlined'
      width='300px'
      onChange={e => setText(e.target.value)}
      value={text}
    />
  )
}

export const searchTransparentBold = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      prefix={<span className='icon-buscar'/>}
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

export const searchPrefixSuffix = () => (
  <Input
    prefix={<span className='icon-buscar'/>}
    suffix={<span className='icon-propiedades'/>}
    placeholder="Buscar contactos, propiedades, emprendimientos o usuarios..."
    variant='inputSearchTransparent'
    width='500px'
  />
)
