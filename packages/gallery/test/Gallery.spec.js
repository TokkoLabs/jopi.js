import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Gallery } from '../src'

describe('Gallery', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Gallery />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
