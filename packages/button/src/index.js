import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'
import { Image } from '@oneloop/image'
import { useToggle } from '@oneloop/hooks'
import theme from '@oneloop/theme'
import '@oneloop/fonts'

export const Button = ({ variant, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as='button'
      tx='buttons'
      variant={variant}
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
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: '12px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        whiteSpace: 'nowrap',
        padding: '13px 26px 13px 26px',
        gap: '6px',
      }}
    />
  </Box>
)

export const ButtonIcon = ({ icon, isRounded, variant, badgeValue = 0, badgeVariant = 'primary', ...props }) => {
  let heightIcon = '24px'
  let paddingTopIcon = 0
  if (variant.includes('iconSmall') || variant.includes('roundIconSmall')) {
    heightIcon = '22px'
  } else if (variant.includes('iconExtraSmall22px') || variant.includes('iconExtraSmall') ||
      variant.includes('roundIconExtraSmall') || variant.includes('roundIconExtraSmall22px')) {
    heightIcon = '16px'
  } else if (variant.includes('iconExtraSmall18px') || variant.includes('roundIconExtraSmall18px')) {
    heightIcon = '12px'
  } else if (variant.includes('collapseButtonOpen') || variant.includes('collapseButtonClosed')) {
    paddingTopIcon = '14px'
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        variant={variant}
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
          color: 'white',
          bg: 'primary',
          border: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          width: '48px',
          height: '48px',
          whiteSpace: 'nowrap',
        }}
      >
        <span className={icon} style={{ height: heightIcon, paddingTop: paddingTopIcon }}></span>
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '2px', left: '16px' }}>{ badgeValue }</Badge> }
      </Box>
    </Box>
  )
}

export const ButtonRound = ({ text, icon, variant, ...props }) => {
  let heightIcon = '16px'
  if (variant.includes('roundLarge')) {
    heightIcon = '20px'
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        variant={variant}
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
          color: 'white',
          bg: 'primary',
          border: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 24,
          height: '48px',
          gap: '6px',
          whiteSpace: 'nowrap',
          padding: '13px 26px 13px 26px',
        }}
      >
        <span className={icon} style={{ height: heightIcon, fontSize: heightIcon }}></span>
        <span> {text}</span>
      </Box>
    </Box>
  )
}

export const ButtonHoldPressIcon = ({ icon, isRounded, heightIcon, variant, isActive = false, isExpanded = false, badgeValue = 0, badgeVariant = 'primary', ...props }) => {
  const [hover, setHover] = useToggle(false)
  let colorIcon = ''
  if (variant.includes('smallIconMainButton') && (isExpanded || isActive || hover)) {
    colorIcon = '#DF1E02'
  } else if (variant.includes('subtleIcon') && (hover)) {
    colorIcon = '#4D5B64'
  } else if (variant.includes('subtleIcon') && (isActive)) {
    colorIcon = '#384248'
  } else if (variant.includes('smallIconMainButton') || variant.includes('subtleIcon')) {
    colorIcon = '#707E86'
  }
  
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        variant={variant}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: (isExpanded || isActive) ? 'bold' : 'normal',
          fontSize: '24px',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          color: 'white',
          bg: 'primary',
          border: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          width: '48px',
          height: '48px',
          whiteSpace: 'nowrap',
        }}
      >
        {colorIcon && <span className={icon} style={{ color: colorIcon, fontSize: '22px', paddingTop: '8px' }}/> }
        {!colorIcon && <span className={icon} style={{ }}/> }
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '4px', left: '15px' }}>{badgeValue}</Badge> }
      </Box>
    </Box>
  )
}


export const ButtonHoldPress = ({ variant, isActive = false, isExpanded = false, text, icon, ...props }) => {
  let colorValue = undefined
  if (isActive) {
    if (Array.isArray(variant)) {
      const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
      indexes.map(index => {
        if (Object.values(theme.buttons)[index][':focus'] !== undefined){
          colorValue = Object.values(theme.buttons)[index][':focus'].color
        }
      })
    } else {
      const index =  Object.keys(theme.buttons).indexOf(variant)
      colorValue = Object.values(theme.buttons)[index][':focus'].color
    }
  }
  
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        variant={variant}
        {...props}
        __css={{
          'focus': true,
          appearance: 'none',
          display: 'flex',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: 'normal',
          fontSize: '24px',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          color: 'white',
          bg: 'primary',
          border: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          width: '48px',
          height: '48px',
          whiteSpace: 'nowrap',
          paddingTop: '8px'
        }}
      >
        {!icon && <span style={colorValue && {color: colorValue, fontWeight: 'bold'}}>{text}</span> }
        {icon && <span className={icon} style={ colorValue && { color: colorValue }}/> }
      </Box>
    </Box>
  )
}

export const ButtonMain = ({ text, icon, isCollapsible, isActive = false, isExpanded = false, badgeValue = 0, badgeVariant = 'primary', ...props }) => {
  const [hover, setHover] = useToggle(false)

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        variant='mainButtonCollapsible'
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: '19px',
          fontFamily: 'Nunito Sans',
          fontWeight: (isExpanded || isActive) ? 'bold' : 'normal',
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
          gap: '6px',
          whiteSpace: 'nowrap',
          backgroundColor: hover ? '#E4E8EA' : '#00000000',
        }}
      >
        <span className={icon} style={{ color: (isExpanded || isActive || hover) ? '#DF1E02' : '#707E86', fontSize: '22px', paddingTop: '4px' }}/>
        <span style={{ color: (hover || isExpanded || isActive) ? '#4D5B64' : '#6F838D' }}> {text} </span>
        { badgeValue === 0 && isCollapsible && <span className='icon-dropdown' style={{ position: 'absolute', right: '10px', color: '#A6B2BA', fontSize: '18px', transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)', paddingTop: '4px' }}/> }
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', right: '10px' }}>{badgeValue}</Badge> }
      </Box>
    </Box>
  )
}

export const ButtonUser = ({ variant, srcImage, text, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as='button'
      tx='buttons'
      variant={variant}
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
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: '12px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        whiteSpace: 'nowrap',
        padding: '13px 26px 13px 26px',
        gap: '6px',
      }}
    >
      {srcImage && <Image src={srcImage} variant="avatar"/> }
      {!srcImage && <span className='icon-contacto'/>}
      {text}
    </Box>
  </Box>
)
