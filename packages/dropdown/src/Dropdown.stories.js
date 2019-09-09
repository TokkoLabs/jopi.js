import React from 'react'
import { action } from '@storybook/addon-actions'
import { Dropdown } from '.'

export default {
  component: Dropdown,
  title: 'Design System|Dropdown',
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

export const searchMultiSelect = () =>
  React.createElement(() => {
    const [titles, setTitles] = React.useState('')
    const [selected, setSelected] = React.useState([])
    const handleSelect = value => {
      let titlesFormatted = value
        .map(data => data.content.name)
        .flat()
        .join(', ')

      setSelected(value)
      setTitles(titlesFormatted)
    }
    return (
      <Dropdown
        sx={{
          minWidth: '240px',
          maxWidth: '350px',
        }}
      >
        <Dropdown.Button>{titles || 'Opción elegida'}</Dropdown.Button>
        <Dropdown.Items
          data={data}
          onChangeSelected={value => {
            action('Option')
            handleSelect(value)
          }}
          selectedData={selected}
          isSearchable
          isMultiSelecteable
        />
      </Dropdown>
    )
  })

export const multiSelect = () =>
  React.createElement(() => {
    const [titles, setTitles] = React.useState('')
    const [selected, setSelected] = React.useState([])
    const handleSelect = value => {
      let titlesFormatted = value
        .map(data => data.content.name)
        .flat()
        .join(', ')

      setSelected(value)
      setTitles(titlesFormatted)
    }
    return (
      <Dropdown
        sx={{
          minWidth: '240px',
          maxWidth: '350px',
        }}
      >
        <Dropdown.Button>{titles || 'Opción elegida'}</Dropdown.Button>
        <Dropdown.Items
          data={data}
          onChangeSelected={value => {
            action('Option')
            handleSelect(value)
          }}
          selectedData={selected}
          isMultiSelecteable
        />
      </Dropdown>
    )
  })

export const searchSelect = () =>
  React.createElement(() => {
    const [titles, setTitles] = React.useState('')
    const [selected, setSelected] = React.useState([])
    const handleSelect = value => {
      let titlesFormatted = value.content.name

      setSelected(value)
      setTitles(titlesFormatted)
    }
    return (
      <Dropdown
        sx={{
          minWidth: '240px',
          maxWidth: '350px',
        }}
      >
        <Dropdown.Button>{titles || 'Opción elegida'}</Dropdown.Button>
        <Dropdown.Items
          data={data}
          onChangeSelected={value => {
            action('Option')
            handleSelect(value)
          }}
          selectedData={selected}
          isSearchable
          isSelecteable
        />
      </Dropdown>
    )
  })

export const select = () =>
  React.createElement(() => {
    const [titles, setTitles] = React.useState('')
    const [selected, setSelected] = React.useState([])
    const handleSelect = value => {
      let titlesFormatted = value.content.name

      setSelected(value)
      setTitles(titlesFormatted)
    }
    return (
      <Dropdown
        sx={{
          minWidth: '240px',
          maxWidth: '350px',
        }}
      >
        <Dropdown.Button>{titles || 'Opción elegida'}</Dropdown.Button>
        <Dropdown.Items
          data={data}
          onChangeSelected={value => {
            action('Option')
            handleSelect(value)
          }}
          selectedData={selected}
          isSelecteable
        />
      </Dropdown>
    )
  })
