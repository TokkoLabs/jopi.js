/* eslint-disable multiline-ternary */
import React from 'react'
import { Box } from '@oneloop/box'
import theme from '@oneloop/theme'
import { Icon } from '@oneloop/icons'

const ButtonGallery = ({ text }) => (
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
    }}
  >
    {text}
  </Box>
)

export const Gallery = ({
  images = [],
  planos = [],
  video,
  video360,
  ...props
}) => {
  const Images = [...images, ...planos]

  return (
    <Box
      __css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '263px',
      }}
      {...props}
    >
      <Box
        __css={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '69%',
          height: '100%',
          background: theme.colors.neutralGray8,
          borderRadius: '12px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${Images[0]})`,
          cursor: 'pointer',
        }}
      >
        {Images[0] && (
          <Icon
            icon="icon-imagenes"
            fontSize="34px"
            color={theme.colors.neutralGray4}
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
          {video && <ButtonGallery text={'Videos'} />}
          {video360 && <ButtonGallery text={'Video 360°'} />}
          {images.length > 0 && <ButtonGallery text={'Fotos'} />}
          {planos.length > 0 && <ButtonGallery text={'Planos'} />}
        </Box>
      </Box>
      <Box
        __css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '29%',
          height: '100%',
        }}
      >
        <Box
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.colors.neutralGray8,
            width: '100%',
            height: '47%',
            borderRadius: '12px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Images[1]})`,
            cursor: 'pointer',
          }}
        >
          {!Images[1] && (
            <Icon
              icon="icon-imagenes"
              fontSize="24px"
              color={theme.colors.neutralGray4}
            />
          )}
        </Box>
        <Box
          __css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.colors.neutralGray8,
            width: '100%',
            height: '47%',
            borderRadius: '12px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Images[2]})`,
            cursor: 'pointer',
          }}
        >
          {!Images[2] && (
            <Icon
              icon="icon-imagenes"
              fontSize="24px"
              color={theme.colors.neutralGray4}
            />
          )}
          {images.length > 3 && (
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
            >{`+${images.length - 3}`}</Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
