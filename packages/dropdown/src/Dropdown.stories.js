import React from 'react'
import { action } from '@storybook/addon-actions'
import { Dropdown } from '.'
import { useFilterData } from '@oneloop/list'

export default {
  component: Dropdown,
  title: 'Dropdown',
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

export const search = () =>
  React.createElement(() => {
    const [filteredData, setValue] = useFilterData(data, 'content')

    const onFilter = (e) => {
      setValue(e.target.value)
    }

    return (
      <Dropdown width={1 / 3}>
        <Dropdown.Button>{'Placeholder'}</Dropdown.Button>
        <Dropdown.Items>
          <Dropdown.Search placeholder="search something" onChange={onFilter} />
          {filteredData.map((user) => (
            <Dropdown.Item key={user.id} onClick={action('selected')}>
              {user.content.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Items>
      </Dropdown>
    )
  })

export const select = () => (
  <Dropdown width={1 / 3}>
    <Dropdown.Button>{'Opción elegida'}</Dropdown.Button>
    <Dropdown.Items>
      {data.map((user) => (
        <Dropdown.Item key={user.id} onClick={action('selected')}>
          {user.content.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Items>
  </Dropdown>
)

/****** Dropdown Input ******/
export const dropdownInputDefault = () => (
  <Dropdown width={1 / 3}>
    <Dropdown.Button variant="dropdownInputDefault" text="Opción elegida"></Dropdown.Button>
    <Dropdown.Items>
      {data.map((user) => (
        <Dropdown.Item key={user.id} onClick={action('selected')}>
          {user.content.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Items>
  </Dropdown>
)