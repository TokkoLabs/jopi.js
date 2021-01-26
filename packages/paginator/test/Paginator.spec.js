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

  test('renders correctly 3 - big numbers', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={410}
          total={17000}
          perPage={37}
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

  test('Paginator with error, currentPage too big', () => {
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

  test('Paginator with error, perPage < 0', () => {
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

  test('Paginator with total < perPage && (currentPage > 1) ', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={2}
          total={23}
          perPage={30}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with (total > perPage && total % perPage == 0) && ( currentPage <= total/perPage) ', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={2}
          total={20}
          perPage={10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with (total > perPage && total % perPage == 0) && ( currentPage > total/perPage) ', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={3}
          total={20}
          perPage={10}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with (total > perPage && total % perPage != 0) && ( currentPage <= (1 + total / perPage)', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={4}
          total={19}
          perPage={5}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Paginator with (total > perPage && total % perPage != 0) && ( currentPage > (1 + total / perPage)', () => {
    const tree = renderer
      .create(
        <Paginator
          currentPage={5}
          total={19}
          perPage={5}
          changePageNumber={() => console.log('change page')}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
