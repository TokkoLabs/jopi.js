/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Icon } from '@oneloop/icons'
import '../styles/gallery.css'
import { Text } from '@oneloop/text'

const ButtonGallery = ({ text, ...props }) => (
  <Box
    __css={{
      padding: '6px 12px',
      color: '#FFF',
      borderRadius: '32px',
      background: theme.colors.secondary,
      border: '1px solid #A2D4E5',
      fontFamily: 'Nunito Sans',
      fontSize: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      ':hover': {
        background: '#A2D4E5',
        color: theme.colors.secondary,
      },
      ':active': {
        color: theme.colors.secondaryHover,
        borderColor: theme.colors.secondary,
      },
    }}
    {...props}
  >
    {text}
  </Box>
)

export const Gallery = ({
  images = [],
  planos = [],
  video = [],
  video360 = [],
  ...props
}) => {
  const Images = [...images, ...planos]
  const [fullscreen, setFullscreen] = useState(false)
  const [tabSelected, setTabSelected] = useState('fotos')
  const tabContainers = []
  const [index, setIndex] = useState(0)
  const [contTab, setContTab] = useState(0)

  const changeTabContainer = (tab) => {
    setIndex(0)
    setTabSelected(tab)
  }

  if (video.length > 0) {
    tabContainers.push('Videos')
  }

  if (video360.length > 0) {
    tabContainers.push('Video360')
  }

  if (images.length > 0) {
    tabContainers.push('Fotos')
  }

  if (planos.length > 0) {
    tabContainers.push('Planos')
  }

  useEffect(() => {
    let newContTab
    if (tabSelected === 'videos') {
      newContTab = video.length
    } else if (tabSelected === 'fotos') {
      newContTab = images.length
    } else if (tabSelected === 'planos') {
      newContTab = planos.length
    } else if (tabSelected === 'video360') {
      newContTab = video360.length
    }

    setContTab(newContTab)
  }, [tabSelected])

  const next = () => setIndex((prev) => Math.min(contTab - 1, prev + 1))

  const prev = () => setIndex((prev) => Math.max(0, prev - 1))

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      next()
    }

    if (event.key === 'ArrowLeft') {
      prev()
    }

    if (event.key === 'Escape') {
      closeFullscreen()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [contTab, index])

  const toggleFullscreen = () => {
    if (
      video.length > 0 ||
      video360.length > 0 ||
      images.length > 0 ||
      planos.length > 0
    ) {
      setFullscreen(true)
    }
  }

  const closeFullscreen = () => {
    setFullscreen(false)
    setTabSelected('fotos')
  }

  return (
    <Box
      __css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '263px',
      }}
      {...props}
    >
      <Box
        onClick={toggleFullscreen}
        className="firstTabImg"
        __css={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '69%',
          height: '100%',
          background: theme.colors.neutralGray8,
          borderRadius: '12px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${Images[0]})`,
          cursor: 'pointer',
        }}
      >
        {!Images[0] && (
          <Icon
            icon="icon-propiedades"
            fontSize="34px"
            color={theme.colors.neutralGray4}
          />
        )}

        <Box
          __css={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            display: 'flex',
            gap: '8px',
          }}
        >
          {video.length > 0 && (
            <ButtonGallery
              text={'Videos'}
              onClick={() => setTabSelected('videos')}
            />
          )}
          {video360.length > 0 && (
            <ButtonGallery
              text={'Video 360°'}
              onClick={() => setTabSelected('video360')}
            />
          )}
          {images.length > 0 && (
            <ButtonGallery
              className="buttonGallery"
              text={'Fotos'}
              onClick={() => setTabSelected('fotos')}
            />
          )}
          {planos.length > 0 && (
            <ButtonGallery
              text={'Planos'}
              onClick={() => setTabSelected('planos')}
            />
          )}
        </Box>
      </Box>
      <Box
        onClick={toggleFullscreen}
        __css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '29%',
          height: '100%',
        }}
      >
        <Box
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.colors.neutralGray8,
            width: '100%',
            height: '47%',
            borderRadius: '12px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Images[1]})`,
            cursor: 'pointer',
          }}
        >
          {!Images[1] && (
            <Icon
              icon="icon-propiedades"
              fontSize="24px"
              color={theme.colors.neutralGray4}
            />
          )}
        </Box>
        <Box
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.colors.neutralGray8,
            width: '100%',
            height: '47%',
            borderRadius: '12px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Images[2]})`,
            cursor: 'pointer',
          }}
        >
          {!Images[2] && (
            <Icon
              icon="icon-propiedades"
              fontSize="24px"
              color={theme.colors.neutralGray4}
            />
          )}
          {images.length > 3 && (
            <Box
              __css={{
                padding: '14px 15px',
                borderRadius: '50%',
                backgroundColor: theme.colors.neutralGray8,
                opacity: '0.8',
                color: theme.colors.black,
                fontFamily: 'Nunito Sans',
                fontSize: '14px',
                fontWeight: '700',
              }}
            >{`+${images.length - 3}`}</Box>
          )}
        </Box>
      </Box>

      <Box className={`fullscreen ${fullscreen ? 'openFullscreen' : ''}`}>
        <Box className="fsOverlay" onClick={closeFullscreen}></Box>
        <Box className="fsCloseIcon">
          <Icon
            onClick={closeFullscreen}
            className="closeIcon"
            icon="icon-cerrar"
            fontSize="32px"
          />
        </Box>
        {tabContainers.length > 1 && (
          <Box className="fsTabHeader">
            {tabContainers.map((tab, i) => (
              <Text
                key={i}
                onClick={() => changeTabContainer(tab.toLocaleLowerCase())}
                className={`${
                  tabSelected === tab.toLocaleLowerCase() && 'tabSelected'
                }`}
                variant="bodyBold.fontSize14"
              >
                {tab}
              </Text>
            ))}
          </Box>
        )}
        <Box className="fsContainerTabs">
          {/* Containers */}

          <Icon
            icon="icon-atras"
            className="iconPrev"
            fontSize="40px"
            onClick={prev}
          />

          {tabSelected === 'fotos' && (
            <Box className="fsTabCont">
              <Box className="fsTabContImage">
                <img src={images[index]} alt="Foto" />
                <Text className="contFotos" variant="bodyBold.fontSize14">{`${
                  index + 1
                }/${images.length}`}</Text>
              </Box>
            </Box>
          )}

          {tabSelected === 'videos' && (
            <Box className="fsTabCont">
              <Box className="fsTabContImage">
                <iframe
                  width="100%"
                  height="100%"
                  src={video[index]}
                  title="Video"
                  frameBorder="0"
                  allowFullScreen
                />
                <Text variant="bodyBold.fontSize14">{`${index + 1}/${
                  video.length
                }`}</Text>
              </Box>
            </Box>
          )}

          {tabSelected === 'planos' && (
            <Box className="fsTabCont">
              <Box className="fsTabContImage">
                <img src={planos[index]} alt="Foto" />
                <Text variant="bodyBold.fontSize14">{`${index + 1}/${
                  planos.length
                }`}</Text>
              </Box>
            </Box>
          )}

          {tabSelected === 'video360' && (
            <Box className="fsTabCont">
              <Box className="fsTabContImage">
                <iframe
                  width="100%"
                  height="100%"
                  src={video360[index]}
                  title="Video"
                  frameBorder="0"
                  allowFullScreen
                />
                <Text variant="bodyBold.fontSize14">{`${index + 1}/${
                  video360.length
                }`}</Text>
              </Box>
            </Box>
          )}

          <Icon
            className="iconNext"
            style={{ transform: 'rotate(180deg)' }}
            onClick={next}
            icon="icon-atras"
            fontSize="40px"
          />
        </Box>
      </Box>
    </Box>
  )
}
