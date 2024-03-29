import React, { forwardRef, useRef } from 'react'
import DatePicker from 'react-datepicker'
import '../styles/datepicker.css'
import '@oneloop/theme/styles/globals.css'
import { Icon } from '@oneloop/icons'
import { Input } from '@oneloop/input'

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

export const Datepicker = (props) => {
  return (
    <DatePicker
      className="red-border"
      customInput={<CustomInput />}
      {...props}
    />
  )
}
