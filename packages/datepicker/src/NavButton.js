import React from 'react'
import { Button } from '@oneloop/button'

export const NavButton = ({ onClick, ...props }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant="default"
      border="none"
      {...props}
    />
  )
}
