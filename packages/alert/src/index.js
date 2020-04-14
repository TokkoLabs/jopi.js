import React from 'react'
import { Flex } from '@oneloop/box'
import { Check, Exclamation, Times } from '@oneloop/icons'
import { Text } from '@oneloop/text'
import { Button } from '@oneloop/button'

export const Alert = ({ type = 'success', text, ...props }) => (
  <Flex
    variant="alert"
    {...props}
    __css={{
      width: '100%',
      bg: 'white',
      borderRadius: 'circle',
      boxShadow: 'active',
      justifyContent: 'space-between',
      p: 1,
    }}
  >
    {type === 'success' && (
      <Check
        bg="success"
        color="white"
        borderRadius="circle"
        size={40}
        p={3}
        mr={5}
      />
    )}
    {type === 'warning' && (
      <Exclamation
        bg="warning"
        color="white"
        borderRadius="circle"
        size={40}
        p={3}
        mr={5}
      />
    )}
    {type === 'danger' && (
      <Times
        bg="danger"
        color="white"
        borderRadius="circle"
        size={40}
        p={3}
        mr={5}
      />
    )}
    <Text variant="body.0" display="flex" alignItems="center" flexGrow={1}>
      {text}
    </Text>
    <Button
      size={32}
      bg="#F6F2F2"
      p={3}
      display="inline-flex"
      alignSelf="center"
      mr={2}
    >
      <Times color="#716F6F" m="auto" />
    </Button>
  </Flex>
)
