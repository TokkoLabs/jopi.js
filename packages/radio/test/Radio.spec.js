import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Radio } from '../src'

describe('Radio', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Radio />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('renders alt correctly', () => {
    const tree = renderer.create(<Radio isAlt />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
