import React from 'react'

import { Box } from '.'

export default {
  component: Box,
  title: 'Design System|Box',
}

export const side = () => (
  <React.Fragment>
    <Box width={[1 / 2]} height="150px" bg="neutral.2" />
    <Box width={[1 / 2]} height="150px" bg="neutral.3" />
  </React.Fragment>
)
