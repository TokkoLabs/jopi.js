import React from 'react'
import { Gallery } from '.'
import { Box } from '@oneloop/box'

export default {
  component: Gallery,
  title: 'Gallery',
}

export const GalleyComponent = () => {
  const imgs = [
    'https://www.wallpaperuse.com/wallp/0-9852_m.jpg',
    'https://static.inmofactory.com/images/inmofactory/documents/1/124683/34021431/582525589.jpg?rule=web_412x257',
    'https://staticbp.com/img/prop_new_b/534/00534436-01.jpg',
    'https://imgs.nestimg.com/casa_en_fraccionamiento_privadas_de_la_hacienda_3210125690712336672.jpg',
  ]

  const VIDEO = [
    'https://www.youtube.com/embed/YDL8HbY9ENU',
    'https://www.youtube.com/embed/70KXYjyzFK4',
  ]

  const PLANO = ['https://www.krellbrokers.com/images/plano-2.png']

  const Video360 = ['https://my.matterport.com/show/?m=eURj8Qwwzb2']

  return (
    <Box __css={{ width: '770px' }}>
      <Gallery images={imgs} video={VIDEO} planos={PLANO} video360={Video360} />
    </Box>
  )
}
