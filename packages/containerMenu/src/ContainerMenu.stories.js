import React from 'react'
import { Box } from '@oneloop/box'
import { ButtonIcon, ButtonMain } from '@oneloop/button'
import { ContainerMenu } from '.'
import { List } from '@oneloop/list'

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

export const normal = () => (
  <Box __css={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
    <ContainerMenu width='252px' height='325px' prefixIcon='icon-favoritos' titleText='Favoritos'
      suffix={ <ButtonIcon icon='icon-configuracion' variant={['subtleTrasnparentIconClearButton', 'iconSmall']}/> }
    >
    </ContainerMenu>
  </Box>
)

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
