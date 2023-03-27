import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Button } from '@oneloop/button'

import { Toast } from '.'

export default {
  component: Toast,
  title: 'Toast',
}
export const base = () => <Toast type='base' variant='toastBase' text="Seleccione una propiedad"/>
     

export const normal = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show Toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast type='normal' variant='toastNormal' text="Seleccione una propiedad" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const alert = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastAlert' type="alert" text="Alert message" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const check = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastCheck' type="check" text="Success message" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

  export const error = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastError' type="error" text="Error message" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
  export const loading = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastNormal' type="loading" text="Cargando..." closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
  export const exporting = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastNormal' type="loading" text="Exportando..." closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
  export const success = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastSuccess' type="success" text="Report export ready!" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

