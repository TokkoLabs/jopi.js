import React, { useEffect, useState } from 'react'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import { SliderSwap } from './SliderSwap'

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
  const closeFullscreen = () => {
    setFullscreen(false)
    setTabSelected('fotos')
    setIndex(0)
  }
  return (
    <Box className={`fullscreen ${fullscreen ? 'openFullscreen' : ''}`}>
      <Box className="fsCloseIconMobile">
        <Icon
          onClick={closeFullscreen}
          className="closeIcon"
          icon="icon-cerrar"
        />
      </Box>
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
        {tabSelected === 'fotos' && (
          <Box className="fsTabCont">
            <Box className="fsTabContImage">
              <SliderSwap
                setIndex={setIndex}
                fullScreen
                fileType={tabSelected}
                files={photos}
                index={index}
              />
              <Text className="contFotos" variant="bodyBold.fontSize14">{`${
                index + 1
              }/${photos.length}`}</Text>
            </Box>
          </Box>
        )}

        {tabSelected === 'videos' && (
          <Box className="fsTabCont">
            <Box className="fsTabContImage">
              <SliderSwap
                setIndex={setIndex}
                fullScreen
                fileType={tabSelected}
                files={video}
                index={index}
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
              <SliderSwap
                setIndex={setIndex}
                fullScreen
                fileType={tabSelected}
                files={planos}
                index={index}
              />
              <Text variant="bodyBold.fontSize14">{`${index + 1}/${
                planos.length
              }`}</Text>
            </Box>
          </Box>
        )}

        {tabSelected === 'video360' && (
          <Box className="fsTabCont">
            <Box className="fsTabContImage">
              <SliderSwap
                setIndex={setIndex}
                fullScreen
                fileType={tabSelected}
                files={video360}
                index={index}
              />
              <Text variant="bodyBold.fontSize14">{`${index + 1}/${
                video360.length
              }`}</Text>
            </Box>
          </Box>
        )}

        <Box className="fsCloseIconDesktop">
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
