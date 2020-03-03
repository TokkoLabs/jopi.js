import React from 'react'
import { useMonth } from '@datepicker-react/hooks'
import { Box } from '@oneloop/box'
import { Text } from '@oneloop/text'
import { Day } from './Day'

export const Month = ({
  year,
  month,
  firstDayOfWeek,
  weekdayLabelFormat,
  monthLabelFormat,
}) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
    weekdayLabelFormat,
    monthLabelFormat,
  })
  return (
    <Box>
      <Text
        sx={{
          textAlign: 'center',
          margin: '0 0 16px',
          fontFamily: 'body',
          fontWeight: '500',
          textTransform: 'Uppercase',
        }}
      >
        {monthLabel}
      </Text>
      <Box
        __css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 40px)',
          justifyContent: 'center',
          marginBottom: '10px',
          fontSize: '10px',
        }}
      >
        {weekdayLabels.map(dayLabel => (
          <Text
            sx={{
              textAlign: 'center',
              fontFamily: 'body',
              textTransform: 'Capitalize',
              color: '#50504B',
            }}
            key={dayLabel}
          >
            {dayLabel}
          </Text>
        ))}
      </Box>
      <Box
        __css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 0fr)',
          justifyContent: 'center',
        }}
      >
        {days.map((day, index) => {
          if (typeof day === 'object') {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            )
          }
          return <Box key={index} />
        })}
      </Box>
    </Box>
  )
}
