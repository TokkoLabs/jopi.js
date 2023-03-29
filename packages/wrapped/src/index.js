import React, { useEffect, useRef } from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'
import { Tags } from '@oneloop/tags'
import { Text } from '@oneloop/text'

export const Wrapped = ({ items, ...props }) => {
  const Ref = useRef(null)
  let widthWrapper
  let widthElements = 0
  let elements


  useEffect(() => {
    widthWrapper = Ref.current.offsetWidth
    elements = Ref.current.children

    for (let index = 0; index < elements.length; index++) {
      widthElements = widthElements + elements[index].offsetWidth
      
      if (widthElements > widthWrapper) {
        elements[index].style.display = "none"
        console.log('entro aca')
      }
      //elements[index].style.display = "none"
    }

    console.log({ widthElements, widthWrapper })
  }, [])


  return (
    <Box
      __css={{
        background: '#f1f1f1',
        display: 'block',
        alignItems: 'center',
        gap: '5px',
        width: '300px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      {...props}
      ref={Ref}
    >
      {items.map((item, i) => (
        <Tags key={item + i} variant='secondary' id={`tagClass${i}`}>
          <Text>{item}</Text>
        </Tags>
      ))}
    </Box>
  )
}
