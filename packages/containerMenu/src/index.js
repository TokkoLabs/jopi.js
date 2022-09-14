import React from 'react'
import { Box } from '@oneloop/box'
import { Text } from '@oneloop/text'

export const ContainerMenu = ({ children, variant = 'normal', titleText, prefixIcon, suffix, width, height, ...props }) => (
  <Box
    tx='containerMenu'
    variant={variant}
    __css={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: '12px',
      gap: '16px',
      width: width,
      height: height,
    }}
  >
    <Box __css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
      <span className={prefixIcon} style={{ color: '#DF1E02', fontSize: '14px', height: '14px' }}/>
      <Text variant='bodyBold.fontSize14'>{titleText}</Text>
      <Box __css={{ position: 'absolute', right: '5.41%' }}>
        {suffix}
      </Box>
    </Box>
    {children}
  </Box>
)
