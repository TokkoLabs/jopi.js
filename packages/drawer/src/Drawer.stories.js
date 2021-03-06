import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Button } from '@oneloop/button'
import { Text } from '@oneloop/text'
import { Drawer } from '.'

export default {
  component: Drawer,
  title: 'Drawer',
}

export const normal = () =>
  React.createElement(() => {
    const [isOpen, toggle] = useToggle(false)

    return (
      <React.Fragment>
        <Button onClick={toggle}>My awesome Drawer</Button>
        <Drawer isOpen={isOpen} screenSide={'right'} animationWidth={730}>
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
