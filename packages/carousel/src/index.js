/* eslint-disable multiline-ternary */
import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Icon } from '@oneloop/icons'
import '../styles/gallery.css'
import { ImageCard } from './components/ImageCard'
import { ButtonGallery } from './components/ButtonGallery'
import { FullScreen } from './components/FullScreen'

export const Carousel = ({
  images = [],
  planos = [],
  video = [],
  video360 = [],
  otherComponent = false,
  otherButton = false,
  frontCoverImg = false,
  frontCoverBlueprints = false,
  ...props
}) => {
  const [windowResize, setWindowResize] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [carouselHeight, setCarouselHeight] = useState(0)
  const [tabSelected, setTabSelected] = useState('fotos')
  const tabContainers = []
  const [index, setIndex] = useState(0)
  const Images = [...images, ...planos]
  const imgWithCover = [...images]
  const bluePrintsWithCover = [...planos]

  if (frontCoverImg) {
    Images.unshift(frontCoverImg)
    imgWithCover.unshift(frontCoverImg)
  }

  if (frontCoverBlueprints) {
    Images.unshift(frontCoverBlueprints)
    bluePrintsWithCover.unshift(frontCoverBlueprints)
  }

  const [emptyImgArray, setEmptyImgArray] = useState([])
  const [mainImageMobile, setMainImageMobile] = useState(0)
  const carouselContainerRef = useRef()
  const containerWidth = carouselContainerRef.current?.parentElement.clientWidth
  const followingImg =
    document.getElementsByClassName('followingImg')[0]?.offsetWidth
  const [mainImageWidth, setMainImageWidth] = useState(327)
  const [followImgColumns, setFollowImgColumns] = useState(0)
  const [compensationHeigth, setCompensationHeigth] = useState(0)
  if (video.length > 0) {
    tabContainers.push('Videos')
  }

  if (video360.length > 0) {
    tabContainers.push('Video360')
  }

  if (images.length > 0 || frontCoverImg.length > 0) {
    tabContainers.push('Fotos')
  }

  if (planos.length > 0 || frontCoverBlueprints.length > 0) {
    tabContainers.push('Planos')
  }

  useEffect(() => {
    const changeWidth = () => {
      setWindowResize(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)
    return () => window.removeEventListener('resize', changeWidth)
  }, [])

  useEffect(() => {
    if (followingImg > (carouselHeight * 0.5) / 0.3) {
      setCompensationHeigth(followingImg - (carouselHeight * 0.5) / 0.65)
    } else {
      setCompensationHeigth(0)
    }

    if (containerWidth < 600) {
      setCarouselHeight(containerWidth * 0.562)
    } else if (containerWidth > 650 && containerWidth < 960) {
      setCarouselHeight(mainImageWidth * 0.562 + compensationHeigth)
    } else setCarouselHeight(316)
  }, [windowResize, followImgColumns, containerWidth])

  useEffect(() => {
    if (containerWidth <= 700) {
      setFollowImgColumns(0)
      setCarouselHeight(containerWidth * 0.562)
    } else if (containerWidth >= 650 && containerWidth < 960) {
      setFollowImgColumns(1)
      setMainImageWidth(470)
    } else if (containerWidth >= 960 && containerWidth < 1477) {
      setFollowImgColumns(2)
      setMainImageWidth(520)
    } else {
      setFollowImgColumns(3)
    }
    if (containerWidth >= 1150) setMainImageWidth(696)
  }, [windowResize, containerWidth])

  useEffect(() => {
    const emptyArray = []
    for (let i = 0; i < followImgColumns * 2; i++) {
      emptyArray.push('')
    }
    if (emptyArray) setEmptyImgArray(emptyArray)
  }, [followImgColumns, windowResize])

  const toggleFullscreen = () => {
    if (otherButton) return
    if (
      video.length > 0 ||
      video360.length > 0 ||
      images.length > 0 ||
      planos.length > 0
    ) {
      if (planos.length > 0 && !images.length > 0) {
        setTabSelected('planos')
      }
      setFullscreen(true)
    }
  }

  const handleNextPrevImageMobile = (e, action) => {
    e.stopPropagation()
    if (action === 'next' && mainImageMobile < Images.length - 1) {
      setMainImageMobile(
        mainImageMobile < Images.length - 1 ? mainImageMobile + 1 : 0
      )
    }
    if (action === 'prev' && mainImageMobile > 0) {
      setMainImageMobile(
        mainImageMobile > 0 ? mainImageMobile - 1 : Images.length - 1
      )
    }
  }

  return (
    <Box
      __css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${carouselHeight + 5}px`,
        width: '100%',
        maxHeight: '316px',
      }}
    >
      {!otherComponent ? (
        <Box
          {...props}
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            height: '100%',
          }}
          ref={carouselContainerRef}
        >
          <ImageCard
            onClick={toggleFullscreen}
            className="firstTabImg"
            position={'relative'}
            height={'100%'}
            minWidth={`${
              followImgColumns === 0 ? containerWidth : mainImageWidth
            }px`}
            url={containerWidth > 600 ? Images[0] : Images[mainImageMobile]}
          >
            {!Images[0] && (
              <Icon
                icon="icon-propiedades"
                fontSize="34px"
                color={theme.colors.neutralGray4}
              />
            )}
            {window.innerWidth <= 480 && Images.length > 0 && (
              <Box
                width="100%"
                __css={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 8px',
                }}
              >
                <Icon
                  icon="icon-atras"
                  className="iconPrevMobile"
                  onClick={(e) => handleNextPrevImageMobile(e, 'prev')}
                />
                <Icon
                  className="iconNextMobile"
                  style={{
                    transform: 'rotate(180deg)',
                  }}
                  onClick={(e) => handleNextPrevImageMobile(e, 'next')}
                  icon="icon-atras"
                />
              </Box>
            )}
            {otherButton || window.innerWidth <= 480 ? (
              <Box className="buttonsMainImgContainer">{otherButton}</Box>
            ) : (
              <Box className="buttonsMainImgContainer">
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
                {(images.length > 0 || imgWithCover.length > 0) && (
                  <ButtonGallery
                    className="buttonGallery"
                    text={'Fotos'}
                    onClick={() => setTabSelected('fotos')}
                  />
                )}
                {(planos.length > 0 || frontCoverBlueprints.length > 0) && (
                  <ButtonGallery
                    text={'Planos'}
                    onClick={() => setTabSelected('planos')}
                  />
                )}
              </Box>
            )}
          </ImageCard>

          <Box
            onClick={toggleFullscreen}
            __css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              flexWrap: 'wrap',
              gap: '16px',
              width:
                followImgColumns > 0
                  ? (containerWidth - mainImageWidth) * followImgColumns
                  : '0%',
              height: '100%',
            }}
          >
            {emptyImgArray.map((img, index) => {
              return (
                <ImageCard
                  width={`${
                    (1 / followImgColumns) * (containerWidth - mainImageWidth) -
                    16
                  }px`}
                  maxWidth="100%"
                  className="followingImg"
                  url={Images[index + 1] ? Images[index + 1] : ''}
                  key={index}
                >
                  {!Images[index + 1] ? (
                    <Icon
                      icon="icon-propiedades"
                      fontSize="24px"
                      color={theme.colors.neutralGray4}
                    />
                  ) : (
                    index + 1 === followImgColumns * 2 &&
                    images.length > followImgColumns * 2 &&
                    images.length - 1 - followImgColumns * 2 + planos.length >
                      0 && (
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
                      >{`+${
                        images.length -
                        1 -
                        followImgColumns * 2 +
                        planos.length +
                        (frontCoverBlueprints ? 1 : 0)
                      }`}</Box>
                    )
                  )}
                </ImageCard>
              )
            })}
          </Box>
        </Box>
      ) : (
        <Box onClick={toggleFullscreen}>{otherComponent}</Box>
      )}
      <FullScreen
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        tabContainers={tabContainers}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        imgWithCover={imgWithCover}
        index={index}
        setIndex={setIndex}
        images={images}
        video={video}
        planos={planos}
        video360={video360}
        bluePrintsWithCover={bluePrintsWithCover}
      />
    </Box>
  )
}
