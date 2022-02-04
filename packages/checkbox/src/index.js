import React from 'react'
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'
import { Text } from '@oneloop/text'

const CheckboxBox = ({
  borderColor,
  backgroundColor,
  tick,
  tickColor,
  ...props
}) => (
  <>
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="1.5"
        fill={backgroundColor}
        stroke={borderColor}
      />
      {tick && <path d="M4.5 10L8 13L14 4" stroke={tickColor} />}
    </Svg>
  </>
)

const CheckboxChecked = ({ isAlt, ...props }) => (
  <CheckboxBox
    borderColor={isAlt ? '#D64A36' : '#6A88F2'}
    backgroundColor={isAlt ? '#D64A36' : '#6A88F2'}
    tick
    tickColor={isAlt ? 'white' : 'white'}
    {...props}
  />
)

const CheckboxUnchecked = (props) => (
  <CheckboxBox borderColor="#C1CCD0" backgroundColor="white" {...props} />
)

const CheckboxDisabled = ({ checked = false, ...props }) => (
  <CheckboxBox
    borderColor="#EFF2F3"
    backgroundColor="#EFF2F3"
    tick={checked}
    tickColor="#C1CCD0"
    {...props}
  />
)

const CheckboxIcon = ({ isAlt = false, ...props }) => (
  <React.Fragment>
    <CheckboxChecked
      isAlt={isAlt}
      {...props}
      css={{
        display: 'none',
        'input:checked:not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxUnchecked
      {...props}
      css={{
        display: 'none',
        'input:not(:checked):not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxDisabled
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
  isAlt = false,
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
      isAlt={isAlt}
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
