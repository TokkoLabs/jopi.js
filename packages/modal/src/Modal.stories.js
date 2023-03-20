import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Text } from '@oneloop/text'
import { Button } from '@oneloop/button'

import { Modal } from '.'
import { Box } from '@oneloop/box'

export default {
  component: Modal,
  title: 'Modal',
}

export const bigModal = () => {
  React.createElement(() => {
    const [open, toggle] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={toggle}>Show big modal</Button>
        {open && (
          <Modal modalBG modalShadow>
            <Modal.Header
              closeIcon={toggle}
              textSize="l"
              text="Soy un modal grande"
            />
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
            <Modal.Footer position="end">
              <Button variant='subtleText' onClick={toggle}>{'Label'}</Button>
              <Button variant={['primary', 'large']} onClick={toggle}>{'Label'}</Button>
            </Modal.Footer>
          </Modal>
        )}
      </React.Fragment>
    )
  })
}

export const mediumModal = () => {
  React.createElement(() => {
    const [open, toggle] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={toggle}>Show medium modal</Button>
        {open && (
          <Modal modalBG modalShadow>
            <Modal.Header
              textSize="l"
              text="Medium modal"
            />
            <Modal.Body>
              <Box __css={{ with: '400px', height: '200px' }}>
                <Text>Content</Text>
              </Box>
            </Modal.Body>
            <Modal.Footer position="end">
              <Button variant='subtleText' onClick={toggle}>{'Label'}</Button>
              <Button variant='primaryText' onClick={toggle}>{'Label'}</Button>
            </Modal.Footer>
          </Modal>
        )}
      </React.Fragment>
    )
  })
}

export const smallModal = () => {
  React.createElement(() => {
    const [open, toggle] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={toggle}>Show small modal</Button>
        {open && (
          <Modal modalBG modalShadow>
            <Modal.Header
              headerPosition="center"
              textSize='sm'
              text='Do you want to delete the event?'
            />
            <Modal.Footer position="center">
              <Button variant='primaryText' onClick={toggle}>{'No, go back'}</Button>
              <Button variant={['primary', 'medium']} onClick={toggle}>{'Yes, delete'}</Button>
            </Modal.Footer>
          </Modal>
        )}
      </React.Fragment>
    )
  })
}
