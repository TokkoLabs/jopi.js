import React from 'react'
import { action } from '@storybook/addon-actions'

import { List } from '.'

export default {
  component: List,
  title: 'Design System|List',
}

const data = [
  {
    id: 22,
    content: {
      name: 'Agustin Iglesias',
      count: 10,
    },
  },
  {
    id: 23,
    content: {
      name: 'Josefina Golubicki',
      count: 43,
    },
  },
  {
    id: 8,
    content: {
      name: 'Wally',
      count: 45,
    },
  },
]

let dataSelected = [
  {
    id: 8,
    content: {
      name: 'Walter Pimazzoni',
      count: 323,
    },
  },
]

export const normal = () => (
  <List
    width={1 / 3}
    data={data}
    selectedData={dataSelected}
    onChangeSelected={action('Data selected change')}
  />
)
export const selectable = () => (
  <List
    width={1 / 3}
    data={data}
    isSelecteable
    selectedData={dataSelected}
    onChangeSelected={action('Data selected change')}
  />
)
export const searchable = () => (
  <List
    width={1 / 3}
    data={data}
    isSearchable
    selectedData={dataSelected}
    onChangeSelected={action('Data selected change')}
  />
)

export const multi = () => (
  <List
    width={1 / 3}
    data={data}
    isMultiSelecteable
    selectedData={dataSelected}
    onChangeSelected={action('Data selected change')}
  />
)

export const multiSearch = () => (
  <List
    width={1 / 3}
    data={data}
    isMultiSelecteable
    isSearchable
    selectedData={dataSelected}
    onChangeSelected={action('Data selected change')}
  />
)

export const SingleSearch = () => (
  <List
    width={1 / 3}
    data={data}
    isSelecteable
    isSearchable
    selectedData={dataSelected}
    onChangeSelected={action('Data selected change')}
  />
)
