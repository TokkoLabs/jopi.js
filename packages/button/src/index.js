import React, { useState } from 'react'
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'
import '@oneloop/fonts'
import { paddingRight } from 'styled-system'

export const Button = (props) => (
  <Box sx={{ position: 'relative', width: 26, height: 26 }}>
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
        fontSize: '16px',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 'button',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  </Box>
)

export const ButtonIcon = (props) => (
  <Box sx={{ position: 'relative', width: 26, height: 40 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: '24px',
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

        borderRadius: 12,
        with: 48,
        height: 48,
        left: '0%',
        right: '0%',
        paddingLeft: '14px',
        paddingRight: '14px',
      }}
    >
      <span className="icon-agregar"></span>
    </Box>
  </Box>
)

export const ButtonRoundIcon = ({ icon, variant, props }) => (
  <Box sx={{ position: 'relative', width: 24, height: 36 }}>
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
        fontSize: '20px',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 24,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRadius: 99999,
        with: 48,
        height: 48,
        left: '0%',
        right: '0%',
        paddingLeft: '14px',
        paddingRight: '14px',
      }}
    >
      {icon && <span className={icon} ></span>}
    </Box>
  </Box>
)

export const ButtonRound = ({ text, icon, variant, props }) => (
  <Box sx={{ position: 'relative', width: 18, height: 18 }}>
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
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 24,
        height: 48,
        whiteSpace: 'nowrap',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 26,
      }}
    >
      <span className={icon} style={{ fontSize: '20px', position: 'absolute' }}></span>
      <span style={{ paddingLeft: '24px' }}> {text}</span>
    </Box>
  </Box>
)

export const ButtonMain = ({ text, icon, variant, isCollapsible, props }) => {
  const [hover, setHover] = useState()
  const [active, setActive] = useState()

  return (
    <Box sx={{ position: 'relative', width: 18, height: 18 }}>
      <Box
        as="button"
        tx="buttons"
        variant={variant}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...props}
        __css={{
          appearance: 'none',
          display: 'inline-block',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: 'normal',
          fontSize: 16,
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          px: 26,
          py: 14,
          color: 'white',
          bg: 'primary',
          border: 0,
          borderRadius: 'button',
          whiteSpace: 'nowrap',
        }}
      >
        <span className={icon} style={{ fontSize: '20px', position: 'absolute', color: active || hover ? '#DF1E02' : '#707E86' }}/>
        <span style={{ marginLeft: '24px', marginTop: '22px', position: 'relative' }}> {text} </span>
        { isCollapsible && <span className="icon-dropdown" style={{ fontSize: '20px', position: 'absolute', color: '#A6B2BA' }}/>}
      </Box>
    </Box>
  )
}
