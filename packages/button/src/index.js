import React, { useState } from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'

export const Button = (props) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'flex',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 13,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 'button',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
      }}
    />
  </Box>
)

export const ButtonIcon = ({ icon, isRounded, heightIcon, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'flex',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: '14px',
        py: '5px',
        color: 'white',
        bg: 'primary',
        border: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        width: '48px',
        height: '48px',
      }}
    >
      <span className={icon} style={{ height: heightIcon || '24px'}}></span>
    </Box>
  </Box>
)

export const ButtonRound = ({ text, icon, fontSize, borderRadius, paddingLeft, paddingTop, height, variant, props }) => (
  <Box sx={{ position: 'relative', width: 26, height: 26 }}>
    <Box
      as="button"
      tx="buttons"
      variant={variant}
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: fontSize || 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        borderRadius: borderRadius || 24,
        height: height || '48px',
        paddingBottom: '27%',
        paddingTop: paddingTop || '27%',
      }}
    >
      <span className={icon} style={{ fontSize: fontSize || '20px', position: 'absolute' }}></span>
      <span style={{ paddingLeft: paddingLeft || '24px' }}> {text}</span>
    </Box>
  </Box>
)

export const ButtonMain = ({ text, icon, isCollapsible, ...props }) => {
  const [hover, setHover] = useState()
  const [active, setActive] = useState()

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as="button"
        tx="buttons"
        variant="mainButton"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: '19px',
          fontFamily: 'Nunito Sans',
          fontWeight: 'normal',
          fontSize: 14,
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          px: 11,
          py: 14,
          color: 'white',
          bg: 'primary',
          border: 0,
          borderRadius: '8px',
          flexDirection: 'row',
          alignItems: 'center',
          height: '38px',
        }}
      >
        <span className={icon} style={{ color: active || hover ? '#DF1E02' : '#707E86', paddingTop: '4px' }}/>
        <span style={{ paddingLeft:'8px', paddingRight:'8px' }}> {text} </span>
        { isCollapsible && <span className="icon-dropdown" style={{ color: '#A6B2BA', paddingTop: '4px' }}/>}
      </Box>
    </Box>
  )
}