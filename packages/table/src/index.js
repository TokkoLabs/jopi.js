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
/*
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
)*/

const TableBody = (props) => <Box as="tbody" {...props} />
/*
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
)*/

const TableHeader = ({ children, ...props }) => (
  <Box as="thead">
    <Box
      as="tr"
      {...props}
      __css={{
        fontFamily: 'Nunito Sans',
        padding: '12px 16px 12px 16px',
        gap: '8px',
        backgroundColor: 'neutralGray2',
        borderRadius: '8px',
        display: 'table-row',
        flexDirection: 'row',
        alignItems: 'center',
        mb: '8px',
        height: '60px',
      }}
      >
      {children}
    </Box>
  </Box>
)

const TableHeaderItem = ({ children, ...props }) => (
  <Box
    as="th"
    {...props}
    __css={{
      color: 'white',
      py: '12px',
      backgroundColor: 'neutralGray2',
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

const TableRow = ({ children, disabled, variant = 'primary', selected, pressed, error, infoAlert, ...props }) => (
  <Box
    as="tr"
    tx='rows'
    variant={variant}
    {...props}
    __css={{
      fontFamily: 'Nunito Sans',
      padding: '6px 12px 6px 12px',
      gap: '12px',
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      height: '54px',
      mb: '2px',
      color: disabled ? 'neutralGray4' : 'neutralGray2',
    }}
    >
    {children}
  </Box>
)

const TableRowItem = ({ children, error, ...props }) => (
  <Box
    as="td"
    tx='rows'
    variant= {error && 'error'}
    {...props}
    __css={{
      gap: '1px',
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

Table.Header = TableHeader
Table.HeaderItem = TableHeaderItem
Table.Rows = TableBody
Table.Row = TableRow
Table.RowItem = TableRowItem
/*
Table.HeaderDefault = TableHeaderDefault
Table.HeaderItemDefault = TableHeaderItemDefault
Table.RowDefault = TableRowDefault
Table.RowItemDefault = TableRowItemDefault
*/
