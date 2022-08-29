import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ButtonHoldPress } from '@oneloop/button'
import { Tooltip } from '../src'
import { Text } from '@oneloop/text'

describe('Submenu', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
        <ButtonHoldPress variant='smallIconMainButton' icon='icon-propiedades' badgeVariant='primary' id="parentTest" aria-describedby="tooltipTest"/>
        <div id="tooltipTest" role="tooltipTest" >
          <Tooltip parentId='parentTest' childrenId='tooltipTest'>
            <Text variant='body.fontSiz13'>Sitios Webs</Text>
          </Tooltip>
        </div>
      </div>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
