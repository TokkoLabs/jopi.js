import React, { createContext, useContext, useRef, useState } from 'react'
import { Box, Flex } from '@oneloop/box'
import { Button } from '@oneloop/button'
import { List } from '@oneloop/list'
import { useToggle, useOnClickOutside } from '@oneloop/hooks'

const DropdownContext = createContext()

export const Dropdown = ({ children, ...props }) => {
  const ref = useRef()
  const [open, toggle] = useToggle(false)

  useOnClickOutside(ref, () => toggle(false))

  const value = React.useMemo(() => ({ open, toggle, ref }), [open])

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
        width: '100%',
        textAlign: 'start',
        fontSize: 1,
        lineHeight: 0,
        height: '36px',
      }}
    />
  )
}

const DropdownList = ({ children, ...props }) => {
  const { open, ref } = useDropdownContext()
  return (
    open && (
      <Flex
        ref={ref}
        sx={{
          backgroundColor: 'neutral.0',
          boxShadow: 'active',
          borderRadius: 'default',
          position: 'absolute',
          top: '42px',
          width: '100%',
        }}
      >
        <List
          {...props}
          sx={{
            flexGrow: 1,
            width: 0,
            mt: 0,
            my: '5px',
          }}
        >
          {children}
        </List>
      </Flex>
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
