import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { ButtonIcon } from '@oneloop/button'
import { Parent, Submenu } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Submenu', () => {
  test('first case', () => {
    const tree = renderer.create(
      <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
        <Parent id="parent0" aria-describedby="tooltip0" offset={20}>
          <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress badgeVariant='primary'/>
        </Parent>
        <div id="tooltip0" role="tooltip0" style={{ width: 'fit-content', visibility: 'visible' }}>
          <Submenu parentId='parent0' childrenId='tooltip0'>
            <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
          </Submenu>
        </div>
      </div>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const component = shallow(
      <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
        <Parent id="parent1" aria-describedby="tooltip1" offset={20} placement='left'>
          <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress badgeVariant='primary'/>
        </Parent>
        <div id="tooltip1" role="tooltip1" style={{ width: 'fit-content', visibility: 'visible' }}>
          <Submenu parentId='tooltip1' childrenId='tooltip1' placement='left'>
            <ButtonIcon variant='submenu' icon='icon-contactos' text='Contacto' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-empresa' text='Empresa' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-propiedades' text='Propiedad' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-emprendimientos' text='Emprendimiento' maxWidth/>
            <ButtonIcon variant='submenu' icon='icon-email' text='Email' maxWidth/>
          </Submenu>
        </div>
      </div>
    )
    expect(component.find(<Parent/>).exists).toBeTruthy()

    component.find(ButtonIcon).at(0).simulate('mouseover')
    component.find(ButtonIcon).at(0).simulate('mouseout')
    component.find(ButtonIcon).at(0).simulate('focus')
    component.find(ButtonIcon).at(0).simulate('blur')
    component.find(ButtonIcon).at(0).simulate('click')
    component.find(Submenu).simulate('mouseover')

    expect(component).toMatchSnapshot()
  })
})
