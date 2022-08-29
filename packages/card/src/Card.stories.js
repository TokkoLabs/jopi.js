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
}

export const card = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='normal' width='224px' onClick={() => setActive()} active={active}>
      <Checkbox onClick={() => setActive()} isChecked={active} />
      <Image variant="rows" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Box sx={{ position: 'relative' }}>
        <Text variant='bodyBold.fontSize10' style={{ color: '#056C53'}}>Disponible</Text>
        <Text variant='body.fontSize11'>IHO2543876</Text>
        <Text variant={[ 'body.fontSize11', 'ellipsis' ]}>Ciudad de la paz 11456</Text>
        <Badge variant="badgeTips" style={{ position: 'absolute', top: '-2px', right: '4px' }}>{'50%'}</Badge>
      </Box>
    </Card>
  )
}

export const cardContactosMailWhatsapp = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='normal' width='224px' onClick={() => setActive()} active={active}>
      <Checkbox onClick={() => setActive()} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Box sx={{ position: 'relative' }}>
        <Text variant='body600.fontSize12'>Marian Prueba</Text>
        <Text variant={[ 'body.fontSize11', 'ellipsis' ]} style={{ color: '#6F838D' }}>marianamuy@tokko.com</Text>
        <Text variant={[ 'body.fontSize11', 'ellipsis' ]} style={{ color: '#6F838D' }}>+54 9 11 123456789</Text>
      </Box>
      <span className='icon-atras' style={{ transform: 'rotate(-180deg)', color: '#6F838D' }}></span>
    </Card>
  )
}

export const cardContactosEmpresa = () => {
  const [active, setActive] = useToggle(false)

  return (
    <Card id='0' variant='normal' width='224px' onClick={() => setActive()} active={active}>
      <Checkbox onClick={() => setActive()} isChecked={active} />
      <Image variant="avatar" src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width='30px' />
      <Box sx={{ position: 'relative' }}>
        <Text variant='body600.fontSize12'>Marian Prueba</Text>
        <Text variant={[ 'body.fontSize11', 'ellipsis' ]} style={{ color: '#6F838D' }}>Motomami Company</Text>
        <Text variant={[ 'body.fontSize11', 'ellipsis' ]} style={{ color: '#6F838D' }}>marianamuy@motomamicompany.com</Text>
        <Text variant={[ 'body.fontSize11', 'ellipsis' ]} style={{ color: '#6F838D' }}>+54 9 11 123456789</Text>
      </Box>
      <span className='icon-atras' style={{ transform: 'rotate(-180deg)', color: '#6F838D' }}></span>
    </Card>
  )
}
