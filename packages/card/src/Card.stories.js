import React from 'react'
import { Box } from '@oneloop/box'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
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
      description: 'Variantes disponibles del card: [ \'normal\', \'contacts\' ]',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const CardNormal = () => {
  const [active, setActive] = useToggle(false)
  return (
    <Card id='0' variant='normal' active={active} style={{ width: '224px', height: '59px' }}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="rows" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: '60px', height: '40px' }} />
      <Box sx={{ position: 'relative' }}>
        <Text variant='bodyBold.fontSize10' style={{ color: '#056C53' }}>Disponible</Text>
        <Text variant='body.fontSize11' style={{ color: '#384248' }}>IHO2543876</Text>
        <Text variant={['body.fontSize11', 'ellipsis']} style={{ color: '#6F838D',  display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Ciudad de la paz 11456</Text>
      </Box>
      <Badge variant="badgeYellow" style={{ position: 'absolute', top: '8px', right: '14px' }}>{'50%'}</Badge>
    </Card>
  )
}

export const CardContactosMailWhatsapp = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='contacts' width='224px' active={active}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Box sx={{ position: 'relative' }}>
        <Text variant='body600.fontSize12'>Marian Prueba</Text>
        <Text variant={['body.fontSize11', 'ellipsis']} style={{ color: '#6F838D' }}>marianamuy@tokko.com</Text>
        <Text variant={['body.fontSize11', 'ellipsis']} style={{ color: '#6F838D' }}>+54 9 11 123456789</Text>
      </Box>
      <span className='icon-atras' style={{ transform: 'rotate(-180deg)', color: '#6F838D', paddingTop: '5px' }}/>
    </Card>
  )
}

export const CardContactosEmpresa = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='contacts' width='224px' active={active}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width='44px'/>
      <Box sx={{ position: 'relative' }}>
        <Text variant='body600.fontSize12'>Marian Prueba</Text>
        <Text variant={['body.fontSize11', 'ellipsis']} style={{ color: '#6F838D' }}>Motomami Company</Text>
        <Text variant={['body.fontSize11', 'ellipsis']} style={{ color: '#6F838D' }}>marianamuy@motomamicompany.com</Text>
        <Text variant={['body.fontSize11', 'ellipsis']} style={{ color: '#6F838D' }}>+54 9 11 123456789</Text>
      </Box>
      <span className='icon-atras' style={{ transform: 'rotate(-180deg)', color: '#6F838D', paddingTop: '5px' }}/>
    </Card>
  )
}

export const CardContactosWithoutData = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='contacts' width='224px' active={active}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Box sx={{ position: 'relative' }}>
        <Text variant='body600.fontSize12'>Marian Prueba</Text>
        <Text variant={['body.fontSize11', 'ellipsis']} style={{ color: '#6F838D' }}>Motomami Company</Text>
      </Box>
      <span className='icon-atras' style={{ transform: 'rotate(-180deg)', color: '#6F838D', paddingTop: '5px' }}/>
    </Card>
  )
}

export const CardSearch = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='search' width='224px' active={active}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Text variant='body.fontSize12' style={{ color: '#49565D' }}>Búsqueda favorita de prueba</Text>
      <span className='icon-ambientes' style={{ color: '#6F838D', paddingTop: '5px' }}/>
    </Card>
  )
}

export const CardSearchTwoLines = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='search' width='224px' active={active}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Text variant='body.fontSize12' style={{ color: '#49565D', paddingLeft: '10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Búsqueda favorita de prueba con un texto que es mas largo produciendo</Text>
      <span className='icon-ambientes' style={{ color: '#6F838D', paddingTop: '5px' }}/>
    </Card>
  )
}

export const CardEmprendimiento = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='normal' width='224px' active={active}>
      <Checkbox onClick={setActive} isChecked={active} />
      <Image variant="rows" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Box sx={{ position: 'relative' }}>
        <Text variant='bodyBold.fontSize10' style={{ color: '#056C53' }}>Comercializando</Text>
        <Text variant='body.fontSize12' style={{ color: '#49565D' }}>Mirabilia belgrano</Text>
        <Text variant='body.fontSize11' style={{ color: '#6F838D' }}>Arcos y Roosevelt</Text>
      </Box>
    </Card>
  )
}
