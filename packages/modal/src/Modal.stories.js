import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { Button } from '@oneloop/button'

import { Modal } from '.'

export default {
  component: Modal,
  title: 'Modal',
}

export const normal = () =>
  React.createElement(() => {
    const [open, toggle] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={toggle}>Show modal</Button>
        {open && (
          <Modal>
            <Modal.Header>
              <Text>Tokko Broker</Text>
              <Button
                variant="default"
                size="small"
                onClick={toggle}
                sx={{ bg: 'inherit', border: 0 }}
              >
                X
              </Button>
            </Modal.Header>
            <Modal.Body>
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
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button width={1} variant="secondary" onClick={toggle}>
                Accept
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </React.Fragment>
    )
  })
