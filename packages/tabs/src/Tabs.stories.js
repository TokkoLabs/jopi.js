import React from 'react'
import { Box } from '@oneloop/box'
import { Table } from '@oneloop/table'
import { Text } from '@oneloop/text'
import { Tabs } from '.'

export default {
  component: Tabs,
  title: 'Tabs',
}

export const normal = () => (
  <Tabs bg="primary" color="neutral.0">
    <Tabs.Tab id="texto">
      <Box as="a" href="#">
        Texto
      </Box>
    </Tabs.Tab>
    <Tabs.Tab id="tabla">
      <Box as="a" href="#">
        Tabla
      </Box>
    </Tabs.Tab>
    <Tabs.Tab id="chau">
      <Box as="a" href="#">
        Chau
      </Box>
    </Tabs.Tab>
    <Tabs.Tab id="goodbye">
      <Box as="a" href="#">
        Goodbye
      </Box>
    </Tabs.Tab>
    <Tabs.Content id="texto">Hola!</Tabs.Content>
    <Tabs.Content id="tabla">
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
    </Tabs.Content>
  </Tabs>
)

export const tabDefault = () => (
  <Tabs>
    <Tabs.Tab variant='default' id="texto">
      <Box>
        <span className='icon-buscar'/> 12
      </Box>
    </Tabs.Tab >
    <Tabs.Tab variant='default' id="tabla">
      <Box>
        <span className='icon-propiedades'/> 12
      </Box>
    </Tabs.Tab>
    <Tabs.Tab variant='default' id="chau">
      <Box>
        <span className='icon-contacto'/> 12
      </Box>
    </Tabs.Tab>
    <Tabs.Tab variant='default' id="goodbye">
      <Box>
        <span className='icon-emprendimiento'/> 12
      </Box>
    </Tabs.Tab>
    <Tabs.Content id="texto">Hola!</Tabs.Content>
    <Tabs.Content id="tabla">
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
    </Tabs.Content>
  </Tabs>
)
