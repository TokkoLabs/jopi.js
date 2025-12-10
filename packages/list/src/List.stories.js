import React, { useState } from 'react'
import { List, useFilterData } from '.'
import { ButtonIcon } from '@quintoandar-tokko/button'

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
    <List.Default disabled>Item 1</List.Default>
    <List.Default>Item 2</List.Default>
    <List.Default>Item 3</List.Default>
  </List>
)

export const selectable = () => (
  <List width={1 / 3}>
    <List.Multiselect disabled>Item 1</List.Multiselect>
    <List.Multiselect>Item 2</List.Multiselect>
    <List.Multiselect>Item 3</List.Multiselect>
  </List>
)

export const searchable = () =>
  React.createElement(() => {
    const [filteredData, setValue] = useFilterData(data, 'content')
    const [text, setText] = useState('')

    const onFilter = (value) => {
      setValue(value)
      setText(value)
    }

    return (
      <List width={1 / 3}>
        <List.Search
          onChange={(e) => onFilter(e.target.value)}
          placeholder='Search'
          value={text}
          suffix={text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => onFilter('')}/> : undefined }
        />
        {filteredData.map((user) => (
          <List.Multiselect key={user.id}>{user.content.name}</List.Multiselect>
        ))}
      </List>
    )
  }
  )

export const icon = () => (
  <List width={1 / 3}>
    <List.Icon icon="icon-agente" disabled>Item 1</List.Icon>
    <List.Icon icon="icon-agente" >Item 2</List.Icon>
    <List.Icon icon="icon-agente" >Item 3</List.Icon>
  </List>
)
