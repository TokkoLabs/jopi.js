import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { Image } from '../src'

Enzyme.configure({ adapter: new Adapter() })

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

  test('ImageEmpty', () => {
    const component = shallow(
      <Image
        src={null}
        variant="rows"
        icon ="icon-propiedades"
      />)
    expect(component.find(Image).exists).toBeTruthy()

    expect(component).toMatchSnapshot()
  })
})
