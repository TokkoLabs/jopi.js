import React from 'react'

import { Badge } from '.'

export default {
  component: Badge,
  title: 'Badge',
}

export const primary = () => <Badge>{'1'}</Badge>

export const secondary = () => <Badge variant="secondary">{'2'}</Badge>

export const success = () => <Badge variant="success">{'10'}</Badge>

export const warning = () => <Badge variant="warning">{'22'}</Badge>

export const danger = () => <Badge variant="danger">{'209'}</Badge>

export const def = () => <Badge variant="default">{'new'}</Badge>
