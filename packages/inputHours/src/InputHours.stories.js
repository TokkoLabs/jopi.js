import React, { useState } from 'react'
import { InputHours } from '.'
import { format, isBefore } from 'date-fns'
import { Text } from '@oneloop/text'
import { Button } from '@oneloop/button'

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
      description: 'Booleano para indicar error en el inputs',
      type: 'boolean',
      control: { type: 'none' },
    },
  },
}

export const Hours = () => {
  const [value, setValue] = useState(new Date())
  const [newValue, setNewValue] = useState(new Date())
  return (
    <>
      <InputHours
        val={setValue}
        inputTime={value}
        listenTime={newValue}
        error={isBefore(value, new Date())}
      />
      <Text>{format(value, 'dd/MM/yyy HH:mm')}</Text>
      <Button onClick={() => setNewValue(new Date('August 19, 1975 23:15:30'))}>
        set time
      </Button>
    </>
  )
}
