import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Tags } from '../src'

describe('Tags', () => {
  test('secondary', () => {
    const tree = renderer.create(<Tags variant='secondary'>Test</Tags>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
