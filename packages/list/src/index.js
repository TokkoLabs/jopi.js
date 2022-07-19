import React, { forwardRef } from 'react'
import { Box, Flex } from '@oneloop/box'
import { Input } from '@oneloop/input'
import { useFilterData } from '@oneloop/hooks'
import { Checkbox } from '@oneloop/checkbox'
import { useToggle } from '@oneloop/hooks'
import { Button, ButtonHoldPress, ButtonIcon, ButtonMain } from '@oneloop/button'

const List = forwardRef(({ children, ...props }, ref) => (
  <Box
    ref={ref}
    as="ul"
    {...props}
    __css={{
      listStyleType: 'none',
      p: 0,
    }}
  >
    {children}
  </Box>
))

const ListInput = (props) => (
  <Flex as="span" sx={{ px: '16px', py: '14px' }}>
    <Input
      width={1}
      {...props}
      sx={{ borderRadius: 'circle', bg: 'rgba(0, 0, 0, 0.04)', mb: 0 }}
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
        <Button variant={[ disabled ? 'mainItemSmallListDisabled' : 'mainItemSmallList', variantSize ]} >{children}</Button>
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
        <ButtonHoldPress variant={[ disabled ? 'mainItemSmallListDisabled' : 'mainItemSmallList', variantSize ]} active={active} onClick={toggle} text={children} hasCheckbox disabled={disabled}/>
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
        <ButtonIcon variant={[ disabled ? 'mainItemSmallListDisabled' : 'mainItemSmallList', variantSize ]} icon={icon} text={children}/>
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
