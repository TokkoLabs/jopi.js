import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Image } from '../src'

describe('Image', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Image src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('ImageWihtBadge', () => {
    const tree = renderer.create(
      <Image
        src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        variant="rows"
        textBadge="Error"
        variantBadge='badgeErrorRow'
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
