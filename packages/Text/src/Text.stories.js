import React from 'react'

import { Text, Heading } from '.'

export default {
  component: Text,
  title: 'Text',
}

export const all = () => (
  <React.Fragment>
    <Heading as="h1" variant="heading.0">
      Heading 1
    </Heading>
    <Heading as="h2" variant="heading.1">
      Heading 2
    </Heading>
    <Heading as="h3" variant="heading.2">
      Heading 3
    </Heading>
    <Heading as="h4" variant="heading.3">
      Heading 4
    </Heading>
    <Heading as="h5" variant="heading.4">
      Heading 5
    </Heading>
    <Heading as="h6" variant="heading.5">
      Heading 6
    </Heading>
    <Text variant="subtitle.0">Subtitle 1</Text>
    <Text variant="subtitle.1">Subtitle 2</Text>
    <Text variant="label">Label</Text>
    <Text variant="button.0">Button 1</Text>
    <Text variant="button.1">Button 2</Text>
    <Text variant="caption.0">Caption 1</Text>
    <Text variant="caption.1">Caption 2</Text>
    <Text variant="body.0">Body 1</Text>
    <Text variant="body.1">Body 2</Text>
    <Text variant="small">Small text</Text>
  </React.Fragment>
)
