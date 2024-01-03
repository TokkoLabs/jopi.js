import React from 'react'
import 'jest-styled-components'
import Enzyme, { mount } from 'enzyme'
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
    const component = mount(
      <Wrapped items={misItems} printKey={'name'} tagVariant={'secondary'} />
    )

    expect(component.find('Tags').length).toEqual(misItems.length + 1)

    expect(component).toMatchSnapshot()
  })

  it('Delete item', () => {
    const handleDelete = (i) => misItems.filter((item) => item.id !== i.id)

    const component = mount(
      <Wrapped
        fnClose={handleDelete}
        items={misItems}
        printKey={'name'}
        tagVariant={'secondary'}
      />
    )

    const tagIcon = component.find('Tags').at(3).find('Icon')

    tagIcon.simulate('click')
  })

  it('Open modal restiItems', () => {
    const component = mount(
      <Wrapped items={misItems} printKey={'name'} tagVariant={'secondary'} />
    )

    component.find('.numberTag').at(0).simulate('click')

    expect(component.find('#restItemsModal').exists).toBeTruthy()

    expect(component).toMatchSnapshot()
  })
})
