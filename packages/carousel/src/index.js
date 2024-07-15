import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Icon } from '@oneloop/icons'
import '../styles/gallery.css'
import { ImageCard } from './components/ImageCard'
import { FullScreen } from './components/FullScreen'
import { SliderSwap } from './components/SliderSwap'
import { ButtonsMainImage } from './components/ButtonsMainImage'

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
  const [URLOpenFullscreen, setURLOpenFullscreen] = useState(0)
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
  const [mainImageWidth, setMainImageWidth] = useState(0)
  const [followImgColumns, setFollowImgColumns] = useState(0)
  const [followingImgWidth, setFollowingImgWidth] = useState(0)
  const mainImageSkeletonRef = useRef()
  const mainImageWidthSkeleton = mainImageSkeletonRef.current?.clientWidth
  const allPictures = [...imgWithCover, ...bluePrintsWithCover]

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

  useLayoutEffect(() => {
    let newMainImageWidth
    if (containerWidth <= 700) {
      setFollowImgColumns(0)
      newMainImageWidth = containerWidth
    } else if (containerWidth >= 650 && containerWidth < 960) {
      setFollowImgColumns(1)
      newMainImageWidth = containerWidth * 0.68
    } else if (containerWidth >= 960 && containerWidth < 1215) {
      setFollowImgColumns(2)
      newMainImageWidth = containerWidth * 0.513
    } else if (containerWidth >= 1215 && containerWidth < 1480) {
      setFollowImgColumns(2)
      newMainImageWidth = containerWidth * 0.51
    } else {
      setFollowImgColumns(3)
      newMainImageWidth = containerWidth * 0.41
    }
    setMainImageWidth(Math.round(newMainImageWidth))
  }, [containerWidth])

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
    if (
      otherButton ||
      [...video, ...video360, ...imgWithCover, ...bluePrintsWithCover]
        .length === 0
    ) {
      return
    }
    if (allPictures.length === 0) {
      setTabSelected(
        video.length > 0 ? 'videos' : video360.length > 0 ? 'video360' : ''
      )
    }
    setFullscreen(true)
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

  const handleImageClickToFullscreen = (url) => {
    const imagesMap = images.map((img) => ({ url: img, type: 'fotos' }))
    if (frontCoverImg) imagesMap.unshift({ url: frontCoverImg, type: 'fotos' })

    const planosMap = planos.map((img) => ({ url: img, type: 'planos' }))
    if (frontCoverBlueprints) {
      planosMap.unshift({ url: frontCoverBlueprints, type: 'planos' })
    }

    const allFiles = [...imagesMap, ...planosMap]
    const fileFiltered = allFiles.filter((img) => img.url === url)[0]

    if (!fileFiltered) {
      return
    }

    if (fileFiltered.type === 'fotos') {
      for (let i = 0; i < imgWithCover.length; i++) {
        if (imgWithCover[i] === fileFiltered.url) {
          setIndex(i)
          break
        }
      }
    } else {
      for (let i = 0; i < bluePrintsWithCover.length; i++) {
        if (bluePrintsWithCover[i] === fileFiltered.url) {
          setIndex(i)
          break
        }
      }
    }
    setTabSelected(fileFiltered.type)
  }
  return (
    <Box
      __css={{
        position: 'relative',
        width: '100%',
      }}
      ref={carouselContainerRef}
    >
      {!containerWidth ? (
        <Box className="gallerySkeletonsContainer">
          <Box
            className="mainImageContainer"
            backgroundColor={theme.colors.neutralGray8}
            borderRadius={16}
            __css={{ height: mainImageWidthSkeleton * 0.562 }}
            ref={mainImageSkeletonRef}
          >
            <Box height="100%" width="100%" borderRadius={12}></Box>
          </Box>
          <Box
            __css={{ maxHeight: mainImageWidthSkeleton * 0.562 }}
            className="followingSkeletonImagesContainer"
          >
            {Array(6)
              .fill()
              .map((el, index) => (
                <Box
                  key={`key${index}`}
                  borderRadius={12}
                  backgroundColor={theme.colors.neutralGray8}
                ></Box>
              ))}
          </Box>
        </Box>
      ) : !otherComponent ? (
        <Box
          height={`${
            containerWidth >= 786 ? carouselHeight : containerWidth * 0.562
          }px`}
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%',
          }}
        >
          {containerWidth < 786 ? (
            <Box __css={{ width: '100%', height: '100%' }}>
              <SliderSwap
                files={allPictures}
                setFullscreen={setFullscreen}
                toggleFullscreen={toggleFullscreen}
                otherButton={otherButton}
                handleImageClickToFullscreen={handleImageClickToFullscreen}
                setIndex={setIndex}
                setURLOpenFullscreen={setURLOpenFullscreen}
              />
              {!otherButton && containerWidth > 530 && (
                <Box
                  __css={{ bottom: '6px' }}
                  className="buttonsMainImageSlider"
                >
                  <ButtonsMainImage
                    video={video}
                    video360={video360}
                    images={images}
                    imgWithCover={imgWithCover}
                    planos={planos}
                    frontCoverBlueprints={frontCoverBlueprints}
                    setTabSelected={setTabSelected}
                    setIndex={setIndex}
                    setFullscreen={setFullscreen}
                  />
                </Box>
              )}
            </Box>
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
            >
              <ImageCard
                onClick={() => {
                  toggleFullscreen()
                  handleImageClickToFullscreen(Images[0])
                }}
                className="firstTabImg"
                position={'relative'}
                height={'100%'}
                width={`${
                  followImgColumns === 0 ? containerWidth : mainImageWidth
                }px`}
                minWidth={followImgColumns === 0 ? containerWidth : 0}
                url={Images[0]}
              >
                {!Images[0] && (
                  <Icon
                    icon="icon-propiedades"
                    fontSize="34px"
                    color={theme.colors.neutralGray4}
                  />
                )}

                {otherButton ? (
                  <Box className="buttonsMainImgContainer">{otherButton}</Box>
                ) : (
                  <ButtonsMainImage
                    video={video}
                    video360={video360}
                    images={images}
                    imgWithCover={imgWithCover}
                    planos={planos}
                    frontCoverBlueprints={frontCoverBlueprints}
                    setTabSelected={setTabSelected}
                    setIndex={setIndex}
                    setFullscreen={setFullscreen}
                  />
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
                      onClick={() => {
                        toggleFullscreen()
                        handleImageClickToFullscreen(
                          Images[index + 1] ? Images[index + 1] : Images[0]
                        )
                      }}
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
                        allPictures.length > followImgColumns * 2 &&
                        allPictures.length -
                          1 -
                          followImgColumns * 2 +
                          planos.length >
                          0 &&
                        allPictures.length - 1 - followImgColumns * 2 > 0 && (
                          <Box
                            __css={{
                              borderRadius: '50%',
                              position: 'absolute',
                              width: '46px',
                              height: '46px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: theme.colors.neutralGray8,
                              opacity: '0.8',
                              color: theme.colors.black,
                              fontFamily: 'Nunito Sans',
                              fontSize: '14px',
                              fontWeight: '700',
                            }}
                          >{`+${
                            allPictures.length - 1 - followImgColumns * 2
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
        videos={video}
        fotos={imgWithCover}
        planos={bluePrintsWithCover}
        video360={video360}
        bluePrintsWithCover={bluePrintsWithCover}
        URLOpenFullscreen={URLOpenFullscreen}
        handleImageClickToFullscreen={handleImageClickToFullscreen}
      />
    </Box>
  )
}
