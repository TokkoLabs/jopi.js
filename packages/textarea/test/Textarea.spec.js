import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Textarea } from '../src'

describe('Textarea', () => {
  test('basic type renders correctly', () => {
    const tree = renderer.create(<Textarea />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('styled type renders correctly', () => {
    const tree = renderer
      .create(
        <Textarea
          placeholder="Hello World!"
          borderColor="success"
          height="400px"
          width="200px"
          lineHeight="3"
          fontWeight="bold"
          color="success"
          backgroundCOlor="#9cd7ad45"
          prefix="Este es el label del textarea:"
          suffix="*Este es el detalle del textarea"
          contL="45px"
          contT="30px"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
