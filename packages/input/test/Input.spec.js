import React from 'react'
import renderer from 'react-test-renderer'
import { Icon } from '@quintoandar-tokko/icons'
import { Box } from '@quintoandar-tokko/box'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { Input } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Input', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('placeholder', () => {
    const tree = renderer.create(<Input placeholder="test" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('disabled', () => {
    const tree = renderer.create(<Input disabled />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('readonly', () => {
    const tree = renderer
      .create(<Input readonly placeholder="Hello World!" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('errors', () => {
    const tree = renderer
      .create(
        <Input errors="Minimo 8 caracteres." placeholder="Placeholder text" />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('infoAlert', () => {
    const tree = renderer
      .create(
        <Input infoAlert="Campo Requerido" placeholder="Placeholder text" />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('inputMedium', () => {
    const tree = renderer
      .create(
        <Input placeholder="Placeholder text" variantSize="inputMedium" />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('inputWithIcon', () => {
    const tree = renderer
      .create(
        <Input
          prefix={<span className="icon-email" />}
          placeholder="Hello World!"
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('inputWithLabel', () => {
    const tree = renderer
      .create(<Input label="Label de prueba" placeholder="Hello World!" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('inputInlineLabel', () => {
    const tree = renderer
      .create(<Input label="Label" placeholder="Hello World!" inline />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('inputWithPassword', () => {
    const tree = renderer
      .create(
        <Input
          suffix={<span className="icon-ocultar" />}
          label="Label de prueba"
          placeholder="Hello World!"
          password
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('inputWithPasswordIcon', () => {
    const tree = renderer
      .create(
        <Input
          suffix={<Icon icon="icon-ocultar" />}
          label="Label de prueba"
          placeholder="Hello World!"
          password
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('searchBold', () => {
    const tree = renderer
      .create(
        <Input
          prefix={<span className="icon-buscar" />}
          placeholder="Search"
          variant="inputSearch"
          bold
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('searchBoldIcon', () => {
    const tree = renderer
      .create(
        <Input
          prefix={<Icon icon="icon-buscar" />}
          placeholder="Search"
          variant="inputSearch"
          bold
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('checkStates', () => {
    const component = shallow(<Input placeholder="Placeholder text" />)
    expect(component.find(<Box as="input" />).exists).toBeTruthy()

    const newInputValue = 'test'
    component
      .find(Box)
      .at(2)
      .simulate('change', { target: { value: newInputValue } })
    component.find(Box).at(2).simulate('mouseover')
    component.find(Box).at(2).simulate('mouseout')
    component.find(Box).at(2).simulate('focus')
    component.find(Box).at(2).simulate('blur')

    expect(component).toMatchSnapshot()
  })

  test('error icon is clickable and clears input', () => {
    const mockOnChange = jest.fn()
    const component = shallow(
      <Input
        errors="Error message"
        placeholder="Placeholder text"
        onChange={mockOnChange}
      />
    )

    // Simulate typing in the input
    component
      .find(Box)
      .at(2)
      .simulate('change', { target: { value: 'test text' } })

    // Find and click the error icon
    const errorIcon = component.find(Icon).filterWhere(icon => icon.props().icon === 'icon-error')
    expect(errorIcon.exists()).toBeTruthy()

    errorIcon.simulate('click')

    // Check that onChange was called with empty value
    expect(mockOnChange).toHaveBeenCalledWith({
      target: { value: '' },
    })
  })

  test('error icon clears input without onChange prop', () => {
    const component = shallow(
      <Input
        errors="Error message"
        placeholder="Placeholder text"
      />
    )

    // Simulate typing in the input
    component
      .find(Box)
      .at(2)
      .simulate('change', { target: { value: 'test text' } })

    // Find and click the error icon
    const errorIcon = component.find(Icon).filterWhere(icon => icon.props().icon === 'icon-error')
    expect(errorIcon.exists()).toBeTruthy()

    errorIcon.simulate('click')

    // Check that the input value is cleared (verificar el valor del input, no el estado)
    expect(component.find(Box).at(2).props().value).toBe('')
  })

  test('error icon has pointer cursor', () => {
    const component = shallow(
      <Input
        errors="Error message"
        placeholder="Placeholder text"
      />
    )

    const errorIcon = component.find(Icon).filterWhere(icon => icon.props().icon === 'icon-error')
    expect(errorIcon.exists()).toBeTruthy()
    expect(errorIcon.props().style).toEqual({ cursor: 'pointer' })
  })
})
