import React, { useState } from 'react'

import { Tags } from '.'
import { Modal } from '../../modal/src'
import { Button } from '@oneloop/button'

export default {
  component: Tags,
  title: 'Tags',
  argTypes: {
    variant: {
      name: 'variant',
      description: "\n* **Variantes de tags disponibles:** 'secondary',",
      type: 'text',
      control: { type: 'none' },
    },
    closeIcon: {
      name: 'closeIcon',
      description:
        'Muestra la X para eliminar el tag, recibe la funcionalidad correspondiente.',
      type: 'funct',
      control: { type: 'none' },
    },
  },
}

export const Secondary = () => {
  const [check, setCheck] = useState(false)

  const ModalCheck = () => {
    return (
      <Modal modalBG variant={'center'}>
        <Modal.Header
          variant={['center', 'sm']}
          text="Do you want to delete Mariana Font?"
        />
        <Modal.Footer variant="center">
          <Button variant="primaryText" onClick={handleCheck}>
            {'No, go back'}
          </Button>
          <Button variant={['primary', 'medium']} onClick={handleCheck}>
            {'Yes, delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const handleCheck = () => setCheck(!check)

  return (
    <>
      {check && <ModalCheck />}
      <Tags variant="secondary" closeIcon={handleCheck}>
        Mariana Font
      </Tags>
    </>
  )
}

export const Warning = () => {
  return <Tags variant="warning" noClick>Mariana Font</Tags>
}

export const Success = () => {
  return <Tags variant="success" noClick>Mariana Font</Tags>
}

export const Dark = () => {
  return <Tags variant="dark" noClick>Mariana Font</Tags>
}

export const Default = () => {
  return <Tags variant="default" noClick>Mariana Font</Tags>
}
