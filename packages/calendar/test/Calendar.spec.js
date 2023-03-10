import React from 'react'
import 'jest-styled-components'
import { Calendar } from '../src'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Calendar', () => {
  test('default', () => {
    const component = shallow(<Calendar />)
    expect(component).toMatchSnapshot()
  })
})
