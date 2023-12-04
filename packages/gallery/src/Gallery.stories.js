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
  ]

  return (
    <Box __css={{ width: '770px' }}>
      <Gallery images={imgs} />
    </Box>
  )
}
