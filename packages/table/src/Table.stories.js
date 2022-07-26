import React from 'react'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
import { Image } from '@oneloop/image'
import { Table } from '.'
import { Text } from '@oneloop/text'

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
            <Text variant="body.fontSize12">IHO4362866</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12Ellipsis" width='150px'>Av. Libertador 5687 5to A - Lote 1232</Text>
            <Text variant="bodyBold.fontSize11">Departamento en Palermo</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Venta</Text>
            <Text variant="bodyBold.fontSize11">USD 200.000</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">2 Dorm</Text>
            <Text variant="body.fontSize11">2 Baños</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">87m° Cub</Text>
            <Text variant="body.fontSize11">0m° Tot</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">3 Amb</Text>
            <Text variant="body.fontSize11">0.00</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">120m° Semi</Text>
            <Text variant="body.fontSize11">0m° Total</Text>
          </Table.RowItemDefault>
        </Table.RowDefault>
        <Table.RowDefault disabled>
          <Table.RowItemDefault>
            <Checkbox />
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Image
              src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              variant="rows"
              textBadge="Enviada"
            />
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">IHO4362866</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Av. Libertador 5687 5to A</Text>
            <Text variant="bodyBold.fontSize11">Departamento en Palermo</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Venta</Text>
            <Text variant="bodyBold.fontSize11">USD 200.000</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">2 Dorm</Text>
            <Text variant="body.fontSize11">2 Baños</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">87m° Cub</Text>
            <Text variant="body.fontSize11">0m° Tot</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">3 Amb</Text>
            <Text variant="body.fontSize11">0.00</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">120m° Semi</Text>
            <Text variant="body.fontSize11">0m° Total</Text>
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
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">IHO4362866</Text>
            <Text variant="body.fontSize11">AP4468985</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Av. Libertador 5687 5to A</Text>
            <Text variant="bodyBold.fontSize11">Departamento en Palermo</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Venta</Text>
            <Text variant="bodyBold.fontSize11">USD 200.000</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">2 Dorm</Text>
            <Text variant="body.fontSize11">2 Baños</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">87m° Cub</Text>
            <Text variant="body.fontSize11">0m° Tot</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">3 Amb</Text>
            <Text variant="body.fontSize11">0.00</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Badge variant="badgeTips">COHIM</Badge>
            <Text variant="body.fontSize11">0m° Total</Text>
          </Table.RowItemDefault>
        </Table.RowDefault>
      </Table.Rows>
    </Table>
  </div>
)

export const groupContacts = () => (
  <div style={{ background: '#E4E8EA', padding: '20px', borderRadius: '10px' }}>
    <Table>
      <Table.HeaderDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Contacto</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Celular</Text>
          <Text variant="white.1">Mail</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Agente</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Estado</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Num 1</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Num 2</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="white.0">Fecha</Text>
          <Text variant="white.1">Hora</Text>
        </Table.HeaderItemDefault>
      </Table.HeaderDefault>
      <Table.Rows>
        <Table.RowDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Nombre Contacto</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Cel: +54 911 30196212</Text>
            <Text variant="body.fontSize11">garavaglia.juana@navent.con</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Nombre Agente</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Badge variant="badgeInfo" isMedium hasIcon>
              <span>SE</span>
            </Badge>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">15</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">8</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">30-06-2022</Text>
            <Text variant="body.fontSize11">15:50</Text>
          </Table.RowItemDefault>
        </Table.RowDefault>
        <Table.RowDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Nombre Contacto</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Cel: +54 911 30196212</Text>
            <Text variant="body.fontSize11">garavaglia.juana@navent.con</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">Nombre Agente</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Badge variant="badgeInfo" isMedium hasIcon>
              <span>SE</span>
            </Badge>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">15</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">8</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault>
            <Text variant="body.fontSize12">30-06-2022</Text>
            <Text variant="body.fontSize11">15:50</Text>
          </Table.RowItemDefault>
        </Table.RowDefault>
      </Table.Rows>
    </Table>
  </div>
)
