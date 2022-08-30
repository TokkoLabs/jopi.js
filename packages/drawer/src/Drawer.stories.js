import React from 'react'
import { Box } from '@oneloop/box'
import { useToggle } from '@oneloop/hooks'
import { Button, ButtonIcon } from '@oneloop/button'
import { Text } from '@oneloop/text'
import { Drawer } from '.'

export default {
  component: Drawer,
  title: 'Drawer',
  argTypes: {
    overlay: {
      name: 'overlay',
      description: 'Determina si va por encima de la pagina.',
      type: 'bool',
      control: { type: 'none' },
    },
    isOpen: {
      name: 'isOpen',
      description: 'Determina si el drawer esta abierto o no. (se usa solo cuando el tipo de drawer es overlay)',
      type: 'bool',
      control: { type: 'none' },
    },
    isCollapse: {
      name: 'isCollapse',
      description: 'Determina si el drawer esta colapsado o no.',
      type: 'bool',
      control: { type: 'none' },
    },
    screenSide: {
      name: 'screenSide',
      description: 'Posición del drawer: [ \'right\', \'left\' ].',
      type: 'text',
      control: { type: 'none' },
    },
    animationWidth: {
      name: 'animationWidth',
      description: 'El width maximo del drawer.',
      type: 'text',
      control: { type: 'none' },
    },
    animationMinWidth: {
      name: 'animationMinWidth',
      description: 'El width minimo del drawer.',
      type: 'text',
      control: { type: 'none' },
    },
    heightMin: {
      name: 'heightMin',
      description: 'Height minimo del drawer.',
      type: 'bool',
      control: { type: 'none' },
    },
    heightMax: {
      name: 'heightMin',
      description: 'Height maximo del drawer, por default es 100%.',
      type: 'bool',
      control: { type: 'none' },
    },
  },
}

export const normal = () =>
  React.createElement(() => {
    const [isOpen, toggle] = useToggle(false)
    const overlay = true

    return (
      <React.Fragment>
        <Button onClick={toggle}>My awesome Drawer</Button>
        <Drawer isOpen={isOpen} screenSide={'right'} animationWidth={730} overlay={overlay}>
          <Drawer.Header>
            <Button
              variant="default"
              size="small"
              onClick={toggle}
              sx={{ bg: 'inherit', border: 0 }}
            >
              X
            </Button>
            <Text
              sx={{
                textDecoration: 'underline',
              }}
            >
              Drawer Title
            </Text>
          </Drawer.Header>
          <Drawer.Body>
            <Text
              sx={{
                textDecoration: 'underline',
                mb: '5px',
              }}
            >
              Drawer Body
            </Text>
            <Text sx={{ mb: '5px' }}>This is a Drawer component</Text>
            <Text sx={{ mb: '5px' }}>
              Drawer consists of an Overlay that animates from{' '}
              <em>opacity:0</em> to <em>opacity:1</em>
            </Text>
            <Text sx={{ mb: '5px' }}>
              Inside the Overlay there is a Drawer Content that handles Drawer
              animation on <em>translate</em>
            </Text>
            <Text>Drawer Content has 3 children:</Text>
            <ul>
              <li>Drawer Title</li>
              <li>Drawer Body</li>
              <li>Drawer Footer</li>
            </ul>
            <Text>
              Drawer has a <button onClick={toggle}>close button (x) </button>
            </Text>
          </Drawer.Body>
          <Drawer.Footer>
            <Text
              sx={{
                textDecoration: 'underline',
              }}
            >
              Drawer Footer
            </Text>
          </Drawer.Footer>
        </Drawer>
      </React.Fragment>
    )
  })

export const menu = () =>
  React.createElement(() => {
    const [isCollapse, toggle] = useToggle(true)
    const overlay = false

    return (
      <React.Fragment>
        <Box __css={{ backgroundColor: '#F3F6F8', height: '500px' }}>
          <Drawer isCollapse={isCollapse} screenSide={'left'} animationWidth={304} animationMinWidth={82} overlay={overlay}>
            <ButtonIcon onClick={toggle} isRounded icon='icon-atras' variant={isCollapse ? 'collapseButtonOpen' : 'collapseButtonClosed'} style={{ position: 'absolute', right: '-23px', top: '60px' }}/>
            <Drawer.Header>
            </Drawer.Header>
            <Drawer.Body>
            </Drawer.Body>
            <Drawer.Footer>
            </Drawer.Footer>
          </Drawer>
        </Box>
      </React.Fragment>
    )
  })


export const menuRight = () => React.createElement(() => {
  const [isCollapse, toggle] = useToggle(false)
  const overlay = false

  return (
    <React.Fragment>
      <Box __css={{ backgroundColor: '#F3F6F8', height: '500px' }}>
        <Drawer isCollapse={isCollapse} screenSide={'right'} animationWidth={304} animationMinWidth={70} overlay={overlay} heightMin='147px'>
          <ButtonIcon onClick={toggle} isRounded icon='icon-atras' variant={isCollapse ? 'collapseButtonClosed' : 'collapseButtonOpen'} style={{ position: 'absolute', left: '-23px', top: '40px' }}/>
          <Drawer.Header>
          </Drawer.Header>
          <Drawer.Body>
          </Drawer.Body>
          <Drawer.Footer>
          </Drawer.Footer>
        </Drawer>
      </Box>
    </React.Fragment>
  )
})
