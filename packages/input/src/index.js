import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Heading, Text } from '@oneloop/text'
import { useToggle } from '@oneloop/hooks'
import theme from '@oneloop/theme'

export const Input = ({ prefix, suffix, label, errors, variant = "input", variantSize = "inputLarge", infoAlert, disabled, readonly, inline, ...props }) => {
  const [hover, setHover] = useToggle(false)
  const [focused, setFocused] = useToggle(false)
  let valueText = ''
  const indexVariant = Object.keys(theme.forms).indexOf(variant)

  let backgroundColor = Object.values(theme.forms)[indexVariant].normal.backgroundColor
  let colorPlaceholder = Object.values(theme.forms)[indexVariant].normal.color
  if (hover) {
    backgroundColor = Object.values(theme.forms)[indexVariant].hover.backgroundColor
    colorPlaceholder = Object.values(theme.forms)[indexVariant].hover.color
  }
  if (infoAlert != undefined){
    variant = "inputFocus"
  } else if (errors != undefined) {
    variant = "inputError"
    backgroundColor = "backgroundError"
    colorPlaceholder = "error"
  }

  if (focused) {
    variant = "inputActive"
  } else if (!focused && valueText != ''){
    variant = "inputFilled"
  } else if (disabled) {
    variant = "inputDisabled"
    colorPlaceholder = "neutralGray5"
  } else if (readonly) {
    variant = "inputReadonly"
    colorPlaceholder = "neutralGray1"
    backgroundColor = "none"
  }
  const changeText = (e) => {
    valueText = e.target.value
  }

  const index = Object.keys(theme.forms).indexOf(variantSize)
  const paddingLeft = prefix ? Object.values(theme.forms)[index].paddingLeftPrefix : Object.values(theme.forms)[index].paddingLeftNoPrefix
  const fontSizePrefix = Object.values(theme.forms)[index].fontSize

  return (
    <Box
      __css={{
        display: inline && 'flex',
        flexDirection: inline && 'row',
        alignItems: inline && 'center',
        gap: inline && '16px',
      }}
    >
      {label && (
        <Box
          __css={{
            mb: '4px'
          }}
        >
          <Text variant="body600.fontSize12">
            {label}
          </Text>
        </Box>
      )}
      <Box
        __css={{
          position: 'relative',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '6px',
          color: colorPlaceholder,
          '> *:first-child': prefix
            ? { position: 'absolute', height: fontSizePrefix, fontSize: fontSizePrefix, left: '7px', mt: '2px' }
            : {},
          '> *:last-child': suffix
            ? { position: 'absolute', top: '9px', right: '12px' }
            : {},
        }}
      >
        {prefix}
        <Box
          as="input"
          type="text"
          tx="forms"
          variant={[variant, variantSize]}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onChange={e => changeText(e)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
          __css={{
            border: 'none',
            boxShadow: 'none',
            fontFamily: 'primary',
            display: 'block',
            paddingLeft: paddingLeft,
            outline: 'none',
            backgroundColor: backgroundColor,
            '::placeholder': {
              color: colorPlaceholder,
            },
          }}
        />
        {suffix}
      </Box>
      {errors && (
        <Box
          __css={{
            px: 16,
            py: 1,
          }}
        >
          <Text variant="inputMessageErrors">{errors}</Text>
        </Box>
      )}
      {infoAlert && (
        <Box
          __css={{
            px: 16,
            py: 1,
          }}
        >
          <Text variant="inputMessageInfoAlert">{infoAlert}</Text>
        </Box>
      )}
    </Box>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
}
