/* eslint-disable react/boolean-prop-naming */
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@quintoandar-tokko/box'
import { Icon } from '@quintoandar-tokko/icons'
import { Text } from '@quintoandar-tokko/text'
import theme from '@quintoandar-tokko/theme'
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
  showArrows = true,
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
      if (!inputCont.current?.contains(event.target) && !disabled) {
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
      return min
    }

    if (e.target.value >= min && e.target.value <= max) {
      setValueInput(Number(e.target.value))
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

  useEffect(() => {
    if (disabled) {
      setInputVariants(['disabled'])
    } else {
      setInputVariants([variant])
    }
  }, [disabled])

  return (
    <Box
      as="div"
      tx="inputNumber"
      ref={inputCont}
      variant={inputVariants}
      __css={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '7px 10px',
        gap: '8px',
        borderRadius: '8px',
        border: 'solid 1px #D6DEE2',
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
          color: disabled ? '#94A2AB' : theme.colors.neutralGray1,
          textAlign: 'center',
          padding: '0',
        }}
        {...props}
        onKeyDown={(e) => {
          if (e.target.value.length === 1 && e.key === 'Backspace') {
            setValueInput(min)
            e.target.value = min
          }
        }}
      />
      {text && <Text variant="body.fontSize14" style={{ marginRight: '15px' }}>
        {text}
      </Text>}
      {showArrows && (
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
            icon="icon-colapsar"
            fontSize="12px"
            style={{ cursor: 'pointer' }}
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
      )}
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
  disabled: PropTypes.bool,
}
