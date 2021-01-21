import React from 'react'
import { Paginator } from '.'

export default {
  component: Paginator,
  title: 'Paginator',
}

export const normal = () => (
  <Paginator currentPage={9} total={1000} perPage={10} />
)
