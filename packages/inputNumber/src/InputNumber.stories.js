import React, { useState } from 'react'
import { InputNumber } from '.'
import { Text } from '@quintoandar-tokko/text'

export default {
  component: InputNumber,
  title: 'InputNumber',
  argTypes: {
    variant: {
      name: 'variant',
      description: "**Variantes de color disponibles:** [ 'default']",
      type: 'text',
      control: { type: 'none' },
    },
    max: {
      name: 'max',
      description: 'Número máximo del input',
      type: 'number',
      control: { type: 'none' },
    },
    min: {
      name: 'min',
      description: 'Número mínimo del input',
      type: 'number',
      control: { type: 'none' },
    },
    startVal: {
      name: 'startVal',
      description: 'Valor inicial',
      type: 'number',
      control: { type: 'none' },
    },
    step: {
      name: 'step',
      description: 'Intervalo para agregar y restar',
      type: 'number',
      control: { type: 'none' },
    },
    val: {
      name: 'val',
      description:
        'Recibe la función donde se quiera guardar el valor mostrado',
      type: 'function',
      control: { type: 'none' },
    },
    text: {
      name: 'text',
      description: 'Texto de la etiqueta',
      type: 'string',
      control: { type: 'none' },
    },
    error: {
      name: 'error',
      description: 'Booleano para indicar que el campo falta de completar',
      type: 'boolean',
      control: { type: 'none' },
    },
    showArrows: {
      name: 'showArrows',
      description: 'Booleano para indicar si se muestran las flechas',
      type: 'boolean',
      control: { type: 'none' },
    },
  },
}

export const Minutes = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <InputNumber val={setValue} text="Minutes before" />
      <Text>{value}</Text>
    </>
  )
}
