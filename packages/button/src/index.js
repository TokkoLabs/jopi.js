import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box } from '@oneloop/box'

const ButtonBase = styled(Box)(
  variant({
    prop: 'size',
    scale: 'buttons.sizes',
  })
)

export const Button = props => (
  <ButtonBase
    as="button"
    tx="buttons"
    variant="primary"
    size="medium"
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-block',
      lineHeight: 'inherit',
      textTransform: 'uppercase',
      textAlign: 'center',
      textDecoration: 'none',
      outline: 'none',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 'circle',
    }}
  />
)
