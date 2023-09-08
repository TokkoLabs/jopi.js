import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import '../styles/datepicker.css'
import '@oneloop/theme/styles/globals.css'
import { Icon } from '@oneloop/icons'
import { Input } from '@oneloop/input'

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <Input
      style={{ paddingLeft: '34px' }}
      ref={ref}
      onClick={onClick}
      prefix={<Icon icon={'icon-calendario'} fontSize="16px" />}
      value={value}
    />
  )
})
CustomInput.displayName = 'CustomInput'

export const Datepicker = (props) => {
  return (
    <DatePicker
      className="red-border"
      customInput={<CustomInput />}
      {...props}
    />
  )
}
