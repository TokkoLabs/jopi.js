import React, { useEffect, useRef, useState } from 'react'
import { ImageCard } from './ImageCard'
import { Box } from '@oneloop/box'

export default function SliderSwap({
  images = [],
  handleTouchToogle,
  otherButton,
}) {
  const sliderContainerRef = useRef(null)
  const sliderRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [isClick, setIsClick] = useState(true)

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current
    const slider = sliderRef.current

    const touchStart = (event) => {
      const position =
        event.type === 'mousedown' ? event.clientX : event.touches[0].clientX
      setStartPos(position)
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
        slider.style.transform = `translateX(${translate}px)`
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

        if (isClick && elapsedTime < 200) {
          if (!otherButton) handleTouchToogle()
          return
        }

        if (
          movedBy < -50 &&
          translateX > -(sliderContainer.offsetWidth * (images.length - 1))
        ) {
          nextSlide()
        } else if (movedBy > 50 && translateX < 0) {
          prevSlide()
        } else {
          slider.style.transform = `translateX(${prevTranslate}px)`
        }

        resetPosition()
      }
    }

    const nextSlide = () => {
      const newTranslateX = Math.max(
        translateX - sliderContainer.offsetWidth,
        -sliderContainer.offsetWidth * (images.length - 1)
      )
      setTranslateX(newTranslateX)
      slider.style.transform = `translateX(${newTranslateX}px)`
    }

    const prevSlide = () => {
      const newTranslateX = Math.min(
        translateX + sliderContainer.offsetWidth,
        0
      )
      setTranslateX(newTranslateX)
      slider.style.transform = `translateX(${newTranslateX}px)`
    }

    const resetPosition = () => {
      setCurrentTranslate(0)
    }

    document.addEventListener('mousedown', touchStart)
    document.addEventListener('mouseup', touchEnd)
    document.addEventListener('mousemove', touchMove)
    document.addEventListener('touchstart', touchStart)
    document.addEventListener('touchend', touchEnd)
    document.addEventListener('touchmove', touchMove)

    return () => {
      document.removeEventListener('mousedown', touchStart)
      document.removeEventListener('mouseup', touchEnd)
      document.removeEventListener('mousemove', touchMove)
      document.removeEventListener('touchstart', touchStart)
      document.removeEventListener('touchend', touchEnd)
      document.removeEventListener('touchmove', touchMove)
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
      __css={{ width: '100%', height: '100%', overflow: 'hidden' }}
    >
      <Box
        ref={sliderRef}
        __css={{
          display: 'flex',
          width: '100%',
          height: '100%',
          position: 'relative',
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? 'none' : 'transform 0.5s ease',
        }}
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
    </Box>
  )
}
