import React from 'react'
import {
  useDatepicker,
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'
import DatepickerContext from './datepickerContext'
import { NavButton } from './NavButton'
import { Month } from './Month'
import { ChevronLeft, ChevronRight } from '@oneloop/icons'
import { Box } from '@oneloop/box'

export const Datepicker = ({
  startDate,
  endDate,
  focusedInput,
  numberOfMonths,
  dayLabelFormat = dayLabelFormatFn,
  weekdayLabelFormat = weekdayLabelFormatFn,
  monthLabelFormat = monthLabelFormatFn,
  firstDayOfWeek: firstDayOfWeekProp,
  onDatesChange,
}) => {
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput,
    numberOfMonths,
    onDatesChange,
    firstDayOfWeek: firstDayOfWeekProp,
  })

  return (
    <DatepickerContext.Provider
      value={{
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
      }}
    >
      <Box
        width="97%"
        display="flex"
        justifyContent="space-between"
        position="absolute"
        top="16px"
      >
        <NavButton onClick={goToPreviousMonths}>
          <ChevronLeft color="#757575" width="24" height="24" />
        </NavButton>
        <NavButton onClick={goToNextMonths}>
          <ChevronRight color="#757575" width="24" height="24" />
        </NavButton>
      </Box>
      <Box
        __css={{
          display: 'grid',
          gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
          gridGap: '0 20px',
        }}
      >
        {activeMonths.map(month => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
            weekdayLabelFormat={weekdayLabelFormat}
            monthLabelFormat={monthLabelFormat}
          />
        ))}
      </Box>
    </DatepickerContext.Provider>
  )
}
