import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Tabs } from '../src'

describe('Tabs', () => {
  test('renders correctly with only headers', () => {
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

  test('renders correctly with headers and content', () => {
    const tree = renderer
      .create(
        <Tabs>
          <Tabs.Tab id="one">One</Tabs.Tab>
          <Tabs.Tab id="two">Two</Tabs.Tab>
          <Tabs.Tab id="three">Three</Tabs.Tab>
          <Tabs.Tab id="four">Four</Tabs.Tab>
          <Tabs.Content id="one">One Content One</Tabs.Content>
          <Tabs.Content id="three">Three Content Three</Tabs.Content>
        </Tabs>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
