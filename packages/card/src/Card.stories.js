import React from 'react'
import { Box } from '@oneloop/box'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
import { Icon } from '@oneloop/icons'
import { Image } from '@oneloop/image'
import { Card } from '.'
import { Text } from '@oneloop/text'
import { useToggle } from '@oneloop/hooks'

export default {
  component: Card,
  title: 'Card',
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Variantes disponibles del card: [ \'normal\', \'contacts\', \'search\' ]',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const CardNormal = () => {
  const [active, setActive] = useToggle(false)
  return (
    <Card id='0' variant='normal' active={active} style={{ width: '224px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="rowsCard" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Box sx={{ position: 'relative', width: '108px' }}>
        <Text variant='bodyBold.fontSize10' style={{ color: '#056C53' }}>Disponible</Text>
        <Text variant='body.fontSize11' style={{ color: '#384248' }}>IHO2543876</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Ciudad de la paz 11456 03330</Text>
      </Box>
      <Badge variant="badgeYellow" style={{ position: 'absolute', top: '8px', right: '14px' }}>{'50%'}</Badge>
    </Card>
  )
}

export const CardContactsMailWhatsapp = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='contacts' active={active} style={{ width: '224px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Box sx={{ position: 'relative', width: '128px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
        <Text variant='body600.fontSize12' style={{ color: '#49565D', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Marian Prueba</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>marianamuy@tokko.com</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>+54 9 11 123456789</Text>
      </Box>
      <Icon icon='icon-atras' fontSize='12px' style={{ transform: 'rotate(-180deg)', color: '#6F838D' }}/>
    </Card>
  )
}

export const CardContactsBusiness = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='contacts' active={active} style={{ width: '224px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Box sx={{ position: 'relative', width: '128px', gap: '2px' }}>
        <Text variant='body600.fontSize12' style={{ color: '#49565D' }}>Marian Prueba</Text>
        <Text variant='body.fontSize11' style={{ color: '#49565D', textOverflow: 'ellipsis', overflow: 'hidden' }}>Motomami Company</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D', textOverflow: 'ellipsis', overflow: 'hidden' }}>marianamuy@motomamicompany.com</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D', textOverflow: 'ellipsis', overflow: 'hidden' }}>+54 9 11 123456789</Text>
      </Box>
      <Icon icon='icon-atras' fontSize='12px' style={{ transform: 'rotate(-180deg)', color: '#6F838D' }}/>
    </Card>
  )
}

export const CardContactsWithoutData = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='contacts' active={active} style={{ width: '224px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Box sx={{ position: 'relative', width: '128px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
        <Text variant='body600.fontSize12' style={{ color: '#49565D' }}>Marian Prueba</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D' }}>Motomami Company</Text>
      </Box>
      <Icon icon='icon-atras' fontSize='12px' style={{ transform: 'rotate(-180deg)', color: '#6F838D' }}/>
    </Card>
  )
}

export const CardSearch = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='search' active={active} style={{ width: '224px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Text variant='body.fontSize12' style={{ color: '#49565D', width: '155px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Búsqueda favorita de prueba</Text>
      <Icon icon='icon-ir' fontSize='12px' style={{ color: '#6F838D' }} />
    </Card>
  )
}

export const CardSearchTwoLines = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='search' active={active} style={{ width: '224px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Text variant='body.fontSize12' style={{ color: '#49565D', width: '155px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Búsqueda favorita de prueba con un texto que es mas largo produciendo</Text>
      <Icon icon='icon-ir' fontSize='12px' style={{ color: '#6F838D' }} />
    </Card>
  )
}

export const CardEntrepreneurship = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='normal' active={active} style={{ width: '224px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="rowsCard" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Box sx={{ position: 'relative', width: '110px' }}>
        <Text variant='bodyBold.fontSize10' style={{ color: '#056C53' }}>Comercializando</Text>
        <Text variant='body.fontSize12' style={{ color: '#49565D' }}>Mirabilia belgrano</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D' }}>Arcos y Roosevelt</Text>
      </Box>
    </Card>
  )
}
