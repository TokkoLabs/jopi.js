import React from 'react'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Table } from '@oneloop/table'
import { Tabs } from '.'
import { Text } from '@oneloop/text'

export default {
  component: Tabs,
  title: 'Tabs',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Variantes disponibles del tab: [ \'normal\', \'default\' ]',
      type: 'text',
      control: { type: 'none' },
    },
    firstTabSelected: {
      name: 'firstTabSelected',
      description: 'Booleano que indica si se quiere mostrar el primer Tab seleccionado.',
      type: 'boolean',
      control: { type: 'none' },
    },
    variantBody: {
      name: 'variantBody',
      description: 'Variantes disponibles del texto: [ \'body\', \'body600\', \'bodyBold\' ]',
      type: 'text',
      control: { type: 'none' },
    },
    variantFont: {
      name: 'variantFont',
      description: 'Variantes disponibles de la fuente: [ \'fontSize09\', \'fontSize10\', \'fontSize11\', \'fontSize12\', \'fontSize13\', \'fontSize14\', \'fontSize15\', \'fontSize16\' ]',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const normal = () => (
  <Tabs bg="primary" color="neutral.0" firstTabSelected={false}>
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
  <Box __css={{ backgroundColor: 'lightgray', width: '250px', height: '80px', padding: '5px' }}>
    <Tabs className='grid gap-xs'>
      <Tabs.Tab variant='default' id="item0">
          <Icon icon='icon-buscar' fontSize='12px'/>
          <Text variantBody='body600' variantFont='fontSize12'>12</Text>
      </Tabs.Tab >
      <Tabs.Tab variant='default' id="item1">
          <Icon icon='icon-propiedades' fontSize='12px'/>
          <Text variantBody='body600' variantFont='fontSize12'>12</Text>
      </Tabs.Tab>
      <Tabs.Tab variant='default' id="item2">
          <Icon icon='icon-contactos' fontSize='12px'/>
          <Text variantBody='body600' variantFont='fontSize12'>12</Text>
      </Tabs.Tab>
      <Tabs.Tab variant='default' id="item3">
          <Icon icon='icon-emprendimientos' fontSize='12px'/>
          <Text variantBody='body600' variantFont='fontSize12'>12</Text>
      </Tabs.Tab>
      <Tabs.Content id="item0">Hola!</Tabs.Content>
      <Tabs.Content id="item1">Segundo item</Tabs.Content>
      <Tabs.Content id="item2">Tercer item</Tabs.Content>
      <Tabs.Content id="item3">Ultimo item</Tabs.Content>
    </Tabs>
  </Box>
)
