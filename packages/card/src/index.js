import React from 'react'
import { Box } from '@oneloop/box'

export const Card = ({ variant, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      tx='card'
      variant={variant}
      {...props}
      __css={{
        fontFamily: 'primary',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      //  width: '224px',
      //  borderSpacing: '4px 0px',
      }}
      />
  </Box>
)
/*
const CardRowItem = (props) => (
  <Box
    as="td"
    {...props}
    __css={{
      py: '16px',
      color: 'darkGrey',
      mb: '5px',
      backgroundColor: 'inputBackground',
    }}
  />
)*/

// Card.Row = CardRow
// Card.RowItem = CardRowItem
