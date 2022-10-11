import React from 'react'
import { Box } from '@oneloop/box'
import { ButtonIcon } from '@oneloop/button'
import { ContainerMenu } from '.'
import { List } from '@oneloop/list'
import { Tabs } from '@oneloop/tabs'
import { useToggle } from '@oneloop/hooks'

export default {
  component: ContainerMenu,
  title: 'ContainerMenu',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Variantes disponibles del containerMenu: [ \'normal\' ]',
      type: 'text',
      control: { type: 'none' },
    },
    prefixIcon: {
      name: 'prefixIcon',
      description: 'Con esta opcion de elige el icono que se muestra arriba a la izquierda en color rojo.',
      type: 'text',
      control: { type: 'none' },
    },
    suffix: {
      name: 'suffix',
      description: 'En esta opción se le puede pasar un boton, icono, o lo que vaya al final del título.',
      type: 'text',
      control: { type: 'none' },
    },
    titleText: {
      name: 'titleText',
      description: 'Con esto se le pasa el texto del título.',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const Normal = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Box __css={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
      <ContainerMenu width='252px' height='325px' prefixIcon='icon-favoritos' titleText='Favoritos'
        suffix={ <ButtonIcon icon='icon-configuracion' holdPress variant={['subtleIcon', 'iconSmall']} active={active} onClick={() => setActive()}/> }
      >
        <Tabs>
          <Tabs.Tab variant='default' id="texto">
            <Box>
              <span className='icon-buscar'/> 12
            </Box>
          </Tabs.Tab >
          <Tabs.Tab variant='default' id="texto2">
            <Box>
              <span className='icon-propiedades'/> 12
            </Box>
          </Tabs.Tab>
          <Tabs.Tab variant='default' id="texto3">
            <Box>
              <span className='icon-contacto'/> 12
            </Box>
          </Tabs.Tab>
          <Tabs.Tab variant='default' id="texto4">
            <Box>
              <span className='icon-emprendimiento'/> 12
            </Box>
          </Tabs.Tab>
          <Tabs.Content id="texto">Hola!</Tabs.Content>
          <Tabs.Content id="texto2">Segundo Tab</Tabs.Content>
          <Tabs.Content id="texto3">Tercer Tab</Tabs.Content>
          <Tabs.Content id="texto4">Ultimo Tab</Tabs.Content>
        </Tabs>
      </ContainerMenu>
    </Box>
  )
}

export const acciones = () => (
  <Box __css={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
    <ContainerMenu width='252px' prefixIcon='icon-acciones' titleText='Acciones'>
      <List>
        <ButtonIcon icon='icon-emprendimiento' variant='mainButtonList' text='Exportar listado completo'/>
        <ButtonIcon icon='icon-eliminar' variant='mainButtonList' text='Borrar propiedad'/>
      </List>
    </ContainerMenu>
  </Box>
)
