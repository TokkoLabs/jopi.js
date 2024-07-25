import React from 'react'
import { Flex, Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import { ButtonIcon } from '@oneloop/button'
import { Loader } from '@oneloop/loader'

export const Toast = ({ variant = 'base', variantLoader, variantText = 'body.fontSize14', icon, text, subtitle, closeIconNeighbor, textDownload, download, hideCloseIcon = false, ...props }) => (
  <Flex
    tx='toast'
    variant={variant}
    {...props}
    __css={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px 24px 0px 0px',
      gap: '24px',
      position: 'relative',
      height: '72px',
      background: '#272E33',
      borderRadius: '6px',
      color: 'white',
      width: closeIconNeighbor ? '577px' : '423px',
      justifyContent: closeIconNeighbor ? 'space-between' : 'unset',
    }}
  >
    <Box __css={{
      width: '327px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '16px',
      marginLeft: '24px',
    }} >

      { icon !== undefined && (
      <Icon icon={icon} fontSize='32px' />
      )}

      { variantLoader !== undefined && (
        <Loader
          variant={variantLoader}
          style={{
            width: '32px',
            height: '32px',
          }}
        />
      )}

      {text !== undefined && subtitle !== undefined && (
        <Box __css={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Text variant={variantText} color='white' fontWeight="700" fontSize='14px'>{text}</Text>
          <Text color='white' fontSize='14px'>{subtitle}</Text>
        </Box>
      )}

      { text !== undefined && subtitle === undefined &&
      (<Text variant={variantText} display="flex" alignItems="center" color='white'>
        {text}
      </Text>
      )}

      { download !== undefined && (
      <ButtonIcon icon='icon-descargar' variant='mainItemSmall' color='white' text={textDownload} onClick={download}/>
      )}

    </Box>

    {!hideCloseIcon && !closeIconNeighbor && (
      <ButtonIcon
        color='white'
        icon='icon-cerrar'
        variant={['subtleTrasnparentIconClearButton', 'iconMedium']}
        onClick={() => props.closeFunction()}
      />
    )}

    {!hideCloseIcon && closeIconNeighbor && (
      <Box __css={{ alignItems: 'center', display: 'flex', gap: 4 }}>
        {closeIconNeighbor}
        <ButtonIcon
          color='white'
          icon='icon-cerrar'
          variant={['subtleTrasnparentIconClearButton', 'iconMedium']}
          onClick={() => props.closeFunction()}
        />
      </Box>
    )}
  </Flex>
)
