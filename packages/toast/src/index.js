import React from 'react'
import { Flex } from '@oneloop/box'
import { Check, Exclamation, Times } from '@oneloop/icons'
import { Icon } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import { Button } from '@oneloop/button'
import { ButtonIcon } from '@oneloop/button'
import { Box } from '@oneloop/box'
import { Loader } from '@oneloop/loader'

export const Toast = ({ variant = 'base', type = 'base', text, ...props }) => (
  <Flex
    tx='toast'
    variant={variant}
    {...props}
    __css={{
      bg: 'white',
      width: '423px',
      height: '72px',
      boxShadow: 'active',
      borderRadius: '6px',
      justifyContent: 'space-between',
      backgroundColor: '#272E33',
      color: 'white',
      p: 1,
    }}
  >

    {type === 'alert' && (
      <Icon icon='icon-alertas' fontSize='29.33px' color='#A2B5F7' margin='20px 15px'/>
    )}

    {type === 'check' && (
      <Icon icon='icon-check' fontSize='29.33px' color='#00D186' margin='20px 15px'/>
    )}

    {type === 'error' && (
        <Icon icon='icon-error' fontSize='29.33px' color='#FE8472' margin='20px 15px'/>
    )}
    
    {type === 'normal' && (
        <Icon icon='icon-check' fontSize='29.33px' margin='20px 15px'/>
    )}
    
    {type === 'loading' && (
        //TO-DO cambiar el loader
        <Loader />
    )}
    
    {type === 'success' && (
        <Box display='flex' justifyContent='flex-end'>
           <Icon icon='icon-check'  color='#00D186'  fontSize='29.33px'  margin='20px 15px' />
            <Text variant="body.fontSize12" fontWeight='bold' display="flex" alignItems="center" >
                {text}
            </Text>
            <ButtonIcon icon='icon-descargar' variant='mainItemSmall'  margin='20px 15px'  color='white' text={'Descargar'}/>
        </Box>

    )}

    
    {type !== 'success' && (
        <Text variant="body.fontSize12" display="flex" alignItems="center" flexGrow={1}>
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
