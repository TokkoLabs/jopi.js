import React from 'react'
import 'jest-styled-components'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Wrapped } from '../src'

Enzyme.configure({ adapter: new Adapter() })

const misItems = [
  { id: '1a', name: 'Pedro' },
  { id: '2b', name: 'Jose' },
  { id: '3c', name: 'Juan Carlos' },
  { id: '4d', name: 'Roberto' },
  { id: '5e', name: 'Adriano' },
  { id: '6f', name: 'Roman' },
]

describe('Wrapped', () => {
  it('Validate list items', () => {
    const component = shallow(
      <Wrapped
        items={misItems}
        printKey={'name'}
        tagVariant={'secondary'}
      />
    )

    expect(component.find('Tags').length).toEqual(misItems.length)
    expect(component.find('Text').at(0).html().includes('Pedro')).toBe(true)
    expect(component.find('Text').at(1).html().includes('Jose')).toBe(true)
    expect(component.find('Text').at(2).html().includes('Juan Carlos')).toBe(true)
    expect(component.find('Text').at(3).html().includes('Roberto')).toBe(true)
    expect(component.find('Text').at(4).html().includes('Adriano')).toBe(true)
    expect(component.find('Text').at(5).html().includes('Roman')).toBe(true)

    expect(component).toMatchSnapshot()
  })
})
