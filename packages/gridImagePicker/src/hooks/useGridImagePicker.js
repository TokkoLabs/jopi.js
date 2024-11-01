import { useCallback, useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import { isItemClickable } from '../utils/manageItem'
import {
  getItemsInitialState,
  getUpdatedItemsWithDecrement,
  getUpdatedItemsWithIncrement,
  refreshItemsPosition,
  fillCheckedItems,
  getSelectAllItems,
  getDeselectAllItems,
} from '../utils/manageListOfItems'

function useGridImagePicker ({
  listOfSrc,
  maxSelectablePreferenceByUser,
  maxSizeInMB,
  minAspectRatio,
  maxAspectRatio,
  onChange,
}) {
  const [isDraggingActive, setIsDraggingActive] = useState(false)
  const [items, setItems] = useState(() => getItemsInitialState(listOfSrc))
  const maxSelectable = Math.min(
    maxSelectablePreferenceByUser,
    items.filter(item => !item.sizeError && !item.aspectRatioError && !item.fetchError).length
  )
  const numberOfCheckedItems = items.filter(item => item.checked).length
  const isMaxSelectableReached = numberOfCheckedItems >= maxSelectable
  const itemsAreReady = items.every(item => !item.loading)

  const config = { maxSizeInMB, minAspectRatio, maxAspectRatio, maxSelectable }
  const status = { isDraggingActive, isMaxSelectableReached, itemsAreReady, numberOfCheckedItems }

  useEffect(() => {
    if (!onChange) return

    onChange(items)
  }, [items])

  useEffect(() => {
    if (!itemsAreReady) return

    const updatedItems = fillCheckedItems(items, maxSelectable)
    setItems(updatedItems)
  }, [itemsAreReady])

  const handleClickItem = useCallback((targetItem) => {
    const isUnclickable = !isItemClickable(targetItem, isMaxSelectableReached)
    if (isUnclickable) return

    const updatedItems = targetItem.checked
      ? getUpdatedItemsWithDecrement(items, targetItem)
      : getUpdatedItemsWithIncrement(items, targetItem)

    const refreshedItems = refreshItemsPosition(updatedItems)
    setItems(refreshedItems)
  }, [isMaxSelectableReached, items])

  const handleSelectAll = useCallback(() => {
    const newItems = getSelectAllItems(items, maxSelectable)
    const refreshedItems = refreshItemsPosition(newItems)
    setItems(refreshedItems)
  }, [items, maxSelectable])

  const handleDeselectAll = useCallback(() => {
    const newItems = getDeselectAllItems(items)
    setItems(newItems)
  }, [items])

  const handleUpdateItem = useCallback(({ id, ...restOfKeys }) => {
    const newItems = items.map(item => item.id === id
      ? { ...item, ...restOfKeys }
      : item
    )
    setItems(newItems)
  }, [items])

  const handleDragStart = () => {
    setIsDraggingActive(true)
  }

  const handleDragEnd = ({ active, over }) => {
    setIsDraggingActive(false)
    if (active.id === over.id) return

    const oldIndex = items.findIndex(item => item.id === active.id)
    const newIndex = items.findIndex(item => item.id === over.id)
    const reorderedItems = arrayMove(items, oldIndex, newIndex)
    const refreshedItems = refreshItemsPosition(reorderedItems)

    setItems(refreshedItems)
  }

  return {
    attributes: { items, config, status },
    methods: {
      handleClickItem,
      handleUpdateItem,
      handleDeselectAll,
      handleSelectAll,
      handleDragStart,
      handleDragEnd,
    },
  }
}

export default useGridImagePicker
