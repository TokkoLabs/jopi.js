import React, { createContext, useContext, useState } from 'react'
import { Box } from '@oneloop/box'
import { Button, ButtonIcon } from '@oneloop/button'
import { Icon } from '@oneloop/icons'
import { List } from '@oneloop/list'
import { useOnClickOutside } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import theme from '@oneloop/theme'

const DropdownContext = createContext()

export const Dropdown = ({ children, ...props }) => {
  const ref = React.useRef()
  const [open, setIsOpen] = useState(false)

  useOnClickOutside(ref, () => setIsOpen(false))

  const value = React.useMemo(() => ({ open, setIsOpen, ref }), [open])

  return (
    <DropdownContext.Provider value={value}>
      <Box ref={ref} {...props} __css={{ position: 'relative', height: '200px' }}>
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

const DropdownButton = ({ icon, text, variant = 'dropdown', disabled = false, filled = false, isButtonIcon = false, isArrowStatic = false, variantSize = 'dropdownSizeNormal', selection, ...props }) => {
  const { setIsOpen } = useDropdownContext()

  const variantValues = Object.values(theme.buttons)[Object.keys(theme.buttons).indexOf(variant)]
  const colorFilled = variantValues.colorFilled
  const backgroundColorFilled = variantValues.backgroundColorFilled
  const colorArrowFilled = variantValues.colorArrowFilled
  const borderFilled = variantValues.borderFilled
  let sizeArrow = variantValues.sizeArrow
  if (sizeArrow === undefined) {
    sizeArrow = '12px'
  }
  // ESTO FALLA CON LOS CASOS QUE MENCIONO MARIAN
  // Porque llamo al buttonIcon
  if (isButtonIcon) {
    return (
      <ButtonIcon
        variant={[variant, variantSize]}
        icon={icon}
        filled={filled}
        holdPress
        onClick={ !disabled ? () => setIsOpen(prevState => !prevState) : undefined}
      />
    )
  }

  return (
    <Button
        variant={[variant, variantSize]}
      {...props}
      onClick={ !disabled ? () => setIsOpen(prevState => !prevState) : undefined}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textOverflow: 'ellipsis',
        fontFamily: 'Nunito Sans',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'start',
        color: filled && colorFilled,
        border: filled && borderFilled,
        backgroundColor: filled && backgroundColorFilled,
        justifyContent: isArrowStatic ? 'center' : 'flex-start',
        '& span': {
          flex: 1,
        },
      }}
    >
      { icon && (!filled ? <Icon icon={icon} fontSize='16px'/> : <Icon icon={icon} fontSize='16px' style={{ color: colorFilled }}/>) }
      { !filled ? <span>{text}</span> : <span style={{ color: colorFilled, overflow: 'hidden', width: '95%', textOverflow: 'ellipsis' }}>{text}</span> }
      { selection && <span style={ disabled ? { color: '#AEBAC0', fontWeight: 700 } : { color: '#384248', fontWeight: 700 }}>{selection}</span> }
      { !filled
        ? <Icon icon='icon-dropdown' fontSize={sizeArrow} style={{ position: isArrowStatic ? 'static' : 'absolute', right: '12px', transform: 'rotate(0deg)' }}/>
        : <Icon icon='icon-dropdown' fontSize={sizeArrow} style={{ position: isArrowStatic ? 'static' : 'absolute', right: '12px', transform: 'rotate(0deg)', color: colorArrowFilled }}/> }
    </Button>
  )
}

const DropdownList = ({ children, width = '236px', height = '150px', clickClose = false, ...props }) => {
  const { open, setIsOpen } = useDropdownContext()
  return (
    open && (
      <List
        onClick={clickClose ? () => setIsOpen(false) : () => {}}
        {...props}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          py: '5px',
          backgroundColor: 'white',
          boxShadow: 'active',
          borderRadius: 'input',
          position: 'absolute',
          top: '38px',
          zIndex: 1,
          width: width,
          height: height,
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

const DropdownText = ({ children }) => (
  <Text variant='body.fontSize12' style={{ padding: '9px 12px 9px 12px' }}>
    {children}
  </Text>
)

Dropdown.Button = DropdownButton
Dropdown.Items = DropdownList
Dropdown.Item = DropdownListItem
Dropdown.Default = DropdownListDefault
Dropdown.Multiselect = DropdownListMultiselect
Dropdown.Icon = DropdownListIcon
Dropdown.Text = DropdownText
Dropdown.Search = DropdownListSearch
