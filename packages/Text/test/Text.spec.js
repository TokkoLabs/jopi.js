import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Text, Heading } from '../src'

describe('Text', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Text>This is a text</Text>).toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('renders heading correctly', () => {
    const tree = renderer.create(<Heading>This is a heading</Heading>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
