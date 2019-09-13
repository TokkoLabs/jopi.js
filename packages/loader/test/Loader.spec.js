import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Loader } from '../src'

describe('Loader', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Loader />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
