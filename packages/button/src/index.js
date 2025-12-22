import React from 'react'
import { Badge } from '@quintoandar-tokko/badge'
import { Box } from '@quintoandar-tokko/box'
import { Checkbox } from '@quintoandar-tokko/checkbox'
import { Icon } from '@quintoandar-tokko/icons'
import { Image } from '@quintoandar-tokko/image'
import theme from '@quintoandar-tokko/theme'
import '@quintoandar-tokko/fonts'

export const Button = ({ variant, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as='button'
      tx='buttons'
      type='button'
      variant={variant}
      {...props}
      __css={{
        appearance: 'none',
        display: 'flex',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        border: 0,
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRadius: '12px',
      }}
    />
  </Box>
)

export const ButtonIcon = ({ icon, variant, text, badgeValue = 0, badgeVariant = ['badgeNormal', 'primary'], maxWidth, srcImage, userImage, hasCheckbox, active, isCollapsible, disabled, holdPress, hover, filled, isExpanded, widthImage, heightImage, setExpand, testForAction, ...props }) => {
  let colorValue
  let colorValueIcon
  let fontSize
  let fontWeight
  let fontSizeIcon
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
    indexes.map(index => {
      const variantValues = Object.values(theme.buttons)[index]
      if (variantValues[':focus'] !== undefined && active) {
        colorValue = variantValues[':focus'].color
        fontWeight = variantValues[':focus'].fontWeight
        if (variantValues.colorIcon !== undefined) {
          colorValueIcon = variantValues[':focus'].colorIcon
        }
      }
      if (colorValue === undefined && variantValues.color !== undefined) {
        colorValue = variantValues.color
      }
      if (colorValueIcon === undefined && variantValues.colorIcon !== undefined) {
        colorValueIcon = variantValues.colorIcon
      }
      if (fontWeight === undefined && variantValues.fontWeight !== undefined) {
        fontWeight = variantValues.fontWeight
      }
      if (fontSize === undefined && variantValues.fontSize !== undefined) {
        fontSize = variantValues.fontSize
      }
      if (filled && colorValueIcon === undefined) {
        colorValueIcon = variantValues.colorFilled
      }
      if (fontSizeIcon === undefined) {
        fontSizeIcon = variantValues.fontSizeIcon
      }

      return colorValue
    })
  } else {
    const index = Object.keys(theme.buttons).indexOf(variant)
    const variantValues = Object.values(theme.buttons)[index]
    if (variantValues !== undefined) {
      colorValue = variantValues.color
      colorValueIcon = variantValues.colorIcon ||
        (
          filled && colorValueIcon === undefined
            ? variantValues.colorFilled
            : variantValues.color
        )
      fontSize = variantValues.fontSize
      fontWeight = variantValues.fontWeight
      if (hover) {
        colorValue = variantValues[':hover'].color
        colorValueIcon = variantValues[':hover'].colorIcon
        fontWeight = variantValues[':hover'].fontWeight
      } else if (active) {
        colorValue = variantValues[':focus'].color
        colorValueIcon = variantValues[':focus'].colorIcon
        fontWeight = variantValues[':focus'].fontWeight
      }
      if (fontSizeIcon === undefined) {
        fontSizeIcon = variantValues.fontSizeIcon
      }
    }
  }
  if (badgeValue > 99) {
    badgeValue = '+99'
  }

  if (testForAction) {
    console.log('It has a boolean testForAction.')
  }

  return (
    <Box sx={ maxWidth ? { position: 'relative', width: '100%' } : { position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        type='button'
        variant={variant}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: fontWeight || 'bold',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          border: 0,
          flexDirection: 'row',
          justifyContent: !maxWidth && 'center',
          width: maxWidth && '100%',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        { hasCheckbox && active && <Checkbox defaultChecked disabled={ disabled }/>}
        { hasCheckbox && !active && <Checkbox defaultChecked={false} disabled={ disabled }/>}
        { icon && <Icon icon={icon} fontSize={fontSizeIcon || fontSize} style={ holdPress && { color: (colorValueIcon || colorValue) }}/> }
        { !userImage && srcImage && <Image src={srcImage} style={{ width: widthImage, height: heightImage }}/> }
        { userImage && srcImage && <Image src={srcImage} variant="avatar"/> }
        { userImage && !srcImage && <span className='icon-contactos' style={{ fontSize: '24px' }}/>}
        { text && !holdPress && <span>{text}</span>}
        { text && holdPress && <span style={colorValue && { color: colorValue, fontWeight: fontWeight }}>{text}</span> }
        { isCollapsible && setExpand === undefined && <span className='icon-dropdown' style={{ position: 'absolute', right: '10px', color: '#798B97', fontSize: '12px', transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'all 0.5s' }}/> }
        { isCollapsible && setExpand !== undefined && <span className='icon-dropdown' onClick={(event) => { event.preventDefault(); setExpand(); event.stopPropagation(); event.nativeEvent.stopImmediatePropagation() }}style={{ position: 'absolute', right: '10px', color: '#798B97', fontSize: '12px', transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'all 0.5s', paddingLeft: '1px', paddingRight: '1px' }}/> }
        { badgeValue !== 0 && !text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '2px', left: '16px' }}>{badgeValue}</Badge> }
        { badgeValue !== 0 && text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', right: isCollapsible ? '30px' : '10px' }}>{badgeValue}</Badge> }
      </Box>
    </Box>
  )
}
