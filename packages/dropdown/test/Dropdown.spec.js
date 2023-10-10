import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { Dropdown } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  beforeAll(() => {
    const div = document.createElement('div')
    window.domNode = div
    document.body.appendChild(div)
  })

  test('default', () => {
    const component = shallow(
      <Dropdown width={1 / 4}>
        <Dropdown.Button>{'Opción elegida'}</Dropdown.Button>
        <Dropdown.Items>
          <Dropdown.Search/>
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
          <Dropdown.Button icon='icon-configuracion' isButtonIcon disabled/>
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
    const wrapper = mount(
      <Dropdown>
        <Dropdown.Button id='button' variant='dropdownButtonPrimary' variantSize='dropdownSizeButton' filled isArrowStatic />
        <Dropdown.Items>
          <Dropdown.Item icon='icon-agente' disabled>One</Dropdown.Item>
          <Dropdown.Item icon='icon-agente' variantSize='dropdownSizeNormal'>Two</Dropdown.Item>
          <Dropdown.Item icon='icon-agente'>Three</Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>
      , {
        attachTo: window.domNode,
      })
    expect(wrapper).toMatchSnapshot()
    const itemToClick = document.getElementById('button')
    itemToClick.click()
  })

  test('DropdownExpectError', () => {
    try {
      renderer
        .create(
          <>
            <Dropdown.Button icon='icon-configuracion' isButtonIcon/>
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

  test('DropdownText', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Items>
            <Dropdown.Text>One</Dropdown.Text>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownItem', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button id='button' variant='dropdownButtonPrimary' variantSize='dropdownSizeButton' filled={false} isArrowStatic icon='icon-cerrar'/>
          <Dropdown.Item>
            <Dropdown.Text disabled>One</Dropdown.Text>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Text active>Two</Dropdown.Text>
          </Dropdown.Item>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownDefault', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button id='button' variant='dropdownColored' variantSize='dropdownSizeButton' filled icon='icon-cerrar' disabled/>
          <Dropdown.Default disabled>
            <Dropdown.Text>One</Dropdown.Text>
          </Dropdown.Default>
          <Dropdown.Default>
            <Dropdown.Text active>Two</Dropdown.Text>
          </Dropdown.Default>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownListMultiselect', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button id='button' variant='dropdownColored' variantSize='dropdownSizeButton' filled isButtonIcon icon='icon-cerrar'/>
          <Dropdown.Multiselect disabled>
            <Dropdown.Text>One</Dropdown.Text>
          </Dropdown.Multiselect>
          <Dropdown.Multiselect active>
            <Dropdown.Text>Two</Dropdown.Text>
          </Dropdown.Multiselect>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownListIcon', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Icon disabled>
            <Dropdown.Text>One</Dropdown.Text>
          </Dropdown.Icon>
          <Dropdown.Icon active>
            <Dropdown.Text>Two</Dropdown.Text>
          </Dropdown.Icon>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownSelection', () => {
    const tree = renderer
      .create(
        <Dropdown width='250px'>
          <Dropdown.Button variant='dropdownTransparentSelection' selection='Seleccion' text='Placeholder'/>
          <Dropdown.Items>
            <Dropdown.Icon disabled>
              <Dropdown.Text>One</Dropdown.Text>
            </Dropdown.Icon>
            <Dropdown.Icon active>
              <Dropdown.Text>Two</Dropdown.Text>
            </Dropdown.Icon>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('DropdownSelectionDisabled', () => {
    const tree = renderer
      .create(
        <Dropdown width='250px'>
          <Dropdown.Button variant='dropdownTransparentSelectionDisabled' disabled selection='Seleccion' text='Placeholder'/>
          <Dropdown.Items>
            <Dropdown.Icon disabled>
              <Dropdown.Text>One</Dropdown.Text>
            </Dropdown.Icon>
            <Dropdown.Icon active>
              <Dropdown.Text>Two</Dropdown.Text>
            </Dropdown.Icon>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
