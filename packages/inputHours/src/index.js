import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import { Input } from '@oneloop/input'
import { useOnClickOutside } from '@oneloop/hooks'
import { format, addMinutes, set } from 'date-fns'
import theme from '@oneloop/theme'

const defaultHours = []

for (let i = 0; i < 24; i++) {
  for (let j = 0; j < 4; j++) {
    defaultHours.push(`${i < 10 ? '0' + i : i}:${j === 0 ? '00' : 15 * j}`)
  }
}

export const InputHours = ({
  inputTime = new Date(),
  arrayInput = defaultHours,
  variant = 'default',
  error = false,
  keepArray = false,
  val = () => {},
  listenTime = new Date(),
  isSelected = false,
  ...props
}) => {
  const InputContRef = useRef(null)
  const listItemsRef = useRef(null)
  const [showDD, setShowDD] = useState(false)
  const [time, setTime] = useState('')
  const [inputVariant, setInputVariant] = useState(variant)

  useEffect(() => {
    setInputVariant(error ? 'focus' : 'default')
  }, [error])

  useOnClickOutside(InputContRef, () => setShowDD(false))

  const handleShowDD = () => setShowDD(!showDD)

  const hoursFormatRef = useRef({ hours: 0, minutes: 0, seter: inputTime })

  const handleChangeTime = (theTime) => {
    setTime(format(theTime, 'HH:mm'))
    hoursFormatRef.current.seter = theTime
    val(hoursFormatRef.current.seter)
  }

  const handleArrows = (min) => {
    const { seter } = hoursFormatRef.current
    if (format(seter, 'mm') % 15 && !keepArray) {
      handleChangeTime(set(seter, { minutes: 0 }))
    } else {
      hoursFormatRef.current = {
        ...hoursFormatRef.current,
        seter: addMinutes(seter, min),
      }
      handleChangeTime(addMinutes(seter, min))
    }
  }

  const handleInputChange = (event) => {
    const regex = /^[0-9]+$/
    const newValue = event.target.value.replace(/[^0-9]/g, '')
    if (regex.test(newValue) || event.target.value === '') {
      hoursFormatRef.current = {
        ...hoursFormatRef.current,
        hours: Number(newValue.substring(0, 2)) | 0,
        minutes: Number(newValue.substring(2, 4)) | 0,
      }
      const { hours, minutes } = hoursFormatRef.current
      if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        hoursFormatRef.current = {
          ...hoursFormatRef.current,
          seter: set(inputTime, { hours: hours, minutes: minutes }),
        }
        setTime(newValue)
      }
    }
  }

  const handleBlur = () => {
    handleChangeTime(hoursFormatRef.current.seter)
    setInputVariant(error ? 'focus' : 'default')
  }

  const handleClickTime = (h) => {
    const seter = set(inputTime, {
      hours: h.substring(0, 2),
      minutes: h.substring(3, 5),
    })
    handleChangeTime(seter)
  }

  const handleInitialTime = () => {
    const restTime = format(inputTime, 'mm') % 15
    const interval = restTime < 15 ? 30 : 15

    if (!isSelected) {
      hoursFormatRef.current = {
        ...hoursFormatRef.current,
        seter: addMinutes(inputTime, interval - restTime),
      }

      handleChangeTime(addMinutes(inputTime, interval - restTime))
    } else {
      handleChangeTime(inputTime)
    }
  }

  const handleScroll = () => {
    const index =
      arrayInput.map((item) => item.substring(0, 5)).indexOf(time) * 26 - 52
    listItemsRef.current.scrollTop = index
  }

  useEffect(() => {
    const currentTime = format(new Date(), 'HH:mm')
    const input = format(listenTime, 'HH:mm')

    if (currentTime !== input) {
      handleClickTime(input)
    }
  }, [listenTime])

  useEffect(() => {
    handleInitialTime()
  }, [])

  useEffect(() => {
    handleScroll()
  }, [time, listItemsRef.current])

  const compareArrayIndex = (item) => {
    const cleanArray = arrayInput.map((i) => i.substring(0, 5))

    return cleanArray.indexOf(item.substring(0, 5)) === cleanArray.indexOf(time)
  }

  return (
    <Box
      as="form"
      tx="inputHours"
      variant={inputVariant}
      __css={{
        position: 'relative',
        width: 'fit-content',
        borderRadius: '8px',
        border: 'solid 1px transparent',
      }}
      ref={InputContRef}
      onClick={handleShowDD}
    >
      <Input
        {...props}
        className="inputHourDisplay"
        prefix={<Icon icon="icon-reloj" fontSize="14px" />}
        suffix={
          <Icon
            icon="icon-dropdown"
            fontSize="14px"
            style={{ cursor: 'pointer' }}
          />
        }
        maxLength="4"
        onChange={handleInputChange}
        onFocus={() => setInputVariant('active')}
        onBlur={handleBlur}
        value={time}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.target.blur()
            handleBlur()
            setShowDD(false)
          }
          if (e.key === 'ArrowDown') {
            handleArrows(15)
          }
          if (e.key === 'ArrowUp') {
            handleArrows(-15)
          }
        }}
      />
      <Box
        as="ul"
        ref={listItemsRef}
        className="List"
        __css={{
          width: InputContRef.current?.offsetWidth,
          zIndex: '100',
          backgroundColor: '#FFF',
          visibility: showDD ? 'visible' : 'hidden',
          position: 'absolute',
          height: '140px',
          overflow: 'auto',
          top: '35px',
          boxShadow: '4px 4px 12px rgba(87, 95, 99, 0.1)',
          borderRadius: '8px',
          padding: '0px',
          listStyle: 'none',
          overscrollBehavior: 'contain',
          '::-webkit-scrollbar': {
            width: '4px',
          },
          '::-webkit-scrollbar-track': {
            '-webkit-border-radius': '4px',
            background: 'transparent',
          },
          '::-webkit-scrollbar-thumb': {
            '-webkit-border-radius': '4px',
            background: '#6F838D',
          },
        }}
      >
        {arrayInput.map((h, i) => (
          <Box
            key={i}
            as="li"
            tx="liInputHours"
            variant={compareArrayIndex(h) ? 'selected' : ''}
            __css={{
              padding: '4px 7px',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: theme.colors.neutralGray8,
                color: theme.colors.neutralGray1,
              },
              ':first-child': {
                borderRadius: '8px 8px 0px 0px',
              },
              ':last-child': {
                borderRadius: '0px 0px 8px 8px',
              },
            }}
            onClick={() => handleClickTime(h)}
          >
            <Text variant="body.fontSize14">{h}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
