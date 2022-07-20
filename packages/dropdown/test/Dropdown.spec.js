import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Dropdown } from '../src'

describe('Dropdown', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button>{'Opción elegida'}</Dropdown.Button>
          <Dropdown.Items>
            <Dropdown.Search />
            <Dropdown.Item>One</Dropdown.Item>
            <Dropdown.Item>Two</Dropdown.Item>
            <Dropdown.Item>Three</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('DropdownMultiselect', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button>{'Opción elegida'}</Dropdown.Button>
          <Dropdown.Items>
            <Dropdown.Search />
            <Dropdown.Multiselect>One</Dropdown.Multiselect>
            <Dropdown.Multiselect>Two</Dropdown.Multiselect>
            <Dropdown.Multiselect>Three</Dropdown.Multiselect>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('DropdownMultiselect', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Dropdown>
          <Dropdown.Button icon='icon-configuracion' isButtonIcon />
          <Dropdown.Items>
            <Dropdown.Search />
            <Dropdown.Icon icon='icon-agente'>One</Dropdown.Icon>
            <Dropdown.Icon icon='icon-agente'>Two</Dropdown.Icon>
            <Dropdown.Icon icon='icon-agente'>Three</Dropdown.Icon>
          </Dropdown.Items>
        </Dropdown>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
