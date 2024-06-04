import React, { useEffect, useRef, useState } from 'react'
import { ImageCard } from './ImageCard'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'

export const SliderSwap = ({
  files = [],
  handleTouchToogle,
  otherButton,
  fullScreen = false,
  handleImageClickToFullscreen,
  fileType,
  setIndex,
  index,
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
      sliderRef.current.style.transform = `translateX(${translate}px)`
      if (Math.abs(currentPosition - startPos) > 5) {
        setIsClick(false)
      }
    }
  }

  const touchEnd = () => {
    if (isDragging) {
      setIsDragging(false)
      const movedBy = currentTranslate - prevTranslate
      const elapsedTime = Date.now() - startTime

      if (isClick && elapsedTime < 300) {
        if (
          startPos > iconNextPosition.x - 10 &&
          startPosY < iconNextPosition.y + 40 &&
          startPosY > iconNextPosition.y - 10
        ) {
          return nextSlide()
        }
        if (
          startPos < iconPrevPosition.x + 40 &&
          startPosY < iconPrevPosition.y + 40 &&
          startPosY > iconPrevPosition.y - 10
        ) {
          return prevSlide()
        }
        if (!otherButton && !fullScreen) return handleTouchToogle()
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
        sliderRef.current.style.transform = `translateX(${prevTranslate}px)`
      }

      resetPosition()
    }
  }

  const nextSlide = () => {
    const newTranslateX = Math.max(
      translateX - sliderContainerWidth,
      -sliderContainerWidth * (files.length - 1)
    )
    setTranslateX(newTranslateX)
    sliderRef.current.style.transform = `translateX(${newTranslateX}px)`
  }

  const prevSlide = () => {
    const newTranslateX = Math.min(translateX + sliderContainerWidth, 0)
    setTranslateX(newTranslateX)
    sliderRef.current.style.transform = `translateX(${newTranslateX}px)`
  }

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
      sliderContainer.removeEventListener('touchmove', touchMove)
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
    if (fullScreen) {
      setIndex(-translateX / sliderContainerWidth)
    }
    if (!fullScreen) {
      const fileVisibleIndex = Math.abs(
        translateX / (sliderContainerWidth || 1)
      )
      if (sliderContainerWidth) {
        handleImageClickToFullscreen(files[fileVisibleIndex])
      }
    }
  }, [translateX])

  useEffect(() => {
    if (!fullScreen || !sliderContainerWidth) return
    setTranslateX(-sliderContainerWidth * index)
    sliderRef.current.style.transform = `translateX(${
      -sliderContainerWidth * index
    }px)`
  }, [sliderContainerWidth, index, fullScreen])

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
          width: '100%',
          height: '100%',
          transition: isDragging ? 'none' : 'transform 0.8s ease',
          transform: `translateX(${translateX}px)`,
        }}
        className="sliderContainer"
      >
        {!fullScreen &&
          files.map((img, index) => (
            <ImageCard
              key={index}
              onClick={(e) => {
                handleImageClickToFullscreen(img)
              }}
              className="firstTabImg"
              position={'relative'}
              height={'100%'}
              minWidth={'100%'}
              url={img}
            />
          ))}
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
            >
              <img className="imgFullScreenSlide" src={img} alt={fileType} />
            </Box>
          ))}
        {fullScreen &&
          (fileType === 'videos' || fileType === 'videos360') &&
          files.map((video, index) => (
            <Box
              key={index}
              __css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '100%',
                height: '100%',
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
      <Box
        __css={{ left: fullScreen ? '-5px' : '16px' }}
        ref={iconPrevRef}
        className={`nextPrevIconContainer ${fullScreen ? 'fullScreen' : ''}`}
      >
        <Icon
          className={`swapSliderIconPrev ${fullScreen ? 'fullScreen' : ''}`}
          icon="icon-atras"
        />
      </Box>
      <Box
        __css={{ right: fullScreen ? '-5px' : '16px' }}
        ref={iconNextRef}
        className={`nextPrevIconContainer ${fullScreen ? 'fullScreen' : ''}`}
      >
        <Icon
          className={`swapSliderIconNext ${fullScreen ? 'fullScreen' : ''}`}
          style={{ transform: 'rotate(180deg)' }}
          icon="icon-atras"
        />
      </Box>
      {!fullScreen && (
        <Box onClick={(e) => e.stopPropagation()} className="otherButtonSwap">
          {otherButton}
        </Box>
      )}
    </Box>
  )
}
