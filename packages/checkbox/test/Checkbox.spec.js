import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Checkbox } from '../src'

describe('Checkbox', () => {
  test('default', () => {
    const tree = renderer.create(<Checkbox />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('alt', () => {
    const tree = renderer.create(<Checkbox isAlt />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
