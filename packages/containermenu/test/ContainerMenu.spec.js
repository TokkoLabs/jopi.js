import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonIcon } from '@oneloop/button'
import 'jest-styled-components'

import { ContainerMenu } from '../src'

describe('ContainerMenu', () => {
  test('renders correctly with only headers', () => {
    const tree = renderer
      .create(
        <ContainerMenu width='252px' height='325px' prefixIcon='icon-favoritos' titleText='Favoritos'
          suffix={ <ButtonIcon icon='icon-configuracion' variant={['subtleTrasnparentIconClearButton', 'iconExtraSmall']}/> }
        >
        </ContainerMenu>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
