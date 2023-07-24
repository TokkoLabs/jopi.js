import React from 'react'
import { Flex } from '@oneloop/box'
import { Text } from '@oneloop/text'
import { Icon } from '@oneloop/icons'

export const Alert = ({ variant = 'info', text, closeAlert, ...props }) => (
  <Flex
    tx="alert"
    variant={variant}
    {...props}
    __css={{
      borderRadius: '12px',
      padding: '20px 24px',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
    }}
  >
    <Text
      variant="body.fontSize11"
      display="flex"
      alignItems="center"
      flexGrow={1}
    >
      {text}
    </Text>
    <Icon
      icon="icon-cerrar"
      fontSize="12px"
      style={{ cursor: 'pointer' }}
      onClick={closeAlert}
    />
  </Flex>
)
