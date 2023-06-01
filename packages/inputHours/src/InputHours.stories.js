import React from 'react'
import { InputHours } from '.'

export default {
  component: InputHours,
  title: 'InputHours',
  argTypes: {
    inputTime: {
      name: 'inputTime',
      description:
        'Horario inicial del input, formato day. Por defecto carga la fecha actual',
      type: 'text',
      control: { type: 'none' },
    },
    arrayInput: {
      name: 'arrayInput',
      description: 'Array de horas, por defecto carga todas las horas',
      type: 'array',
      control: { type: 'none' },
    },
    val: {
      name: 'val',
      description: 'Recibe una función que devuelve la fecha del input',
      type: 'function',
      control: { type: 'none' },
    },
    error: {
      name: 'error',
      description: 'Booleano para indicar error en el input',
      type: 'boolean',
      control: { type: 'none' },
    },
  },
}

export const Hours = () => <InputHours />
