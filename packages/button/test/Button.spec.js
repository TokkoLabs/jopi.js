import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button, ButtonIcon } from '../src'

describe('Button', () => {
  test('primary', () => {
    const tree = renderer.create(<Button>{'Test'}</Button>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryDisabled', () => {
    const tree = renderer
      .create(<Button variant='primaryDisabled'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondary', () => {
    const tree = renderer
      .create(<Button variant='secondary'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryOutline', () => {
    const tree = renderer
      .create(<Button variant='primaryOutline'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondaryOutlinedIcon', () => {
    const tree = renderer
      .create(<Button variant='secondaryOutlined'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('outlineDisabled', () => {
    const tree = renderer
      .create(<Button variant='outlineDisabled'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryText', () => {
    const tree = renderer
      .create(<Button variant='primaryText'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondaryText', () => {
    const tree = renderer
      .create(<Button variant='secondaryText'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleText', () => {
    const tree = renderer
      .create(<Button variant='subtleText'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('textDisabled', () => {
    const tree = renderer
      .create(<Button variant='textDisabled'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('iconPrimary', () => {
    const tree = renderer
      .create(<ButtonIcon variant='iconPrimary'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('iconSecondary', () => {
    const tree = renderer
      .create(<ButtonIcon variant='iconSecondary'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('iconDisabled', () => {
    const tree = renderer
      .create(<ButtonIcon variant='iconDisabled'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('primaryOutlineIcon', () => {
    const tree = renderer
      .create(<ButtonIcon variant={['primaryOutlined', 'iconLarge']}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('secondaryOutlineIcon', () => {
    const tree = renderer
      .create(<ButtonIcon variant={['secondaryOutlined', 'iconLarge']}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('outlinedDisabled', () => {
    const tree = renderer
      .create(<ButtonIcon variant='outlinedDisabled'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleIcon', () => {
    const tree = renderer
      .create(<ButtonIcon variant='subtleIcon'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleIconDisabled', () => {
    const tree = renderer
      .create(<ButtonIcon variant='iconDisabled'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('roundButton', () => {
    const tree = renderer
      .create(<ButtonIcon text='Label' icon='icon-unificar' variant='primary'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('roundButtonColourFeedback', () => {
    const tree = renderer
      .create(<ButtonIcon text='Label' icon='icon-check' variant='colourFeedback'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('roundButtonDisabled', () => {
    const tree = renderer
      .create(<ButtonIcon text='Label' icon='icon-unificar' variant='primaryDisabled'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('link', () => {
    const tree = renderer
      .create(<Button variant='link'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('linkSubtle', () => {
    const tree = renderer
      .create(<Button variant='linkSubtle'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('linkDisabled', () => {
    const tree = renderer
      .create(<Button variant='linkDisabled'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('subtleButton', () => {
    const tree = renderer
      .create(<Button variant='subtleButton'>{'Test'}</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButton', () => {
    const tree = renderer
      .create(<ButtonIcon variant='mainButton' icon='icon-propiedades' text='Emprendimientos'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonCollapsible', () => {
    const tree = renderer
      .create(<ButtonIcon variant='mainButton' icon='icon-propiedades' text='Emprendimientos' isCollapsible active/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonCollapsibleNotActive', () => {
    const tree = renderer
      .create(<ButtonIcon variant={['mainButton', 'large']} icon='icon-propiedades' text='Emprendimientos' isCollapsible/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonCollapsibleLarge', () => {
    const tree = renderer
      .create(<ButtonIcon variant={['mainButton', 'large']} icon='icon-propiedades' text='Emprendimientos' isCollapsible active/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('collapseButtonOpen', () => {
    const tree = renderer
      .create(<ButtonIcon isRounded icon='icon-atras' variant={'collapseButtonOpen'} style={{ position: 'absolute', right: '-23px', top: '60px' }}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainIconButton', () => {
    const tree = renderer
      .create(<ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' hover hasCheckbox/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainIconButtonActive', () => {
    const tree = renderer
      .create(<ButtonIcon variant={['subtleIcon', 'iconExtraSmall22px']} icon='icon-propiedades' hasCheckbox active maxWidth holdPress/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('userButton', () => {
    const tree = renderer
      .create(<ButtonIcon variant='userButton' userImage text='Nombre Usuario' style={{ backgroundColor: '#798B97' }}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('userButtonWithImage', () => {
    const tree = renderer
      .create(<ButtonIcon variant='userButton' userImage srcImage='https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' text='Nombre Usuario' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonIconActive', () => {
    const tree = renderer
      .create(<ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' text='test' holdPress active/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonIconBadgeWithText', () => {
    const tree = renderer
      .create(<ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' badgeValue='20' badgeVariant='primary' text='test' holdPress active/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonIconBadge', () => {
    const tree = renderer
      .create(<ButtonIcon variant='mainButtonIcon' icon='icon-propiedades' badgeValue='20' badgeVariant='primary' holdPress active/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonIconBadgeFilled', () => {
    const tree = renderer
      .create(<ButtonIcon variant={['dropdownIcon', 'iconDropdownNormal']} icon='icon-configuracion' filled holdPress />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonIconBadgeFilledOneVariant', () => {
    const tree = renderer
      .create(<ButtonIcon variant='dropdownIcon' icon='icon-configuracion' filled holdPress />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('mainButtonIconBadgeFilledOneVariant', () => {
    const tree = renderer
      .create(<ButtonIcon variant='dropdownIconFail' icon='icon-configuracion' filled holdPress />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('buttonWithImage', () => {
    const tree = renderer
      .create(<ButtonIcon variant='mainButton' srcImage='https://static.tokkobroker.com/static/img/cec.icon.svg' text='Messenger' widthImage='16px' heightImage='16px'/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
