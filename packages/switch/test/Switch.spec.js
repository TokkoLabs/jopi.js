import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Switch } from '../src'

describe('Switch', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Switch />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('renders alt correctly', () => {
    const tree = renderer.create(<Switch variant="alt" />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
