import React, { forwardRef } from 'react'
import { Box, Flex } from '@oneloop/box'
import { Input } from '@oneloop/input'
import { useFilterData } from '@oneloop/hooks'
import { Checkbox } from '@oneloop/checkbox'

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

List.Search = ListInput
List.Item = ListItem
List.displayName = 'List'

export { List, useFilterData }
