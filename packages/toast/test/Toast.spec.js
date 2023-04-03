import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Toast } from '../src'

describe('Toast', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Toast variant='base' text="Seleccione una propiedad" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly two', () => {
    const tree = renderer.create(<Toast variant="normal" text="Seleccione una propiedad" icon={'icon-check'} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly three', () => {
    const tree = renderer.create(<Toast icon={'icon-alertas'} variant="alert" text="Alert message" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly four', () => {
    const tree = renderer.create(<Toast variant="check" text="Success message" icon={'icon-check'} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly four', () => {
    const tree = renderer.create(<Toast variant="error" text="Error message" icon={'icon-error'} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly five', () => {
    const tree = renderer.create(<Toast variant="loading" text="Cargando..." variantLoader={'spinner'} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly five', () => {
    const tree = renderer.create(<Toast variant="loading" text="Exportando..." variantLoader={'spinner'} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly five', () => {
    const tree = renderer.create(<Toast variant="success" text="Report export ready!" textDownload={'Download'} icon='icon-check' variantText='bodyBold.fontSize16' download={() => { console.log('hola, soy un texto que se le pasa al onclick para descargar') }}/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
