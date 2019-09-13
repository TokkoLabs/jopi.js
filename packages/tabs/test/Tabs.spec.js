import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Tabs } from '../src'

describe('Tabs', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Tabs>
          <Tabs.Tab id="one">One</Tabs.Tab>
          <Tabs.Tab id="two">Two</Tabs.Tab>
          <Tabs.Tab id="three">Three</Tabs.Tab>
          <Tabs.Tab id="four">Four</Tabs.Tab>
        </Tabs>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
