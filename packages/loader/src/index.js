import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { variant } from 'styled-system'
import { Box, Flex } from '@oneloop/box'
import { Text } from '@oneloop/text'

const size = type => {
  switch (type) {
    case 'medium':
      return '24px'
    default:
      return '16px'
  }
}

const bounce = keyframes`
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 24px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
`

const LoaderStyled = styled(Box)`
  position: relative;
  display: inline-block;
  height: 37px;
  width: ${props => size(props.size)};
  ::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: ${props => size(props.size)};
    height: ${props => size(props.size)};
    border-radius: 50%;
    transform-origin: 50%;
    animation: ${bounce} 500ms alternate infinite ease;
    ${variant({
    prop: 'kind',
    scale: 'loader',
  })}
  }
`
export const Loader = ({ text, ...props }) => (
  <Box __css={{ display: 'inline-flex', alignItems: 'baseline' }}>
    <LoaderStyled {...props} __css={{ mr: '10px' }} />
    {text && <Text variant="button.1">{text}</Text>}
  </Box>
)

Loader.propTypes = {
  size: PropTypes.string,
  children: PropTypes.string,
  kind: PropTypes.string,
  text: PropTypes.string,
}

Loader.defaultProps = {
  size: 'small',
  kind: 'primary',
  text: '',
}
