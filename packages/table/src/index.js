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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        mb: '3px',
      }}
      >
      {children}
    </Box>
  </Box>
)


const TableHeaderItemDefault = (props) => (
  <Box
    as="th"
    {...props}
    __css={{
    //  py: '12px',
      color: 'white',
  //    m: '8px',
      backgroundColor: 'neutralGray2',
      '&:first-child': {
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px',
      },
      '&:last-child': {
        borderBottomRightRadius: '8px',
        borderTopRightRadius: '8px',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0px',
    }}
  />
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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
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
    //  mb: '5px',
      gap: '2px',
      height: '54px',
      '&:first-child': {
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px',
      },
      '&:last-child': {
        borderBottomRightRadius: '8px',
        borderTopRightRadius: '8px',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0px',
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