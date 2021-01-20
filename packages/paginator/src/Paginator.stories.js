import React from 'react'
import { Paginator } from '.'

export default {
  component: Paginator,
  title: 'Paginator',
}

export const normal = () => (
  <Paginator currentPage={7} total={23} perPage={10} />
)
