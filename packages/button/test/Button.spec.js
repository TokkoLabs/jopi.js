import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button, ButtonIcon, ButtonRound, ButtonMain } from '../src'

describe('Button', () => {
  test('primary', () => {
    const tree = renderer.create(<Button>{'Test'}</Button>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryDisabled', () => {
    const tree = renderer
      .create(<Button variant="primaryDisabled">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondary', () => {
    const tree = renderer
      .create(<Button variant="secondary">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryOutline', () => {
    const tree = renderer
      .create(<Button variant="primaryOutline">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondaryOutlineIcon', () => {
    const tree = renderer
      .create(<Button variant="secondaryOutlineIcon">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('outlineDisabled', () => {
    const tree = renderer
      .create(<Button variant="outlineDisabled">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryText', () => {
    const tree = renderer
      .create(<Button variant="primaryText">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondaryText', () => {
    const tree = renderer
      .create(<Button variant="secondaryText">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleText', () => {
    const tree = renderer
      .create(<Button variant="subtleText">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('textDisabled', () => {
    const tree = renderer
      .create(<Button variant="textDisabled">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('iconPrimary', () => {
    const tree = renderer
      .create(<ButtonIcon variant="iconPrimary"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('iconSecondary', () => {
    const tree = renderer
      .create(<ButtonIcon variant="iconSecondary"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('iconDisabled', () => {
    const tree = renderer
      .create(<ButtonIcon variant="iconDisabled"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryOutlineIcon', () => {
    const tree = renderer
      .create(<ButtonIcon variant="primaryOutlineIcon"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondaryOutlineIcon', () => {
    const tree = renderer
      .create(<ButtonIcon variant="secondaryOutlineIcon"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('outlineIconDisabled', () => {
    const tree = renderer
      .create(<ButtonIcon variant="outlineDisabled"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleIcon', () => {
    const tree = renderer
      .create(<ButtonIcon variant="subtleIcon"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleIconDisabled', () => {
    const tree = renderer
      .create(<ButtonIcon variant="iconDisabled"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('roundButton', () => {
    const tree = renderer
      .create(<ButtonRound text="Label" icon="icon-unificar" variant="primary"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('roundButtonColourFeedback', () => {
    const tree = renderer
      .create(<ButtonRound text="Label" icon="icon-check" variant="colourFeedback"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('roundButtonDisabled', () => {
    const tree = renderer
      .create(<ButtonRound text="Label" icon="icon-unificar" variant="primaryDisabled"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('link', () => {
    const tree = renderer
      .create(<Button variant="link">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('linkSubtle', () => {
    const tree = renderer
      .create(<Button variant="linkSubtle">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('linkDisabled', () => {
    const tree = renderer
      .create(<Button variant="linkDisabled">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleButton', () => {
    const tree = renderer
      .create(<Button variant="subtleButton">{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButton', () => {
    const tree = renderer
      .create(<ButtonMain variant="mainButton" icon="icon-propiedades" text="Emprendimientos"/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonCollapsible', () => {
    const tree = renderer
      .create(<ButtonMain variant="mainButton" icon="icon-propiedades" text="Emprendimientos" isCollapsible/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('collapseButtonOpen', () => {
    const tree = renderer
      .create(<ButtonIcon isRounded icon='icon-atras' variant={'collapseButtonOpen'} style={{ position: 'absolute', right: '-23px', top: '60px' }}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
