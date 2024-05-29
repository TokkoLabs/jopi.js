import React, { useEffect, useRef, useState } from 'react'
import { ImageCard } from './ImageCard'
import { Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'

export const SliderSwap = ({ images = [], handleTouchToogle, otherButton }) => {
  const sliderContainerRef = useRef(null)
  const sliderRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [startPosY, setStartPosY] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [isClick, setIsClick] = useState(true)
  const iconsPositionY = sliderContainerRef.current?.offsetHeight / 2

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
          startPos > sliderContainerRef.current.offsetWidth - 50 &&
          startPosY < iconsPositionY + 15 &&
          startPosY > iconsPositionY - 15
        )
          return nextSlide()
        if (
          startPos < 50 &&
          startPosY < iconsPositionY + 15 &&
          startPosY > iconsPositionY - 15
        )
          return prevSlide()
        if (!otherButton) return handleTouchToogle()
        return
      }
      if (
        movedBy < -10 &&
        translateX >
          -(sliderContainerRef.current.offsetWidth * (images.length - 1))
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
      translateX - sliderContainerRef.current.offsetWidth,
      -sliderContainerRef.current.offsetWidth * (images.length - 1)
    )
    setTranslateX(newTranslateX)
    sliderRef.current.style.transform = `translateX(${newTranslateX}px)`
  }

  const prevSlide = () => {
    const newTranslateX = Math.min(
      translateX + sliderContainerRef.current.offsetWidth,
      0
    )
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
      sliderContainer.removeEventListener('mousedown', touchStart)
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
    images.length,
    startTime,
    isClick,
  ])

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
          transition: isDragging ? 'none' : 'transform 0.5s ease',
          transform: `translateX(${translateX}px)`,
        }}
        className="sliderContainer"
      >
        {images.map((img, index) => (
          <ImageCard
            key={index}
            onClick={(event) => {
              if (!isClick) {
                event.preventDefault()
                event.stopPropagation()
              }
            }}
            className="firstTabImg"
            position={'relative'}
            height={'100%'}
            minWidth={'100%'}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            url={img}
          />
        ))}
      </Box>
      <Box __css={{ left: '16px' }} className="nextPrevIconContainer">
        <Icon className="swapSliderIconPrev" icon="icon-atras" />
      </Box>
      <Box __css={{ right: '16px' }} className="nextPrevIconContainer">
        <Icon
          className="swapSliderIconNext"
          style={{ transform: 'rotate(180deg)' }}
          icon="icon-atras"
        />
      </Box>
      <Box onClick={(e) => e.stopPropagation()} className="otherButtonSwap">
        {otherButton}
      </Box>
    </Box>
  )
}
