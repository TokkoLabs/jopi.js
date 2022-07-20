import React from 'react'

import { Table } from '.'

export default {
  component: Table,
  title: 'Table',
}

export const normal = () => (
  <Table>
    <Table.Header>
      <Table.HeaderItem>Agency</Table.HeaderItem>
      <Table.HeaderItem>Country</Table.HeaderItem>
      <Table.HeaderItem>Paid</Table.HeaderItem>
    </Table.Header>
    <Table.Rows>
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
    </Table.Rows>
  </Table>
)

export const secondary = () => (
  <div style={{ background: '#E4E8EA', padding: '20px', borderRadius: '10px' }}>
    <Table>
      <Table.HeaderDefault>
        <Table.HeaderItemDefault>Agency</Table.HeaderItemDefault>
        <Table.HeaderItemDefault>Country</Table.HeaderItemDefault>
        <Table.HeaderItemDefault>Paid</Table.HeaderItemDefault>
      </Table.HeaderDefault>
      <Table.Rows>
        <Table.RowDefault>
          <Table.RowItemDefault>InmoMex</Table.RowItemDefault>
          <Table.RowItemDefault>Mexico</Table.RowItemDefault>
          <Table.RowItemDefault>Yes</Table.RowItemDefault>
        </Table.RowDefault>
        <Table.RowDefault>
          <Table.RowItemDefault>RGM</Table.RowItemDefault>
          <Table.RowItemDefault>Argentina</Table.RowItemDefault>
          <Table.RowItemDefault>Yes</Table.RowItemDefault>
        </Table.RowDefault>
        <Table.RowDefault>
          <Table.RowItemDefault>Urbania</Table.RowItemDefault>
          <Table.RowItemDefault>Peru</Table.RowItemDefault>
          <Table.RowItemDefault>Yes</Table.RowItemDefault>
        </Table.RowDefault>
      </Table.Rows>
    </Table>
  </div>
)
