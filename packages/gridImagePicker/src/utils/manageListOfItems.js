import { isItemClickable } from './manageItem'

export const getItemsInitialState = (listOfSrc) => {
  const initializedItem = listOfSrc.map((src, index) => ({
    id: index + 1,
    src,
    checked: false,
    position: 0,
    height: 0,
    width: 0,
    size: 0,
    sizeError: false,
    aspectRatio: 0,
    aspectRatioError: false,
    fetchError: false,
    loading: true,
  }))

  return initializedItem
}

export const getUpdatedItemsWithIncrement = (listOfItems, targetItem) => {
  const maxPosition = Math.max(...listOfItems.map(item => item.position))
  const newItems = listOfItems.map(item => item.id === targetItem.id
    ? { ...targetItem, checked: true, position: maxPosition + 1 }
    : item
  )

  return newItems
}

export const getUpdatedItemsWithDecrement = (listOfItems, targetItem) => {
  const targetItemPosition = targetItem.position
  const newItems = listOfItems.map(item => item.id === targetItem.id
    ? { ...item, checked: false, position: 0 }
    : item.position > targetItemPosition ? { ...item, position: item.position - 1 } : item
  )

  return newItems
}

export const fillCheckedItems = (listOfItems, maxSelectable) => {
  const updatedItems = []
  let nextPosition = 1
  let checkedCount = 0

  for (let index = 0; index < listOfItems.length; index++) {
    const item = listOfItems[index]
    const isSomeError = item.fetchError || item.sizeError || item.aspectRatioError
    const checked = checkedCount < maxSelectable && !isSomeError
    let position = 0

    if (checked) {
      position = nextPosition
      nextPosition++
      checkedCount++
    }

    updatedItems.push({ ...item, checked, position })
  }

  return updatedItems
}

export const refreshItemsPosition = (items) => {
  let currentPosition = 1

  return items.map((item) => ({
    ...item,
    position: item.checked ? currentPosition++ : 0,
  }))
}

export const getSelectAllItems = (listOfItems, maxSelectable) => {
  let numberOfItemsAlreadyChecked = listOfItems.filter(item => item.checked).length
  let newMaxPosition = Math.max(...listOfItems.map(item => item.position)) + 1
  let isMaxSelectableReached = numberOfItemsAlreadyChecked >= maxSelectable

  const newItems = listOfItems.map(item => {
    if (item.checked) return item
    if (isMaxSelectableReached) return item
    if (!isItemClickable(item, isMaxSelectableReached, true)) return item

    const newItem = { ...item, checked: true, position: newMaxPosition }
    newMaxPosition++
    numberOfItemsAlreadyChecked++
    isMaxSelectableReached = numberOfItemsAlreadyChecked >= maxSelectable

    return newItem
  })

  return newItems
}

export const getDeselectAllItems = (listOfItems) => {
  return listOfItems.map(item => ({ ...item, checked: false, position: 0 }))
}
