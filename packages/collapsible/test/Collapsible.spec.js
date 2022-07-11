import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Collapsible } from '../src'

describe('Collapsible', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Collapsible>
          <Collapsible.Button>Estado</Collapsible.Button>
          <Collapsible.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Collapsible.Body>
        </Collapsible>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('main', () => {
    const tree = renderer
      .create(
        <>
          <Collapsible width={1 / 3} isOpen>
            <Collapsible.Button
              isMainButton
              variant="mainButtonCollapsible"
              icon="icon-emprendimientos"
              text={'Emprendimientos'}
              isExpanded
              active
            >
            </Collapsible.Button>
            <Collapsible.Body>
            </Collapsible.Body>
          </Collapsible>

          <Collapsible width={1 / 3} isOpen={false}>
            <Collapsible.Button
              isMainButton
              variant="mainButtonCollapsible"
              icon="icon-emprendimientos"
              text={'Emprendimientos'}
              isExpanded={false}
              active={false}
            >
            </Collapsible.Button>
            <Collapsible.Body>
            </Collapsible.Body>
          </Collapsible>

          <Collapsible width={1 / 3} isOpen={false}>
            <Collapsible.Button
              isMainButton
              variant="mainButtonCollapsible"
              icon="icon-emprendimientos"
              text={'Emprendimientos'}
              isExpanded={false}
              active={false}
              badgeValue={2}
            >
            </Collapsible.Button>
          </Collapsible>
        </>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
