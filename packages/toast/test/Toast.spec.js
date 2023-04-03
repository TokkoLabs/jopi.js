import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Toast } from '../src'

describe('Toast', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Toast type='normal' variant='toastNormal' text="Seleccione una propiedad" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly two', () => {
    const tree = renderer.create(<Toast variant='toastAlert' type="alert" text="Alert message" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly three', () => {
    const tree = renderer.create(<Toast variant='toastCheck' type="check" text="Success message" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly four', () => {
    const tree = renderer.create(<Toast variant='toastNormal' type="loading" text="Cargando..." />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly four', () => {
    const tree = renderer.create(<Toast variant='toastNormal' type="loading" text="Exportando..." />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly five', () => {
    const tree = renderer.create(<Toast variant='toastSuccess' type="success" text="Report export ready!" download={() => { console.log('hola, soy un texto que se le pasa al onclick para descargar') }}/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
