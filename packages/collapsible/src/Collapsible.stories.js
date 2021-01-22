import React from 'react'

import { Collapsible } from '.'

export default {
  component: Collapsible,
  title: 'Collapsible',
}

export const normal = () =>
  React.createElement(() => {
    const [open, setOpen] = React.useState(false)
    return (
      <Collapsible width={1 / 3} isOpen={open}>
        <Collapsible.Button
          onClick={() => setOpen(!open)}
          variant="default"
          borderBottom="1px solid #e7e7e6"
        >
          Estado
        </Collapsible.Button>
        <Collapsible.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Collapsible.Body>
      </Collapsible>
    )
  })
