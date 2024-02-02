import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ButtonIcon } from '@oneloop/button'
import { ParentTooltip, Tooltip } from '../src'
import { Text } from '@oneloop/text'

describe('Submenu', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <div
          style={{
            background: '#F3F6F8',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <ParentTooltip id="parent0" aria-describedby="tooltip0">
            <ButtonIcon
              variant="mainButtonIcon"
              icon="icon-propiedades"
              holdPress
              badgeVariant="primary"
            />
          </ParentTooltip>
          <div
            id="tooltip0"
            role="tooltip0"
            style={{ width: 'fit-content', visibility: 'visible' }}
          >
            <Tooltip
              parentId="parent0"
              childrenId="tooltip0"
              placement="right-start"
              arrow
            >
              <Text variant="body.fontSize13">Sitios Webs</Text>
            </Tooltip>
          </div>
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
