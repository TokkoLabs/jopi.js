import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'
import { Checkbox } from '@oneloop/checkbox'
import { Icon } from '@oneloop/icons'
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
        fontWeight: 'normal',
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
        whiteSpace: 'nowrap',
      }}
    />
  </Box>
)

export const ButtonIcon = ({ icon, variant, text, badgeValue = 0, badgeVariant = 'primary', maxWidth, ...props }) => {
  let fontSize
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
    indexes.map(index => {
      if (Object.values(theme.buttons)[index].fontSize !== undefined) {
        fontSize = Object.values(theme.buttons)[index].fontSize
      }
      return fontSize
    })
  } else {
    const index = Object.keys(theme.buttons).indexOf(variant)
    fontSize = Object.values(theme.buttons)[index].fontSize
  }

  return (
    <Box sx={ maxWidth ? { position: 'relative', width: '100%' } : { position: 'relative' }}>
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
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          border: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        { icon && <Icon icon={icon} fontSize={fontSize}/> }
        { badgeValue !== 0 && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '2px', left: '16px' }}>{ badgeValue }</Badge> }
        { text && <span>{text}</span> }
      </Box>
    </Box>
  )
}

export const ButtonHoldPress = ({ variant, active = false, text, icon, badgeValue = 0, badgeVariant = 'primary', isCollapsible, hasCheckbox = false, disabled = false, maxWidth, ...props }) => {
  let colorValue
  let colorValueIcon
  let fontSize
  let fontWeight
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
    indexes.map(index => {
      if (Object.values(theme.buttons)[index][':focus'] !== undefined && active) {
        colorValue = Object.values(theme.buttons)[index][':focus'].color
        fontWeight = Object.values(theme.buttons)[index][':focus'].fontWeight
        if (Object.values(theme.buttons)[index].colorIcon !== undefined) {
          colorValueIcon = Object.values(theme.buttons)[index][':focus'].colorIcon
        }
      } else if (Object.values(theme.buttons)[index].color !== undefined) {
        colorValue = Object.values(theme.buttons)[index].color
      } else if (Object.values(theme.buttons)[index].colorIcon !== undefined) {
        colorValueIcon = Object.values(theme.buttons)[index].colorIcon
      } else if (Object.values(theme.buttons)[index].fontWeight !== undefined) {
        fontWeight = Object.values(theme.buttons)[index].fontWeight
      }
      if (Object.values(theme.buttons)[index].fontSize !== undefined) {
        fontSize = Object.values(theme.buttons)[index].fontSize
      }
      return colorValue
    })
  } else {
    const index = Object.keys(theme.buttons).indexOf(variant)
    colorValue = Object.values(theme.buttons)[index].color
    colorValueIcon = Object.values(theme.buttons)[index].colorIcon
    fontSize = Object.values(theme.buttons)[index].fontSize
    fontWeight = Object.values(theme.buttons)[index].fontWeight
    if (active) {
      colorValue = Object.values(theme.buttons)[index][':focus'].color
      colorValueIcon = Object.values(theme.buttons)[index][':focus'].colorIcon
      fontWeight = Object.values(theme.buttons)[index][':focus'].fontWeight
    }
  }

  return (
    <Box sx={ maxWidth ? { position: 'relative', width: '100%' } : { position: 'relative' }}>
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
          fontWeight: {fontWeight},
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          border: 0,
          flexDirection: 'row',
          //  justifyContent: 'center',
          width: maxWidth &&'100%',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        { hasCheckbox && active && <Checkbox defaultChecked disabled={disabled}/>}
        { hasCheckbox && !active && <Checkbox defaultChecked={false} disabled={disabled}/>}
        { icon && <Icon icon={icon} fontSize={fontSize} style={{ color: ( colorValueIcon || colorValue ) }}/> }
        { text && <span style={colorValue && { color: colorValue, fontWeight: fontWeight }}>{text}</span>}
        { badgeValue === 0 && isCollapsible && <span className='icon-dropdown' style={{ position: 'absolute', right: '10px', color: '#798B97', fontSize: '14px', transform: active ? 'rotate(-180deg)' : 'rotate(0deg)', paddingTop: '4px' }}/> }
        { badgeValue !== 0 && !text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '2px', left: '16px' }}>{badgeValue}</Badge> }
        { badgeValue !== 0 && text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', right: '16px' }}>{badgeValue}</Badge> }
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
