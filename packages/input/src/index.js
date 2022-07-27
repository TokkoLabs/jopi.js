import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Heading, Text } from '@oneloop/text'
import { useToggle } from '@oneloop/hooks'

export const Input = ({ prefix, suffix, label, errors, variant = "input", variantSize = "inputLarge", infoAlert, disabled, readonly, ...props }) => {
  const [hover, setHover] = useToggle(false)
  const [active, setActive] = useToggle(false)
  let backgroundColor = "neutralGray10"
  let colorPlaceholder = "neutralGray3"
  if (infoAlert != undefined){
    variant = "inputFocus"
  } else if (errors != undefined) {
    variant = "inputError"
    backgroundColor = "backgroundError"
    colorPlaceholder = "error"
  }
  if (hover) {
    colorPlaceholder = "neutralGray1"
  }
  if (active) {
    variant = "inputActive"
  }
  if (disabled) {
    variant = "inputDisabled"
    colorPlaceholder = "neutralGray5"
  } else if (readonly) {
    variant = "inputReadonly"
    colorPlaceholder = "neutralGray1"
    backgroundColor = "none"
  }
  // Tareas Estados
  // 1. tengo que agregar una forma de quitar el active, osea una vez que clickeo afuera, deja de estar activo
  // 2. Una vez que el usuario escribio algo, se tiene que considerar que esta Filled y cambiar la variant
  // 3. Agregar estado Read Only
  return (
    <>
      {label && (
        <Box
          __css={{
            px: 16,
            py: 1,
          }}
        >
          <Heading as="h6" variant="heading.5">
            {label}
          </Heading>
        </Box>
      )}
      <Box
        __css={{
          position: 'relative',
          height: 'fit-content',
          '> *:first-child': prefix
            ? { position: 'absolute', top: '9px', left: '12px' }
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
          onClick={() => setActive(true)}
          {...props}
          __css={{
            border: 'none',
            boxShadow: 'none',
            fontFamily: 'primary',
            display: 'block',
            px: suffix || prefix ? 40 : 16,
          //  py: 11,
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
    </>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
}
