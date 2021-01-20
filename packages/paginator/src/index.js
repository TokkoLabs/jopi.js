import React from 'react'
import { Box } from '@oneloop/box'

export const Paginator = (props) => {
  const state = {
    currentPage: 1,
    total: 686,
    perPage: 10,
  }

  return (
    <Box
      currentPage={currentPage}
      total={total}
      perPage={perPage}
      handlePageChanged={this.handlePageChanged}
    />
  )
}
