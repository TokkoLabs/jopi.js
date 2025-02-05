import React from 'react'
import '../../styles/gallery.css'
import { Box } from '@oneloop/box'
import { ButtonGallery } from './ButtonGallery'

export const ButtonsMainImage = ({
  video = [],
  video360 = [],
  images = [],
  imgWithCover = [],
  planos = [],
  frontCoverBlueprints = [],
  setTabSelected,
  setFullscreen,
  setIndex,
  tabTextsDict,
}) => {
  const handleClick = (e, type) => {
    e.stopPropagation()
    setTabSelected(type)
    setFullscreen(true)
    setIndex(0)
  }
  return (
    <Box className="buttonsMainImgContainer">
      {video.length > 0 && (
        <ButtonGallery
          text={tabTextsDict['videos']}
          onClick={(e) => {
            handleClick(e, 'videos')
          }}
        />
      )}
      {video360.length > 0 && (
        <ButtonGallery
          text={tabTextsDict['video360']}
          onClick={(e) => {
            handleClick(e, 'video360')
          }}
        />
      )}
      {(images.length > 0 || imgWithCover.length > 0) && (
        <ButtonGallery
          className="buttonGallery"
          text={tabTextsDict['photos']}
          onClick={(e) => {
            handleClick(e, 'fotos')
          }}
        />
      )}
      {(planos.length > 0 || frontCoverBlueprints.length > 0) && (
        <ButtonGallery
          text={tabTextsDict['bluePrints']}
          onClick={(e) => {
            handleClick(e, 'planos')
          }}
        />
      )}
    </Box>
  )
}
