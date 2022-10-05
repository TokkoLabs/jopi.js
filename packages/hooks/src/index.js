import { useCallback, useState, useEffect } from 'react'
import _ from 'lodash'

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(() => setState(state => !state), [])

  return [state, toggle]
}

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export const useFilterData = (data, key) => {
  const [value, setValue] = useState('')

  const handleFilter = data.filter(data =>
    _.values(_.get(data, key, data)).some(val =>
      _.includes(val.toString().toLowerCase(), value.toLowerCase())
    )
  )

  return [handleFilter, setValue]
}

export const isMouseOutTooltip = (e, tooltipId, parentId, placement) => {
  const x = e.clientX
  const y = e.clientY
  const positionParent = document.getElementById(parentId).getBoundingClientRect()
  const positionTooltip = document.getElementById(tooltipId).getBoundingClientRect()
  return !((placement === 'right' && ((x > positionTooltip.right || y < positionTooltip.top || y > positionTooltip.bottom) ||
    (x < positionTooltip.left && (y < positionParent.top || y > positionParent.bottom)))) ||
    (placement === 'left' && ((x < positionTooltip.left || y < positionTooltip.top || y > positionTooltip.bottom) ||
    (x > positionTooltip.right && (y < positionParent.top || y > positionParent.bottom)))) ||
    (placement === 'bottom' && ((y > positionTooltip.bottom || x < positionTooltip.left || x > positionTooltip.right) ||
    (y < positionTooltip.top && (x < positionParent.left || x > positionParent.right)))) ||
    (placement === 'top' && ((y < positionTooltip.top || x < positionTooltip.left || x > positionTooltip.right) ||
    (y > positionTooltip.bottom && (x < positionParent.left || x > positionParent.right)))))
}


export const isMouseOutJoin = (e, joinId, placement) => {
  const x = e.clientX
  const y = e.clientY
  const positionJoin = document.getElementById(joinId).getBoundingClientRect()
  return !(((placement === 'right' || placement === 'left') && (y < positionJoin.top || y > (positionJoin.bottom - 1))) ||
    ((placement === 'bottom' || placement === 'top') && (x < positionJoin.left || x > positionJoin.right)))
}

export const isMouseOutParent = (e, parentId, placement) => {
  const x = e.clientX
  const y = e.clientY
  const positionParent = document.getElementById(parentId).getBoundingClientRect()
  return !((placement === 'right' && (x < positionParent.left || y < positionParent.top || y > positionParent.bottom)) ||
    (placement === 'bottom' && (y < positionParent.top || x < positionParent.left || x > positionParent.right)) ||
    (placement === 'left' && (x > positionParent.right || y < positionParent.top || y > (positionParent.bottom - 1))) ||
    (placement === 'top' && (y > positionParent.bottom || x < positionParent.left || x > positionParent.right)))
}
