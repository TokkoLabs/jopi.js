import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ButtonHoldPress } from '@oneloop/button'
import { Submenu } from '../src'
import { Text } from '@oneloop/text'

describe('Submenu', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
        <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' badgeVariant='primary' id="parentTest" aria-describedby="tooltipTest"/>
        <div id="tooltipTest" role="tooltipTest" >
          <Submenu parentId='parent' childrenId='tooltipTest' variant='tooltip'>
            <Text variant='body.fontSiz13'>Sitios Webs</Text>
          </Submenu>
        </div>
      </div>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
