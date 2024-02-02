import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Box } from '@oneloop/box'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
import { Image } from '@oneloop/image'
import { Text } from '@oneloop/text'
import { Card } from '../src'

describe('Card', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Card id="0" variant="contacts" active style={{ width: '224px' }}>
          <Checkbox />
          <Image
            variant="rows"
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Box sx={{ position: 'relative' }}>
            <Text variant="bodyBold.fontSize10" style={{ color: '#056C53' }}>
              Disponible
            </Text>
            <Text variant="body.fontSize11">IHO2543876</Text>
            <Text variant={['body.fontSize11', 'ellipsis']}>
              Ciudad de la paz 11456
            </Text>
            <Badge
              variant="badgeTips"
              style={{ position: 'absolute', top: '-2px', right: '4px' }}
            >
              {'50%'}
            </Badge>
          </Box>
        </Card>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly not active', () => {
    const tree = renderer
      .create(
        <Card id="0" variant="normal" active={false} style={{ width: '224px' }}>
          <Checkbox />
          <Image
            variant="rows"
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Box sx={{ position: 'relative' }}>
            <Text variant="bodyBold.fontSize10" style={{ color: '#056C53' }}>
              Disponible
            </Text>
            <Text variant="body.fontSize11">IHO2543876</Text>
            <Text variant={['body.fontSize11', 'ellipsis']}>
              Ciudad de la paz 11456
            </Text>
            <Badge
              variant="badgeTips"
              style={{ position: 'absolute', top: '-2px', right: '4px' }}
            >
              {'50%'}
            </Badge>
          </Box>
        </Card>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
