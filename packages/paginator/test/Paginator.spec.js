import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Paginator } from '../src'

describe('Paginator', () => {
  test('renders correctly 1', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={1}
          total={1000}
          perPage={10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly 2', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={20}
          total={150}
          perPage={25}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with error in actualPage value 0', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={0}
          total={1000}
          perPage={10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with error in currentPage value -20', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={-20}
          total={1000}
          perPage={10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with error in currentPage value String', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={'Hello world'}
          total={1000}
          perPage={10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with error in total', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={20}
          total={10}
          perPage={10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with error in perPage', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={20}
          total={100}
          perPage={-10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
