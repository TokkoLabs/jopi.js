import React, { createContext, useContext, useState } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'

const TableContext = createContext()

export const Table = (props) => {

  const ref = React.useRef()
  const [idHover, setIdHover] = useState('')

  const value = React.useMemo(() => ({ idHover, setIdHover, ref }), [idHover])

  return(
    <TableContext.Provider value={value}>
      <Box
        as="table"
        {...props}
        __css={{
          fontFamily: 'primary',
          width: '100%',
          borderSpacing: '0px 4px',
        }}
      />
    </TableContext.Provider>
  )
}

const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error(
      'Table compound components cannot be rendered outside the Dropdown component'
    )
  }
  return context
}

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

const TableHeaderItemDefault = ({ children, row, ...props }) => (
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
        flexDirection: row ? 'row' : 'column',
        justifyContent: 'flex-start',
        alignItems: row ? 'center' : 'flex-start',
        gap: row ? '2px' : '0px',
      }}
    >
      {children}
    </Box>
  </Box>
)

const TableRowDefault = ({ children, disabled, variant = 'primary', selected, id = 0, ...props }) => {
  if (disabled) {
    variant = variant + 'Disabled'
  }
  const { setIdHover } = useTableContext()

  return (
    <Box
      as="tr"
      tx='rows'
      variant={ (selected && !disabled) ? variant + 'Selected' : variant }
      onMouseOver={() => !disabled && setIdHover(id)}
      onMouseOut={() => !disabled && setIdHover(undefined)}
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
        paddingBottom: '1em',
      }}
    >
      {children}
    </Box>
  )
}

const TableRowItemDefault = ({ children, center, id = 0, variant = 'primary', ...props }) => {
  const { idHover } = useTableContext()
  const variantValues = Object.values(theme.rows)[Object.keys(theme.rows).indexOf(variant || 'primary')]
  const border = idHover !== id ? (variantValues.border || '1px solid #00000000') : variantValues.borderHover

  return (
    <Box
      as="td"
      {...props}
      __css={{
        gap: '1px',
        borderTop: border,
        borderBottom: border,
        '&:first-child': {
          paddingLeft: '12px',
          borderBottomLeftRadius: '8px',
          borderTopLeftRadius: '8px',
          borderLeft: border,
        },
        '&:last-child': {
          paddingRight: '12px',
          borderBottomRightRadius: '8px',
          borderTopRightRadius: '8px',
          borderRight: border,
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
}

Table.Header = TableHeader
Table.HeaderItem = TableHeaderItem
Table.Rows = TableBody
Table.Row = TableRow
Table.RowItem = TableRowItem

Table.HeaderDefault = TableHeaderDefault
Table.HeaderItemDefault = TableHeaderItemDefault
Table.RowDefault = TableRowDefault
Table.RowItemDefault = TableRowItemDefault
