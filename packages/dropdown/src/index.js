import React, { createContext, useContext } from 'react'
import { Box } from '@oneloop/box'
import { Button } from '@oneloop/button'
import { List } from '@oneloop/list'
import { useToggle } from '@oneloop/hooks'

const DropdownContext = createContext()

export const Dropdown = ({ children, ...props }) => {
  const [open, toggle] = useToggle(false)

  const value = React.useMemo(() => ({ open, toggle }), [open])

  return (
    <DropdownContext.Provider value={value}>
      <Box {...props} __css={{ position: 'relative' }}>
        {children}
      </Box>
    </DropdownContext.Provider>
  )
}

const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error(
      'Dropdown compound components cannot be rendered outside the Dropdown component'
    )
  }
  return context
}

const DropdownButton = props => {
  const { toggle } = useDropdownContext()
  return (
    <Button
      {...props}
      onClick={toggle}
      sx={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: '12px',
        px: '16px',
        textAlign: 'start',
        fontSize: 1,
        lineHeight: 0,
        height: '36px',
      }}
    />
  )
}

const DropdownList = ({ children, ...props }) => {
  const { open } = useDropdownContext()
  return (
    open && (
      <List
        {...props}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          mt: 0,
          py: '5px',
          backgroundColor: 'neutral.0',
          boxShadow: 'active',
          borderRadius: 'default',
          position: 'absolute',
          top: '42px',
        }}
      >
        {children}
      </List>
    )
  )
}

const DropdownListSearch = props => <List.Search {...props} />

const DropdownListItem = props => (
  <List.Item {...props} sx={{ cursor: 'pointer' }} />
)

Dropdown.Button = DropdownButton
Dropdown.Items = DropdownList
Dropdown.Item = DropdownListItem
Dropdown.Search = DropdownListSearch
