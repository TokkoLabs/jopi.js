import React from 'react'

import { Tabs } from '.'

export default {
  component: Tabs,
  title: 'Design System|Tabs',
}

export const normal = () => (
  <Tabs bg="primary" color="neutral.0">
    <Tabs.Tab id="hola">Hola</Tabs.Tab>
    <Tabs.Tab id="hello">Hello</Tabs.Tab>
    <Tabs.Tab id="chau">Chau</Tabs.Tab>
    <Tabs.Tab id="goodbye">Goodbye</Tabs.Tab>
  </Tabs>
)
