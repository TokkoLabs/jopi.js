import { Box } from '@oneloop/box'
import { Text } from '@oneloop/text'
import theme from '@oneloop/theme'
import React from 'react'

export const ImageErrorFallback = ({ fullscreen = false, ...props }) => {
  return (
    <Box
      __css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: fullscreen ? null : theme.colors.neutralGray8,
        borderRadius: '12px',
        gap: '8px',
        height: '47%',
      }}
      {...props}
    >
      {!fullscreen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22.7702 6.25C22.1402 4.3 20.3502 3 18.3302 3H5.67023C3.09023 3 0.990234 5.13 0.990234 7.75V16.25C0.990234 18.87 3.09023 21 5.66023 21H18.3302C20.9102 21 23.0002 18.87 23.0002 16.25V7.75C23.0002 7.24 22.9202 6.73 22.7602 6.25H22.7702ZM5.66023 5H18.3302C19.4802 5 20.5002 5.75 20.8702 6.88C20.9602 7.16 21.0102 7.45 21.0102 7.75V11.18L18.7402 9.25C17.5402 8.23 15.7002 8.26 14.5402 9.32L9.83023 13.63C9.42023 14 8.76023 14.03 8.32023 13.69L6.20023 12.07C5.28023 11.37 4.05023 11.24 3.00023 11.65V7.75C3.00023 6.23 4.20023 5 5.67023 5H5.66023ZM18.3302 19H5.67023C4.20023 19 3.00023 17.77 3.00023 16.25V14.03L3.42023 13.69C3.86023 13.33 4.54023 13.32 4.99023 13.66L7.11023 15.28C7.67023 15.71 8.36023 15.92 9.04023 15.92C9.82023 15.92 10.5902 15.64 11.1802 15.1L15.8902 10.79C16.3102 10.4 17.0102 10.39 17.4502 10.77L20.7402 13.56C20.8202 13.63 20.9202 13.67 21.0202 13.71V16.24C21.0202 17.76 19.8202 18.99 18.3502 18.99L18.3302 19Z"
            fill="#344149"
          />
          <path
            d="M7.68023 11.53C9.27023 11.53 10.5602 10.24 10.5602 8.65C10.5602 7.06 9.27023 5.77 7.68023 5.77C6.09023 5.77 4.80023 7.06 4.80023 8.65C4.80023 10.24 6.09023 11.53 7.68023 11.53ZM7.68023 7.77C8.17023 7.77 8.56024 8.17 8.56024 8.65C8.56024 9.13 8.16023 9.53 7.68023 9.53C7.20023 9.53 6.80023 9.13 6.80023 8.65C6.80023 8.17 7.20023 7.77 7.68023 7.77Z"
            fill="#344149"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <path
            d="M30.8598 8.33333C30.0198 5.73333 27.6332 4 24.9398 4H8.05982C4.61982 4 1.81982 6.84 1.81982 10.3333V21.6667C1.81982 25.16 4.61982 28 8.04649 28H24.9398C28.3798 28 31.1665 25.16 31.1665 21.6667V10.3333C31.1665 9.65333 31.0598 8.97333 30.8465 8.33333H30.8598ZM8.04649 6.66667H24.9398C26.4732 6.66667 27.8332 7.66667 28.3265 9.17333C28.4465 9.54667 28.5132 9.93333 28.5132 10.3333V14.9067L25.4865 12.3333C23.8865 10.9733 21.4332 11.0133 19.8865 12.4267L13.6065 18.1733C13.0598 18.6667 12.1798 18.7067 11.5932 18.2533L8.76649 16.0933C7.53982 15.16 5.89982 14.9867 4.49982 15.5333V10.3333C4.49982 8.30667 6.09982 6.66667 8.05982 6.66667H8.04649ZM24.9398 25.3333H8.05982C6.09982 25.3333 4.49982 23.6933 4.49982 21.6667V18.7067L5.05982 18.2533C5.64649 17.7733 6.55316 17.76 7.15316 18.2133L9.97982 20.3733C10.7265 20.9467 11.6465 21.2267 12.5532 21.2267C13.5932 21.2267 14.6198 20.8533 15.4065 20.1333L21.6865 14.3867C22.2465 13.8667 23.1798 13.8533 23.7665 14.36L28.1532 18.08C28.2598 18.1733 28.3932 18.2267 28.5265 18.28V21.6533C28.5265 23.68 26.9265 25.32 24.9665 25.32L24.9398 25.3333Z"
            fill="white"
          />
          <path
            d="M10.7398 15.3733C12.8598 15.3733 14.5798 13.6533 14.5798 11.5333C14.5798 9.41333 12.8598 7.69333 10.7398 7.69333C8.61982 7.69333 6.89982 9.41333 6.89982 11.5333C6.89982 13.6533 8.61982 15.3733 10.7398 15.3733ZM10.7398 10.36C11.3932 10.36 11.9132 10.8933 11.9132 11.5333C11.9132 12.1733 11.3798 12.7067 10.7398 12.7067C10.0998 12.7067 9.56649 12.1733 9.56649 11.5333C9.56649 10.8933 10.0998 10.36 10.7398 10.36Z"
            fill="white"
          />
        </svg>
      )}
      <Text
        style={{ position: 'relative' }}
        textAlign="center"
        fontSize={fullscreen ? '14px' : '12px'}
        width={fullscreen ? 'auto' : '128px'}
        color={theme.colors.neutralGray1}
      >
        No pudimos cargar esta imagen
      </Text>
    </Box>
  )
}
