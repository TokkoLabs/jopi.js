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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px 24px 0px 0px',
      gap: '24px',
      position: 'relative',
      width: '423px',
      height: '72px',
      background: '#272E33',
      borderRadius: '6px',
      color:'white'
    }}
  >
    <Box __css={{
      width:'327px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '16px',
      marginLeft:'24px',
            }} >
      { icon !== undefined && (
    <Icon icon={icon} fontSize='32px' />
    )}

    { variantLoader !== undefined && (
      <Loader variant={variantLoader} />
    )}

    { text !== undefined &&
      (<Text variant={variantText} display="flex" alignItems="center">
        {text}
      </Text>
    )}

    { download !== undefined && (
      <ButtonIcon icon='icon-descargar' variant='mainItemSmall' fontSize='14px' color='white' text={textDownload} onClick={download}/>
    )} 
    </Box>

      <ButtonIcon
        color='white'
        icon='icon-cerrar'
        variant={['subtleTrasnparentIconClearButton', 'iconMedium']}
        onClick={() => props.closeFunction()}/>

  </Flex>
)
