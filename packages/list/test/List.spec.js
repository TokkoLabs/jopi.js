import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { List } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('List', () => {
  beforeAll(() => {
    const div = document.createElement('div')
    window.domNode = div
    document.body.appendChild(div)
  })

  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List>
          <List.Search />
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
          <List.Item>Three</List.Item>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ListDefault', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List width={1 / 3}>
          <List.Default disabled>Item 1</List.Default>
          <List.Default>Item 2</List.Default>
          <List.Default>Item 3</List.Default>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ListMultiselect', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List width={1 / 3}>
          <List.Multiselect disabled>Item 1</List.Multiselect>
          <List.Multiselect>Item 2</List.Multiselect>
          <List.Multiselect>Item 3</List.Multiselect>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ListMultiselectClick', () => {
  test('renders correctly', () => {
    const wrapper = mount(
      <List width={1 / 3}>
        <List.Multiselect disabled>Item 1</List.Multiselect>
        <List.Multiselect id="itemToClick" isActive>
          Item 2
        </List.Multiselect>
        <List.Multiselect>Item 3</List.Multiselect>
      </List>,
      {
        attachTo: window.domNode,
      }
    )
    expect(wrapper).toMatchSnapshot()
    const itemToClick = document.getElementById('itemToClick')
    itemToClick.click()
  })
})

describe('ListIcon', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List width={1 / 3}>
          <List.Icon icon="icon-agente" disabled>
            Item 1
          </List.Icon>
          <List.Icon icon="icon-agente">Item 2</List.Icon>
          <List.Icon icon="icon-agente">Item 3</List.Icon>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
