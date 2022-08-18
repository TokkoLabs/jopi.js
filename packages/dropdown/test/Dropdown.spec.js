import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { Dropdown } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  test('default', () => {
    const component = shallow(
      <Dropdown width={1 / 4}>
        <Dropdown.Button>{'Opción elegida'}</Dropdown.Button>
        <Dropdown.Items>
          <Dropdown.Search />
          <Dropdown.Default>One</Dropdown.Default>
          <Dropdown.Default>Two</Dropdown.Default>
          <Dropdown.Default>Three</Dropdown.Default>
        </Dropdown.Items>
      </Dropdown>
    )
    expect(component.find(Dropdown.Button).exists).toBeTruthy()

    component.find(Dropdown.Button).simulate('click')
    component.find(Dropdown.Default).at(0).simulate('mouseover')
    component.find(Dropdown.Default).at(0).simulate('focus')
    component.find(Dropdown.Default).at(0).simulate('blur')

    expect(component).toMatchSnapshot()
  })

  test('DropdownMultiselect', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button>{'Opción elegida'}</Dropdown.Button>
          <Dropdown.Items>
            <Dropdown.Search />
            <Dropdown.Multiselect disabled>One</Dropdown.Multiselect>
            <Dropdown.Multiselect>Two</Dropdown.Multiselect>
            <Dropdown.Multiselect>Three</Dropdown.Multiselect>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownMultiselect', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button icon='icon-configuracion' isButtonIcon />
          <Dropdown.Items>
            <Dropdown.Search />
            <Dropdown.Icon icon='icon-agente' disabled>One</Dropdown.Icon>
            <Dropdown.Icon icon='icon-agente'>Two</Dropdown.Icon>
            <Dropdown.Icon icon='icon-agente'>Three</Dropdown.Icon>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownMultiselect', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button icon='icon-configuracion' isButtonIcon />
          <Dropdown.Items>
            <Dropdown.Item icon='icon-agente' disabled>One</Dropdown.Item>
            <Dropdown.Item icon='icon-agente' variantSize='dropdownSizeNormal'>Two</Dropdown.Item>
            <Dropdown.Item icon='icon-agente'>Three</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownExpectError', () => {
    try {
      renderer
        .create(
          <>
            <Dropdown.Button icon='icon-configuracion' isButtonIcon />
            <Dropdown.Items>
              <Dropdown.Item icon='icon-agente' disabled>One</Dropdown.Item>
              <Dropdown.Item icon='icon-agente'>Two</Dropdown.Item>
              <Dropdown.Item icon='icon-agente'>Three</Dropdown.Item>
            </Dropdown.Items>
          </>
        )
        .toJSON()
    } catch (e) {
      expect(e.message).toBe('Dropdown compound components cannot be rendered outside the Dropdown component')
    }
  })
})
