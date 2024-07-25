import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Button } from '@oneloop/button'
import { Text } from '@oneloop/text'

import { Toast } from '.'

export default {
  component: Toast,
  title: 'Toast',
  argTypes: {
    variant: {
      name: 'variant',
      description: '**Variantes del toast:** [\n \'toastBase, toastNormal, toastAlert, toastCheck, toastError,toastLoadingtoastSuccess]',
    },
    modal: {
      name: 'Modal',
      description: '**modalBG**: Muestra o no el overlay.<br> **variant**: Recibe la posición del modal, por defecto está centrado, si no puede recibir "top" o "bottom".',
      type: 'text',
      control: { type: 'none' },
    },
    header: {
      name: 'Header',
      description: '**closeIcon**: Recibe la funcionalidad para cerrar el modal y muestra el icono X en la margen superior izquierdo. <br> **text**: Título del modal. <br> **variant**: Array donde la primera posición, es donde queremos que se ubique el título "start" o "center", y la segunda posición es el tamaño del texto "l" o "sm". ',
      type: 'text',
      control: { type: 'none' },
    },
    body: {
      name: 'Body',
      description: 'No hay variantes es lo que queremos que se vea en el centro del modal.',
      type: 'text',
      control: { type: 'none' },
    },
    footer: {
      name: 'Footer',
      description: '**variant**: Posicionamiento de los botones "start", "center", "end".',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const base = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show base toast</Button>
        <br />
        <br />
        {openAlert && (
        <Toast variant='base' text="Seleccione una propiedad" closeFunction={setOpenAlert}/>
        )}
      </React.Fragment>
    )
  })

export const normal = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show normal toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='base' text="Seleccione una propiedad" closeFunction={setOpenAlert}/>
        )}
      </React.Fragment>
    )
  })

export const alert = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast icon={'icon-alertas'} variant="alert" text="Alert message" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const check = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show check toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant="check" text="Success message" icon={'icon-check'} closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const error = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show error toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant="error" text="Error message" icon={'icon-error'} closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
export const loading = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show loading toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant="loading" text="Cargando..." variantLoader={'spinner'} closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
export const loadingWithoutCloseButton = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show loading toast without close icon button</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant="loading" text="Cargando..." variantLoader={'spinner'} closeFunction={setOpenAlert} hideCloseIcon />
        )}
      </React.Fragment>
    )
  })
export const exporting = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show export toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant="loading" text="Exportando..." variantLoader={'spinner'} closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
export const success = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show success toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant="success" text="Report export ready!" textDownload={'Download'} icon='icon-check' closeFunction={setOpenAlert} variantText='bodyBold.fontSize14' download={() => { console.log('hola, soy un texto que se le pasa al onclick para descargar') }}/>
        )}
      </React.Fragment>
    )
  })
export const withSubtitle = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show toast with subtitle</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant="error" text="Error message" subtitle="Error subtitle" icon={'icon-error'} closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const withCloseIconNeighbor = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show toast with close icon neighbor</Button>
        <br />
        <br />
        {openAlert && (
          <Toast
            variant="error"
            text="Error message"
            subtitle="Error subtitle"
            icon={'icon-error'}
            closeIconNeighbor={<Text color="white" fontWeight="700"> Hey!</Text>}
            closeFunction={setOpenAlert}
          />
        )}
      </React.Fragment>
    )
  })
