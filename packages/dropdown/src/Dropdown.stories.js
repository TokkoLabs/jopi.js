import React, {useState} from 'react'
import { action } from '@storybook/addon-actions'
import { Dropdown } from '.'
import { useFilterData } from '@oneloop/list'
import { useToggle } from '@oneloop/hooks'

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
export const dropdownDefault = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownDefault" text="Opción elegida" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownDefaultDisabled = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownDisabled" text="Opción elegida" filled={list.length > 0} disabled></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownDefaultWithIcon = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownDefault" text="Opción elegida" icon="icon-ubicacion" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownOutlined = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownOutlined" text="Opción elegida" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownOutlinedWithIcon = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownOutlined" text="Opción elegida" icon="icon-ubicacion" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownOutlinedWithIconDisabled = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownOutlinedDisabled" text="Opción elegida" icon="icon-ubicacion" filled={list.length > 0} disabled></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownTransparent = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownTransparent" text="Opción elegida" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownTransparentDisabled = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownTransparentDisabled" disabled text="Opción elegida" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownIcon = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 16}>
      <Dropdown.Button variant="dropdownIcon" isButtonIcon icon="icon-configuracion" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownIconDisabled = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 16}>
      <Dropdown.Button variant="dropdownIconDisabled" isButtonIcon disabled icon="icon-configuracion" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownButton = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 8}>
      <Dropdown.Button variant="dropdownButtonPrimary" text={"Label"} filled={list.length > 0} isArrowStatic></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownButtonDisabled = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 8}>
      <Dropdown.Button variant="dropdownButtonPrimaryDisabled" disabled text={"Label"} filled={list.length > 0} isArrowStatic></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

export const dropdownColored = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownColored" text={"Label"} filled={list.length > 0} isArrowStatic></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Item key={user.id} onClick={e => { updateList(user.id) }}>
            {user.content.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}

// Con estados

export const dropdownStatesDefault = () => {
  const [ value, setValue ] = useState("Placeholder")
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownDefault" text={value} filled={value != undefined}></Dropdown.Button>
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

export const dropdownStatesMultiselect = () => {
  const [ list, setList ] = useState( [] )

  const updateList = ( value ) => {
    if(!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
    }
  }
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownDefault" text="Seleccione" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={user.id==23} >
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}


export const dropdownStatesMultiselectSearch = () => {
  const [ list, setList ] = useState( [] )
  const [filteredData, setValue] = useFilterData(data, 'content')

  const onFilter = (e) => {
    setValue(e.target.value)
  }

  const updateList = ( value ) => {
    if (!list.includes(value)) {
      setList([ ...list, value ])
    } else {
      setList((list) => list.filter((id) => id !== value));
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
      <Dropdown.Button variant="dropdownDefault" text="Agente" filled={list.length > 0}></Dropdown.Button>
      <Dropdown.Items>
        <Dropdown.Search placeholder="Search" onChange={onFilter}/>
        {filteredData.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={user.id==23} 
            active={list.includes(user.id)}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}
/*
export const dropdownStatesIcon = () => {
  const [ value, setValue ] = useState("Placeholder")
  
  return (
    <Dropdown width={1 / 4}>
      <Dropdown.Button variant="dropdownDefault" text={value} filled={value != undefined}></Dropdown.Button>
      <Dropdown.Items>
        {data.map((user) => (
          <Dropdown.Multiselect key={user.id} onClick={e => { updateList(user.id) }} disabled={user.id==23} 
            active={list.includes(user.id)}>
            {user.content.name}
          </Dropdown.Multiselect>
        ))}
      </Dropdown.Items>
    </Dropdown>
  )
}*/
