import styled from 'styled-components'
import {
  space,
  color,
  layout,
  flexbox,
  border,
  typography,
  position,
  variant,
} from 'styled-system'
import css from '@styled-system/css'

const sx = props => css(props.sx)(props.theme)
const base = props => css(props.__css)(props.theme)
const theme = ({ tx = 'variants' }) =>
  variant({
    scale: tx,
  })

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  theme,
  sx,
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  position
)

export const Flex = styled(Box)({
  display: 'flex',
})
