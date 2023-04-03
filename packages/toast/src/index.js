import React from 'react'
import { Flex, Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import { ButtonIcon } from '@oneloop/button'
import { Loader } from '@oneloop/loader'

export const Toast = ({ variant = 'base', variantLoader, variantText = 'body.fontSize14', icon, text, textDownload, download, ...props }) => (
  <Flex
    tx='toast'
    variant={variant}
    {...props}
    __css={{
      bg: 'white',
      width: '415px',
      height: '72px',
      boxShadow: 'active',
      borderRadius: '6px',
      backgroundColor: '#272E33',
      color: 'white',
      p: 1,
    }}
  >
    { icon !== undefined && (
    <Icon icon={icon} fontSize='29.33px' margin = '19px 15px'/>
    )}

    {variantLoader !== undefined && (
      <Loader variant={variantLoader} margin='19px 15px'/>
    )}

      {text !== undefined &&
      (<Text variant={variantText} display="flex" alignItems="center">
        {text}
      </Text>)}

      {download !== undefined && (
      <ButtonIcon icon='icon-descargar' variant='mainItemSmall' margin='20px 15px 20px 40px' fontSize='14px' color='white' text={textDownload} onClick={download}/>
      )}

    <Box margin='auto'>
      <ButtonIcon
        color='white'
        icon='icon-cerrar'
        variant={['subtleTrasnparentIconClearButton', 'iconLarge']}
        onClick={() => props.closeFunction()}/>
    </Box>
  </Flex>
)
