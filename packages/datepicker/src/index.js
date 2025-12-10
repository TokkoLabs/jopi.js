import React, { forwardRef, useRef } from 'react'
import DatePicker from 'react-datepicker'
import '../styles/datepicker.css'
import '@quintoandar-tokko/theme/styles/globals.css'
import { Box } from '@quintoandar-tokko/box'
import { Icon } from '@quintoandar-tokko/icons'
import { Input } from '@quintoandar-tokko/input'
import { enUS as defaultLocale } from 'date-fns/locale'

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  const inputRef = useRef(ref)
  const handleClick = () => inputRef.current.click()

  return (
    <Input
      style={{ paddingLeft: '34px' }}
      ref={inputRef}
      onClick={onClick}
      prefix={
        <Icon
          icon={'icon-calendario'}
          fontSize="16px"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
      }
      value={value}
    />
  )
})
CustomInput.displayName = 'CustomInput'

const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  locale,
}) => {
  const formatDate = (date, locale) => {
    const month = date.toLocaleString(locale.code, { month: 'long' })
      .replace(/^./, (match) => match.toUpperCase())
    const year = date.toLocaleString(locale.code, { year: 'numeric' })

    return `${month} ${year}`
  }

  return (
    <Box className="customHeader">
      <Box
        as="button"
        className="customHeaderButton"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <Icon icon='icon-atras' fontSize='16px' color="#2E393F" />
      </Box>
      <Box className="customHeaderDate">
        {formatDate(date, locale)}
      </Box>
      <Box
        as="button"
        className="customHeaderButton"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <Icon icon='icon-siguiente' fontSize='16px' color="#2E393F" />
      </Box>
    </Box>
  )
}

export const Datepicker = (props) => {
  const { locale, ...rest } = props

  const targetLocale = locale ?? defaultLocale

  return (
    <DatePicker
      className="red-border"
      customInput={<CustomInput />}
      renderCustomHeader={headerProps => (
        <CustomHeader {...headerProps} locale={targetLocale} />
      )}
      locale={targetLocale}
      {...rest}
    />
  )
}
