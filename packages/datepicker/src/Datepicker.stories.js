import React, { useState, Fragment } from 'react'
import { es as locale } from 'date-fns/locale'
import { Datepicker } from '.'
import { Box } from '@oneloop/box'

export default {
  component: Datepicker,
  title: 'Datepicker',
}

export const Normal = () => {
  const [plainDate, setPlainDate] = useState(new Date())
  return (
    <Datepicker
      showPopperArrow={false}
      selected={plainDate}
      onChange={(date) => setPlainDate(date)}
      dateFormat="dd/MM/yyyy"
      locale={locale}
      placeholderText="día, mes y año"
    />
  )
}

export const Range = () => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  return (
    <Fragment>
      <Box>
        <span>Fecha inicio: </span>
        <Datepicker
          dateFormat="dd-MM-yyyy"
          locale={locale}
          placeholderText="DD-MM-AAAA"
          showPopperArrow={false}
          selected={startDate}
          onChange={(date) => {
            setStartDate(date)
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </Box>
      <Box>
        <span>Fecha fin: </span>
        <Datepicker
          dateFormat="dd-MM-yyyy"
          minDate={startDate}
          locale={locale}
          placeholderText="DD-MM-AAAA"
          showPopperArrow={false}
          selected={endDate}
          onChange={(date) => {
            setEndDate(date)
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
        />
      </Box>
    </Fragment>
  )
}
