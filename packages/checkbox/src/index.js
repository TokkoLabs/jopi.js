import React from 'react'
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'

const CheckboxBox = ({
  borderColor,
  backgroundColor,
  tick,
  tickColor,
  ...props
}) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <rect
      x="0.5"
      y="0.5"
      width="17"
      height="17"
      rx="2.5"
      fill={backgroundColor}
      stroke={borderColor}
    />
    {tick && <path d="M4.5 10L8 13L14 4" stroke={tickColor} />}
  </Svg>
)

const CheckboxChecked = ({ isAlt, ...props }) => (
  <CheckboxBox
    borderColor={isAlt ? '#D64A36' : '#F5F5F5'}
    backgroundColor={isAlt ? '#D64A36' : 'white'}
    tick
    tickColor={isAlt ? 'white' : '#D64A36'}
    {...props}
  />
)

const CheckboxUnchecked = props => (
  <CheckboxBox borderColor="#E7E7E6" backgroundColor="white" {...props} />
)

const CheckboxDisabled = ({ checked = false, ...props }) => (
  <CheckboxBox
    borderColor="#F5F5F5"
    backgroundColor="#F5F5F5"
    tick={checked}
    tickColor="#BABABA"
    {...props}
  />
)

const CheckboxIcon = ({ isAlt = false, ...props }) => (
  <React.Fragment>
    <CheckboxChecked
      isAlt={isAlt}
      {...props}
      __css={{
        display: 'none',
        'input:checked:not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxUnchecked
      {...props}
      __css={{
        display: 'none',
        'input:not(:checked):not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxDisabled
      {...props}
      __css={{
        display: 'none',
        'input:disabled:not(:checked) ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxDisabled
      checked
      {...props}
      __css={{
        display: 'none',
        'input:checked:disabled ~ &': {
          display: 'block',
        },
      }}
    />
  </React.Fragment>
)

export const Checkbox = ({
  sx,
  variant = 'checkbox',
  isAlt = false,
  ...props
}) => (
  <Box>
    <Box
      as="input"
      type="checkbox"
      {...props}
      sx={{
        position: 'absolute',
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: 'hidden',
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
          color: 'primary',
          bg: 'highlight',
        },
      }}
    />
  </Box>
)
