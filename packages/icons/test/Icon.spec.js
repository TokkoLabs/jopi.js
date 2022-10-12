import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Add, Check, ChevronLeft, ChevronRight, Exclamation, Icon, Substract, Times } from '../src'

describe('Icon', () => {
  test('renders correctly Times', () => {
    const tree = renderer
      .create(
        <Times />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly Check', () => {
    const tree = renderer
      .create(
        <Check />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly Exclamation', () => {
    const tree = renderer
      .create(
        <Exclamation />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly Substract', () => {
    const tree = renderer
      .create(
        <Substract />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly Add', () => {
    const tree = renderer
      .create(
        <Add />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly ChevronLeft', () => {
    const tree = renderer
      .create(
        <ChevronLeft />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly ChevronRight', () => {
    const tree = renderer
      .create(
        <ChevronRight />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly Icon', () => {
    const tree = renderer
      .create(
        <Icon icon='icon-agregar' fontSize='24px'/>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
