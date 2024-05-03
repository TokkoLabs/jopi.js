import React, { useEffect, useState } from 'react'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'

export const FullScreen = ({
  fullscreen,
  tabContainers,
  tabSelected,
  photos,
  index,
  setIndex,
  setTabSelected,
  video,
  video360,
  setFullscreen,
  planos,
}) => {
  const [contTab, setContTab] = useState(0)
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [contTab, index])
  useEffect(() => {
    let newContTab
    if (tabSelected === 'videos') {
      newContTab = video.length
    } else if (tabSelected === 'fotos') {
      newContTab = photos.length
    } else if (tabSelected === 'planos') {
      newContTab = planos.length
    } else if (tabSelected === 'video360') {
      newContTab = video360.length
    }
    setContTab(newContTab)
  }, [tabSelected])

  const changeTabContainer = (tab) => {
    setIndex(0)
    setTabSelected(tab)
  }

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
  const next = () => setIndex((prev) => Math.min(contTab - 1, prev + 1))

  const prev = () => setIndex((prev) => Math.max(0, prev - 1))
  const closeFullscreen = () => {
    setFullscreen(false)
    setTabSelected('fotos')
    setIndex(0)
  }
  return (
    <Box className={`fullscreen ${fullscreen ? 'openFullscreen' : ''}`}>
      <Box className="fsOverlay" onClick={closeFullscreen}></Box>
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

      <Box className="fsContainerTabs" __css={{ position: 'relative' }}>
        <Icon
          icon="icon-atras"
          className="iconPrev"
          fontSize="40px"
          onClick={prev}
        />

        {tabSelected === 'fotos' && (
          <Box className="fsTabCont">
            <Box className="fsTabContImage">
              <img src={photos[index]} alt="Foto" />
              <Text className="contFotos" variant="bodyBold.fontSize14">{`${
                index + 1
              }/${photos.length}`}</Text>
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

        <Box className="fsCloseIcon">
          <Icon
            onClick={closeFullscreen}
            className="closeIcon"
            icon="icon-cerrar"
          />
        </Box>
      </Box>
    </Box>
  )
}
