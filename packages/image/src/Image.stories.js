import React from 'react'

import { Image } from '.'

export default {
  component: Image,
  title: 'Image',
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

export const quickdisplay = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="quickdisplay"
  />
)

export const rows = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="rows"
  />
)

export const rowsInfo = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="rows"
    textBadge="PorValidar"
  />
)

export const rowsReport = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="rows"
    textBadge="Reportada"
    variantBadge='badgeReportRow'
  />
)

export const rowsSend = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="rows"
    textBadge="Enviada"
    variantBadge='badgeSendRow'
  />
)

export const rowsError = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="rows"
    textBadge="Error"
    variantBadge='badgeErrorRow'
  />
)

export const rowsSupport = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="rows"
    textBadge="Vista"
    variantBadge='badgeSupportRow'
  />
)

export const largeCard = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="largeCard"
  />
)

export const regularCard = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="regularCard"
  />
)

export const smallCard = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="smallCard"
  />
)

export const extraSmallCard = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="extraSmallCard"
  />
)

export const circleSmall = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="circleSmall"
  />
)

export const circleBig = () => (
  <Image
    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    variant="circleBig"
  />
)
