import React, { useState, Fragment } from 'react'
import { es as locale } from 'date-fns/locale'

import { Datepicker } from './DatePicker'
import { Box } from '@oneloop/box'
import './myStyle.css'

export default {
  component: Datepicker,
  title: 'Design System|Datepicker',
}

export const plain = () => {
  const [plainDate, setPlainDate] = useState(new Date())
  return (
    <Fragment>
      <span>Seleccione una fecha: </span>
      <Datepicker
        showPopperArrow={false}
        selected={plainDate}
        onChange={(date) => setPlainDate(date)}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        locale={locale}
        placeholderText="día, mes y año"
      />
      <div style={{ border: '0.81rem solid transparent' }}></div>
    </Fragment>
  )
}

export const custom = () => {
  const [date, setDate] = useState(new Date())
  return (
    <Box className="primero">
      <Datepicker
        showPopperArrow={false}
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        locale={locale}
        placeholderText="día, mes y año"
      />
    </Box>
  )
}

export const range = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

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
