import React, { useContext } from 'react'
import { useDay } from '@datepicker-react/hooks'
import DatepickerContext from './datepickerContext'
import { Box } from '@oneloop/box'
import { Button } from '@oneloop/button'
import isSameDay from 'date-fns/isSameDay'

const getState = (
  isSelected,
  isSelectedStartOrEnd,
  isWithinHoverRange,
  isDisabled
) => {
  return ({
    selectedFirstOrLastColor,
    normalColor,
    selectedColor,
    rangeHoverColor,
    disabledColor,
  }) => {
    if (isSelectedStartOrEnd) {
      return selectedFirstOrLastColor
    } else if (isSelected) {
      return selectedColor
    } else if (isWithinHoverRange) {
      return rangeHoverColor
    } else if (isDisabled) {
      return disabledColor
    } else {
      return normalColor
    }
  }
}

export const Day = React.forwardRef(({ dayLabel, date }, ref) => {
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
    startDate,
    endDate,
  } = useContext(DatepickerContext)
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    ref,
  })
  if (!dayLabel) {
    return <Box />
  }
  const getStateFn = getState(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  )

  const isFirstSelectedDate = !!(startDate && isSameDay(date, startDate))

  const isLastSelectedDate = !!(endDate && isSameDay(date, endDate))

  const StyledButton = props => (
    <Button
      {...props}
      sx={{
        size: '40px',
        fontSize: '2',
        lineHeight: '0',
        display: 'flex',
        justifyContent: 'center',
        justifySelf: 'center',
        alignItems: 'center',
        color: getStateFn({
          selectedFirstOrLastColor: '#FFFFFF',
          normalColor: '#001217',
          selectedColor: '#FFFFFF',
          rangeHoverColor: '#FFFFFF',
          disabledColor: '#808285',
        }),
        bg: getStateFn({
          selectedFirstOrLastColor: 'primary',
          normalColor: '#FFFFFF',
          selectedColor: 'primaryAccent',
          rangeHoverColor: 'primaryAccent',
          disabledColor: '#FFFFFF',
        }),
        borderRadius: getStateFn({
          selectedFirstOrLastColor: 'circle',
          normalColor: '0',
          selectedColor: '0',
          rangeHoverColor: '0',
          disabledColor: '0',
        }),
        border: getStateFn({
          selectedFirstOrLastColor: '1px solid white',
          normalColor: '0',
          selectedColor: '0',
          rangeHoverColor: '0',
          disabledColor: '0',
        }),
      }}
    />
  )

  return (
    <>
      {isSelectedStartOrEnd && isFirstSelectedDate && (
        <Box
          as="span"
          __css={{ borderRadius: '52px 0 0 52px', bg: 'primaryAccent' }}
        >
          <StyledButton
            onClick={onClick}
            onKeyDown={onKeyDown}
            onMouseEnter={onMouseEnter}
            tabIndex={tabIndex}
            type="button"
            ref={ref}
          >
            {dayLabel}
          </StyledButton>
        </Box>
      )}
      {isSelectedStartOrEnd && isLastSelectedDate && (
        <Box
          as="span"
          __css={{ borderRadius: '0 52px 52px 0', bg: 'primaryAccent' }}
        >
          <StyledButton
            onClick={onClick}
            onKeyDown={onKeyDown}
            onMouseEnter={onMouseEnter}
            tabIndex={tabIndex}
            type="button"
            ref={ref}
          >
            {dayLabel}
          </StyledButton>
        </Box>
      )}
      {!isSelectedStartOrEnd && (
        <StyledButton
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={ref}
        >
          {dayLabel}
        </StyledButton>
      )}
    </>
  )
})
