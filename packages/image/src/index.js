import React from 'react'
import { Badge } from '@quintoandar-tokko/badge'
import { Box } from '@quintoandar-tokko/box'
import { Icon } from '@quintoandar-tokko/icons'
import { useToggle } from '@quintoandar-tokko/hooks'

export const Image = ({ textBadge, variant, variantBadge = 'badgeInfoRow', icon, iconColor = '#AEBAC0', ...props }) => {
  const [error, setError] = useToggle(false)

  return (
    <Box
      onError={() => setError(true)}
      variant={variant}
      {...props}
      __css={{
        maxWidth: '100%',
        height: 'auto',
        position: 'relative',
        textAlign: 'center',
        background: error && '#EFF3F5',
      }}
    >
      <Box
        as="img"
        display = {error ? 'none' : 'normal'}
        variant={variant}
        {...props}
        __css={{
          maxWidth: '100%',
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      {icon && error && <Icon icon={icon} fontSize={variant === 'avatar' ? '32px' : '24px'} style={{ color: iconColor, position: 'absolute', top: variant === 'avatar' ? '0px' : '12px', left: variant === 'avatar' ? '0px' : '24px' }}/>}
      {textBadge && <Badge variant={variantBadge} style={{ position: 'absolute', left: '0px', bottom: '-1px', width: '100%', textTransform: 'none' }}>{textBadge}</Badge> }
    </Box>
  )
}
