import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { List } from '../src'

describe('List', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List>
          <List.Search />
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
          <List.Item>Three</List.Item>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ListDefault', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List width={1 / 3}>
          <List.Default disabled>Item 1</List.Default>
          <List.Default>Item 2</List.Default>
          <List.Default>Item 3</List.Default>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ListMultiselect', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List width={1 / 3}>
          <List.Multiselect disabled>Item 1</List.Multiselect>
          <List.Multiselect>Item 2</List.Multiselect>
          <List.Multiselect>Item 3</List.Multiselect>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ListIcon', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <List width={1 / 3}>
          <List.Icon icon="icon-agente" disabled>Item 1</List.Icon>
          <List.Icon icon="icon-agente" >Item 2</List.Icon>
          <List.Icon icon="icon-agente" >Item 3</List.Icon>
        </List>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
