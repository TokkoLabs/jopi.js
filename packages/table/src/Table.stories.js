import React from 'react'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
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

export const primary = () => {
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
    <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
      <Table>
        <Table.HeaderDefault>
          <Table.HeaderItemDefault>
            <Checkbox onClick={() => selectAll()}/>
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
        </Table.HeaderDefault>
        <Table.Rows>
          <Table.RowDefault selected={selected0} >
            <Table.RowItemDefault>
              <Checkbox onClick={() => setSelected0()} isChecked={selected0} />
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
              <Text variant={["bodyBold.fontSize12", "ellipsis"]} width='150px'>Av. Libertador 5687 5to A - Lote 1232</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
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
          <Table.RowDefault selected={selected1} disabled >
            <Table.RowItemDefault>
              <Checkbox disabled />
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Por validar"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="body.fontSize12">IHO4362866</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
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
          <Table.RowDefault selected={selected2} variant="errorPrimary" >
            <Table.RowItemDefault error>
              <Checkbox onClick={() => setSelected2()} isChecked={selected2} />
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Reportada"
                variantBadge="badgeErrorRow"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">IHO4362866</Text>
              <Text variant="body.fontSize11">AP4468985</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Badge variant="badgeTips">COHIM</Badge>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault selected={selected3} variant='infoAlertPrimary' >
            <Table.RowItemDefault>
              <Checkbox onClick={() => setSelected3()} isChecked={selected3} />
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
              <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
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
}
export const secondary = () => {
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
    <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
      <Table>
        <Table.Header>
          <Table.HeaderItemDefault>
            <Checkbox onClick={() => selectAll()}/>
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
          <Table.RowDefault selected={selected0} variant='secondary' >
            <Table.RowItemDefault>
              <Checkbox onClick={() => setSelected0()} isChecked={selected0} />
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
              <Text variant={["bodyBold.fontSize12", "ellipsis"]} width='150px'>Av. Libertador 5687 5to A - Lote 1232</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
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
          <Table.RowDefault selected={selected1} variant='secondary' disabled >
            <Table.RowItemDefault>
              <Checkbox disabled />
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Por validar"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="body.fontSize12">IHO4362866</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
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
          <Table.RowDefault selected={selected2} variant="errorSecondary" >
            <Table.RowItemDefault error>
              <Checkbox onClick={() => setSelected2()} isChecked={selected2} />
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Image
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                variant="rows"
                textBadge="Reportada"
                variantBadge="badgeErrorRow"
              />
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">IHO4362866</Text>
              <Text variant="body.fontSize11">AP4468985</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">2 Dorm</Text>
              <Text variant="body.fontSize11">2 Baños</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">87m° Cub</Text>
              <Text variant="body.fontSize11">0m° Tot</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Text variant="body.fontSize12">3 Amb</Text>
              <Text variant="body.fontSize11">0.00</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault error>
              <Badge variant="badgeTips">COHIM</Badge>
              <Text variant="body.fontSize11">0m° Total</Text>
            </Table.RowItemDefault>
          </Table.RowDefault>
          <Table.RowDefault selected={selected3} variant='infoAlertSecondary' >
            <Table.RowItemDefault>
              <Checkbox onClick={() => setSelected3()} isChecked={selected3} />
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
              <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
              <Text variant="body.fontSize11">Departamento en Palermo</Text>
            </Table.RowItemDefault>
            <Table.RowItemDefault>
              <Text variant="bodyBold.fontSize12">Venta</Text>
              <Text variant="body.fontSize11">USD 200.000</Text>
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
}

export const groupContacts = () => (
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
        <Table.RowDefault variant='secondary'>
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
          <Table.RowItemDefault center>
            <Badge variant="badgeInfo" isBig isRounded>
              <Text variatn="bodyBold.fontSize12">SE</Text>
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
        <Table.RowDefault variant='secondary'>
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
          <Table.RowItemDefault center>
            <Badge variant="badgeInfo" isBig isRounded>
              <Text variatn="bodyBold.fontSize12">SE</Text>
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
