import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Badge } from '../src'

describe('Badge', () => {
  test('primary', () => {
    const tree = renderer.create(<Badge>{'Test'}</Badge>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondary', () => {
    const tree = renderer
      .create(<Badge variant="secondary">{'Test'}</Badge>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
