import React from 'react'

import { Checkbox } from '.'

export default {
  component: Checkbox,
  title: 'Design System|Checkbox',
}

export const normal = () => <Checkbox />
export const defaultCheckedTrue = () => <Checkbox defaultChecked={true} />
export const defaultCheckedFalse = () => <Checkbox defaultChecked={false} />
export const checkedDisabled = () => <Checkbox defaultChecked disabled />
export const disabled = () => <Checkbox disabled />

export const altChecked = () => <Checkbox isAlt defaultChecked />
