import React from 'react'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
import { Icon } from '@oneloop/icons'
import { Image } from '@oneloop/image'
import { Table } from '.'
import { Text } from '@oneloop/text'
import { useToggle } from '@oneloop/hooks'

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

export const Primary = () => {
  const [selected0, setSelected0] = useToggle(false)
  const [selected1, setSelected1] = useToggle(false)
  const [selected2, setSelected2] = useToggle(false)
  const [selected3, setSelected3] = useToggle(false)
  const [order, setOrder] = useToggle(false)

  const selectAll = () => {
    setSelected0()
    setSelected1()
    setSelected2()
    setSelected3()
  }

  return (
    <div
      style={{ background: '#FFFFFF', padding: '20px', borderRadius: '10px' }}
    >
      <Table>
        <Table.HeaderDefault>
          <Table.HeaderItemDefault row>
            <Checkbox onClick={() => selectAll()} />
            <Icon
              icon="icon-dropdown"
              fontSize="12px"
              onClick={setOrder}
              style={
                order
                  ? { transform: 'rotate(-180deg)', transition: '0.5s' }
                  : { transition: '0.5s' }
              }
            />
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault row style={{ gap: '2px' }}>
            <Text variant="bodyBold.fontSize12">Foto</Text>
            <Icon icon="icon-ordenar" fontSize="12px" />
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Cód. Ref</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Dirección</Text>
            <Text variant="body.fontSize11">Ubicación</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Valor</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Dorm</Text>
            <Text variant="body.fontSize11">Baños</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">S. Cubierta</Text>
            <Text variant="body.fontSize11">Total</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Fondo</Text>
            <Text variant="body.fontSize11">Frente</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">S. Descrub</Text>
            <Text variant="body.fontSize11">S. Descrub</Text>
          </Table.HeaderItemDefault>
        </Table.HeaderDefault>
        <Table.Rows>
          <Table.RowDefault selected={selected0} id="0">
            <Table.RowItemDefault id="0">
              <Checkbox onClick={() => setSelected0()} isChecked={selected0} />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Text variant="body.fontSize12">IHO4362866</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Text variant={['bodyBold.fontSize12', 'ellipsis']} width="150px">
                Av. Libertador 5687 5to A - Lote 1232
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0">
              <Text variant="body.fontSize12">120m° Semi</Text>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault selected={selected1} id="1" disabled>
            <Table.RowItemDefault id="1">
              <Checkbox disabled />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Text variant="body.fontSize12">IHO4362866</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Text variant="bodyBold.fontSize12">
                Av. Libertador 5687 5to A
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1">
              <Text variant="body.fontSize12">120m° Semi</Text>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault selected={selected2} id="2" variant="errorPrimary">
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Checkbox onClick={() => setSelected2()} isChecked={selected2} />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Reportada"
                variantBadge="badgeReportRow"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Text variant="body.fontSize12">IHO4362866</Text>
              <Text variant="body.fontSize11">AP4468985</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Text variant="bodyBold.fontSize12">
                Av. Libertador 5687 5to A
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorPrimary">
              <Badge variant="badgeTips">COHIM</Badge>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault
            selected={selected3}
            id="3"
            variant="infoAlertPrimary"
          >
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Checkbox onClick={() => setSelected3()} isChecked={selected3} />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Por validar"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Text variant="body.fontSize12">IHO4362866</Text>
              <Text variant="body.fontSize11">AP4468985</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Text variant="bodyBold.fontSize12">
                Av. Libertador 5687 5to A
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertPrimary">
              <Badge variant="badgeTips">COHIM</Badge>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
        </Table.Rows>
      </Table>
    </div>
  )
}
export const Secondary = () => {
  const [selected0, setSelected0] = useToggle(false)
  const [selected1, setSelected1] = useToggle(false)
  const [selected2, setSelected2] = useToggle(false)
  const [selected3, setSelected3] = useToggle(false)

  const selectAll = () => {
    setSelected0()
    setSelected1()
    setSelected2()
    setSelected3()
  }

  return (
    <div
      style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}
    >
      <Table>
        <Table.Header>
          <Table.HeaderItemDefault>
            <Checkbox onClick={() => selectAll()} />
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Foto</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Cód. Ref</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Dirección</Text>
            <Text variant="body.fontSize11">Ubicación</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Valor</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Dorm</Text>
            <Text variant="body.fontSize11">Baños</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">S. Cubierta</Text>
            <Text variant="body.fontSize11">Total</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">Fondo</Text>
            <Text variant="body.fontSize11">Frente</Text>
          </Table.HeaderItemDefault>
          <Table.HeaderItemDefault>
            <Text variant="bodyBold.fontSize12">S. Descrub</Text>
            <Text variant="body.fontSize11">S. Descrub</Text>
          </Table.HeaderItemDefault>
        </Table.Header>
        <Table.Rows>
          <Table.RowDefault selected={selected0} id="0" variant="secondary">
            <Table.RowItemDefault id="0" variant="secondary">
              <Checkbox onClick={() => setSelected0()} isChecked={selected0} />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Text variant="body.fontSize12">IHO4362866</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Text variant={['bodyBold.fontSize12', 'ellipsis']} width="150px">
                Av. Libertador 5687 5to A - Lote 1232
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="0" variant="secondary">
              <Text variant="body.fontSize12">120m° Semi</Text>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault
            selected={selected1}
            id="1"
            variant="secondary"
            disabled
          >
            <Table.RowItemDefault id="1" variant="secondary">
              <Checkbox disabled />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Text variant="body.fontSize12">IHO4362866</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Text variant="bodyBold.fontSize12">
                Av. Libertador 5687 5to A
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="1" variant="secondary">
              <Text variant="body.fontSize12">120m° Semi</Text>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault
            selected={selected2}
            id="2"
            variant="errorSecondary"
          >
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Checkbox onClick={() => setSelected2()} isChecked={selected2} />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Reportada"
                variantBadge="badgeReportRow"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Text variant="body.fontSize12">IHO4362866</Text>
              <Text variant="body.fontSize11">AP4468985</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Text variant="bodyBold.fontSize12">
                Av. Libertador 5687 5to A
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="2" variant="errorSecondary">
              <Badge variant="badgeTips">COHIM</Badge>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault
            selected={selected3}
            id="3"
            variant="infoAlertSecondary"
          >
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Checkbox onClick={() => setSelected3()} isChecked={selected3} />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Por validar"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Text variant="body.fontSize12">IHO4362866</Text>
              <Text variant="body.fontSize11">AP4468985</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Text variant="bodyBold.fontSize12">
                Av. Libertador 5687 5to A
              </Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault id="3" variant="infoAlertSecondary">
              <Badge variant="badgeTips">COHIM</Badge>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
        </Table.Rows>
      </Table>
    </div>
  )
}

