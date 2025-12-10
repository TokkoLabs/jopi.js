/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Box } from '@quintoandar-tokko/box'
import { Tags } from '@quintoandar-tokko/tags'

const wrappedReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REST_ITEM':
      return {
        ...state,
        restItems: [...state.restItems, action.payload],
      }
    case 'DELETE_REST_ITEM':
      return {
        ...state,
        restItems: [],
      }
  }
}

export const Wrapped = ({
  items,
  fnClose,
  widthRestItemsWindow,
  printKey,
  tagVariant,
  clickFn,
  idKey = 'id',
  ...props
}) => {
  const [store, dispatch] = useReducer(wrappedReducer, { restItems: [] })
  const [showRestItem, setShowRestItems] = useState(false)
  const Ref = useRef(null)
  const refElements = useRef([])
  const RefItemsWindow = useRef(null)
  let widthWrapper = 0
  let widthElements = 0
  let elements = 0

  useEffect(() => {
    elements = Ref.current.children
    widthWrapper = Ref.current.offsetWidth

    for (let index = 0; index < elements.length; index++) {
      if (
        !refElements.current.find((elem) => elem.id === elements[index].id) &&
        !elements[index].className.includes('numberTag')
      ) {
        refElements.current.push({
          ...elements[index],
          width: elements[index].offsetWidth + 5,
          id: elements[index].id,
        })
      }

      if (!elements[index].className.includes('numberTag')) {
        widthElements = widthElements + refElements.current[index].width
      }

      if (widthElements > widthWrapper - 30) {
        elements[index].style.display = elements[index].className.includes(
          'numberTag'
        )
          ? 'inline-flex'
          : 'none'

        if (!elements[index].className.includes('numberTag')) {
          if (
            !store.restItems.find((elem) => elem[idKey] === items[index][idKey])
          ) {
            dispatch({ type: 'ADD_REST_ITEM', payload: items[index] })
          }
        }
      }
    }
  }, [items])

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !RefItemsWindow.current?.contains(event.target) &&
        !event.target.className?.includes('numberTag')
      ) {
        setShowRestItems(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [showRestItem])

  const handleShowRestItems = () => {
    setShowRestItems(!showRestItem)
  }

  const deleteRestItem = (item) => {
    refElements.current = refElements.current.filter(
      (elem) => elem.id !== item[idKey]
    )
    dispatch({ type: 'DELETE_REST_ITEM' })
    fnClose(item)
  }

  return (
    <>
      <Box
        __css={{
          display: 'block',
          alignItems: 'center',
          gap: '5px',
          overflow: widthWrapper,
          whiteSpace: 'nowrap',
        }}
        {...props}
        ref={Ref}
      >
        {items.map((item, i) => (
          <Tags
            key={item[idKey] + i}
            id={item[idKey]}
            variant={tagVariant}
            closeIcon={fnClose ? () => deleteRestItem(item) : false}
            style={{ marginRight: '5px' }}
            onClick={item[clickFn]}
          >
            <Box
              as="p"
              __css={{
                maxWidth: '250px',
                overflow: 'hidden',
                whiteSpace: 'noWrap',
                textOverflow: 'ellipsis',
              }}
            >
              {item[printKey]}
            </Box>
          </Tags>
        ))}

        {store.restItems.length > 0 ? (
          <Tags
            variant={tagVariant}
            className="numberTag"
            onClick={handleShowRestItems}
          >
            {`+${store.restItems.length}`}
          </Tags>
        ) : (
          ''
        )}
      </Box>
      {showRestItem && (
        <Box
          ref={RefItemsWindow}
          __css={{
            padding: '12px 14px',
            position: 'absolute',
            top: '30px',
            background: '#FFFFFF',
            boxShadow: '4px 4px 12px rgba(87, 95, 99, 0.1)',
            borderRadius: '8px',
            width: widthRestItemsWindow,
            zIndex: 100,
          }}
        >
          {store.restItems.map((item, i) => (
            <Tags
              key={item[idKey] + i}
              id={item[idKey]}
              variant={tagVariant}
              closeIcon={fnClose ? () => deleteRestItem(item) : false}
              style={{ marginRight: '5px', marginBottom: '5px' }}
              onClick={item[clickFn]}
            >
              <Box
                as="p"
                __css={{
                  maxWidth: '250px',
                  overflow: 'hidden',
                  whiteSpace: 'noWrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {item[printKey]}
              </Box>
            </Tags>
          ))}
        </Box>
      )}
    </>
  )
}
