import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Button } from '@oneloop/button'

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
