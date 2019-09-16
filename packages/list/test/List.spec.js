import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { List } from '../src'

describe('List', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List>
          <List.Search />
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
          <List.Item>Three</List.Item>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
