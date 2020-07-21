import React, { Fragment } from 'react'
import { Add } from '@oneloop/icons'

import { Textarea } from '.'

export default {
  component: Textarea,
  title: 'Design System|Textarea',
}

export const basic = () => <Textarea />

export const inline = () => (
  <Fragment>
    <Textarea
      placeholder="Los textareas son inline por defecto"
      suffix=" Si hay sufijos o prefijos, modificar top y bottom margin"
    />
    <Textarea
      placeholder="Hello World!"
      marginBottom="13px"
      marginLeft="20px"
      disabled
    />
  </Fragment>
)

export const styled = () => (
  <Textarea
    placeholder="Hello World!"
    borderColor="success"
    height="400px"
    width="200px"
    lineHeight="3"
    fontWeight="bold"
    color="danger"
    backgroundCOlor="#9cd7ad45"
    prefix="Este es el label del textarea:"
    suffix="*Este es el detalle del textarea"
    contL="45px"
    contT="30px"
  />
)
