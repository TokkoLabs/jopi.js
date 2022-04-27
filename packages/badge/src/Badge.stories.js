import React from 'react'

import { Badge } from '.'

export default {
  component: Badge,
  title: 'Badge',
}

export const primary = () => <Badge>{'20'}</Badge>

export const secondary = () => <Badge variant="secondary">{'2'}</Badge>

export const icon = () => <Badge variant="badgeInfo" hasIcon isMedium>
  <span className='icon-vista' style={{ position: 'absolute', paddingTop: '0.5px' }}/>
  <span style={{ paddingLeft: '10px' }}>{'55'}</span>
</Badge>

export const redTokko = () => <Badge variant="badgeTips">{'50%'}</Badge>

export const added = () => <Badge variant="badgeAdded">{'+100'}</Badge>

export const addedMaxValue = () => <Badge variant="badgeAdded">{'100+'}</Badge>

export const removed = () => <Badge variant="badgeRemoved">{'-100'}</Badge>
