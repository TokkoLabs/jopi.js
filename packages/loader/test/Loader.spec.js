import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Loader } from '../src'

describe('Loader', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Loader variant='spinner' />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('spinner medium', () => {
    const tree = renderer.create(<Loader variant='spinner' size='medium'/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly two', () => {
    const tree = renderer.create(<Loader variant='bounce' size='medium'/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const tree = renderer.create(<Loader kind='secondary' />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
