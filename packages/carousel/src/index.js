/* eslint-disable multiline-ternary */
import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Icon } from '@oneloop/icons'
import '../styles/gallery.css'
import { Text } from '@oneloop/text'

function useWindowResize(data, occupiedWindowPercenajege = 100) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (data) return
    const changeWidth = () => {
      setWindowWidth(window.innerWidth * (occupiedWindowPercenajege / 100))
    }
    window.addEventListener('resize', changeWidth)
  }, [])

  return { windowWidth }
}

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

const ImageCard = ({ url, styles, children, ...props }) => {
  const [rectangle, setRectangle] = useState(false)

  const isRectangle = async () => {
    const isRectangle = await validateImageDimensions(url)
    return setRectangle(isRectangle)
  }

  useEffect(() => {
    isRectangle()
  }, [url])

  return (
    <Box
      __css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.colors.neutralGray8,
        width: '100%',
        height: '47%',
        borderRadius: '12px',
        backgroundSize: rectangle ? 'cover' : 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${url})`,
        cursor: 'pointer',
        ...styles,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

const validateImageDimensions = async (imageUrl) => {
  // eslint-disable-next-line no-undef
  const img = new Image()
  img.src = imageUrl

  await new Promise((resolve) => {
    img.onload = () => resolve()
  })

  return img.width > img.height
}

export const Carousel = ({
  images = [],
  planos = [],
  video = [],
  video360 = [],
  otherComponent = false,
  frontCoverImg = false,
  frontCoverBlueprints = false,
  ...props
}) => {
  const { windowWidth: width } = useWindowResize()
  const [fullscreen, setFullscreen] = useState(false)
  const [carouselHeight, setCarouselHeight] = useState(
    props.height ? props.height : 0
  )
  const [tabSelected, setTabSelected] = useState('fotos')
  const tabContainers = []
  const [index, setIndex] = useState(0)
  const [contTab, setContTab] = useState(0)
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
  const [followImgWidth, setFollowImgWidth] = useState(0)
  const [mainImageMobile, setMainImageMobile] = useState(0)
  const carouselContainerRef = useRef()
  const parentContainer = carouselContainerRef.current?.parentElement
  const mainImgRef = document.getElementById('firstTabImg')
  const [followImgColumns, setFollowImgColumns] = useState(0)
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
    if (props.height) return
    if (width <= 400) setCarouselHeight(153)
    else if (width > 400 && width < 800) setCarouselHeight(263)
    else setCarouselHeight(326)
  }, [width])
  useEffect(() => {
    let newContTab
    if (tabSelected === 'videos') {
      newContTab = video.length
    } else if (tabSelected === 'fotos') {
      newContTab = imgWithCover.length
    } else if (tabSelected === 'planos') {
      newContTab = bluePrintsWithCover.length
    } else if (tabSelected === 'video360') {
      newContTab = video360.length
    }

    setContTab(newContTab)
  }, [tabSelected])

  useEffect(() => {
    let emptyArray = []
    const followingImagesContainer =
      parentContainer?.clientWidth - mainImgRef?.clientWidth
    let followImgWidth = (parentContainer?.clientHeight / 2 - 23.7) / 0.5625
    setFollowImgColumns(Math.trunc(followingImagesContainer / followImgWidth))
    for (let i = 0; i < followImgColumns * 2; i++) {
      emptyArray.push('')
    }
    setEmptyImgArray(emptyArray)
    setFollowImgWidth(followImgWidth)
  }, [width, parentContainer, mainImgRef, followImgColumns])

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
      if (planos.length > 0 && !images.length > 0) {
        setTabSelected('planos')
      }
      setFullscreen(true)
    }
  }

  const closeFullscreen = () => {
    setFullscreen(false)
    setTabSelected('fotos')
    setIndex(0)
  }
  const handleNextPrevImageMobile = (e, action) => {
    e.stopPropagation()
    if (action === 'next')
      setMainImageMobile(
        mainImageMobile < Images.length ? mainImageMobile + 1 : 0
      )
    if (action === 'prev')
      setMainImageMobile(
        mainImageMobile > 0 ? mainImageMobile - 1 : Images.length
      )
  }
  return (
    <Box
      __css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${carouselHeight}px`,
        width: '100%',
      }}
    >
      {!otherComponent ? (
        <Box
          {...props}
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            height: '100%',
          }}
          ref={carouselContainerRef}
        >
          <ImageCard
            onClick={toggleFullscreen}
            id="firstTabImg"
            styles={{
              position: 'relative',
              height: '100%',
              width: `${
                followImgColumns === 0
                  ? parentContainer?.clientWidth
                  : parentContainer?.clientHeight / 0.5625
              }px`,
              maxWidth: `${parentContainer?.clientHeight / 0.47}px`,
            }}
            url={width > 400 ? Images[0] : Images[mainImageMobile]}
          >
            {!Images[0] && (
              <Icon
                icon="icon-propiedades"
                fontSize="34px"
                color={theme.colors.neutralGray4}
              />
            )}
            {width < 400 && Images.length > 0 && (
              <Icon
                className="iconNext"
                style={{
                  transform: 'rotate(180deg)',
                  position: 'absolute',
                  right: 0,
                }}
                onClick={(e) => handleNextPrevImageMobile(e, 'next')}
                icon="icon-atras"
                fontSize="40px"
              />
            )}
            {width < 400 && Images.length > 0 && (
              <Icon
                icon="icon-atras"
                className="iconPrev"
                fontSize="40px"
                style={{ position: 'absolute', left: 0 }}
                onClick={(e) => handleNextPrevImageMobile(e, 'prev')}
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
          </ImageCard>

          <Box
            onClick={toggleFullscreen}
            __css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              flexWrap: 'wrap',
              gap: '10px',
              width:
                followImgColumns > 0 ? followImgWidth * followImgColumns : '0%',
              height: '100%',
            }}
          >
            {emptyImgArray.map((img, index) => {
              return (
                <ImageCard
                  styles={{
                    maxWidth: `calc(100%/${followImgColumns})`,
                  }}
                  url={Images[[index + 1]]}
                >
                  {!Images[index + 1] ? (
                    <Icon
                      icon="icon-propiedades"
                      fontSize="24px"
                      color={theme.colors.neutralGray4}
                    />
                  ) : (
                    index + 1 === followImgColumns * 2 &&
                    images.length > followImgColumns * 2 && (
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
                        images.length - 1 - followImgColumns * 2 + planos.length
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
                <img src={imgWithCover[index]} alt="Foto" />
                <Text className="contFotos" variant="bodyBold.fontSize14">{`${
                  index + 1
                }/${imgWithCover.length}`}</Text>
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
                <img src={bluePrintsWithCover[index]} alt="Foto" />
                <Text variant="bodyBold.fontSize14">{`${index + 1}/${
                  bluePrintsWithCover.length
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
              fontSize="32px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
