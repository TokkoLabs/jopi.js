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

/* ANTES DE SUBIR CHEQUEAR CON BRA, LA COMENTACION DE ESTOS DOS DROPDOWN
export const search = () =>
  React.createElement(() => {
    const [filteredData, setValue] = useFilterData(data, 'content')

    const onFilter = (e) => {
      setValue(e.target.value)
    }

    return (
      <Dropdown width={1 / 3}>
        <Dropdown.Button text='Placeholder'></Dropdown.Button>
        <Dropdown.Items>
          <Dropdown.Search placeholder='search something' onChange={onFilter} />
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
    <Dropdown.Button text='Opción elegida'></Dropdown.Button>
    <Dropdown.Items>
      {data.map((user) => (
        <Dropdown.Item key={user.id} onClick={action('selected')}>
          {user.content.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Items>
  </Dropdown>
) */

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
      <Dropdown.Button variant='dropdownButtonPrimary' text={'Label'} filled={ list.length > 0 } isArrowStatic></Dropdown.Button>
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
      <Dropdown.Button variant='dropdownButtonPrimaryDisabled' disabled text={'Label'} filled={ list.length > 0 } isArrowStatic />
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
      <Dropdown.Button variant='dropdownColored' text={'Label'} filled={ list.length > 0 } isArrowStatic />
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

export const DropdownStatesMultiselect = () => {
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

export const DropdownStatesMultiselectSearch = () => {
  const [list, setList] = useState([])
  const [filteredData, setValue] = useFilterData(data, 'content')

  const onFilter = (e) => {
    setValue(e.target.value)
  }

  const updateList = (value) => {
    if (!list.includes(value)) {
      setList([...list, value])
    } else {
      setList((list) => list.filter((id) => id !== value))
    }
  }
  // AL ESCRIBIR EN EL SEARCH y cerrarlo se borra lo que se busco.
  // tengo que hacer que lo escrito en el input no se borre, porque lo necesito.
  // o bien perder el filtro, osea que aparezca todo de nuevo.
  // Creo que eso es mejor
  // Usar la opcion para que el filtro vuelva al total
  // DESPUES DE ESTO, QUEDA AGREGAR EL QUE TIENE EL ICONO; EL LUNES LO TERMINO SEGURO
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant='dropdownDefault' text='Agente' filled={ list.length > 0 }></Dropdown.Button>
      <Dropdown.Items>
        <Dropdown.Search placeholder='Search' onChange={onFilter}/>
        {filteredData.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={ user.id === 23 } active={list.includes(user.id)}>
            {user.content.name}
          </Dropdown.Multiselect>
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

/** Other Sizes**/

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
