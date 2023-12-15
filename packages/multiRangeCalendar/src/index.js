import React from 'react'
import '../styles/calendar.css'
import { Calendar } from 'react-multi-date-picker'

export const MultiRangeCalendar = ({ ...props }) => {
  return <Calendar {...props} />
}
