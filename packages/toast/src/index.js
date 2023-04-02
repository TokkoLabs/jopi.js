import React from 'react'
import { Flex, Box } from '@oneloop/box'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import { ButtonIcon } from '@oneloop/button'
import { Loader } from '@oneloop/loader'
//preguntar si de esta forma esta bien mandarle el margin que se le pasa un valor generico pero tambien se puede cambiar pasandole otro valor al componente
export const Toast = ({ variant = 'base', margin = '19px 15px', icon, text, textDownload, download, ...props }) => (
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

    {variant === 'alert' && (
      <Icon icon={icon} fontSize='29.33px' color='#A2B5F7' margin={margin}/>
    )}

    {variant === 'check' && (
      <Icon icon={icon} fontSize='29.33px' color='#00D186' margin={margin}/>
    )}

    {variant === 'error' && (
      <Icon icon={icon} fontSize='29.33px' color='#FE8472' margin={margin}/>
    )}

    {variant === 'normal' && (
      <Icon icon={icon} fontSize='29.33px' margin={margin}/>
    )}

    {variant === 'loading' && (
      <Loader variant='spinner' margin={margin}/>
    )}

    {variant === 'success' && (
    <Box display='flex' justifyContent='flex-end'>
      <Icon icon={icon} color='#00D186' fontSize='29.33px' margin='19px 15px' />
      <Text variant="body.fontSize16" fontWeight='bold' display="flex" alignItems="center" >
        {text}
      </Text>
      <ButtonIcon icon='icon-descargar' variant='mainItemSmall' margin='20px 15px 20px 40px' fontSize='14px' color='white' text={textDownload} onClick={download}/>
    </Box>
    )}

    {variant !== 'success' && (
    <Text variant="body.fontSize14" display="flex" alignItems="center" flexGrow={1}>
      {text}
    </Text>
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
