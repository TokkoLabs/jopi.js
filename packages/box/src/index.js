import styled from 'styled-components'
import { space, color, layout, flexbox, border } from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  border
)

export default Box
