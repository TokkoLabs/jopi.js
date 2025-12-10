import React, { useRef, useState } from 'react'
import { Box } from '@quintoandar-tokko/box'
import { Input } from '@quintoandar-tokko/input'
import { Button } from '@quintoandar-tokko/button'

import { Wrapped } from '.'

export default {
  component: Wrapped,
  title: 'Wrapped',
  argTypes: {
    uso: {
      name: 'Modo de uso',
      description: 'El componente Wrapped necesita estar envuelto en un Box, principalmente para poder capturar el ancho de este elemento para pasarlo a la ventana de pop up, de los elementos que no se muestran. El form mostrado en el ejemplo es solo de pruebas, no es necesario para su funcionamiento',
      type: 'text',
      control: { type: 'none' },
    },
    items: {
      name: 'Items',
      description: 'Array de items que se listaran en el Wrapped, es necesario que cada componente tenga un id.',
      type: 'array',
      control: { type: 'none' },
    },
    fnClose: {
      name: 'fnClose',
      description: 'Funcionalidad que recibe cada tag para eliminarlo.',
      type: 'function',
      control: { type: 'none' },
    },
    widthRestItemsWindow: {
      name: 'widthRestItemsWindow',
      description: 'Por medio de esta prop le pasamos el ancho que queremos que tenga la ventana que muestra los items restantes.',
      type: 'string',
      control: { type: 'none' },
    },
    printKey: {
      name: 'printKey',
      description: 'El nombre de la clave que queremos que pinte cada uno de los tags, por ej: nombre, dirección, etc...',
      type: 'string',
      control: { type: 'none' },
    },
    idKey: {
      name: 'idKey',
      description: 'EL nombre especifico que tenga el id dentro de cada item de array, por defecto toma id, por lo que si nuestros items tienen esa clave no seria necesario pasar esta prop, pero si por ejemplo la clave es itemID, tendriamos que pasarla con esta prop.',
      type: 'string',
      control: { type: 'none' },
    },
    tagVariant: {
      name: 'tagVariant',
      description: 'La varian del tag que se quiere listar.',
      type: 'string',
      control: { type: 'none' },
    },
  },
}

export const WrappedComponent = () => {
  const [items, setItems] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setItems([...items, { itemID: Math.ceil(Math.random() * 1000) + event.target.elements[0].value.split(0, 3), userName: event.target.elements[0].value }])
    event.target.elements[0].value = ''
  }
  const ref = useRef(null)

  const handleDelete = (i) => setItems(items.filter(item => item.itemID !== i.itemID))

  return (
    <Box
      ref={ref}
      __css={{
        position: 'relative',
        display: 'flex',
        gap: '10px',
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Input name='item' />
        <Button type='submit'>+</Button>
      </form>

      <Wrapped
        fnClose={handleDelete}
        items={items}
        widthRestItemsWindow={ref.current?.offsetWidth}
        style={{ width: '300px' }}
        printKey='userName'
        idKey='itemID'
        tagVariant={'secondary'}
      />
    </Box>
  )
}
