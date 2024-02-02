import React, { useState } from 'react'
import { MultiRangeCalendar } from '.'

export default {
  component: MultiRangeCalendar,
  title: 'MultiRangeCalendar',
  argTypes: {
    doc: {
      name: 'doc',
      description:
        'Documentación click [aqui](https://shahabyazdi.github.io/react-multi-date-picker/)',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const MultiRange = () => {
  const [values] = useState([
    ['12-12-2023', '20-12-2023'],
    ['25-12-2023', '31-12-2023'],
  ])

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']

  return (
    <MultiRangeCalendar
      value={values}
      range
      multiple
      shadow={false}
      numberOfMonths={2}
      format="DD-MM-YYYY"
      readOnly
      months={months}
      weekDays={weekDays}
      hideYear
    />
  )
}
