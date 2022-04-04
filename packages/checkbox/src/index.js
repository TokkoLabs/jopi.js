import React from 'react'
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'

const CheckboxBox = ({
  borderColor,
  backgroundColor,
  tick,
  tickColor,
  isMedium,
  ...props
}) => (
  <>
    <Svg width={isMedium ? 20 : 16} height={isMedium ? 20 : 16} viewBox="0 0 16 16" fill="none" {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="4"
        ry="4"
        fill={backgroundColor}
        stroke={borderColor}
      />
      {tick && <path d="M 5,8 L 7,10 L 12,5" stroke={tickColor} strokeWidth="1.5" strokeLinecap="round"/>}
    </Svg>
  </>
)

const CheckboxChecked = ({ isMedium, ...props }) => (
  <CheckboxBox
    borderColor='#6A88F2'
    backgroundColor='#6A88F2'
    tick
    tickColor='white'
    isMedium={isMedium}
    {...props}
  />
)

const CheckboxUnchecked = ({isMedium, ...props}) => (
  <CheckboxBox 
    borderColor="#C1CCD0" 
    backgroundColor="white" 
    isMedium={isMedium}
    {...props} 
  />
)

const CheckboxDisabled = ({ isMedium, checked = false, ...props }) => (
  <CheckboxBox
    borderColor="#EFF2F3"
    backgroundColor="#EFF2F3"
    tick={checked}
    tickColor="#C1CCD0"
    isMedium={isMedium}
    {...props}
  />
)

const CheckboxIcon = ({ isMedium, ...props }) => (
  <React.Fragment>
    <CheckboxChecked
      isMedium={isMedium}
      {...props}
      css={{
        display: 'none',
        'input:checked:not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxUnchecked
      isMedium={isMedium}
      {...props}
      css={{
        display: 'none',
        'input:not(:checked):not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxDisabled
      isMedium={isMedium}
      {...props}
      css={{
        display: 'none',
        'input:disabled:not(:checked) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxDisabled
      checked
      {...props}
      css={{
        display: 'none',
        'input:checked:disabled ~ &': {
          display: 'block',
        },
      }}
    />
  </React.Fragment>
)

export const Checkbox = ({
  isMedium = false,
  sx,
  variant = 'checkbox',
  ...props
}) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="input"
      type="checkbox"
      {...props}
      sx={{
        position: 'absolute',
        opacity: 0,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    />
    <Box
      as={CheckboxIcon}
      aria-hidden="true"
      tx="forms"
      variant={variant}
      isMedium={isMedium}
      sx={sx}
      __css={{
        mr: 2,
        borderRadius: 2,
        color: 'gray',
        'input:checked ~ &': {
          color: 'primary',
        },
        'input:focus ~ &': {
          boxShadow: 'active',
        },
      }}
    />
  </Box>
)
