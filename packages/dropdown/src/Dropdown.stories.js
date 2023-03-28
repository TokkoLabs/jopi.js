import React, { useState } from 'react'
import { Dropdown } from '.'
import { useFilterData } from '@oneloop/list'
import { ButtonIcon } from '@oneloop/button'

export default {
  component: Dropdown,
  title: 'Dropdown',
  argTypes: {
    observacionesGenerales: {
      name: 'observaciones generales',
      description: 'El primer Search contiene metodos para organizar las listas por nombres. ' +
        'Hay dos tipos de dropdown seleccionable o multiple.',
    },
    variant: {
      name: 'variant',
      description: 'Variantes de color disponibles: ' +
        '[ \'dropdownDefault\', \'dropdownDisabled\', \'dropdownOutlined\', \'dropdownOutlinedDisabled\',' +
        '\'dropdownTransparent\', \'dropdownTransparentDisabled\', \'dropdownIcon\', \'dropdownIconDisabled\', ' +
        '\'dropdownButtonPrimary\', \'dropdownButtonPrimaryDisabled\', \'dropdownColored\', \'dropdownColoredTransparent\' ]',
      control: { type: 'none' },
    },
    variantSize: {
      name: 'variantSize',
      description: 'Variantes de tamaño disponibles: [ \'dropdownSizeNormal\', \'dropdownSizeSmall\', \'dropdownSizeExtraSmall\' ]',
      control: { type: 'none' },
    },
    width: {
      name: 'width',
      description: 'Se puede ajustar el width del menu que se despliega del dropdown, al agregar width al Dropdown.Items. Default 236px',
      control: { type: 'none' },
    },
    height: {
      name: 'height',
      description: 'Se puede ajustar el height del menu que se despliega del dropdown, al agregar width al Dropdown.Items. Default 150px',
      control: { type: 'none' },
    },
  },
}

let data = [
  {
    id: 22,
    content: {
      name: 'Agustin Iglesias',
      count: 10,
      icon: 'icon-alertas',
    },
  },
  {
    id: 23,
    content: {
      name: 'Josefina Golubicki',
      count: 43,
      icon: 'icon-adjuntar',
    },
  },
  {
    id: 8,
    content: {
      name: 'Wally',
      count: 45,
      icon: 'icon-agente',
    },
  },
  {
    id: 7,
    content: {
      name: 'Walter',
      count: 42,
      icon: 'icon-propiedades',
    },
  },
  {
    id: 6,
    content: {
      name: 'Marcos',
      count: 4,
      icon: 'icon-ambientes',
    },
  },
]

