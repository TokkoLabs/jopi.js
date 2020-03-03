import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Input } from '@oneloop/input'
import { Button } from '@oneloop/button'
import { Text } from '@oneloop/text'
import { motion } from 'framer-motion'

import { Drawer } from '.'

export default {
  component: Drawer,
  title: 'Design System|Drawer',
}

export const normal = () =>
  React.createElement(() => {
    const [isOpen, toggle] = useToggle(false)

    return (
      <React.Fragment>
        <Button onClick={toggle}>My awesome Drawer</Button>
        {isOpen && (
          <Drawer isOpen={isOpen}>
            <Drawer.Header>
              <Button
                onClick={toggle}
                sx={{
                  bg: 'transparent',
                  mr: '10px',
                  color: 'black',
                  fontSize: '20px',
                  p: '0px',
                }}
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
                }}
              >
                Drawer Body
              </Text>
              <Text>Lorem Ipsum is simply dummy text</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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
        )}
      </React.Fragment>
    )
  })
