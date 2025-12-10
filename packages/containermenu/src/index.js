import React from 'react'
import { Box } from '@quintoandar-tokko/box'
import { Icon } from '@quintoandar-tokko/icons'
import { Text } from '@quintoandar-tokko/text'

export const ContainerMenu = ({ children, variant = 'normal', titleText, prefixIcon, suffix, width, height, ...props }) => (
  <Box
    tx='containerMenu'
    variant={variant}
    __css={{
      position: 'relative',
      fontFamily: 'Nunito Sans',
      display: 'flex',
      flexDirection: 'column',
      padding: '12px',
      gap: '16px',
      width: width,
      height: height,
    }}
  >
    <Box __css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
      <Icon icon={prefixIcon} fontSize='18px' style={{ color: '#DF1E02', marginTop: '2px' }} />
      <Text variant='bodyBold.fontSize14' style={{ color: '#384248', marginTop: '6px' }}>{titleText}</Text>
    </Box>
    <Box __css={{ position: 'absolute', right: '13px', top: '12px' }}>
      {suffix}
    </Box>
    {children}
  </Box>
)
