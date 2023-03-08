import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import '@oneloop/theme/styles/globals.css'
import "../styles/styles.css"

export const Calendar = () => {

  const calendarOptions = {
    events: [],
    plugins: [timeGridPlugin],
    initialView: 'timeGridDay',
    nowIndicator: true,
    headerToolbar: {
      start: 'prev',
      center: 'title',
      end: 'next'
    },
    editable: true,
    eventResizableFromStart: true,
    dragScroll: true,
    dayMaxEvents: 2,
    navLinks: true,
  }

  return (
    <div className='calendarContainer'>
      <FullCalendar {...calendarOptions} />
    </div>
  )
}