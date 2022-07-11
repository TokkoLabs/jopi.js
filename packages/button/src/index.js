import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'
import { Checkbox } from '@oneloop/checkbox'
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
  let heightIcon
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
    indexes.map(index => {
      if (Object.values(theme.buttons)[index].heightIcon !== undefined) {
        heightIcon = Object.values(theme.buttons)[index].heightIcon
      }
      return heightIcon
    })
  } else {
    const index = Object.keys(theme.buttons).indexOf(variant)
    heightIcon = Object.values(theme.buttons)[index].heightIcon
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
        <span className={icon} style={heightIcon && { height: heightIcon }}></span>
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

export const ButtonHoldPress = ({ variant, active = false, isInput = false, text, icon, badgeValue = 0, badgeVariant = 'primary', hasCheckbox = false, disabled = false, ...props }) => {
  let colorValue
  let heightIcon
  let fontWeight
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
    indexes.map(index => {
      if (Object.values(theme.buttons)[index][':focus'] !== undefined && active) {
        colorValue = Object.values(theme.buttons)[index][':focus'].color
      } else if (Object.values(theme.buttons)[index].color !== undefined) {
        colorValue = Object.values(theme.buttons)[index].color
      }
      if (Object.values(theme.buttons)[index].heightIcon !== undefined) {
        heightIcon = Object.values(theme.buttons)[index].heightIcon
      }
      return colorValue
    })
  } else {
    const index = Object.keys(theme.buttons).indexOf(variant)
    colorValue = Object.values(theme.buttons)[index].color
    heightIcon = Object.values(theme.buttons)[index].heightIcon
    fontWeight = Object.values(theme.buttons)[index].fontWeight
    if (isInput) {
      colorValue = Object.values(theme.buttons)[index].color
    }
    if (active) {
      colorValue = Object.values(theme.buttons)[index][':focus'].color
      fontWeight = Object.values(theme.buttons)[index][':focus'].fontWeight
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
          appearance: 'none',
          display: 'flex',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontSize: '24px',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          color: 'white',
          bg: 'primary',
          border: 0,
          flexDirection: 'row',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        { hasCheckbox && active && <Checkbox defaultChecked={true} disabled={disabled}/>}
        { hasCheckbox && !active && <Checkbox defaultChecked={false} disabled={disabled}/>}
        { !icon && <span style={colorValue && { color: colorValue, fontWeight: fontWeight }}>{text}</span>}
        { icon && colorValue && <span className={icon} style={{ color: colorValue, height: heightIcon }}/> }
        { icon && !colorValue && <span className={icon} style={heightIcon && { height: heightIcon }}/> }
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '2px', left: '16px' }}>{badgeValue}</Badge> }
      </Box>
    </Box>
  )
}

export const ButtonMain = ({ variant, text, icon, isCollapsible, active = false, isExpanded = false, badgeValue = 0, badgeVariant = 'primary', ...props }) => {
  const [hover, setHover] = useToggle(false)
  const colorFirstIcon = '#707E86'
  const colorFirstIconActive = '#DF1E02'
  const colorText = '#49565D'
  const colorTextActive = '#384248'

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
          lineHeight: '19px',
          fontFamily: 'Nunito Sans',
          fontWeight: (isExpanded || active) ? 'bold' : 'normal',
          fontSize: 14,
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          color: 'white',
          bg: 'primary',
          border: 0,
          borderRadius: '8px',
          flexDirection: 'row',
          alignItems: 'center',
          height: '38px',
          whiteSpace: 'nowrap',
          backgroundColor: hover ? '#E4E8EA' : '#00000000',
        }}
      >
        <span className={icon} style={{ color: (isExpanded || active || hover) ? colorFirstIconActive : colorFirstIcon, fontSize: '22px', paddingTop: '4px' }}/>
        <span style={{ color: (hover || isExpanded || active) ? colorTextActive : colorText, fontWeight: (hover || isExpanded || active) ? 'bold' : 'normal' }}> {text} </span>
        { badgeValue === 0 && isCollapsible && <span className='icon-dropdown' style={{ position: 'absolute', right: '10px', color: '#798B97', fontSize: '14px', transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)', paddingTop: '4px' }}/> }
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
        fontSize: '14px',
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
        gap: '8px',
      }}
    >
      {srcImage && <Image src={srcImage} variant="avatar"/> }
      {!srcImage && <span className='icon-contacto' style={{ fontSize: '24px', height: '24px' }}/>}
      {text}
    </Box>
  </Box>
)
