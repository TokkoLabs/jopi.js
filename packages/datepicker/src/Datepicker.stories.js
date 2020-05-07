import React, { useState } from 'react'
import { es as locale } from 'date-fns/locale'
import { format } from 'date-fns'
import { Dropdown } from '@oneloop/dropdown'
import { action } from '@storybook/addon-actions'
import {
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'

import { Datepicker as DatepickerJs, START_DATE } from '.'

export default {
  component: DatepickerJs,
  title: 'Design System|Datepicker',
}

const Datepicker = ({
  firstDayOfWeek = 0,
  dayLabelFormat = dayLabelFormatFn,
  weekdayLabelFormat = weekdayLabelFormatFn,
  monthLabelFormat = monthLabelFormatFn,
}) => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
    numberOfMonths: 1,
  })
  const handleDataChange = data => {
    action('onDatesChange')(data)
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE })
    } else {
      setState(data)
    }
  }

  return (
    <DatepickerJs
      onDatesChange={handleDataChange}
      startDate={state.startDate}
      endDate={state.endDate}
      focusedInput={state.focusedInput}
      numberOfMonths={state.numberOfMonths}
      firstDayOfWeek={firstDayOfWeek}
      dayLabelFormat={dayLabelFormat}
      weekdayLabelFormat={weekdayLabelFormat}
      monthLabelFormat={monthLabelFormat}
    />
  )
}

export const esp = () => (
  <Datepicker
    weekdayLabelFormat={date => format(date, 'EEEEEE', { locale })}
    monthLabelFormat={date => format(date, 'MMMM yyyy', { locale })}
  />
)
export const eng = () => <Datepicker />
export const dropdown = () => (
  <Dropdown>
    <Dropdown.Button>Abrir datepicker</Dropdown.Button>
    <Dropdown.Items pt="16px">
      <Dropdown.Item hover={false}>
        <Datepicker />
      </Dropdown.Item>
    </Dropdown.Items>
  </Dropdown>
)
