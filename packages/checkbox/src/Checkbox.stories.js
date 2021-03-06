import React from 'react'

import { Checkbox } from '.'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

export const normal = () => <Checkbox />
export const defaultCheckedTrue = () => <Checkbox defaultChecked />
export const defaultCheckedFalse = () => <Checkbox defaultChecked={false} />
export const checkedDisabled = () => <Checkbox defaultChecked disabled />
export const disabled = () => <Checkbox disabled />

export const altChecked = () => <Checkbox isAlt defaultChecked />
