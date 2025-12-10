import React from 'react'

import { Input } from '.'
import { Text } from '@quintoandar-tokko/text'
import { ButtonIcon } from '@quintoandar-tokko/button'
import { useToggle } from '@quintoandar-tokko/hooks'
import { Icon } from '@quintoandar-tokko/icons'

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    variant: {
      name: 'variant',
      description: '**Variantes de color disponibles:** [ \'input\', \'inputSearch\', \'inputSearchTransparent\', \'inputSearchOutlined\']',
      type: 'text',
      control: { type: 'none' },
    },
    variantSize: {
      name: 'variant',
      description: '**Variantes de tamaño disponibles:** [ \'inputLarge\', \'inputMedium\', \'inputSmall\']',
      type: 'text',
      control: { type: 'none' },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Texto del placeholder.',
      type: 'text',
      control: { type: 'none' },
    },
    width: {
      name: 'width',
      description: 'Width del input.',
      type: 'text',
      control: { type: 'none' },
    },
    errors: {
      name: 'errors',
      description: 'Texto que indica el error.',
      type: 'text',
      control: { type: 'none' },
    },
    infoAlert: {
      name: 'infoAlert',
      description: 'Texto que sirve para alertar al usuario.',
      type: 'text',
      control: { type: 'none' },
    },
    disabled: {
      name: 'disabled',
      description: 'Booleano que indica si esta deshabilitado o no.',
      type: 'boolean',
      control: { type: 'none' },
    },
    readonly: {
      name: 'readonly',
      description: 'Booleano que indica si el input es solo de lectura.',
      type: 'boolean',
      control: { type: 'none' },
    },
    prefix: {
      name: 'prefix',
      description: 'El prefix es lo que va adelante del input, puede ser un icono, botón, etc.',
      type: 'object',
      control: { type: 'none' },
    },
    suffix: {
      name: 'suffix',
      description: 'El suffix es lo que va al final del input, puede ser un icono, botón, etc.',
      type: 'object',
      control: { type: 'none' },
    },
    label: {
      name: 'label',
      description: 'El label es el texto que indica de que es el input.',
      type: 'text',
      control: { type: 'none' },
    },
    inline: {
      name: 'inline',
      description: 'Booleano que indica si el label tiene que ir en la misma linea que el input.',
      type: 'boolean',
      control: { type: 'none' },
    },
    password: {
      name: 'password',
      description: 'Booleano que indica si se oculta o muestra el input en el formato de contraseña.',
      type: 'boolean',
      control: { type: 'none' },
    },
  },
}

export const input = () => <Input placeholder="Placeholder text" width='300px'/>

export const InputWithOnChange = () => {
  const [value, setValue] = React.useState('')
  const [errors, setErrors] = React.useState(undefined)

  const processText = (input) => {
    setValue(input.target.value)
    if (input.target.value.length > 10) {
      setErrors('String must be 10 characters max.')
    } else {
      setErrors(undefined)
    }
  }

  return (
    <>
      <Input
        label="El nombre debe tener 10 caracteres como máximo"
        errors={errors}
        placeholder="Placeholder text"
        width='300px'
        value={value}
        onChange={(e) => processText(e) }
      />
      <Text> El valor ingresado es: {value}</Text>
    </>
  )
}

export const InputWithErrors = () => {
  const [value, setValue] = React.useState('')

  return (
    <Input
      errors="Minimo 8 caracteres."
      placeholder="Placeholder text"
      width='300px'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

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

export const inputBorderBottomVariant = () => (
  <Input variant='inputBorderBottom' variantSize='inputNoBorderRadius' prefix={<Icon icon='icon-contactos' fontSize='14px'/>} placeholder="Jacqueline Gómez" width='200px'/>
)
