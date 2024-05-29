import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Icon } from '@oneloop/icons'
import '../styles/gallery.css'
import { ImageCard } from './components/ImageCard'
import { ButtonGallery } from './components/ButtonGallery'
import { FullScreen } from './components/FullScreen'
import { SliderSwap } from './components/SliderSwap'

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
  const carouselContainerRef = useRef()
  const containerWidth = carouselContainerRef.current?.parentElement.clientWidth
  const [carouselContainerWidth, setCarouselContainerWidth] = useState(0)
  const [mainImageWidth, setMainImageWidth] = useState(0)
  const [followImgColumns, setFollowImgColumns] = useState(0)
  const [followingImgWidth, setFollowingImgWidth] = useState(0)

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
    const debouncedHandleResize = debounce(changeWidth, 200)
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [])

  useEffect(() => {
    setCarouselContainerWidth(containerWidth)
  }, [containerWidth])

  useLayoutEffect(() => {
    let newMainImageWidth
    if (carouselContainerWidth <= 700) {
      setFollowImgColumns(0)
      newMainImageWidth = carouselContainerWidth
    } else if (carouselContainerWidth >= 650 && carouselContainerWidth < 960) {
      setFollowImgColumns(1)
      newMainImageWidth = carouselContainerWidth * 0.68
    } else if (carouselContainerWidth >= 960 && carouselContainerWidth < 1215) {
      setFollowImgColumns(2)
      newMainImageWidth = carouselContainerWidth * 0.513
    } else if (
      carouselContainerWidth >= 1215 &&
      carouselContainerWidth < 1480
    ) {
      setFollowImgColumns(2)
      newMainImageWidth = carouselContainerWidth * 0.51
    } else {
      setFollowImgColumns(3)
      newMainImageWidth = carouselContainerWidth * 0.41
    }
    setMainImageWidth(Math.round(newMainImageWidth))
  }, [carouselContainerWidth, containerWidth])

  useEffect(() => {
    setCarouselHeight(Math.round(mainImageWidth * 0.562))
  }, [mainImageWidth])

  useEffect(() => {
    setFollowingImgWidth(Math.round((carouselHeight / 2 - 16) * 1.77))
  }, [carouselHeight])

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
      imgWithCover.length > 0 ||
      bluePrintsWithCover.length > 0
    ) {
      if (bluePrintsWithCover.length > 0 && !imgWithCover.length > 0) {
        setTabSelected('planos')
      }
      setFullscreen(true)
    }
  }

  const debounce = (func, wait) => {
    let timeout
    const executedFunction = (...args) => {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
    return executedFunction
  }
  return (
    <Box
      __css={{
        position: 'relative',
        width: '100%',
      }}
    >
      {!otherComponent ? (
        <Box
          height={`${carouselHeight || window.innerWidth * 0.562}px`}
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%',
          }}
        >
          {window.innerWidth < 600 ? (
            <SliderSwap
              height={`${carouselHeight || window.innerWidth * 0.562}px`}
              width={carouselContainerWidth}
              images={Images}
              handleTouchToogle={toggleFullscreen}
              otherButton={otherButton}
            />
          ) : (
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
                width={`${
                  followImgColumns === 0
                    ? carouselContainerWidth
                    : mainImageWidth
                }px`}
                minWidth={followImgColumns === 0 ? carouselContainerWidth : 0}
                url={Images[0]}
              >
                {!Images[0] && (
                  <Icon
                    icon="icon-propiedades"
                    fontSize="34px"
                    color={theme.colors.neutralGray4}
                  />
                )}

                {otherButton || window.innerWidth <= 600 ? (
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
                __css={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  flexWrap: 'wrap',
                  gap: '16px',
                  height: '100%',
                }}
              >
                {emptyImgArray.map((img, index) => {
                  return (
                    <ImageCard
                      onClick={toggleFullscreen}
                      width={`${followingImgWidth}px`}
                      maxHeight={carouselHeight / 2 - 8}
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
                        images.length -
                          1 -
                          followImgColumns * 2 +
                          planos.length >
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
          )}
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
        index={index}
        setIndex={setIndex}
        video={video}
        photos={imgWithCover}
        planos={bluePrintsWithCover}
        video360={video360}
        bluePrintsWithCover={bluePrintsWithCover}
      />
    </Box>
  )
}
