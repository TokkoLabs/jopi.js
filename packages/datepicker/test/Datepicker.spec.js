import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Datepicker } from '../src'
describe('Datepicker', () => {
  test('default', () => {
    const tree = renderer.create(<Datepicker></Datepicker>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
