import React, { createContext, useContext } from 'react'
import { Box } from '@oneloop/box'
import { Button, ButtonIcon } from '@oneloop/button'
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

const DropdownButton = ({ icon, text, variant = 'dropdown', disabled = false, filled = false, isButtonIcon = false, isArrowStatic = false, variantSize = 'dropdownSizeNormal', ...props }) => {
  const { toggle } = useDropdownContext()

  const variantValues = Object.values(theme.buttons)[Object.keys(theme.buttons).indexOf(variant)]
  const colorFilled = variantValues.colorFilled
  const backgroundColorFilled = variantValues.backgroundColorFilled
  const colorArrowFilled = variantValues.colorArrowFilled
  let sizeArrow = variantValues.sizeArrow
  if (sizeArrow === undefined) {
    sizeArrow = '12px'
  }

  if (isButtonIcon) {
    return (
      <ButtonIcon
        variant={[variant, variantSize]}
        icon={icon}
        onClick={ !disabled ? toggle : undefined}
      />
    )
  }

  return (
    <Button
      variant={[variant, variantSize]}
      {...props}
      onClick={ !disabled ? toggle : undefined}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textOverflow: 'ellipsis',
        fontFamily: 'Nunito Sans',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'start',
        fontSize: '14px',
        width: '100%',
        backgroundColor: filled ? backgroundColorFilled : undefined,
        justifyContent: isArrowStatic ? 'center' : 'flex-start',
      }}
    >
      { icon && (!filled ? <span className={icon} style={{ fontSize: '16px', height: '16px' }}/> : <span className={icon} style={{ color: colorFilled, backgroundColor: backgroundColorFilled, fontSize: '16px', height: '16px' }}/>) }
      { !filled ? <span>{text}</span> : <span style={{ color: colorFilled }}>{text}</span> }
      { !filled
        ? <span className='icon-dropdown' style={{ position: isArrowStatic ? 'static' : 'absolute', right: '12px', fontSize: sizeArrow, height: sizeArrow, transform: 'rotate(0deg)' }}/>
        : <span className='icon-dropdown' style={{ position: isArrowStatic ? 'static' : 'absolute', right: '12px', fontSize: sizeArrow, height: sizeArrow, transform: 'rotate(0deg)', color: colorArrowFilled }}/> }
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

const DropdownListDefault = ({ disabled, variantSize = 'dropdownSizeNormal', ...props }) => (
  <List.Default
    disabled={disabled}
    variantSize={variantSize}
    {...props}
    sx={{
      cursor: disabled ? 'default' : 'pointer',
      pointerEvents: disabled ? 'none' : undefined,
      userSelect: disabled ? 'none' : undefined,
      fontSize: '2',
      color: 'darkGray',
    }}
  />
)

const DropdownListMultiselect = ({ disabled, active, variantSize = 'dropdownSizeNormal', ...props }) => (
  <List.Multiselect
    disabled={disabled}
    isActive={active}
    variantSize={variantSize}
    {...props}
    sx={{
      cursor: disabled ? 'default' : 'pointer',
      pointerEvents: disabled ? 'none' : undefined,
      userSelect: disabled ? 'none' : undefined,
      fontSize: '2',
      color: 'darkGray',
    }}
  />
)

const DropdownListIcon = ({ disabled, active, icon, variantSize = 'dropdownSizeNormal', ...props }) => (
  <List.Icon
    disabled={disabled}
    icon={icon}
    variantSize={variantSize}
    {...props}
    sx={{
      cursor: disabled ? 'default' : 'pointer',
      pointerEvents: disabled ? 'none' : undefined,
      userSelect: disabled ? 'none' : undefined,
      fontSize: '2',
      color: 'darkGray',
    }}
  />
)

Dropdown.Button = DropdownButton
Dropdown.Items = DropdownList
Dropdown.Item = DropdownListItem
Dropdown.Default = DropdownListDefault
Dropdown.Multiselect = DropdownListMultiselect
Dropdown.Icon = DropdownListIcon
Dropdown.Search = DropdownListSearch
