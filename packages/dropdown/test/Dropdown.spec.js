import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Dropdown } from '../src'

describe('Dropdown', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button>{'Opción elegida'}</Dropdown.Button>
          <Dropdown.Items />
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
