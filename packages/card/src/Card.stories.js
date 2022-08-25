import React from 'react'
import { Box } from '@oneloop/box'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
import { Image } from '@oneloop/image'
import { Card } from '.'
import { Text } from '@oneloop/text'
import { useToggle } from '@oneloop/hooks'

export default {
  component: Card,
  title: 'Card',
}

export const card = () => (
  <Card variant='red' width='224px'>
    <Checkbox />
    <Image variant="rows" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Box sx={{ position: 'relative' }}>
      <Text variant='bodyBold.fontSize10' style={{ color: '#056C53'}}>Disponible</Text>
      <Text variant='body.fontSize11'>IHO2543876</Text>
      <Text variant={[ 'body.fontSize11', 'ellipsis' ]}>Ciudad de la paz 11456</Text>
      <Badge variant="badgeTips" style={{ position: 'absolute', top: '0px', right: '0px' }}>{'50%'}</Badge>
    </Box>
  </Card>
)
