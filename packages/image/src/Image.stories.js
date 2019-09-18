import React from 'react'

import { Image } from '.'

export default {
  component: Image,
  title: 'Design System|Image',
}

export const normal = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    width={1 / 2}
  />
)

export const circle = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="avatar"
  />
)
