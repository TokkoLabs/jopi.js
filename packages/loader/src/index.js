//* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { variant } from 'styled-system'
import { Box } from '@oneloop/box'

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
export const Loader = ({ variant = 'bounce', ...props }) => (
  <Box as='loader' tx='loaders' variant={variant}>
    { variant === 'spinner' &&
    <StyledCircle {...props} __css={{ mr: '10px' }} />
    }
    { variant === 'bounce' &&
    <LoaderStyled {...props} __css={{ mr: '10px' }} />
    }
  </Box>
)

Loader.propTypes = {
  size: PropTypes.string,
  kind: PropTypes.string,
}

Loader.defaultProps = {
  size: 'small',
  kind: 'primary',
}

const circle = keyframes`
 0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const StyledCircle = styled(Box)`
width: 2em;
height: 2em;
padding: 8px;
border-radius: 50%;
background-image: conic-gradient(#272E33, #FFFFFF);
animation: ${circle} 1s ease 0s infinite;
clip-path: circle(80px at center);
-webkit-mask-image: radial-gradient(circle at center, transparent 54%, black 54.8%);
mask-image: radial-gradient(circle at center, transparent 54%, black 54.8%);
`
