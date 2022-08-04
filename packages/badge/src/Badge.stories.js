import React from 'react'

import { Badge } from '.'
import { Text } from '@oneloop/text'

export default {
  component: Badge,
  title: 'Badge',
}

export const primary = () => <Badge>{'20'}</Badge>

export const secondary = () => <Badge variant="secondary">{'2'}</Badge>

export const icon = () => (
  <Badge variant="badgeInfo" isMedium hasIcon>
    <span className='icon-vista' style={{ position: 'absolute', fontSize: '12px', paddingTop: '1.8px' }}/>
    <span style={{ paddingLeft: '16px' }}>{'55'}</span>
  </Badge>
)

export const redTokko = () => <Badge variant="badgeTips">{'50%'}</Badge>

export const added = () => <Badge variant="badgeAdded">{'+100'}</Badge>

export const addedMaxValue = () => <Badge variant="badgeAdded">{'100+'}</Badge>

export const removed = () => <Badge variant="badgeRemoved">{'-100'}</Badge>

export const iconRounded = () => (
  <Badge variant="badgeInfo" isBig isRounded>
    <Text variatn="bodyBold.fontSize12">SE</Text>
  </Badge>
)