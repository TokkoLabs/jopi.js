import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Box } from '@oneloop/text'
import { Button } from '@oneloop/button'
import { Text } from '@oneloop/text'
import { motion } from 'framer-motion'

import { Drawer } from '.'

export default {
  component: Drawer,
  title: 'Design System|Drawer',
}

export const normal = () =>
  React.createElement(() => {
    const [isOpen, toggle] = useToggle(false)

    return (
      <React.Fragment>
        <Button onClick={toggle}>My awesome Drawer</Button>
        {isOpen && <Drawer isOpen={isOpen}>Empanada</Drawer>}
      </React.Fragment>
    )
  })
