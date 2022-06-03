import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'
import { useToggle } from '@oneloop/hooks'
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
  if (variant.includes('iconSmall') || variant.includes('roundIconSmall')) {
    heightIcon = '22px'
  } else if (variant.includes('iconExtraSmall22px') || variant.includes('iconExtraSmall') ||
      variant.includes('roundIconExtraSmall') || variant.includes('roundIconExtraSmall22px')) {
    heightIcon = '16px'
  } else if (variant.includes('iconExtraSmall18px') || variant.includes('roundIconExtraSmall18px')) {
    heightIcon = '12px'
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
        <span className={icon} style={{ height: heightIcon }}></span>
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '3px', left: '30px' }}>{ badgeValue }</Badge> }
      </Box>
    </Box>
  )
}

/// ACA ABAJO ESTA EL BOTON DEL DRAWER, ASEGURAR DE QUE ANDE
export const ButtonIconDrawer = ({ icon, isRounded, variant, badgeValue = 0, badgeVariant = 'primary', ...props }) => {
  let heightIcon = '24px'
  if (variant.includes('iconSmall') || variant.includes('roundIconSmall')) {
    heightIcon = '22px'
  } else if (variant.includes('iconExtraSmall22px') || variant.includes('iconExtraSmall') ||
      variant.includes('roundIconExtraSmall') || variant.includes('roundIconExtraSmall22px')) {
    heightIcon = '16px'
  } else if (variant.includes('iconExtraSmall18px') || variant.includes('roundIconExtraSmall18px')) {
    heightIcon = '12px'
  }
  let px = 0
  let py = 0
  let paddingTopIcon = 0
  if (variant === 'collapseButtonOpen' || variant === 'collapseButtonClosed') {
    px = '8px'
    py = '4px'
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
          px: px !== 0 ? px : '14px',
          py: py !== 0 ? py : '5px',
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
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '3px', left: '30px' }}>{ badgeValue }</Badge> }
      </Box>
    </Box>
  )
}

/// ACA ARRIBA ESTA EL BOTON DEL DRAWER; ASEGURAR DE QUE ANDE

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

export const ButtonMainIcon = ({ icon, isRounded, heightIcon, variant, isActive = false, isExpanded = false, badgeValue = 0, badgeVariant = 'primary', ...props }) => {
  const [hover, setHover] = useToggle(false)
  let px = 0
  let py = 0
  if (variant === 'collapseButtonOpen' || variant === 'collapseButtonClosed') {
    px = '8px'
    py = '4px'
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
          px: px !== 0 ? px : '14px',
          py: py !== 0 ? py : '5px',
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
          backgroundColor: hover ? '#E4E8EA' : '#00000000',
        }}
      >
        <span className={icon} style={{ color: (isExpanded || isActive || hover) ? '#DF1E02' : '#707E86', fontSize: '22px', paddingTop: '8px' }}/>
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '4px', left: '15px' }}>{badgeValue}</Badge> }
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
