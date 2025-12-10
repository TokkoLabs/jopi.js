import React from 'react'
import { useToggle } from '@quintoandar-tokko/hooks'
import { Button } from '@quintoandar-tokko/button'

import { Alert } from '.'

export default {
  component: Alert,
  title: 'Alert',
}

export const Info = () => {
  const [openAlert, setOpenAlert] = useToggle(false)
  return (
    <React.Fragment>
      <Button onClick={setOpenAlert}>Show alert</Button>
      <br />
      <br />
      {openAlert && (
        <Alert
          text="Éxito!!! Pudiste hacer todo lo que querías y te salió pipi cucu!"
          closeAlert={setOpenAlert}
        />
      )}
    </React.Fragment>
  )
}
