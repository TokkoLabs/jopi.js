import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ButtonIcon } from '@oneloop/button'
import { Toast } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Toast', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Toast variant='base' text="Seleccione una propiedad" />).toJSON()

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

  test('renders correctly six', () => {
    const tree = renderer.create(<Toast variant="loading" text="Exportando..." variantLoader={'spinner'} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly seven', () => {
    const tree = renderer.create(<Toast variant="success" text="Report export ready!" textDownload={'Download'} icon='icon-check' variantText='bodyBold.fontSize14' download={() => { console.log('hola, soy un texto que se le pasa al onclick para descargar') }}/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('closed', () => {
    const closeFuction = () => {}
    const component = shallow(<Toast variant="loading" text="Exportando..." variantLoader={'spinner'} closeFunction={closeFuction}/>)
    expect(component.find(<ButtonIcon/>).exists).toBeTruthy()
    component.find(ButtonIcon).simulate('click')

    expect(component).toMatchSnapshot()
  })
})
