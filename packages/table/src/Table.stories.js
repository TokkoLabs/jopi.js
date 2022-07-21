import React from 'react'
import { Checkbox } from '@oneloop/checkbox'
import { Image } from '@oneloop/image'
import { Table } from '.'
import { Heading, Text } from '@oneloop/text'

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
        <Table.HeaderItemDefault></Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Foto</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Cód. Ref</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Dirección</Text>
          <Text variant="white.1">Ubicación</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Valor</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Dorm</Text>
          <Text variant="white.1">Baños</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">S. Cubierta</Text>
          <Text variant="white.1">Total</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Fondo</Text>
          <Text variant="white.1">Frente</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">S. Descrub</Text>
          <Text variant="white.1">S. Descrub</Text>
        </Table.HeaderItemDefault>
      </Table.HeaderDefault>
      <Table.Rows>
        <Table.RowDefault>
          <Table.RowItemDefault>
            <Checkbox />
          </Table.RowItemDefault>
          <Table.RowItemDefault>
          <Image
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            variant="rows"
          />
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize10">IHO4362866</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize10">Av. Libertador 5687 5to A</Text>
            <Text variant="bodyBold.fontSize11">Departamento en Palermo</Text>
          </Table.RowItemDefault>
        </Table.RowDefault>
        <Table.RowDefault>
          <Table.RowItemDefault>
            <Checkbox />
          </Table.RowItemDefault>
          <Table.RowItemDefault>
          <Image
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            variant="rows"
          />
          </Table.RowItemDefault>
          <Table.RowItemDefault>Argentina</Table.RowItemDefault>
          <Table.RowItemDefault>Yes</Table.RowItemDefault>
        </Table.RowDefault>
        <Table.RowDefault>
          <Table.RowItemDefault>
            <Checkbox />
          </Table.RowItemDefault>
          <Table.RowItemDefault>
          <Image
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            variant="rows"
          />
          </Table.RowItemDefault>
          <Table.RowItemDefault>Peru</Table.RowItemDefault>
          <Table.RowItemDefault>Yes</Table.RowItemDefault>
        </Table.RowDefault>
      </Table.Rows>
    </Table>
  </div>
)
