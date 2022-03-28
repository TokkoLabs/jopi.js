import React from 'react'

import { Radio } from '.'

export default {
  component: Radio,
  title: 'Radio',
}

export const normal = () => <Radio />
export const checked = () => <Radio defaultChecked />
export const unchecked = () => <Radio />
export const disabled = () => <Radio disabled />

//export const altChecked = () => <Radio isMedium defaultChecked />
