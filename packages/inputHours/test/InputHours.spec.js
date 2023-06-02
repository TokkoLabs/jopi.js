import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
import { InputHours } from '../src'

Enzyme.configure({ adapter: new Adapter() })

const defaultHours = []

for (let i = 0; i < 24; i++) {
  for (let j = 0; j < 4; j++) {
    defaultHours.push(`${i < 10 ? '0' + i : i}:${j === 0 ? '00' : 15 * j}`)
  }
}

describe('InputHours', () => {
  it('renders correctly', () => {
    const component = shallow(
      <InputHours
        inputTime={new Date()}
        arrayInput={defaultHours}
      />
    )

    expect(component).toMatchSnapshot()
  })

  it('show dropdown', () => {
    const component = mount(
      <InputHours
        inputTime={new Date()}
        arrayInput={defaultHours}
      />
    )
    const listWrapper = component.find('.list')

    expect(listWrapper).toMatchSnapshot()
  })

  it('change hour', () => {
    const component = mount(
      <InputHours
        inputTime={new Date()}
        arrayInput={defaultHours}
      />
    )
    const input = component.find('.inputHourDisplay').at(1)
    const item = component.find('li').at(5)
    item.simulate('click')
    input
      .simulate('change', { target: { value: '00' } })
      .simulate('keyDown', { key: 'Enter' })
      .simulate('keyDown', { key: 'ArrowUp' })
      .simulate('keyDown', { key: 'ArrowDown' })
  })
})
