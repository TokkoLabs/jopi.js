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

const TableHeaderDefault = ({ children, ...props }) => (
  <Box as="thead">
    <Box
      as="tr"
      {...props}
      __css={{
        padding: '12px 16px 12px 16px',
        gap: '8px',
        backgroundColor: 'neutralGray2',
        borderRadius: '8px',
        display: 'table-row',
        flexDirection: 'row',
        alignItems: 'center',
        mb: '8px',
      }}
      >
      {children}
    </Box>
  </Box>
)


const TableHeaderItemDefault = ({ children, ...props }) => (
  <Box
    as="th"
    {...props}
    __css={{
      color: 'white',
      py: '12px',
      backgroundColor: 'neutralGray2',
      '&:first-child': {
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px',
      },
      '&:last-child': {
        borderBottomRightRadius: '8px',
        borderTopRightRadius: '8px',
      },
    }}
  > 
    <Box
      __css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </Box>
  </Box>
)

const TableRowDefault = (props) => (
  <Box 
    as="tr" 
    {...props} 
    __css={{
      padding: '6px 12px 6px 12px',
      gap: '12px',
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      height: '54px',
      mb: '3px',
    }}
  />
)

const TableRowItemDefault = (props) => (
  <Box
    as="td"
    {...props}
    __css={{
      color: 'neutralGray2',
      gap: '1px',
      height: '52px',
      '&:first-child': {
        paddingLeft: '12px',
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px',
      },
      '&:last-child': {
        paddingRight: '12px',
        borderBottomRightRadius: '8px',
        borderTopRightRadius: '8px',
      },
  //    display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
  />
)

Table.Header = TableHeader
Table.HeaderItem = TableHeaderItem
Table.Rows = TableBody
Table.Row = TableRow
Table.RowItem = TableRowItem

Table.HeaderDefault = TableHeaderDefault
Table.HeaderItemDefault = TableHeaderItemDefault
Table.RowDefault = TableRowDefault
Table.RowItemDefault = TableRowItemDefault