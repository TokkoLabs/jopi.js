import React from 'react'
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'

export const Button = (props) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 0,
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 'button',
      }}
    />
  </Box>
)

export const ButtonIcon = (props) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'bold',
        fontSize: 6,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 12,
        with: 48,
        height: 48,
        padding: 0,
      }}
    >
      {
        <Svg width={48} height={48} viewBox="0 0 14 14" fill="none">
          <path d="M 7,7 H 9 M 7,7 V 9 M 7,7 H 5 M 7,7 V 5" strokeWidth="1" strokeLinecap="round"/>
        </Svg>
      }
    </Box>
  </Box>
)

export const ButtonRoundIcon = (props) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'body',
        fontWeight: 'bold',
        fontSize: 6,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 50,
        with: 38,
        height: 38,
        padding: 0,
      }}
    >
      {
        <Svg width={38} height={38} viewBox="0 0 15 15" fill="none">
          <path d="M 7.5,7.5 H 10 
                   M 7.5,7.5 V 10 
                   M 7.5,7.5 H 5 
                   M 7.5,7.5 V 5" strokeWidth="1" strokeLinecap="round"/>
        </Svg>
      }
    </Box>
  </Box>
)