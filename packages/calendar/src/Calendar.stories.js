import React, { useState } from 'react'
import { Calendar } from '.'

export default {
  component: Calendar,
  title: 'Calendar',
  argTypes: {
    variant: {
      name: 'variant',
      description:
        '**days** (muestra el solo el dia), **fullCalendar** (muestra el calendario completo)',
      type: 'text',
      control: { type: 'none' },
    },
    event: {
      name: 'event',
      description:
        'Array de eventos. [Doc](https://fullcalendar.io/docs/event-parsing)',
      type: 'text',
      control: { type: 'none' },
    },
    initialDate: {
      name: 'initialDate',
      description:
        'Asignar una fecha inicial, por defecto muestra la fecha actual (string).',
      type: 'text',
      control: { type: 'none' },
    },
    scrollTime: {
      name: 'scrollTime',
      description:
        'Posiciona el scroll en la fecha que elijamos, por defecto esta en 06:00 (string).',
      type: 'text',
      control: { type: 'none' },
    },
    height: {
      name: 'height',
      description: 'Altura del calendar (number).',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const Days = () => {
  const [events] = useState([
    {
      title: 'Evento recurrente',
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
      startTime: '10:00',
      endTime: '11:00',
      startRecur: new Date(),
      endRecur: false,
      editable: true,
    },
  ])

  return <Calendar variant={'days'} events={events} />
}

export const fullCalendar = () => <Calendar variant={'fullCalendar'} />
