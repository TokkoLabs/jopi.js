import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Alert } from '../src'

describe('Alert', () => {
  test('primary default', () => {
    const tree = renderer
      .create(
        <Alert text="Éxito!!! Pudiste hacer todo lo que querías y te salió pipi cucu!" />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('warning', () => {
    const tree = renderer
      .create(<Alert type="warning" text="Danger Zone!!!!" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('danger', () => {
    const tree = renderer
      .create(
        <Alert type="danger" text="NOOOOOO!!! Perdonanos, explotó todo! :(" />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
