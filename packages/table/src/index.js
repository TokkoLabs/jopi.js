import React from 'react'
import { Box } from '@oneloop/box'

export const Table = (props) => (
  <Box
    as="table"
    {...props}
    __css={{
      fontFamily: 'primary',
      width: '100%',
      //  borderSpacing: '0px',
      borderSpacing: '0px 4px',
      //  borderCollapse: 'collapse',
      // borderCollapse: 'separate',
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

const TableBody = (props) => (
  <Box
    as="tbody"
    {...props}
  />
)

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

const TableHeaderItemDefault = ({ children, ...props }) => (
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

const TableRowDefault = ({ children, disabled, variant = 'primary', selected, ...props }) => {
  if (disabled) {
    variant = variant + 'Disabled'
  }

  return (
    <Box
      as="tr"
      tx='rows'
      variant={ (selected && !disabled) ? variant + 'Selected' : variant }
      {...props}
      __css={{
        fontFamily: 'Nunito Sans',
        padding: '6px 12px 6px 12px',
        gap: '12px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        height: '54px',
        mb: '8px',
        color: disabled ? 'neutralGray4' : 'neutralGray2',
        border: '1px solid #000000',
        paddingBottom: '1em',
      }}
    >
      {children}
    </Box>
  )
}

const TableRowItemDefault = ({ children, error, center, ...props }) => (
  <Box
    as="td"
    {...props}
    __css={{
      paddingTop: '5px',
      gap: '1px',
      /* ':hover': {
      borderTop: '10px solid #000000',
      borderBottom: '10px solid #000000',
      }, */
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
        gap: '2px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: center ? 'center' : 'flex-start',
        alignItems: center ? 'center' : 'flex-start',
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

Table.HeaderDefault = TableHeaderDefault
Table.HeaderItemDefault = TableHeaderItemDefault
Table.RowDefault = TableRowDefault
Table.RowItemDefault = TableRowItemDefault
