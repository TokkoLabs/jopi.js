import React, { useState } from 'react'
import { Box } from '@oneloop/box'

export const Paginator = (props) => {
  const [state, setState] = useState(props)

  const handlePageChanged = (page) => {
    setState({
      currentPage: page,
      total: props.total,
      perPage: props.perPage,
    })
    // call request to refresh data
  }

  const lastPage = () => {
    const { total, perPage } = props
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

    const { currentPage } = props

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
    return props.currentPage <= 1
  }

  const hasMorePages = () => {
    return props.currentPage < lastPage()
  }

  const previousPage = () => {
    const { currentPage } = props
    return currentPage > 1 ? currentPage - 1 : 1
  }

  const nextPage = () => {
    const { currentPage } = props
    const lastPage = lastPage()
    return lastPage > currentPage ? currentPage + 1 : lastPage
  }

  const changePage = (page, e) => {
    e.preventDefault()
    //const { handlePageChanged } = props;
    handlePageChanged(page)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
        }}
      >
        {onFirstPage() ? (
          <span
            sx={{
              cursor: 'pointer',
              color: '#C8C9CA',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '16px',
              lineHeight: '22px',
            }}
          >
            {'<'}
          </span>
        ) : (
          <span
            sx={{
              cursor: 'pointer',
              color: '#C8C9CA',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '16px',
              lineHeight: '22px',
            }}
            onClick={(e) => changePage(previousPage(), e)}
          >
            {'<'}
          </span>
        )}
      </Box>
      {elements().map((element, index) => {
        const Element = () => {
          if (typeof element === 'string') {
            return (
              <Box
                sx={{
                  cursor: 'pointer',
                  color: '#C8C9CA',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '16px',
                  lineHeight: '22px',
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem',
                }}
              >
                {element}
              </Box>
            )
          }
          if (Array.isArray(element)) {
            return element.map((page) => {
              if (page === props.currentPage) {
                return (
                  <Box
                    sx={{
                      cursor: 'pointer',
                      color: '#D54936',
                      borderBottom: '2px solid #D54936',
                      paddingBottom: '3px',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '16px',
                      lineHeight: '22px',
                      paddingLeft: '0.5rem',
                      paddingRight: '0.5rem',
                    }}
                    key={page}
                  >
                    {page}
                  </Box>
                )
              }
              return (
                <Box
                  sx={{
                    cursor: 'pointer',
                    color: '#C8C9CA',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineHeight: '22px',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                  }}
                  key={page}
                >
                  <span onClick={(e) => changePage(page, e)}>{page}</span>
                </Box>
              )
            })
          }
          return null
        }
        return <Element key={index} />
      })}
      <Box
        sx={{
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
        }}
      >
        {hasMorePages() ? (
          <span
            sx={{
              cursor: 'pointer',
              color: '#C8C9CA',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '16px',
              lineHeight: '22px',
            }}
            onClick={(e) => changePage(nextPage(), e)}
          >
            {'>'}
          </span>
        ) : (
          <span
            sx={{
              cursor: 'pointer',
              color: '#C8C9CA',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '16px',
              lineHeight: '22px',
            }}
          >
            {'>'}
          </span>
        )}
      </Box>
    </Box>
  )
}
