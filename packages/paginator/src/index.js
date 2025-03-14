import React from 'react'
import { Box } from '@oneloop/box'
import _ from 'lodash'
import { Icon } from '@oneloop/icons'

export const Paginator = ({
  currentPage,
  total,
  perPage,
  changePageNumber,
  sx,
  selectedPageStyle,
  ...props
}) => {
  const lastPage = () => {
    return Math.max(Math.ceil(total / perPage), 1)
  }

  const makeUrlWindow = () => {
    // small slider
    if (lastPage() < 12) {
      return {
        first: _.range(1, lastPage() + 1),
        slider: null,
        last: null,
      }
    }

    // url slider
    const onBothSide = 6

    // if slider too close to beginning
    if (currentPage <= onBothSide) {
      return {
        first: _.range(1, onBothSide + 3),
        slider: null,
        last: _.range(lastPage() - 1, lastPage() + 1),
      }
    }

    // if slider too close to ending
    if (currentPage > lastPage() - onBothSide) {
      return {
        first: _.range(1, 3),
        slider: null,
        last: _.range(lastPage() - (onBothSide + 2), lastPage() + 1),
      }
    }

    // get full slider
    return {
      first: _.range(1, 3),
      slider: _.range(currentPage - 3, currentPage + 4),
      last: _.range(lastPage() - 1, lastPage() + 1),
    }
  }

  const elements = () => {
    const urlWindow = makeUrlWindow()

    return _.compact([
      urlWindow.first,
      Array.isArray(urlWindow.slider) ? '...' : null,
      urlWindow.slider,
      Array.isArray(urlWindow.last) ? '...' : null,
      urlWindow.last,
    ])
  }

  const onFirstPage = () => {
    return currentPage <= 1
  }

  const hasMorePages = () => {
    return currentPage < lastPage()
  }

  const changePage = (page, e) => {
    e.preventDefault()
    changePageNumber(page)
  }

  if (
    total < 0 ||
    perPage < 1 ||
    currentPage < 1 ||
    (total < perPage && currentPage > 1) ||
    (total > perPage &&
      total % perPage === 0 &&
      currentPage > total / perPage) ||
    (total > perPage &&
      total % perPage !== 0 &&
      currentPage > 1 + total / perPage)
  ) {
    return (
      <Box>
        {'<'} {'>'}{' '}
      </Box>
    )
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Nunito Sans',
        fontSize: '11.11px',
        cursor: 'pointer',
        color: '#2E393F',
        fontWeight: '600',
      }}
      {...sx}
    >
      {!onFirstPage() && <Box
        sx={{
          padding: '8px',
          borderRadius: '6px',
          '&:hover': {
            background: '#F3F6F8',
          },
        }}
        onClick={(e) => changePage(currentPage - 1, e)}
      >
        <Icon icon='icon-atras' fontSize='16px'/>
      </Box>}
      {elements().map((element, index) => {
        const Element = () => {
          if (typeof element === 'string') {
            return (
              <Box
                sx={{
                  padding: '8px',
                }}
              >
                {element}
              </Box>
            )
          }
          if (Array.isArray(element)) {
            return element.map((page) => {
              if (page === currentPage) {
                return (
                  <Box
                    sx={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      display: 'grid',
                      placeItems: 'center',
                      color: '#FFF',
                      background: '#586A74',
                      userSelect: 'none',
                    }}
                    style={selectedPageStyle}
                    key={page}
                  >
                    <span>{page}</span>
                  </Box>
                )
              }
              return (
                <Box
                  sx={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    display: 'grid',
                    placeItems: 'center',
                    userSelect: 'none',

                    '&:hover': {
                      background: '#F3F6F8',
                    },
                  }}
                  key={page}
                  onClick={(e) => changePage(page, e)}
                >
                  <span>{page}</span>
                </Box>
              )
            })
          }
          return null
        }
        return <Element key={index} />
      })}
      {hasMorePages() && <Box
        sx={{
          padding: '8px',
          borderRadius: '6px',
          '&:hover': {
            background: '#F3F6F8',
          },
        }}
        onClick={(e) => changePage(currentPage + 1, e)}
      >
        <Icon icon='icon-siguiente' fontSize='16px'/>
      </Box>}
    </Box>
  )
}
