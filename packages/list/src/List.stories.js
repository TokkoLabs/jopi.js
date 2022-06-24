import React from 'react'
import { action } from '@storybook/addon-actions'

import { List, useFilterData } from '.'

export default {
  component: List,
  title: 'List',
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

export const normal = () => (
  <List width={1 / 3}>
    <List.Item>Hola</List.Item>
    <List.Item>Good</List.Item>
    <List.Item>Bye</List.Item>
  </List>
)
export const selectable = () => (
  <List width={1 / 3}>
    <List.Item
      onClick={action('Data selected change')}
      sx={{ cursor: 'pointer' }}
    >
      Hola
    </List.Item>
    <List.Item
      onClick={action('Data selected change')}
      sx={{ cursor: 'pointer' }}
    >
      Good
    </List.Item>
    <List.Item
      onClick={action('Data selected change')}
      sx={{ cursor: 'pointer' }}
    >
      Bye
    </List.Item>
  </List>
)

export const searchable = () =>
  React.createElement(() => {
    const [filteredData, setValue] = useFilterData(data, 'content')

    return (
      <List width={1 / 3}>
        <List.Search onChange={(e) => setValue(e.target.value)} />
        {filteredData.map((user) => (
          <List.Item key={user.id}>{user.content.name}</List.Item>
        ))}
      </List>
    )
  }
)

export const defaultNormal = () => (
  <List width={1 / 3}>
    <List.Default disabled>Hola</List.Default>
    <List.Default>Good</List.Default>
    <List.Default>Bye</List.Default>
  </List>
)

export const multiselect = () => (
  <List width={1 / 3}>
    <List.Multiselect disabled>Hola</List.Multiselect>
    <List.Multiselect>Good</List.Multiselect>
    <List.Multiselect>Bye</List.Multiselect>
  </List>
)