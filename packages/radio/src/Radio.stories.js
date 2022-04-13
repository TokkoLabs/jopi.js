import React from 'react'

import { Radio } from '.'

export default {
  component: Radio,
  title: 'Radio',
}

export const normal = () => <Radio />
export const checked = () => <Radio defaultChecked />
export const unchecked = () => <Radio defaultChecked={false} />
export const disabled = () => <Radio disabled />

export const isMediumChecked = () => <Radio isMedium defaultChecked />
