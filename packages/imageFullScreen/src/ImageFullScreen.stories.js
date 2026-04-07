import React, { useState } from 'react'
import { ImageFullScreen } from '.'
import { Button } from '@quintoandar-tokko/button'
import { Box } from '@quintoandar-tokko/box'

export default {
  component: ImageFullScreen,
  title: 'ImageFullScreen',
  argTypes: {
    fullscreen: {
      name: 'fullscreen',
      description: 'Controla si el visor de pantalla completa está abierto o cerrado.',
      type: 'boolean',
      control: { type: 'none' },
    },
    setFullscreen: {
      name: 'setFullscreen',
      description: 'Función para cambiar el estado de fullscreen.',
      type: 'function',
      control: { type: 'none' },
    },
    fotos: {
      name: 'fotos',
      description: 'Array de URLs de imágenes/fotos.',
      type: 'array',
      control: { type: 'none' },
    },
    videos: {
      name: 'videos',
      description: 'Array de URLs de videos (embeds de YouTube, etc.).',
      type: 'array',
      control: { type: 'none' },
    },
    video360: {
      name: 'video360',
      description: 'Array de URLs de videos 360°.',
      type: 'array',
      control: { type: 'none' },
    },
    planos: {
      name: 'planos',
      description: 'Array de URLs de planos/blueprints.',
      type: 'array',
      control: { type: 'none' },
    },
    tabContainers: {
      name: 'tabContainers',
      description:
        'Array de objetos con { label, value } para las tabs. Si hay más de una tab se muestra el header de tabs. Valores posibles para value: "fotos", "videos", "video360", "planos".',
      type: 'array',
      control: { type: 'none' },
    },
    tabSelected: {
      name: 'tabSelected',
      description:
        'Tab actualmente seleccionada. Debe coincidir con uno de los valores de tabContainers: "fotos", "videos", "video360", "planos".',
      type: 'string',
      control: { type: 'none' },
    },
    setTabSelected: {
      name: 'setTabSelected',
      description: 'Función para cambiar la tab seleccionada.',
      type: 'function',
      control: { type: 'none' },
    },
    index: {
      name: 'index',
      description: 'Índice de la imagen/video actual dentro de la tab seleccionada.',
      type: 'number',
      control: { type: 'none' },
    },
    setIndex: {
      name: 'setIndex',
      description: 'Función para cambiar el índice actual.',
      type: 'function',
      control: { type: 'none' },
    },
    handleImageClickToFullscreen: {
      name: 'handleImageClickToFullscreen',
      description:
        'Callback que se ejecuta al cerrar el fullscreen con la URL de la imagen que estaba visible. Se usa para sincronizar la vista previa con el fullscreen.',
      type: 'function',
      control: { type: 'none' },
    },
    URLOpenFullscreen: {
      name: 'URLOpenFullscreen',
      description: 'URL de la imagen desde la cual se abrió el fullscreen.',
      type: 'string',
      control: { type: 'none' },
    },
    disableRightClick: {
      name: 'disableRightClick',
      description:
        'Si es true, deshabilita el click derecho sobre las imágenes para prevenir descargas. Por defecto: false.',
      type: 'boolean',
      control: { type: 'none' },
    },
  },
}

const PHOTOS = [
  'https://static.tokkobroker.com/pictures/105224213655380644253178824020147782780512921439883798407827684520410749716462.jpg',
  'https://static.inmofactory.com/images/inmofactory/documents/1/124683/34021431/582525589.jpg?rule=web_412x257',
  'https://imgs.nestimg.com/casa_en_fraccionamiento_privadas_de_la_hacienda_3210125690712336672.jpg',
  'https://static.tokkobroker.com/pictures/3576822133737522479342344804526371670339487603874495331054752417644934016466.jpg',
]

const VIDEOS = [
  'https://www.youtube.com/embed/D02mwv9JIVY',
  'https://www.youtube.com/embed/itu7i36F4J4',
]

const PLANOS = [
  'https://support.content.office.net/es-es/media/9fbc6289-a5de-4954-ae03-0ef707ac66e2.gif',
  'https://e7.pngegg.com/pngimages/325/700/png-clipart-floor-plan-property-land-lot-line-angle-plan.png',
]

const VIDEO_360 = [
  'https://www.youtube.com/embed/j37WwsVmKRk?si=KeA42lF4i7705Dzf',
]

export const ClickImageToOpen = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [tabSelected, setTabSelected] = useState('fotos')

  const tabContainers = [{ label: 'Fotos', value: 'fotos' }]

  const handleImageClick = (clickedIndex) => {
    setIndex(clickedIndex)
    setFullscreen(true)
  }

  return (
    <Box>
      <Box
        __css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '12px',
        }}
      >
        {PHOTOS.map((photo, i) => (
          <Box
            key={i}
            onClick={() => handleImageClick(i)}
            __css={{
              width: '100%',
              height: '150px',
              backgroundImage: `url(${photo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 0.8 },
            }}
          />
        ))}
      </Box>
      <ImageFullScreen
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        tabContainers={tabContainers}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        index={index}
        setIndex={setIndex}
        fotos={PHOTOS}
        videos={[]}
        video360={[]}
        planos={[]}
        handleImageClickToFullscreen={() => {}}
        URLOpenFullscreen={PHOTOS[index]}
      />
    </Box>
  )
}

export const OnlyPhotos = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [tabSelected, setTabSelected] = useState('fotos')

  const tabContainers = [{ label: 'Fotos', value: 'fotos' }]

  return (
    <Box>
      <Button onClick={() => setFullscreen(true)}>Open fullscreen</Button>
      <ImageFullScreen
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        tabContainers={tabContainers}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        index={index}
        setIndex={setIndex}
        fotos={PHOTOS}
        videos={[]}
        video360={[]}
        planos={[]}
        handleImageClickToFullscreen={() => {}}
        URLOpenFullscreen={PHOTOS[0]}
      />
    </Box>
  )
}

export const WithTabs = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [tabSelected, setTabSelected] = useState('fotos')

  const tabContainers = [
    { label: 'Videos', value: 'videos' },
    { label: 'Video 360°', value: 'video360' },
    { label: 'Fotos', value: 'fotos' },
    { label: 'Planos', value: 'planos' },
  ]

  return (
    <Box>
      <Button onClick={() => setFullscreen(true)}>
        Open fullscreen with tabs
      </Button>
      <ImageFullScreen
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        tabContainers={tabContainers}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        index={index}
        setIndex={setIndex}
        fotos={PHOTOS}
        videos={VIDEOS}
        video360={VIDEO_360}
        planos={PLANOS}
        handleImageClickToFullscreen={() => {}}
        URLOpenFullscreen={PHOTOS[0]}
      />
    </Box>
  )
}

export const DisableRightClick = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [tabSelected, setTabSelected] = useState('fotos')

  const tabContainers = [{ label: 'Fotos', value: 'fotos' }]

  return (
    <Box>
      <Button onClick={() => setFullscreen(true)}>
        Open fullscreen (right click disabled)
      </Button>
      <ImageFullScreen
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        tabContainers={tabContainers}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        index={index}
        setIndex={setIndex}
        fotos={PHOTOS}
        videos={[]}
        video360={[]}
        planos={[]}
        handleImageClickToFullscreen={() => {}}
        URLOpenFullscreen={PHOTOS[0]}
        disableRightClick
      />
    </Box>
  )
}
