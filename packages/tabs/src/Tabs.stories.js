import React from 'react'
import { Box } from '@oneloop/box'

import { Tabs } from '.'

export default {
  component: Tabs,
  title: 'Design System|Tabs',
}

export const normal = () => (
  <Tabs bg="primary" color="neutral.0">
    <Tabs.Tab id="hola">
      <Box as="a" href="#">
        Hola
      </Box>
    </Tabs.Tab>
    <Tabs.Tab id="hello">
      <Box as="a" href="#">
        Hello
      </Box>
    </Tabs.Tab>
    <Tabs.Tab id="chau">
      <Box as="a" href="#">
        Chau
      </Box>
    </Tabs.Tab>
    <Tabs.Tab id="goodbye">
      <Box as="a" href="#">
        Goodbye
      </Box>
    </Tabs.Tab>
  </Tabs>
)
