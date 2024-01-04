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
        <Modal
          modalBG
          blockScroll
          scrollHeight={500}
          fixedCLoseBtn
          closeModal={() => {}}
        >
          <Modal.Header
            onClick={() => {}}
            text="Soy un modal grande"
            variant={['start', 'l']}
          />
          <Modal.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Modal.Body>
          <Modal.Footer variant="end">
            <button onClick={() => {}}>{'Label'}</button>
            <button onClick={() => {}}>{'Label'}</button>
          </Modal.Footer>
        </Modal>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
