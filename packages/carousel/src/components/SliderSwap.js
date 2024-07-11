import React, { useEffect, useRef, useState } from 'react'
import { ImageCard } from './ImageCard'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import theme from '@oneloop/theme'
import { ImageErrorFallback } from './ImageErrorFallback'

export const SliderSwap = ({
  files = [],
  setFullscreen,
  otherButton,
  fullScreen = false,
  handleImageClickToFullscreen,
  fileType,
  setIndex,
  index,
  tabSelected,
  setURLOpenFullscreen = () => {},
}) => {
  const sliderContainerRef = useRef(null)
  const sliderRef = useRef(null)
  const iconNextRef = useRef(null)
  const iconPrevRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [startPosY, setStartPosY] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [isClick, setIsClick] = useState(true)
  const sliderContainerWidth = sliderContainerRef.current?.offsetWidth
  const iconNextPosition = iconNextRef.current?.getBoundingClientRect()
  const iconPrevPosition = iconPrevRef.current?.getBoundingClientRect()
  const [translateX, setTranslateX] = useState(0)
  const [visibledIndex, setVisibledIndex] = useState(0)
  const [imgErrors, setImgErrors] = useState({})

  const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  const touchStart = (event) => {
    const position =
      event.type === 'mousedown' ? event.clientX : event.touches[0].clientX
    const positionY =
      event.type === 'mousedown' ? event.clientY : event.touches[0].clientY
    setStartPos(position)
    setStartPosY(positionY)
    setIsDragging(true)
    setPrevTranslate(translateX)
    setStartTime(Date.now())
    setIsClick(true)
  }

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition =
        event.type === 'mousemove' ? event.clientX : event.touches[0].clientX
      const translate = currentPosition - startPos + prevTranslate
      setCurrentTranslate(translate)
      handleTraslate(translate)
      if (Math.abs(currentPosition - startPos) > 5) {
        setIsClick(false)
      }
    }
  }

  const debouncedTouchEnd = debounce(() => {
    if (isDragging) {
      setIsDragging(false)
      const movedBy = currentTranslate - prevTranslate
      const elapsedTime = Date.now() - startTime

      if (isClick && elapsedTime < 300) {
        if (files.length === 0) return
        if (
          startPos > iconNextPosition.x - 10 &&
          startPosY < iconNextPosition.y + 40 &&
          startPosY > iconNextPosition.y - 10
        ) {
          return debouncedNextSlide()
        }
        if (
          startPos < iconPrevPosition.x + 40 &&
          startPosY < iconPrevPosition.y + 40 &&
          startPosY > iconPrevPosition.y - 10
        ) {
          return debouncedPrevSlide()
        }
        if (!fullScreen) setFullscreen(true)
        return
      }
      if (
        movedBy < -10 &&
        translateX > -(sliderContainerWidth * (files.length - 1))
      ) {
        nextSlide()
      } else if (movedBy > 50 && translateX < 0) {
        prevSlide()
      } else {
        handleTraslate(prevTranslate)
      }
      resetPosition()
    }
  }, 50)

  const touchEnd = () => {
    debouncedTouchEnd()
  }

  const nextSlide = () => {
    const newTranslateX = Math.max(
      translateX - sliderContainerWidth,
      -sliderContainerWidth * (files.length - 1)
    )
    setTranslateX(newTranslateX)
    handleTraslate(newTranslateX)
  }

  const prevSlide = () => {
    const newTranslateX = Math.min(translateX + sliderContainerWidth, 0)
    setTranslateX(newTranslateX)
    handleTraslate(newTranslateX)
  }
  const debouncedNextSlide = debounce(nextSlide, 170)
  const debouncedPrevSlide = debounce(prevSlide, 170)

  const resetPosition = () => {
    setCurrentTranslate(0)
  }

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current
    sliderContainer.addEventListener('mousedown', touchStart)
    sliderContainer.addEventListener('mouseup', touchEnd)
    sliderContainer.addEventListener('mousemove', touchMove)
    sliderContainer.addEventListener('touchstart', touchStart, {
      passive: true,
    })
    sliderContainer.addEventListener('touchend', touchEnd)
    sliderContainer.addEventListener('touchmove', touchMove, { passive: true })

    return () => {
      sliderContainer.removeEventListener('mousedown', touchStart, {
        passive: true,
      })
      sliderContainer.removeEventListener('mouseup', touchEnd)
      sliderContainer.removeEventListener('mousemove', touchMove)
      sliderContainer.removeEventListener('touchstart', touchStart)
      sliderContainer.removeEventListener('touchend', touchEnd)
      sliderContainer.removeEventListener('touchmove', touchMove, {
        passive: true,
      })
    }
  }, [
    isDragging,
    startPos,
    currentTranslate,
    prevTranslate,
    translateX,
    files.length,
    startTime,
    isClick,
  ])

  useEffect(() => {
    if (fullScreen) return
    setVisibledIndex(Math.round(Math.abs(translateX / sliderContainerWidth)))
  }, [translateX, fullScreen])

  useEffect(() => {
    setURLOpenFullscreen(files[visibledIndex || 0])
    if (handleImageClickToFullscreen) {
      handleImageClickToFullscreen(files[visibledIndex])
    }
  }, [visibledIndex])

  useEffect(() => {
    if (fullScreen && sliderContainerWidth) {
      setIndex(-translateX / sliderContainerWidth)
    }
  }, [translateX, tabSelected, fullScreen])

  useEffect(() => {
    if (!sliderContainerWidth) return
    if (fullScreen) {
      handleTraslate(-sliderContainerWidth * index)
      setTranslateX(-sliderContainerWidth * index)
    }
  }, [fullScreen, tabSelected, sliderContainerWidth])

  useEffect(() => {
    if (fullScreen) handleTraslate(-sliderContainerWidth * index)
  }, [index])

  const handleImgError = (url) => {
    setImgErrors((prevErrors) => ({
      ...prevErrors,
      [url]: true,
    }))
  }

  const handleTraslate = (traslation) => {
    return (sliderRef.current.style.transform = `translateX(${traslation}px)`)
  }
  return (
    <Box
      ref={sliderContainerRef}
      __css={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        ref={sliderRef}
        __css={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          transition: 'transform .2s ease',
        }}
        className="sliderContainer"
      >
        {!fullScreen &&
          files.length > 0 &&
          files.map((img, index) => (
            <ImageCard
              key={index}
              className="firstTabImg"
              position={'relative'}
              height={'100%'}
              minWidth={'100%'}
              url={img}
            />
          ))}
        {!fullScreen && files.length === 0 && (
          <Box
            __css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: theme.colors.neutralGray7,
              borderRadius: '12px',
            }}
          >
            <Icon
              width="100%"
              height="100%"
              icon="icon-propiedades"
              fontSize="34px"
              color={theme.colors.neutralGray4}
            />
          </Box>
        )}
        {fullScreen &&
          (fileType === 'fotos' || fileType === 'planos') &&
          files.map((img, index) => (
            <Box
              key={index}
              __css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '100%',
                maxWidth: '100%',
                height: '100%',
                borderRadius: '12px',
                cursor: 'pointer',
              }}
              onClick={(e) => e.stopPropagation()}
              onDragStart={(e) => e.preventDefault()}
            >
              {imgErrors[img] ? (
                <ImageErrorFallback fullscreen />
              ) : (
                <img
                  className="imgFullScreenSlide"
                  style={{ pointerEvents: 'none' }}
                  src={img}
                  alt={fileType}
                  onError={() => handleImgError(img)}
                />
              )}
            </Box>
          ))}
        {fullScreen &&
          (fileType === 'videos' || fileType === 'video360') &&
          files.map((video, index) => (
            <Box
              key={index}
              __css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '100%',
                height: `${sliderContainerWidth * 0.7}px`,
                borderRadius: '12px',
                cursor: 'pointer',
              }}
            >
              <iframe
                className="videoFullScreenSlide"
                src={video}
                title={fileType}
                allowFullScreen
              />
            </Box>
          ))}
      </Box>
      {((!fullScreen && files.length > 0) || fullScreen) && (
        <>
          <Box
            __css={{
              left: fullScreen ? '-5px' : '16px',
              width: sliderContainerWidth < 700 ? '30px' : '40px',
              height: sliderContainerWidth < 700 ? '30px' : '40px',
            }}
            ref={iconPrevRef}
            className={`nextPrevIconContainer ${
              fullScreen ? 'fullScreen' : ''
            }`}
          >
            <Icon
              className={`swapSliderIconPrev ${fullScreen ? 'fullScreen' : ''}`}
              icon="icon-atras"
              style={{
                fontSize:
                  sliderContainerWidth < 700 && !fullScreen ? '12px' : '24px',
              }}
            />
          </Box>
          <Box
            __css={{
              right: fullScreen ? '-5px' : '16px',
              width: sliderContainerWidth < 700 ? '30px' : '40px',
              height: sliderContainerWidth < 700 ? '30px' : '40px',
            }}
            ref={iconNextRef}
            className={`nextPrevIconContainer ${
              fullScreen ? 'fullScreen' : ''
            }`}
          >
            <Icon
              className={`swapSliderIconNext ${fullScreen ? 'fullScreen' : ''}`}
              style={{
                transform: 'rotate(180deg)',
                fontSize:
                  sliderContainerWidth < 700 && !fullScreen ? '12px' : '24px',
              }}
              icon="icon-atras"
            />
          </Box>
        </>
      )}
      {!fullScreen && (
        <Box onClick={(e) => e.stopPropagation()} className="otherButtonSwap">
          {otherButton}
        </Box>
      )}
    </Box>
  )
}
