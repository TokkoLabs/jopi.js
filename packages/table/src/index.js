import React from 'react'
import { Box } from '@oneloop/box'

export const Table = (props) => (
  <Box
    as="table"
    {...props}
    __css={{
      fontFamily: 'primary',
      width: '100%',
      borderSpacing: '0 4px',
    }}
  />
)

const TableHeaderItem = (props) => (
  <Box
    as="th"
    {...props}
    __css={{
      py: '16px',
      color: 'white',
      mb: '5px',
      backgroundColor: 'secondary',
      // ':firstchild': {
      //   borderRadius: 'input',
      // },
    }}
  />
)

const TableBody = (props) => <Box as="tbody" {...props} />

const TableHeader = ({ children, ...props }) => (
  <Box as="thead">
    <Box as="tr" {...props}>
      {children}
    </Box>
  </Box>
)
const TableRow = (props) => <Box as="tr" {...props} />

const TableRowItem = (props) => (
  <Box
    as="td"
    {...props}
    __css={{
      py: '16px',
      color: 'darkGrey',
      mb: '5px',
      backgroundColor: 'inputBackground',
      // ':firstchild': {
      //   borderRadius: 'input',
      // },
    }}
  />
)

Table.Header = TableHeader
Table.HeaderItem = TableHeaderItem
Table.Rows = TableBody
Table.Row = TableRow
Table.RowItem = TableRowItem
     