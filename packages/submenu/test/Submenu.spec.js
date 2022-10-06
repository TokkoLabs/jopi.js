import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ButtonIcon } from '@oneloop/button'
import { Parent, Submenu } from '../src'

describe('Submenu', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
        <Parent id="parent0" aria-describedby="tooltip0" offset={20}>
          <ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' holdPress badgeVariant='primary'/>
        </Parent>
        <div id="tooltip0" role="tooltip0" style={{ width: 'fit-content', visibility: 'visible' }}>
          <Submenu parentId='parentTest' childrenId='tooltipTest'>
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
})
