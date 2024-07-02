import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { Button } from '@oneloop/button'
import { Modal } from '.'
import { Box } from '@oneloop/box'

export default {
  component: Modal,
  title: 'Modal',
  argTypes: {
    modal: {
      name: 'Modal',
      description:
        '**modalBG**: Muestra o no el overlay.<br> **variant**: Recibe la posición del modal, por defecto está centrado, si no puede recibir "top" o "bottom".',
      type: 'text',
      control: { type: 'none' },
    },
    header: {
      name: 'Header',
      description:
        '**closeIcon**: Recibe la funcionalidad para cerrar el modal y muestra el icono X en la margen superior izquierdo. <br> **text**: Título del modal. <br> **variant**: Array donde la primera posición, es donde queremos que se ubique el título "start" o "center", y la segunda posición es el tamaño del texto "l" o "sm". ',
      type: 'text',
      control: { type: 'none' },
    },
    body: {
      name: 'Body',
      description:
        'No hay variantes es lo que queremos que se vea en el centro del modal.',
      type: 'text',
      control: { type: 'none' },
    },
    footer: {
      name: 'Footer',
      description:
        '**variant**: Posicionamiento de los botones "start", "center", "end".',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const BigModal = () => {
  const [open, toggle] = useToggle(false)
  return (
    <React.Fragment>
      <Button onClick={toggle}>Show big modal</Button>
      {open && (
        <Modal modalBG blockScroll>
          <Modal.Header
            closeIcon={toggle}
            text="Soy un modal grande"
            variant={['start', 'l']}
          />
          <Modal.Body>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Modal.Body>
          <Modal.Footer variant="end">
            <Button variant="subtleText" onClick={toggle}>
              {'Label'}
            </Button>
            <Button variant={['primary', 'large']} onClick={toggle}>
              {'Label'}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </React.Fragment>
  )
}

export const ScrollModal = () => {
  const [open, toggle] = useToggle(false)
  const [open2, toggle2] = useToggle(false)
  return (
    <React.Fragment>
      <Button onClick={toggle}>Show modal</Button>
      {open && (
        <Modal
          modalBG
          blockScroll
          scrollHeight={'500px'}
          fixedCLoseBtn
          closeModal={toggle}
          paddings="10px"
        >
          <Modal.Header text="Soy un modal grande" variant={['start', 'l']} />
          <Modal.Body>
            <Box
              __css={{
                overflow: 'auto',
                height: '408px',
              }}
            >
              <Button onClick={toggle2}>Show modal 2</Button>
              {open2 && (
                <Modal
                  modalBG
                  blockScroll
                  scrollHeight={'100px'}
                  fixedCLoseBtn
                  closeModal={toggle2}
                >
                  <Modal.Body>Holaa</Modal.Body>
                </Modal>
              )}
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </Box>
          </Modal.Body>
        </Modal>
      )}
    </React.Fragment>
  )
}

export const MediumModal = () => {
  const [open, toggle] = useToggle(false)
  return (
    <React.Fragment>
      <Button onClick={toggle}>Show medium modal</Button>
      {open && (
        <Modal modalBG variant={'center'}>
          <Modal.Header variant={['start', 'l']} text="Medium modal" />
          <Modal.Body>
            <Box __css={{ with: '400px', height: '200px' }}>
              <Text>Content</Text>
            </Box>
          </Modal.Body>
          <Modal.Footer variant="end">
            <Button variant="subtleText" onClick={toggle}>
              {'Label'}
            </Button>
            <Button variant="primaryText" onClick={toggle}>
              {'Label'}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </React.Fragment>
  )
}

export const SmallModal = () => {
  const [open, toggle] = useToggle(false)
  return (
    <React.Fragment>
      <Button onClick={toggle}>Show small modal</Button>
      {open && (
        <Modal modalBG variant={'center'}>
          <Modal.Header
            variant={['center', 'sm']}
            text="Do you want to delete the event?"
          />
          <Modal.Footer variant="center">
            <Button variant="primaryText" onClick={toggle}>
              {'No, go back'}
            </Button>
            <Button variant={['primary', 'medium']} onClick={toggle}>
              {'Yes, delete'}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </React.Fragment>
  )
}
