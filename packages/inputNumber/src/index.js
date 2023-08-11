import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import theme from '@oneloop/theme'
import '../../theme/styles/globals.css'

export const InputNumber = ({
  disabled = false,
  max = 99,
  min = 0,
  error = false,
  startVal = 0,
  step = 1,
  val = () => {},
  text,
  variant = 'default',
  ...props
}) => {
  const [valueInput, setValueInput] = useState(startVal)
  const [inputVariants, setInputVariants] = useState([variant])
  const inputRef = useRef()
  const inputCont = useRef()

  useEffect(() => {
    val(valueInput)

    if (valueInput) {
      setInputVariants([...inputVariants, 'filled'])
    } else {
      setInputVariants(inputVariants.filter((elem) => elem !== 'filled'))
    }
  }, [valueInput])

  useEffect(() => {
    setValueInput(startVal)
  }, [startVal])

  useEffect(() => {
    if (error) {
      setInputVariants([variant, 'focus'])
    }
  }, [error])

  useEffect(() => {
    const handleClick = (event) => {
      if (!inputCont.current?.contains(event.target)) {
        setInputVariants(inputVariants.filter((elem) => elem !== 'filled'))
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

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

  const handleFocus = () => {
    if (!disabled) {
      inputRef.current.focus()
      setInputVariants([variant, 'active'])
    }
  }

  return (
    <Box
      as="form"
      tx="inputNumber"
      ref={inputCont}
      variant={inputVariants}
      __css={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '7px 10px',
        gap: '8px',
        borderRadius: '8px',
        border: 'solid 1px transparent',
        height: '32px',
      }}
      onClick={handleFocus}
    >
      <Box
        disabled={disabled}
        as="input"
        ref={inputRef}
        type="number"
        placeholder="00"
        id="inputNumberDisplay"
        value={parseInt(valueInput).toString()}
        onChange={(e) => handleChange(e)}
        __css={{
          width: '22px',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: theme.colors.neutralGray2,
          textAlign: 'center',
          padding: '0',
        }}
        {...props}
        onKeyDown={(e) => {
          if (e.target.value.length === 1 && e.key === 'Backspace') {
            setValueInput(0)
            e.target.value = 0
          }
        }}
      />
      <Text variant="body.fontSize14" style={{ marginRight: '15px' }}>
        {text}
      </Text>
      <Box
        __css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          id="arrowUpNumberInput"
          icon="icon-dropdown"
          fontSize="12px"
          style={{
            transform: 'rotate(180deg) translateX(1px)',
            cursor: 'pointer',
          }}
          onClick={() =>
            !disabled && setValueInput(Math.min(max, valueInput + step))
          }
        />
        <Icon
          id="arrowDownNumberInput"
          icon="icon-dropdown"
          fontSize="12px"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            !disabled && setValueInput(Math.max(min, valueInput - step))
          }
        />
      </Box>
    </Box>
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
