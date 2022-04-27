import React from 'react'

import { Badge } from '.'

export default {
  component: Badge,
  title: 'Badge',
}

export const primary = () => <Badge>{'20'}</Badge>

export const secondary = () => <Badge variant="secondary">{'2'}</Badge>

export const icon = () => <Badge variant="badgeInfo" icon="icon-vista" isMedium>
    <span className='icon-vista'/>{'55'}
  </Badge>

export const redTokko = () => <Badge variant="badgeTips">{'50%'}</Badge>

export const added = () => <Badge variant="badgeAdded">{'+100'}</Badge>

export const addedMaxValue = () => <Badge variant="badgeAdded">{'100+'}</Badge>

export const removed = () => <Badge variant="badgeRemoved">{'-100'}</Badge>
