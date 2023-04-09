import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Wrapped } from '../src'

describe('Wrapped', () => {
  test('default', () => {
    const misItems = [
      { id: '1a', neme: 'Pedro' },
      { id: '2b', neme: 'Jose' },
      { id: '3c', neme: 'Juan Carlos' },
      { id: '4d', neme: 'Roberto' },
      { id: '5e', neme: 'Adriano' },
      { id: '6f', neme: 'Roman' },
    ]

    const tree = renderer.create(
      <Wrapped
        items={misItems}
        printKey={'pepito'}
        tagVariant={'secondary'}
      />

    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
