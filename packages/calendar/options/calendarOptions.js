import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const date = new Date()

export const CalendarOptions = {
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
    scrollTime: `${date.getHours() - 2}:00:00`,
    plugins: [timeGridPlugin],
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
