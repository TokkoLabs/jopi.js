import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Table } from '../src'

describe('Table', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Table>
          <Table.Header>
            <Table.HeaderItem>Agency</Table.HeaderItem>
            <Table.HeaderItem>Country</Table.HeaderItem>
            <Table.HeaderItem>Paid</Table.HeaderItem>
          </Table.Header>
          <Table.Row>
            <Table.RowItem>InmoMex</Table.RowItem>
            <Table.RowItem>Mexico</Table.RowItem>
            <Table.RowItem>Yes</Table.RowItem>
          </Table.Row>
          <Table.Row>
            <Table.RowItem>RGM</Table.RowItem>
            <Table.RowItem>Argentina</Table.RowItem>
            <Table.RowItem>Yes</Table.RowItem>
          </Table.Row>
          <Table.Row>
            <Table.RowItem>Urbania</Table.RowItem>
            <Table.RowItem>Peru</Table.RowItem>
            <Table.RowItem>Yes</Table.RowItem>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
