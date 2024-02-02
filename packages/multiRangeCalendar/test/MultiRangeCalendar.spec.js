import React from 'react'
import 'jest-styled-components'
import { MultiRangeCalendar } from '../src'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('MultiRangeCalendar', () => {
  test('default', () => {
    const component = shallow(<MultiRangeCalendar />)
    expect(component).toMatchSnapshot()
  })
})
