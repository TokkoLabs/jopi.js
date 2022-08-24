import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Text } from '@oneloop/text'
import { useToggle } from '@oneloop/hooks'
import theme from '@oneloop/theme'

export const Input = ({ prefix, suffix, label, errors, variant = 'input', variantSize = 'inputLarge', infoAlert, disabled, readonly, inline, password, bold, width, ...props }) => {
  const [hover, setHover] = useToggle(false)
  const [focused, setFocused] = useToggle(false)
  const [text, setText] = React.useState('')
  const indexVariant = Object.keys(theme.forms).indexOf(variant)

  let finalVariant = variant + '.normal'
  let colorPlaceholder = Object.values(theme.forms)[indexVariant].normal.color
  if (hover) {
    finalVariant = variant + '.hover'
    colorPlaceholder = Object.values(theme.forms)[indexVariant].hover.color
  }

  if (focused) {
    finalVariant = variant + '.active'
    colorPlaceholder = Object.values(theme.forms)[indexVariant].active.color
  } else if (!focused && text !== '') {
    finalVariant = variant + '.filled'
    colorPlaceholder = Object.values(theme.forms)[indexVariant].filled.color
  } else if (disabled) {
    finalVariant = 'inputDisabled'
    colorPlaceholder = 'neutralGray5'
  } else if (readonly) {
    finalVariant = 'inputReadonly'
    colorPlaceholder = 'neutralGray1'
  }

  if (infoAlert !== undefined) {
    finalVariant = 'inputFocus'
  } else if (errors !== undefined) {
    finalVariant = 'inputError'
    colorPlaceholder = 'error'
    suffix = <span className='icon-error'/>
  }

  const index = Object.keys(theme.forms).indexOf(variantSize)
  const paddingLeft = prefix ? Object.values(theme.forms)[index].paddingLeftPrefix : Object.values(theme.forms)[index].paddingLeftNoPrefix
  const paddingRight = suffix ? Object.values(theme.forms)[index].paddingRightSuffix : Object.values(theme.forms)[index].paddingRightNoSuffix
  const paddingIcons = Object.values(theme.forms)[index].paddingIcons
  const fontSizePrefix = Object.values(theme.forms)[index].fontSize
  if (suffix && suffix.type !== 'span') {
    suffix = <div>{suffix}</div>
  }
  return (
    <Box
      width='100%'
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
            mb: '4px',
          }}
        >
          <Text variant='body600.fontSize12' style={{ color: '#384248' }}>
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
          fontFamily: 'Nunito Sans',
          fontWeight: bold ? 700 : 400,
          width: width,
          '> *:first-child': prefix
            ? prefix.type === 'span'
                ? { position: 'absolute', left: paddingIcons, height: fontSizePrefix, fontSize: fontSizePrefix }
                : { position: 'absolute', left: paddingIcons }
            : {},
          '> *:last-child': suffix
            ? suffix.type === 'span'
                ? { position: 'absolute', right: paddingIcons, height: fontSizePrefix, fontSize: fontSizePrefix }
                : { position: 'absolute', right: paddingIcons }
            : {},
        }}
      >
        {prefix}
        <Box
          as='input'
          type={ password ? 'password' : 'text' }
          tx='forms'
          variant={[finalVariant, variantSize]}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onChange={e => setText(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          width='100%'
          {...props}
          __css={{
            fontWeight: bold ? 700 : 400,
            border: 'none',
            boxShadow: 'none',
            fontFamily: 'primary',
            display: 'block',
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            outline: 'none',
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
          <Text variant='inputMessageErrors'>{errors}</Text>
        </Box>
      )}
      {infoAlert && (
        <Box
          __css={{
            px: 16,
            py: 1,
          }}
        >
          <Text variant='inputMessageInfoAlert'>{infoAlert}</Text>
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
