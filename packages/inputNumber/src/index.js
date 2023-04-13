import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import theme from '@oneloop/theme'
import '../../theme/styles/globals.css'

export const InputNumber = ({ max = 99, min = 0, startVal = 0, step = 1, val = () => { }, text, variant = 'default', ...props }) => {
  const [valueInput, setValueInput] = useState(startVal)

  useEffect(() => {
    val(valueInput)
  }, [valueInput])

  const handleChange = (e) => {
    if (e.target.value === '') {
      return 0
    }

    if (e.target.value >= min && e.target.value <= max) {
      setValueInput(parseInt(e.target.value))
    } else {
      e.stopPropagation()
    }
  }

  const inputRef = useRef()
  const handleFocus = () => inputRef.current.focus()
  return (
    <Box
      as='div'
      tx="inputNumber"
      variant={variant}
      __css={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '7px 10px',
        gap: '8px',
        borderRadius: '5px',
      }}
      onClick={handleFocus}
    >
      <Box
        as='input'
        ref={inputRef}
        type='number'
        placeholder='00'
        id='inputNumberDisplay'
        value={parseInt(valueInput).toString()}
        onChange={(e) => handleChange(e)}
        __css={{ width: '22px', background: 'transparent', border: 'none', outline: 'none', color: theme.colors.neutralGray3, textAlign: 'center', padding: '0' }}
        {...props}
        onKeyDown={(e) => {
          if (e.target.value.length === 1 && e.key === 'Backspace') {
            setValueInput(0)
            e.target.value = 0
          }
        }}
      />
      <Text variant='body.fontSize14' style={{ marginRight: '15px' }} >{text}</Text>
      <Box
        __css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          id='arrowUpNumberInput'
          icon='icon-dropdown'
          fontSize='12px'
          style={{ transform: 'rotate(180deg) translateX(1px)', cursor: 'pointer' }}
          onClick={() => setValueInput(Math.min(max, valueInput + step))}
        />
        <Icon
          id='arrowDownNumberInput'
          icon='icon-dropdown'
          fontSize='12px'
          style={{ cursor: 'pointer' }}
          onClick={() => setValueInput(Math.max(min, valueInput - step))}
        />
      </Box>
    </Box >
  )
}

InputNumber.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  startVal: PropTypes.number,
  step: PropTypes.number,
  val: PropTypes.func,
  text: PropTypes.string,
  variant: PropTypes.string,
}
