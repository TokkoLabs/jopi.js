import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Loader } from '../src'

describe('Loader', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Loader text="Loading"/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly two', () => {
    const tree = renderer.create(<Loader size='medium'/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
