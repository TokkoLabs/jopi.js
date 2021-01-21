import React, { useState } from 'react'
import { Paginator } from '.'
import { Text } from '@oneloop/text'

export default {
  component: Paginator,
  title: 'Paginator',
}

export const normal = () =>
  React.createElement(() => {
    const [actualPage, setActualPage] = useState(1)
    return (
      <React.Fragment>
        <Text>{actualPage}</Text>
        <Paginator
          currentPage={actualPage}
          total={1000}
          perPage={10}
          changePageNumber={setActualPage}
        />
      </React.Fragment>
    )
  })

export const withErrors = () =>
  React.createElement(() => {
    const [actualPage, setActualPage] = useState(-1)
    return (
      <React.Fragment>
        <Text>{actualPage}</Text>
        <Paginator
          currentPage={actualPage}
          total={1000}
          perPage={0}
          changePageNumber={setActualPage}
        />
      </React.Fragment>
    )
  })
