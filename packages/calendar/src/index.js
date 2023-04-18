import React from 'react'
import '../../theme/styles/globals.css'
import { CalendarOptions } from '../options/calendarOptions'
import { Box } from '../../box/src'
import FullCalendar from '@fullcalendar/react'
import '../styles/calendar.css'

export const Calendar = ({ variant, events, initialDate, scrollTime, height }) => {
  const options = { ...CalendarOptions[variant], events: events || [], initialDate: initialDate, scrollTime: scrollTime, height: height }

  return <Box id={variant}> <FullCalendar {...options} /> </Box>
}
