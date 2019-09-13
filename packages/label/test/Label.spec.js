import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Label } from '../src'

describe('Label', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Label>This is a label</Label>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
