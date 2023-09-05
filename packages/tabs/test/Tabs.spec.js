import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import { Tabs } from '../src'

Enzyme.configure({ adapter: new Adapter() })

describe('Tabs', () => {
  test('renders correctly with only headers', () => {
    const tree = renderer
      .create(
        <Tabs>
          <Tabs.Tab id="one">One</Tabs.Tab>
          <Tabs.Tab id="two">Two</Tabs.Tab>
          <Tabs.Tab id="three">Three</Tabs.Tab>
          <Tabs.Tab id="four">Four</Tabs.Tab>
        </Tabs>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with headers and content', () => {
    const tree = renderer
      .create(
        <Tabs>
          <Tabs.Tab id="one">One</Tabs.Tab>
          <Tabs.Tab id="two">Two</Tabs.Tab>
          <Tabs.Tab id="three">Three</Tabs.Tab>
          <Tabs.Tab id="four">Four</Tabs.Tab>
          <Tabs.Content id="one">One Content One</Tabs.Content>
          <Tabs.Content id="three">Three Content Three</Tabs.Content>
        </Tabs>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with variant default', () => {
    const component = shallow(
      <Tabs>
        <Tabs.Tab variant='default' id="one" onClick={console.log('works')}>One</Tabs.Tab>
        <Tabs.Tab variant='default' id="two">Two</Tabs.Tab>
        <Tabs.Tab variant='default' id="three">Three</Tabs.Tab>
        <Tabs.Tab variant='default' id="four">Four</Tabs.Tab>
        <Tabs.Content id="one">One Content One</Tabs.Content>
        <Tabs.Content id="three">Three Content Three</Tabs.Content>
      </Tabs>
    )
    expect(component.find(Tabs.Tab).at(0).exists).toBeTruthy()

    component.find(Tabs.Tab).at(0).simulate('mouseover')
    component.find(Tabs.Tab).at(0).simulate('mouseout')
    component.find(Tabs.Tab).at(0).simulate('focus')
    component.find(Tabs.Tab).at(0).simulate('blur')
    component.find(Tabs.Tab).at(0).simulate('click')

    expect(component).toMatchSnapshot()
  })

  test('renders throw error', () => {
    try {
      const tree = () => {
        renderer
          .create(
            <Tabs.Tab>
            </Tabs.Tab>
          )
          .toJSON()
      }
      expect(tree).toThrow(Error)
    } catch (e) {
      expect(e).toThrow(Error)
    }
  })
})
