import React, { forwardRef } from 'react'
import { Box, Flex } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Input } from '@oneloop/input'
import { Checkbox } from '@oneloop/checkbox'
import { useToggle, useFilterData } from '@oneloop/hooks'
import { Button, ButtonIcon } from '@oneloop/button'

const List = forwardRef(({ children, ...props }, ref) => (
  <Box
  ref={ref}
  as="ul"
  {...props}
  __css={{
    listStyleType: 'none',
    padding: '4px',
  }}
  >
    <Box
      __css={{
        overflowY: 'scroll',
        paddingRight: '4px',
        overflow: 'auto',
        'scroll-behavior': 'smooth',
        '::-webkit-scrollbar': {
          width: '4px',
        },
        '::-webkit-scrollbar-track': {
          '-webkit-border-radius': '4px',
          background: '#E4E8EA',
        },
        '::-webkit-scrollbar-thumb': {
          '-webkit-border-radius': '4px',
          background: '#6F838D',
        },
      }}
    >
      {children}
    </Box>
  </Box>
))

const ListInput = (props) => (
  <Flex as="span"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 6px 12px',
      gap: '8px',
    }}
  >
    <Input
      prefix={<Icon icon='icon-buscar' fontSize='14px'/>}
      placeholder="Search"
      variant='inputSearchOutlined'
      {...props}
    />
  </Flex>
)

const ListItem = ({ children, hover = true, ...props }) => (
  <Box
    as="li"
    width={1}
    {...props}
    __css={{
      py: '10px',
      px: '16px',
      display: 'inline-flex',
      // justifyContent: 'start',
      alignItems: 'center',
      fontFamily: 'primary',
      // ':hover': hover && { bg: 'neutral.1' },
    }}
  >
    <Checkbox />
    {children}
  </Box>
)

const ListDefault = ({ children, disabled = false, hover = true, variantSize = 'dropdownSizeNormal', ...props }) => {
  return (
    <Box
      as="li"
      width={1}
      {...props}
      __css={{
        display: 'inline-flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        <Button variant={[disabled ? 'mainItemSmallListDisabled' : 'mainItemSmallList', variantSize]} style={{ borderRadius: '0px' }} >{children}</Button>
      </div>
    </Box>
  )
}

const ListMultiselect = ({ children, disabled = false, hover = true, isActive, variantSize = 'dropdownSizeNormal', ...props }) => {
  const [active, toggle] = useToggle(false)
  if (isActive && !active) {
    toggle(true)
  }

  return (
    <Box
      as="li"
      width={1}
      {...props}
      __css={{
        display: 'inline-flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        <ButtonIcon variant={[disabled ? 'mainItemSmallListDisabled' : 'mainItemSmallList', variantSize]} active={active} onClick={toggle} text={children} hasCheckbox maxWidth holdPress disabled={disabled} style={{ borderRadius: '0px' }}/>
      </div>
    </Box>
  )
}

const ListIcon = ({ children, disabled = false, hover = true, isActive, icon, variantSize = 'dropdownSizeNormal', ...props }) => {
  return (
    <Box
      as="li"
      width={1}
      {...props}
      __css={{
        display: 'inline-flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        <ButtonIcon variant={[disabled ? 'mainItemSmallListDisabled' : 'mainItemSmallList', variantSize]} icon={icon} text={children} style={{ borderRadius: '0px' }}/>
      </div>
    </Box>
  )
}

List.Default = ListDefault
List.Multiselect = ListMultiselect
List.Icon = ListIcon
List.Search = ListInput
List.Item = ListItem
List.displayName = 'List'

export { List, useFilterData }
