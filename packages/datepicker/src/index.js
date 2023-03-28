import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import '../styles/datepicker.css'
import '@oneloop/theme/styles/globals.css'
import { Icon } from '@oneloop/icons'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <Box
      __css={{
        display: 'flex',
        alignItems: 'center',
        padding: '7px 10px',
        gap: '8px',
        height: '32px',
        background: theme.colors.neutralGray9,
        borderRadius: '8px',
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '18px',
        cursor: 'pointer',
      }}
      onClick={onClick}
      ref={ref}>
      <Icon icon={'icon-calendario'} fontSize='16px' />
      {value}
    </Box>
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
