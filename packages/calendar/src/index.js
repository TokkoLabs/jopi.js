import React from 'react'
import { Box } from '@oneloop/box'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import rrulePlugin from '@fullcalendar/rrule'
import FullCalendar from '@fullcalendar/react'
import '../styles/calendar.css'
import allLocales from '@fullcalendar/core/locales-all'

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
    plugins: [interactionPlugin, timeGridPlugin, rrulePlugin],
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
    plugins: [dayGridPlugin, rrulePlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
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
      <FullCalendar locales={allLocales} {...options} />
    </Box>
  )
}
