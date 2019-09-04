import React from 'react'
import { Box } from '@oneloop/box'

export const Svg = props => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="currentcolor"
    {...props}
  />
)

export const Times = ({ color = 'black', ...props }) => (
  <Svg {...props}>
    <path
      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      fill={color}
    />
  </Svg>
)

export const Check = ({ color = 'black', ...props }) => (
  <Svg width="22px" height="17px" viewBox="0 0 22 17" fill="none" {...props}>
    <path
      d="M4.18359 7.64653L3.83128 7.29423L3.47773 7.64529L2.05773 9.05529L1.70168 9.40884L2.05648 9.76364L7.64648 15.3536L8.00003 15.7072L8.35359 15.3536L20.3536 3.35364L20.7071 3.00009L20.3536 2.64653L18.9436 1.23653L18.5902 0.883148L18.2366 1.23637L8.0002 11.4631L4.18359 7.64653Z"
      fill={color}
    />
    <path
      d="M4.18359 7.64653L3.83128 7.29423L3.47773 7.64529L2.05773 9.05529L1.70168 9.40884L2.05648 9.76364L7.64648 15.3536L8.00003 15.7072L8.35359 15.3536L20.3536 3.35364L20.7071 3.00009L20.3536 2.64653L18.9436 1.23653L18.5902 0.883148L18.2366 1.23637L8.0002 11.4631L4.18359 7.64653Z"
      fill={color}
    />
  </Svg>
)

export const Exclamation = ({ color = 'black', ...props }) => (
  <Svg width="4px" height="19px" viewBox="0 0 4 19" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0.666748H0V12.6667H4V0.666748ZM0 16.6667C0 15.5622 0.89543 14.6667 2 14.6667C3.10457 14.6667 4 15.5622 4 16.6667C4 17.7713 3.10457 18.6667 2 18.6667C0.89543 18.6667 0 17.7713 0 16.6667Z"
      fill={color}
    />
  </Svg>
)
