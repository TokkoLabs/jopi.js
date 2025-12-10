import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { ButtonIcon } from '@quintoandar-tokko/button'
import { ParentSubmenu, Submenu } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Submenu', () => {
  beforeAll(() => {
    const div = document.createElement('div')
    window.domNode = div
    document.body.appendChild(div)
  })

  test('first case', () => {
    const tree = renderer
      .create(
        <div
          style={{
            background: '#F3F6F8',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <ParentSubmenu id="parent0" aria-describedby="tooltip0" offset={20}>
            <ButtonIcon
              variant="mainButtonIcon"
              icon="icon-propiedades"
              holdPress
              badgeVariant="primary"
            />
          </ParentSubmenu>
          <div
            id="tooltip0"
            role="tooltip0"
            style={{ width: 'fit-content', visibility: 'visible' }}
          >
            <Submenu parentId="parent0" childrenId="tooltip0">
              <ButtonIcon
                variant="submenu"
                icon="icon-contactos"
                text="Contacto"
                maxWidth
              />
              <ButtonIcon
                variant="submenu"
                icon="icon-empresa"
                text="Empresa"
                maxWidth
              />
              <ButtonIcon
                variant="submenu"
                icon="icon-propiedades"
                text="Propiedad"
                maxWidth
              />
              <ButtonIcon
                variant="submenu"
                icon="icon-emprendimientos"
                text="Emprendimiento"
                maxWidth
              />
              <ButtonIcon
                variant="submenu"
                icon="icon-email"
                text="Email"
                maxWidth
              />
            </Submenu>
          </div>
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const wrapper = mount(
      <div
        style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}
      >
        <ParentSubmenu
          id="parent1"
          aria-describedby="tooltip1"
          offset={20}
          placement="left"
          hover
        >
          <ButtonIcon
            id="button"
            variant="mainButtonIcon"
            icon="icon-propiedades"
            holdPress
            badgeVariant="primary"
          />
        </ParentSubmenu>
        <div
          id="tooltip1"
          role="tooltip1"
          style={{ width: 'fit-content', visibility: 'visible' }}
        >
          <Submenu
            parentId="tooltip1"
            childrenId="tooltip1"
            placement="left"
            arrow
          >
            <ButtonIcon
              variant="submenu"
              icon="icon-contactos"
              text="Contacto"
              maxWidth
            />
            <ButtonIcon
              variant="submenu"
              icon="icon-empresa"
              text="Empresa"
              maxWidth
            />
            <ButtonIcon
              variant="submenu"
              icon="icon-propiedades"
              text="Propiedad"
              maxWidth
            />
            <ButtonIcon
              variant="submenu"
              icon="icon-emprendimientos"
              text="Emprendimiento"
              maxWidth
            />
            <ButtonIcon
              variant="submenu"
              icon="icon-email"
              text="Email"
              maxWidth
            />
          </Submenu>
        </div>
      </div>,
      {
        attachTo: window.domNode,
      }
    )
    expect(wrapper).toMatchSnapshot()
    const parent1 = document.getElementById('parent1')
    parent1.blur()
    parent1.click()
    const join1 = document.getElementById('joinparent1')
    join1.focus()
    join1.blur()
    const tooltip1 = document.getElementById('tooltip1')
    tooltip1.click()
    const btn = document.getElementById('button')
    btn.click()
  })
})
