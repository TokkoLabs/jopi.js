import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { Alert } from '../src'
import { Icon } from '@oneloop/icons'

Enzyme.configure({ adapter: new Adapter() })

describe('Alert', () => {
  beforeAll(() => {
    const div = document.createElement('div')
    window.domNode = div
    document.body.appendChild(div)
  })

  test('info', () => {
    const tree = renderer
      .create(
        <Alert text="Éxito!!! Pudiste hacer todo lo que querías y te salió pipi cucu!" />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('closed', () => {
    const closeFuction = () => {}
    const component = shallow(<Alert id='itemToClick' closeFunction={closeFuction} text="Éxito!!! Pudiste hacer todo lo que querías y te salió pipi cucu!" />)
    expect(component.find(<Icon/>).exists).toBeTruthy()
    component.find(Icon).simulate('click')

    expect(component).toMatchSnapshot()
  })
})
