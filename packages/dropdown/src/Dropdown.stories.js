import React, { useState } from 'react'
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
      icon: 'icon-alerta',
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
]

export const Search = () => {
  const [list, setList] = useState([])
  const [filteredData, setValue] = useFilterData(data, 'content')
  const [text, setText] = useState('')

  const onFilter = (e) => {
    setValue(e.target.value)
    setText(e.target.value)
  }

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }
  const valueTextButton = list.length > 0
    ? data.filter(user => user.id === list[0])[0].content.name + (list.length > 1 ? ' + ' + (list.length - 1) : '')
    : 'Agente'

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={valueTextButton} filled={ list.length > 0 }/>
      <Dropdown.Items>
        <Dropdown.Search placeholder='Search' onChange={onFilter} value={text}/>
        {filteredData.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={ user.id === 23 } active={list.includes(user.id)}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefault = () => {
  const [value, setValue] = useState('Seleccione')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={ value !== 'Seleccione' } />
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
      <Dropdown.Button variant='dropdownDisabled' text={value} filled={ value !== 'Seleccione' } />
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
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={value} icon={icon} filled={ value !== 'Opción elegida' } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon="icon-agente" onClick={e => { setValue(user.content.name); setIcon('icon-agente')}}>
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
      <Dropdown.Button variant='dropdownOutlined' text={value} filled={ value !== 'Opción elegida' } />
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
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownOutlined' text={value} icon={icon} filled={ value !== 'Opción elegida' } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon="icon-agente" onClick={e => { setValue(user.content.name); setIcon('icon-agente')}}>
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
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownOutlinedDisabled' text={value} icon={icon} filled={ value !== 'Opción elegida' } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon="icon-agente" onClick={e => { setValue(user.content.name); setIcon('icon-agente')}}>
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
      <Dropdown.Button variant='dropdownTransparent' text={value} filled={ value !== 'Opción elegida' } />
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
      <Dropdown.Button variant='dropdownTransparentDisabled' disabled text={value} filled={ value !== 'Opción elegida' } />
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
      <Dropdown.Button variant='dropdownIcon' isButtonIcon icon={icon} filled={ icon !== 'icon-configuracion' } variantSize='iconSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon="icon-agente" onClick={e => { setIcon('icon-agente')}}>
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
      <Dropdown.Button variant='dropdownIconDisabled' isButtonIcon disabled icon={icon} filled={ icon !== 'icon-configuracion' } variantSize='iconSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Icon key={user.id} icon="icon-agente" onClick={e => { setIcon('icon-agente')}}>
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
      <Dropdown.Button variant='dropdownButtonPrimary' variantSize='dropdownSizeButton' text={value} filled={ value !== 'Label opcion' } isArrowStatic />
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
      <Dropdown.Button variant='dropdownButtonPrimaryDisabled' variantSize='dropdownSizeButton' disabled text={value} filled={ value !== 'Label' } isArrowStatic />
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
      <Dropdown.Button variant='dropdownColored' variantSize='dropdownSizeLargeColored' text={value} filled={ value !== 'Placeholder' } />
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
      <Dropdown.Button variant='dropdownColoredTransparent' variantSize='dropdownSizeLargeColored' text={value} filled={ value !== 'Placeholder' } />
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
      <Dropdown.Button variant='dropdownDefault' text={value} filled={ value !== 'Placeholder' } />
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
      <Dropdown.Button variant='dropdownDefault' icon={value} filled={ value !== 'icon-configuracion' } isButtonIcon variantSize='iconSmall'/>
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
      <Dropdown.Button variant='dropdownDefault' text={value} filled={ value !== 'Opción elegida' } variantSize = 'dropdownSizeSmall'/>
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

export const DropdownDefaultExtraSmall = () => {
  const [value, setValue] = useState('Opción elegida')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={ value !== 'Opción elegida' } variantSize = 'dropdownSizeExtraSmall'/>
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

export const DropdownStatesIconSmall = () => {
  const [value, setValue] = useState('icon-configuracion')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' icon={value} filled={value !== 'icon-configuracion'} isButtonIcon variantSize='iconSmall'/>
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
      <Dropdown.Button variant='dropdownDefault' icon={value} filled={value !== 'icon-configuracion'} isButtonIcon variantSize='iconExtraSmall'/>
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
      <Dropdown.Button variant='dropdownDefault' text={valueTextButton} filled={list.length > 0} variantSize = 'dropdownSizeSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={ user.id === 23 } variantSize = 'dropdownSizeSmall'>
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
      <Dropdown.Button variant='dropdownDefault' text={valueTextButton} filled={list.length > 0} variantSize = 'dropdownSizeSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={ user.id === 23 } variantSize = 'dropdownSizeExtraSmall'>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}