export const Search = () => {
  const [list, setList] = useState([])
  const [filteredData, setValue] = useFilterData(data, 'content')
  const [text, setText] = useState('')

  const onFilter = (value) => {
    setValue(value)
    setText(value)
  }

  const orderList = (list) => {
    return list.sort(function (user1, user2) {
      const nameA = user1.content.name.toUpperCase()
      const nameB = user2.content.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
      const firstItems = orderList((data.filter(user => user.id === value)).concat(data.filter(user => list.find(id => id === user.id) !== undefined)))
      const lastItems = orderList(data.filter(user => list.find(id => id === user.id) === undefined && user.id !== value))
      data = firstItems.concat(lastItems)
    } else {
      setList((list) => list.filter((id) => id !== value))
      const firstItems = orderList(data.filter(user => (list.find(id => id === user.id) !== undefined && user.id !== value)))
      const lastItems = orderList(data.filter(user => user.id === value).concat(data.filter(user => list.find(id => id === user.id) === undefined)))
      data = firstItems.concat(lastItems)
    }
  }
  const valueTextButton = list.length > 0
    ? data.filter(user => user.id === list[0])[0].content.name + (list.length > 1 ? ' + ' + (list.length - 1) : '')
    : 'Agente'

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={valueTextButton} filled={list.length > 0} />
      <Dropdown.Items>
        <Dropdown.Search placeholder='Search' onChange={e => onFilter(e.target.value)} value={text}
          suffix={text !== '' ? <ButtonIcon variant={['transparentIcon', 'iconExtraSmall22px']} icon='icon-cerrar' onClick={e => onFilter('')} /> : undefined} />
        {filteredData.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={user.id === 23} active={list.includes(user.id)}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
        {filteredData.length === 0 &&
          <Dropdown.Text>
            No se encontraron resultados.
          </Dropdown.Text>
        }
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefault = () => {
  const [value, setValue] = useState('Seleccione')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={value !== 'Seleccione'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Default key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Default>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefaultDisabled = () => {
  const [value, setValue] = useState('Seleccione')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDisabled' text={value} filled={value !== 'Seleccione'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Default key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Default>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefaultWithIcon = () => {
  const [value, setValue] = useState('Opción elegida')
  const [icon, setIcon] = useState('icon-ubicacion')

  return (
    <Dropdown width={1 / 3}>
      <Dropdown.Button variant='dropdownDefault' text={value} icon={icon} filled={value !== 'Opción elegida'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon={user.content.icon} onClick={e => { setValue(user.content.name); setIcon(user.content.icon) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownOutlined = () => {
  const [value, setValue] = useState('Opción elegida')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownOutlined' text={value} filled={value !== 'Opción elegida'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Default key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Default>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownOutlinedWithIcon = () => {
  const [value, setValue] = useState('Opción elegida')
  const [icon, setIcon] = useState('icon-ubicacion')

  return (
    <Dropdown width={1 / 3}>
      <Dropdown.Button variant='dropdownOutlined' text={value} icon={icon} filled={value !== 'Opción elegida'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon={user.content.icon} onClick={e => { setValue(user.content.name); setIcon(user.content.icon) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownOutlinedWithIconDisabled = () => {
  const [value, setValue] = useState('Opción elegida')
  const [icon, setIcon] = useState('icon-ubicacion')

  return (
    <Dropdown width={1 / 3}>
      <Dropdown.Button variant='dropdownOutlinedDisabled' text={value} icon={icon} filled={value !== 'Opción elegida'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon={user.content.icon} onClick={e => { setValue(user.content.name); setIcon(user.content.icon) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownTransparent = () => {
  const [value, setValue] = useState('Opción elegida')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownTransparent' text={value} filled={value !== 'Opción elegida'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownTransparentDisabled = () => {
  const [value, setValue] = useState('Opción elegida')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownTransparentDisabled' disabled text={value} filled={value !== 'Opción elegida'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownTransparentSelection = () => {
  const [value, setValue] = useState('Seleccion')

  return (
    <Dropdown width='250px'>
      <Dropdown.Button variant='dropdownTransparentSelection' selection={value} text='Placeholder' filled={value === 'Selection'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownTransparentSelectionDisabled = () => {
  const [value, setValue] = useState('Seleccion')

  return (
    <Dropdown width='250px'>
      <Dropdown.Button variant='dropdownTransparentSelectionDisabled' selection={value} text='Placeholder' filled={value === 'Selection'} disabled />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownIcon = () => {
  const [icon, setIcon] = useState('icon-configuracion')

  return (
    <Dropdown width={1 / 16}>
      <Dropdown.Button variant='dropdownIcon' isButtonIcon icon={icon} filled={icon !== 'icon-configuracion'} variantSize='iconDropdownNormal' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon={user.content.icon} onClick={e => { setIcon(user.content.icon) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownIconDisabled = () => {
  const [icon, setIcon] = useState('icon-configuracion')

  return (
    <Dropdown width={1 / 16}>
      <Dropdown.Button variant='dropdownIconDisabled' isButtonIcon disabled icon={icon} filled={icon !== 'icon-configuracion'} variantSize='iconDropdownNormal' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon={user.content.icon} onClick={e => { setIcon(user.content.icon) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownButton = () => {
  const [value, setValue] = useState('Label opcion')

  return (
    <Dropdown width={1 / 8}>
      <Dropdown.Button variant='dropdownButtonPrimary' variantSize='dropdownSizeButton' text={value} filled={value !== 'Label opcion'} isArrowStatic />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownButtonDisabled = () => {
  const [value, setValue] = useState('Label')

  return (
    <Dropdown width={1 / 8}>
      <Dropdown.Button variant='dropdownButtonPrimaryDisabled' variantSize='dropdownSizeButton' disabled text={value} filled={value !== 'Label'} isArrowStatic />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownColored = () => {
  const [value, setValue] = useState('Placeholder')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownColored' variantSize='dropdownSizeLargeColored' text={value} filled={value !== 'Placeholder'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownColoredTransparent = () => {
  const [value, setValue] = useState('Placeholder')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownColoredTransparent' variantSize='dropdownSizeLargeColored' text={value} filled={value !== 'Placeholder'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesDefault = () => {
  const [value, setValue] = useState('Placeholder')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={value !== 'Placeholder'} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Default key={user.id} onClick={e => { setValue(user.content.name) }}>
            {user.content.name}
          </Dropdown.Default>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesIcon = () => {
  const [value, setValue] = useState('icon-configuracion')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownIcon' icon={value} filled={value !== 'icon-configuracion'} isButtonIcon variantSize='iconDropdownNormal' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.icon) }} icon={user.content.icon}>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefaultSmall = () => {
  const [value, setValue] = useState('Opción elegida')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={value !== 'Opción elegida'} variantSize='dropdownSizeSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Default key={user.id} onClick={e => { setValue(user.content.name) }} variantSize='dropdownSizeSmall'>
            {user.content.name}
          </Dropdown.Default>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefaultExtraSmall = () => {
  const [value, setValue] = useState('Opción elegida')

  return (
    <Dropdown width='200px'>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={value !== 'Opción elegida'} variantSize='dropdownSizeExtraSmall' />
      <Dropdown.Items width='200px' height='100px'>
        {data.map((user) => (
          <Dropdown.Default key={user.id} onClick={e => { setValue(user.content.name) }} variantSize='dropdownSizeExtraSmall'>
            {user.content.name}
          </Dropdown.Default>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesIconSmall = () => {
  const [value, setValue] = useState('icon-configuracion')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownIcon' icon={value} filled={value !== 'icon-configuracion'} isButtonIcon variantSize='iconDropdownSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.icon) }} icon={user.content.icon} variantSize='dropdownSizeSmall'>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesIconExtraSmall = () => {
  const [value, setValue] = useState('icon-configuracion')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownIcon' icon={value} filled={value !== 'icon-configuracion'} isButtonIcon variantSize='iconDropdownExtraSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} onClick={e => { setValue(user.content.icon) }} icon={user.content.icon} variantSize='dropdownSizeExtraSmall'>
            {user.content.name}
          </Dropdown.Icon>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesMultiselectSmall = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }
  const valueTextButton = list.length > 0
    ? data.filter(user => user.id === list[0])[0].content.name + (list.length > 1 ? ' + ' + (list.length - 1) : '')
    : 'Seleccione'

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={valueTextButton} filled={list.length > 0} variantSize='dropdownSizeSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={user.id === 23} variantSize='dropdownSizeSmall'>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesMultiselectExtraSmall = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }
  const valueTextButton = list.length > 0
    ? data.filter(user => user.id === list[0])[0].content.name + (list.length > 1 ? ' + ' + (list.length - 1) : '')
    : 'Seleccione'

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={valueTextButton} filled={list.length > 0} variantSize='dropdownSizeExtraSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={user.id === 23} variantSize='dropdownSizeExtraSmall'>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownNumber = () => {
  const [value, setValue] = useState('Seleccione')

  const horas = ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15']

  return (
    <Dropdown width={1 / 8}>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={value !== 'Seleccione'} />
      <Dropdown.Items style={{ width: 'auto' }}>
        {horas.map((hora, i) => (
          <Dropdown.Default key={i} onClick={e => { setValue(hora) }}>
            {hora}
          </Dropdown.Default>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}
