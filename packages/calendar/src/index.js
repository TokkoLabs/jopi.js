import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import '@oneloop/theme/styles/globals.css'
import '../styles/styles.css'

export const Calendar = () => {
  /*   const calendarOptions = {
      events: [],
      plugins: [timeGridPlugin],
      initialView: 'timeGridDay',
      nowIndicator: true,
      headerToolbar: {
        start: 'prev',
        center: 'title',
        end: 'next',
      },
      editable: true,
      eventResizableFromStart: true,
      dragScroll: true,
      dayMaxEvents: 2,
      navLinks: true,
    } */

  return (
    <div className='calendarContainer'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  )
}
