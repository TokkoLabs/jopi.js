import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { InputNumber } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('InputNumber', () => {
  it('renders correctly', () => {
    const component = shallow(<InputNumber text="Prueba test" />)

    expect(component).toMatchSnapshot()
  })

  it('add', () => {
    const component = shallow(<InputNumber text="Prueba test" />)

    component.find('#arrowUpNumberInput').simulate('click')
    expect(component.find('#inputNumberDisplay').props().value).toEqual('1')
  })

  it('subtract', () => {
    const component = shallow(<InputNumber text="Prueba test" startVal={10} />)

    component.find('#arrowDownNumberInput').simulate('click')
    expect(component.find('#inputNumberDisplay').props().value).toEqual('9')
  })

  it('max number', () => {
    const component = shallow(<InputNumber text="Prueba test" max={10} />)
    component
      .find('#inputNumberDisplay')
      .simulate('change', { target: { value: '5' } })
      .simulate('change', {
        stopPropagation: () => undefined,
        target: { value: '12' },
      })
    expect(component.find('#inputNumberDisplay').props().value).toEqual('5')
  })

  it('fn val', () => {
    const component = mount(<InputNumber text="Prueba test" val={() => {}} />)
    component
      .find('#inputNumberDisplay')
      .at(1)
      .simulate('change', { target: { value: '2' } })
  })

  it('delete input', () => {
    const component = shallow(<InputNumber text="Prueba test" />)
    component
      .find('#inputNumberDisplay')
      .simulate('change', { target: { value: '' } })
      .simulate('change', { target: { value: '3' } })
      .props()
      .onKeyDown({ key: 'Backspace', target: { value: '1' } })
  })
})
