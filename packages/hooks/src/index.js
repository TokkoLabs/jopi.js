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
