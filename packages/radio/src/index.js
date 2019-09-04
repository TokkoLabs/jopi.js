import React from 'react'
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'

const RadioBox = ({
  borderColor,
  backgroundColor,
  tick,
  tickColor,
  ...props
}) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <circle cx="8" cy="8" r="8" fill={backgroundColor} />
    <circle cx="8" cy="8" r="7.5" stroke={borderColor} />
    {tick && <circle cx="8" cy="8" r="4" fill={tickColor} />}
  </Svg>
)

const RadioChecked = ({ isAlt, ...props }) => (
  <RadioBox
    borderColor={isAlt ? '#D64A36' : '#C2C2C2'}
    backgroundColor={isAlt ? '#D64A36' : 'white'}
    tick
    tickColor={isAlt ? 'white' : '#D64A36'}
    {...props}
  />
)

const RadioUnchecked = props => (
  <RadioBox borderColor="#E7E7E6" backgroundColor="white" {...props} />
)

const RadioDisabled = ({ checked = false, ...props }) => (
  <RadioBox
    borderColor="#F5F5F5"
    backgroundColor="#F5F5F5"
    tick={checked}
    tickColor="#BABABA"
    {...props}
  />
)

const RadioIcon = ({ isAlt = false, ...props }) => (
  <React.Fragment>
    <RadioChecked
      isAlt={isAlt}
      {...props}
      __css={{
        display: 'none',
        'input:checked:not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <RadioUnchecked
      {...props}
      __css={{
        display: 'none',
        'input:not(:checked):not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <RadioDisabled
      {...props}
      __css={{
        display: 'none',
        'input:disabled:not(:checked) ~ &': {
          display: 'block',
        },
      }}
    />
    <RadioDisabled
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

export const Radio = ({ sx, variant = 'radio', isAlt = false, ...props }) => (
  <Box>
    <Box
      as="input"
      type="radio"
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
      as={RadioIcon}
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
