import React from 'react'
import { Carousel } from '.'
import { Box } from '@oneloop/box'

export default {
  component: Carousel,
  title: 'Carousel',
}

export const CarouselComponent = () => {
  const imgs = [
    'https://www.wallpaperuse.com/wallp/0-9852_m.jpg',
    'https://static.inmofactory.com/images/inmofactory/documents/1/124683/34021431/582525589.jpg?rule=web_412x257',
    'https://imgs.nestimg.com/casa_en_fraccionamiento_privadas_de_la_hacienda_3210125690712336672.jpg',
    'https://static.inmofactory.com/images/inmofactory/documents/1/124683/34021431/582525589.jpg?rule=web_412x257',
    'https://imgs.nestimg.com/casa_en_fraccionamiento_privadas_de_la_hacienda_3210125690712336672.jpg',
    'https://static.tokkobroker.com/pictures/3576822133737522479342344804526371670339487603874495331054752417644934016466.jpg',
  ]

  const VIDEO = [
    'https://www.youtube.com/embed/YDL8HbY9ENU',
    'https://www.youtube.com/embed/70KXYjyzFK4',
  ]

  const PLANO = [
    'https://hips.hearstapps.com/hmg-prod/images/apartamento15-organizada-1528886170.jpg?crop=1.00xw:0.669xh;0,0.160xh&resize=640:*',
    'https://hips.hearstapps.com/hmg-prod/images/apartamento15-organizada-1528886170.jpg?crop=1.00xw:0.669xh;0,0.160xh&resize=640:*',
    'https://hips.hearstapps.com/hmg-prod/images/apartamento15-organizada-1528886170.jpg?crop=1.00xw:0.669xh;0,0.160xh&resize=640:*',
  ]

  const Video360 = ['https://my.matterport.com/show/?m=eURj8Qwwzb2']

  return (
    <Box>
      <Carousel
        frontCoverBlueprints="https://www.wallpaperuse.com/wallp/0-9852_m.jpg"
        images={imgs}
        video={VIDEO}
        planos={PLANO}
        video360={Video360}
      />
    </Box>
  )
}

export const CarouselPocasImg = () => {
  const imgs = [
    'https://static.tokkobroker.com/pictures/53597579023351052068944175327171081899881857570308647696598826336228770716010.jpg',
    'https://i.blogs.es/439f3b/casa1/450_1000.png',
  ]

  return (
    <Box __css={{ width: '770px' }}>
      <Carousel planos={imgs} />
    </Box>
  )
}

export const OpenWithButton = () => {
  const imgs = [
    'https://www.wallpaperuse.com/wallp/0-9852_m.jpg',
    'https://i.blogs.es/439f3b/casa1/450_1000.png',
  ]

  return (
    <Carousel images={imgs} otherComponent={<div>Mostrar full view</div>} />
  )
}