export const GroupContacts = () => (
  <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
    <Table>
      <Table.Header>
        <Table.HeaderItemDefault>
          <Text variant="bodyBold.fontSize12">Contacto</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="bodyBold.fontSize12">Celular</Text>
          <Text variant="body.fontSize11">Mail</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="bodyBold.fontSize12">Agente</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="bodyBold.fontSize12">Estado</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="bodyBold.fontSize12">Num 1</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="bodyBold.fontSize12">Num 2</Text>
        </Table.HeaderItemDefault>
        <Table.HeaderItemDefault>
          <Text variant="bodyBold.fontSize12">Fecha</Text>
          <Text variant="body.fontSize11">Hora</Text>
        </Table.HeaderItemDefault>
      </Table.Header>
      <Table.Rows>
        <Table.RowDefault id="0" variant="secondary">
          <Table.RowItemDefault id="0" variant="secondary">
            <Text variant="body.fontSize12">Nombre Contacto</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="0" variant="secondary">
            <Text variant="body.fontSize12">Cel: +54 911 30196212</Text>
            <Text variant="body.fontSize11">garavaglia.juana@navent.con</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="0" variant="secondary">
            <Text variant="body.fontSize12">Nombre Agente</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="0" variant="secondary" center>
            <Badge variant="badgeInfo" isBig isRounded>
              <Text variatn="bodyBold.fontSize12">SE</Text>
            </Badge>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="0" variant="secondary">
            <Text variant="body.fontSize12">15</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="0" variant="secondary">
            <Text variant="body.fontSize12">8</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="0" variant="secondary">
            <Text variant="body.fontSize12">30-06-2022</Text>
            <Text variant="body.fontSize11">15:50</Text>
          </Table.RowItemDefault>
        </Table.RowDefault>
        <Table.RowDefault id="1" variant="secondary">
          <Table.RowItemDefault id="1" variant="secondary">
            <Text variant="body.fontSize12">Nombre Contacto</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="1" variant="secondary">
            <Text variant="body.fontSize12">Cel: +54 911 30196212</Text>
            <Text variant="body.fontSize11">garavaglia.juana@navent.con</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="1" variant="secondary">
            <Text variant="body.fontSize12">Nombre Agente</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="1" variant="secondary" center>
            <Badge variant="badgeInfo" isBig isRounded>
              <Text variatn="bodyBold.fontSize12">SE</Text>
            </Badge>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="1" variant="secondary">
            <Text variant="body.fontSize12">15</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="1" variant="secondary">
            <Text variant="body.fontSize12">8</Text>
          </Table.RowItemDefault>
          <Table.RowItemDefault id="1" variant="secondary">
            <Text variant="body.fontSize12">30-06-2022</Text>
            <Text variant="body.fontSize11">15:50</Text>
          </Table.RowItemDefault>
        </Table.RowDefault>
      </Table.Rows>
    </Table>
  </div>
)

export const Minimalist = () => {
  const Columns = ['Período', 'Valor en USD', 'Valor en ARS']
  const Rows = [
    {
      id: 0,
      period: 'Enero 2021',
      valueUSD: 'USD 200.000',
      valueARS: 'ARS 1.200.000',
    },
    {
      id: 1,
      period: 'Febrero 2021',
      valueUSD: 'USD 200.000',
      valueARS: 'ARS 1.200.000',
    },
    {
      id: 2,
      period: 'Marzo 2021',
      valueUSD: 'USD 200.000',
      valueARS: 'ARS 1.200.000',
    },
  ]

  return (
    <Table>
      <Table.Header>
        {Columns.map((column, index) => (
          <Table.HeaderItemDefault
            __css={{
              paddingTop: '21px',
              paddingBottom: '21px',
            }}
            key={index}
          >
            <Text variant="bodyBold.fontSize12">{column}</Text>
          </Table.HeaderItemDefault>
        ))}
      </Table.Header>
      <Table.Rows>
        {Rows.map((row, index) => (
          <Table.RowDefault id={row.id} key={index} variant="minimalist">
            {Object.keys(row).map(
              (key, index) =>
                key !== 'id' && (
                  <Table.RowItemDefault id={row.id} key={index}>
                    <Text variant="body.fontSize12">{row[key]}</Text>
                  </Table.RowItemDefault>
                )
            )}
          </Table.RowDefault>
        ))}
      </Table.Rows>
    </Table>
  )
}
