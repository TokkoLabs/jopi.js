import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { useToggle } from '@oneloop/hooks'

export const Image = ({ textBadge, variantBadge = 'badgeInfoRow', icon, iconColor = '#AEBAC0', ...props }) => {
  const [error, setError] = useToggle(false)

  return (
    <Box
      onError={() => setError(true)}
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
        {...props}
        __css={{
          maxWidth: '100%',
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      {icon && error && <Icon icon={icon} fontSize="24px" style={{ color: iconColor, position: 'absolute', top: '12px', left: '24px' }}/>}
      {textBadge && <Badge variant={variantBadge} style={{ position: 'absolute', left: '0px', bottom: '-1px', width: '100%', textTransform: 'none' }}>{textBadge}</Badge> }
    </Box>
  )
}
