import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Wrapped } from '../src'

describe('Wrapped', () => {
  test('default', () => {
    const misItems = ['Pedro', 'Pepito', 'Jose', 'Marcelo', 'Roberto', 'Marian Font', 'Lauti', 'Agus']
    const tree = renderer.create(<Wrapped items={misItems}>Test</Wrapped>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
