import React, { createContext, useContext } from 'react'
import { Box, Flex } from '@oneloop/box'
import { Button } from '@oneloop/button'
import { List } from '@oneloop/list'
import { useToggle } from '@oneloop/hooks'

const DropdownContext = createContext()

export const Dropdown = ({ children, ...props }) => {
  const [open, toggle] = useToggle(false)

  const value = React.useMemo(() => ({ open, toggle }), [open])

  return (
    <DropdownContext.Provider value={value}>
      <Box {...props} __css={{ display: 'inline-grid' }}>
        {children}
      </Box>
    </DropdownContext.Provider>
  )
}

const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error(
      `Dropdown compound components cannot be rendered outside the Dropdown component`
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
      }}
    />
  )
}

const DropdownList = props => {
  const { open } = useDropdownContext()
  return (
    open && (
      <Flex
        sx={{
          backgroundColor: 'neutral.0',
          boxShadow: 'active',
          borderRadius: 'default',
          margin: '5px 0 0',
        }}
      >
        <List
          {...props}
          __css={{
            flexGrow: 1,
            width: 0,
            mt: 0,
            mb: '5px',
          }}
        />
      </Flex>
    )
  )
}

Dropdown.Button = DropdownButton
Dropdown.Items = DropdownList
