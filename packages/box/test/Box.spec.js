import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Box } from '../src'

describe('Box', () => {
  test('render', () => {
    const tree = renderer.create(<Box>{'Test'}</Box>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
