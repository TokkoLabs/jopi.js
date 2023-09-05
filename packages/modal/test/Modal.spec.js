import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Modal } from '../src'

describe('Modal', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Modal>
          <Modal.Header text='This is the header' variant={['start', 'l']}></Modal.Header>
          <Modal.Body>This is the body</Modal.Body>
          <Modal.Footer>This is the footer</Modal.Footer>
        </Modal>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
