import React from 'react'
import 'jest-styled-components'
import { Calendar } from '../src'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Calendar', () => {
  test('default', () => {
    const events = [
      {
        title: 'Evento de prueba',
        start: '2023-03-14 09:00',
        end: '2023-03-14 10:00',
      },
      {
        title: 'Evento de prueba 2',
        start: '2023-03-14 18:00',
        end: '2023-03-14 19:00',
      },
    ]

    const component = shallow(<Calendar variant={'days'} events={events} />)
    expect(component).toMatchSnapshot()
  })
})
