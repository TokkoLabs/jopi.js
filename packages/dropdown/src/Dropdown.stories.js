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

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Agente' filled={ list.length > 0 }></Dropdown.Button>
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

export const Select = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Seleccione' filled={ list.length > 0 }></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={ user.id === 23 } >
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefault = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Opción elegida' filled={ list.length > 0 } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}
////////////////////////////////////// QUEDA LO DE ARRIBA
export const DropdownDefaultDisabled = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDisabled' text='Opción elegida' filled={ list.length > 0 } disabled />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefaultWithIcon = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Opción elegida' icon='icon-ubicacion' filled={ list.length > 0 } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownOutlined = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownOutlined' text='Opción elegida' filled={ list.length > 0 } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownOutlinedWithIcon = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownOutlined' text='Opción elegida' icon='icon-ubicacion' filled={list.length > 0} />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownOutlinedWithIconDisabled = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownOutlinedDisabled' text='Opción elegida' icon='icon-ubicacion' filled={ list.length > 0 } disabled />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownTransparent = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownTransparent' text='Opción elegida' filled={ list.length > 0 } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownTransparentDisabled = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownTransparentDisabled' disabled text='Opción elegida' filled={ list.length > 0 } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownIcon = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 16}>
      <Dropdown.Button variant='dropdownIcon' isButtonIcon icon='icon-configuracion' filled={ list.length > 0 } variantSize='iconSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownIconDisabled = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 16}>
      <Dropdown.Button variant='dropdownIconDisabled' isButtonIcon disabled icon='icon-configuracion' filled={ list.length > 0 } variantSize='iconSmall' />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownButton = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 8}>
      <Dropdown.Button variant='dropdownButtonPrimary' variantSize='dropdownSizeButton' text={'Label'} filled={ list.length > 0 } isArrowStatic></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownButtonDisabled = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 8}>
      <Dropdown.Button variant='dropdownButtonPrimaryDisabled' variantSize='dropdownSizeButton' disabled text={'Label'} filled={ list.length > 0 } isArrowStatic />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownColored = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownColored' text={'Placeholder'} filled={ list.length > 0 } />
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesDefault = () => {
  const [value, setValue] = useState('Placeholder')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text={value} filled={ value !== undefined } />
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
      <Dropdown.Button variant='dropdownDefault' icon={value} filled={ value !== undefined } isButtonIcon variantSize='iconSmall'/>
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
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Opción elegida' filled={ list.length > 0 } variantSize = 'dropdownSizeSmall'/>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} variantSize = 'dropdownSizeSmall'>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownDefaultExtramall = () => {
  const [list, setList] = useState([])

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Opción elegida' filled={ list.length > 0 } variantSize = 'dropdownSizeExtraSmall'/>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} variantSize = 'dropdownSizeSmall'>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const DropdownStatesIconSmall = () => {
  const [value, setValue] = useState('icon-configuracion')

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' icon={value} filled={value !== undefined} isButtonIcon variantSize='iconSmall'/>
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
      <Dropdown.Button variant='dropdownDefault' icon={value} filled={value !== undefined} isButtonIcon variantSize='iconExtraSmall'/>
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

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Seleccione' filled={list.length > 0} variantSize = 'dropdownSizeSmall' />
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

  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Seleccione' filled={list.length > 0} variantSize = 'dropdownSizeSmall' />
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
