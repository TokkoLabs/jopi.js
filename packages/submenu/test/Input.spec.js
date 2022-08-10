import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { Submenu } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Submenu', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Submenu />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
