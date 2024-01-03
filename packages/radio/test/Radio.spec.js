import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Radio } from '../src'

describe('Radio', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Radio />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('renders checked correctly', () => {
    const tree = renderer.create(<Radio defaultChecked />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('renders unchecked correctly', () => {
    const tree = renderer.create(<Radio defaultChecked={false} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('renders disabled correctly', () => {
    const tree = renderer.create(<Radio disabled />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('renders isMedium correctly', () => {
    const tree = renderer.create(<Radio isMedium defaultChecked />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
