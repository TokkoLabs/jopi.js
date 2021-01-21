import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Button } from '@oneloop/button'

import { Alert } from '.'

export default {
  component: Alert,
  title: 'Design System|Alert',
}

// export const success = () => (
//   <Alert text="Éxito!!! Pudiste hacer todo lo que querías y te salió pipi cucu!" />
// )

export const success = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Alert text="Éxito!!! Pudiste hacer todo lo que querías y te salió pipi cucu!" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const warning = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Alert type="warning" text="Danger Zone!!!!" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const danger = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Alert type="danger" text="NOOOOOO!!! Perdonanos, explotó todo! :(" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
