import React, { useEffect, useState } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'
import { ImageErrorFallback } from './ImageErrorFallback'

const validateImageDimensions = async (imageUrl) => {
  // eslint-disable-next-line no-undef
  const img = new Image()
  img.src = imageUrl

  await new Promise((resolve, reject) => {
    img.onload = () => resolve()
    img.onerror = (error) => reject(error)
  })

  return img.width > img.height
}

export const ImageCard = ({ url, styles, children, ...props }) => {
  const [rectangle, setRectangle] = useState(false)
  const [errorImage, setErrorImage] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)

  const isRectangle = async () => {
    setErrorImage(false)
    try {
      const isRectangle = await validateImageDimensions(url)
      return setRectangle(isRectangle)
    } catch (error) {
      return setErrorImage(true)
    } finally {
      setShowSkeleton(false)
    }
  }

  useEffect(() => {
    if (url) {
      isRectangle()
    } else {
      setShowSkeleton(false)
    }
  }, [url])

  if (url && errorImage) {
    return <ImageErrorFallback {...props}>{children}</ImageErrorFallback>
  }

  return !showSkeleton ? (
    <Box
      className="image-card"
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
  ) : (
    <Box
      className="image-card"
      __css={{
        background: theme.colors.neutralGray8,
        width: '100%',
        height: '47%',
        borderRadius: '12px',
        ...styles,
      }}
      {...props}
    ></Box>
  )
}
