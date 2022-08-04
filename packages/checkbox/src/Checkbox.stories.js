import React from 'react'

import { Checkbox } from '.'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

export const normal = () => <Checkbox />
export const defaultCheckedTrue = () => <Checkbox defaultChecked />
export const defaultCheckedFalse = () => <Checkbox defaultChecked={false} />
export const disabled = () => <Checkbox defaultChecked disabled />

export const mediumChecked = () => <Checkbox isMedium defaultChecked />

export const isChecked = () => <Checkbox isMedium isChecked={true} />