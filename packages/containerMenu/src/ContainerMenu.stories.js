import React from 'react'
import { Box } from '@oneloop/box'
import { ButtonIcon } from '@oneloop/button'
import { ContainerMenu } from '.'

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
  },
}

export const normal = () => (
  <Box __css={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
    <ContainerMenu width='252px' height='325px' prefixIcon='icon-favoritos' titleText='Favoritos'
      suffix={ <ButtonIcon icon='icon-configuracion' variant={['subtleTrasnparentIconClearButton', 'iconExtraSmall']}/> }
    >
    </ContainerMenu>
  </Box>
)
