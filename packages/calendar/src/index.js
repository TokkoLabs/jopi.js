import React from 'react'
import { Box } from '@oneloop/box'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import '../styles/calendar.css'
import esLocale from '@fullcalendar/core/locales/es-us'

const date = new Date()

const CalendarOptions = {
  days: {
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      meridiem: false,
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
    },
    plugins: [interactionPlugin, timeGridPlugin],
    initialView: 'timeGridDay',
    headerToolbar: {
      start: 'prev',
      center: 'title',
      end: 'next',
    },
    dayHeaders: false,
    stickyFooterScrollbar: false,
  },
  fullCalendar: {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
  },
}

export const Calendar = ({
  variant,
  events,
  initialDate,
  scrollTime,
  height,
  moreOptions,
}) => {
  const options = {
    ...CalendarOptions[variant],
    ...moreOptions,
    events: events || [],
    initialDate: initialDate,
    scrollTime: scrollTime || `${date.getHours() - 2}:00:00`,
    height: height,
  }

  return (
    <Box id={variant}>
      <FullCalendar locale={esLocale} {...options} />{' '}
    </Box>
  )
}
