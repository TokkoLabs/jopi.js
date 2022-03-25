import React from 'react'
import { Box } from '@oneloop/box'

export const Switch = ({ ...props }) => (
  <Box
    as="button"
    role="switch"
    tx="switches"
    {...props}
    __css={{
      width: '42px',
      height: '22px',
      appearance: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: '2px 4px',
      borderRadius: 'circle',
      cursor: 'pointer',
      border: '1px solid #D4DBDE',
      bg: 'neutral.0',
      position: 'relative',
      outline: 'none',
      transition: 'background-color .1s cubic-bezier(.4, 0, .2, 1)',
      '&::before': {
        content: "''",
        background: '#D4DBDE',
        position: 'absolute',
        size: '16px',
        borderRadius: 'circle',
        top: '50%',
        left: 0,
        transform: 'translate(3px, -50%)',
        transition: 'transform .1s cubic-bezier(.4, 0, .2, 1)',
      },
      '&[aria-checked="true"]': {
        backgroundColor: '#6A88F2',
        '&::before': {
          transform: 'translate(21px, -50%)',
          bg: 'white',
        },
      },
      '&[disabled]': {
        bg: '#EFF2F3',
        border: 'none',
        '&::before': {
          background: '#C1CCD0',
          boxShadow: 'none',
        },
      },
    }}
  />
)
