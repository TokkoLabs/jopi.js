import React, { useEffect, useState } from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'

const validateImageDimensions = async (imageUrl) => {
  // eslint-disable-next-line no-undef
  const img = new Image()
  img.src = imageUrl

  await new Promise((resolve) => {
    img.onload = () => resolve()
  })

  return img.width > img.height
}

export const ImageCard = ({ url, styles, children, ...props }) => {
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
