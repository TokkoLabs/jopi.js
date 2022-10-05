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
  const x = e.clientX //- e.target.offsetLeft
  const y = e.clientY //- e.target.offsetTop
  const positionParent = document.getElementById(parentId).getBoundingClientRect()
  const positionTooltip = document.getElementById(tooltipId).getBoundingClientRect()
  console.log('y: ' + y + ' ; top:' + positionParent.top)
  console.log('y: ' + y + ' ; bottom:' + positionParent.bottom)
  console.log(x < positionTooltip.left && (y < positionParent.top || y > positionParent.bottom))
  // x < positionTooltip.left && y < positionTooltip.top && y > positionTooltip.bottom
  return !((placement === 'right' && 
    ((x > positionTooltip.right || y < positionTooltip.top || y > positionTooltip.bottom) ||
    (x < positionTooltip.left && (y < positionParent.top || y > positionParent.bottom))))) /*||
    (placement === 'left' && (x > positionParent.left || x < positionTooltip.left || y < positionTooltip.top || y > positionTooltip.bottom)) ||
    (placement === 'top' && (y > positionParent.top || y < positionTooltip.top || x < positionTooltip.left || x > positionTooltip.right)) ||
    (placement === 'bottom' && (y < positionParent.bottom || y > positionTooltip.bottom || x < positionTooltip.left || x > positionTooltip.right)))*/
}


export const isMouseOutJoin = (e, joinId, placement) => {
  const x = e.clientX //- e.target.offsetLeft
  const y = e.clientY //- e.target.offsetTop
  const positionJoin = document.getElementById(joinId).getBoundingClientRect()
  /*console.log(positionJoin)
  console.log('y: ' + y + ' ; top:' + positionJoin.top)
  console.log('y: ' + y + ' ; bottom:' + positionJoin.bottom)*/
  
  return !((placement === 'right' && (y < positionJoin.top || y > positionJoin.bottom)))/* ||
    (placement === 'left' && (x > joinParentTootip.left || x < joinParentTootip.left || y < joinParentTootip.top || y > joinParentTootip.bottom)) ||
    (placement === 'top' && (y > joinParentTootip.top || y < joinParentTootip.top || x < joinParentTootip.left || x > joinParentTootip.right)) ||
    (placement === 'bottom' && (y < joinParentTootip.bottom || y > joinParentTootip.bottom || x < joinParentTootip.left || x > joinParentTootip.right)))*/
}

export const isMouseOutParent = (e, parentId, placement) => {
  const x = e.clientX //- e.target.offsetLeft
  const y = e.clientY //- e.target.offsetTop
  const positionParent = document.getElementById(parentId).getBoundingClientRect()
  console.log(positionParent)
  /*console.log('y: ' + y + ' ; top:' + positionParent.top)
  console.log('y: ' + y + ' ; bottom:' + positionParent.bottom)
  console.log(x < positionParent.left)*/

  return !((placement === 'right' && (x < positionParent.left || y < positionParent.top || y > positionParent.bottom)))/* ||
    /*(placement === 'left' && (x > positionParent.left || x < positionTooltip.left || y < positionTooltip.top || y > positionTooltip.bottom)) ||
    (placement === 'top' && (y > positionParent.top || y < positionTooltip.top || x < positionTooltip.left || x > positionTooltip.right)) ||
    (placement === 'bottom' && (y < positionParent.bottom || y > positionTooltip.bottom || x < positionTooltip.left || x > positionTooltip.right)))*/
}


  /*document.getElementById(parentId).append(
    <div id='joinParentTootip'
      style={{ backgroundColor: 'green' , width: '18px', height: '32px', position: absolute }}
    />
    );*/