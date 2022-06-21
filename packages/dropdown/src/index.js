import React, { createContext, useContext } from 'react'
import { Box } from '@oneloop/box'
import { Button } from '@oneloop/button'
import { List } from '@oneloop/list'
import { useToggle, useOnClickOutside } from '@oneloop/hooks'
import theme from '@oneloop/theme'

const DropdownContext = createContext()

export const Dropdown = ({ children, ...props }) => {
  const ref = React.useRef()
  const [open, toggle] = useToggle(false)

  useOnClickOutside(ref, () => toggle(false))

  const value = React.useMemo(() => ({ open, toggle, ref }), [open])

  return (
    <DropdownContext.Provider value={value}>
      <Box {...props} __css={{ position: 'relative', height: '150px' }}>
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

const DropdownButton = ({ icon, text, filled, variant = "dropdown", disabled = false, ...props }) => {
  const { toggle } = useDropdownContext()

  const index = Object.keys(theme.buttons).indexOf(variant)
  const colorFilled = Object.values(theme.buttons)[index].colorFilled
  const backgroundColorFilled = Object.values(theme.buttons)[index].backgroundColorFilled

  return (
    <Button
      variant={variant}
      {...props}
      onClick={ !disabled && toggle}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderRadius: '8px',
        textAlign: 'start',
        justifyContent: 'start',
        fontSize: 1,
        lineHeight: 0,
        height: '32px',
        width: '100%',
        gap: '4px',
      }}
    >
      { icon && <span className={icon} style={ filled && {color: colorFilled }}/> }
      { !filled && <span>{text}</span> }
      { filled && <span style={{color: colorFilled }}>{ text }</span> }
      <span className='icon-dropdown' style={{ position: 'absolute', right: '12px', fontSize: '13.5px', height: '13.5px', transform: 'rotate(0deg)' }}/>
    </Button>
  )
}

const DropdownList = ({ children, ...props }) => {
  const { open, ref } = useDropdownContext()
  return (
    open && (
      <List
        ref={ref}
        {...props}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          mt: '5px',
          py: '5px',
          backgroundColor: 'inputBackground',
          boxShadow: 'active',
          borderRadius: 'input',
          position: 'absolute',
          top: '42px',
          zIndex: 1,
          width: '236px',
        }}
      >
        {children}
      </List>
    )
  )
}

const DropdownListSearch = (props) => <List.Search {...props} />

const DropdownListItem = (props) => (
  <List.Item
    {...props}
    sx={{
      cursor: 'pointer',
      fontSize: '2',
      color: 'darkGray',
    }}
  />
)

Dropdown.Button = DropdownButton
Dropdown.Items = DropdownList
Dropdown.Item = DropdownListItem
Dropdown.Search = DropdownListSearch
