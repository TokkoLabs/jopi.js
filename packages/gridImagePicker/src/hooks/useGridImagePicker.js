import { useEffect, useRef, useState } from 'react'
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
  getItemChanged,
  getItemsWithNewUrl,
} from '../utils/manageListOfItems'

function useGridImagePicker ({
  listOfImages,
  maxSelectablePreferenceByUser,
  maxSizeInMB,
  minAspectRatio,
  maxAspectRatio,
  onChange,
  onSwitchChange,
}) {
  const [isDraggingActive, setIsDraggingActive] = useState(false)
  const [initialUrlList, setInitialUrlList] = useState(listOfImages)
  const [itemNewUrl, setItemNewUrl] = useState(null)
  const [items, setItems] = useState(() => getItemsInitialState(listOfImages))
  const hasAutoSelectedRef = useRef(false)

  useEffect(() => {
    setItemNewUrl(getItemChanged(initialUrlList, listOfImages))
  }, [listOfImages])

  useEffect(() => {
    if (!itemNewUrl) return
    setItems(prevItems => getItemsWithNewUrl(prevItems, itemNewUrl))
    setInitialUrlList(listOfImages)
    setItemNewUrl(null)
  }, [itemNewUrl])

  // Sync `editedSrc` from the source list, matched by positional `id` (robust to duplicate `src` and reordering).
  useEffect(() => {
    setItems(prevItems => {
      let hasChanges = false
      const nextItems = prevItems.map(item => {
        const source = listOfImages[item.id - 1]
        if (!source || source.editedSrc === item.editedSrc) return item
        hasChanges = true
        // No `editedSrc` means nothing to show as edited (the flip-back lives in ImageItem).
        const isEditedActive = source.editedSrc ? item.isEditedActive : false
        return { ...item, editedSrc: source.editedSrc, isEditedActive }
      })
      return hasChanges ? nextItems : prevItems
    })
  }, [listOfImages])

  const maxSelectable = Math.min(
    maxSelectablePreferenceByUser,
    items.filter(item => !item.sizeError && !item.aspectRatioError && !item.fetchError).length
  )
  const numberOfCheckedItems = items.filter((item) => item.checked).length
  const isMaxSelectableReached = numberOfCheckedItems >= maxSelectable
  const itemsAreReady = items.every((item) => !item.loading)

  const config = { maxSizeInMB, minAspectRatio, maxAspectRatio, maxSelectable }
  const status = { isDraggingActive, isMaxSelectableReached, itemsAreReady, numberOfCheckedItems }

  useEffect(() => {
    if (!onChange) return

    onChange(items)
  }, [items])

  useEffect(() => {
    if (!itemsAreReady) return

    // Auto-select only the first time items become ready; later reloads (toggling Original/Editada) re-enter this effect and the flag prevents overriding the user's manual deselection (url changes still run inside `fillCheckedItems`).
    const updatedItems = fillCheckedItems(items, maxSelectable, hasAutoSelectedRef.current)
    hasAutoSelectedRef.current = true
    setItems(updatedItems)
  }, [itemsAreReady])

  const handleClickItem = (targetItem) => {
    const isUnclickable = !isItemClickable(targetItem, isMaxSelectableReached, itemsAreReady)
    if (isUnclickable) return

    const updatedItems = targetItem.checked
      ? getUpdatedItemsWithDecrement(items, targetItem)
      : getUpdatedItemsWithIncrement(items, targetItem)

    const refreshedItems = refreshItemsPosition(updatedItems)
    setItems(refreshedItems)
  }

  const handleSelectAll = () => {
    const newItems = getSelectAllItems(items, maxSelectable)
    const refreshedItems = refreshItemsPosition(newItems)
    setItems(refreshedItems)
  }

  const handleDeselectAll = () => {
    const newItems = getDeselectAllItems(items)
    setItems(newItems)
  }

  const handleUpdateItem = ({ id, ...restOfKeys }) => {
    setItems((prevItems) => {
      let hasNewError = false
      const updatedItems = prevItems.map((item) => {
        if (item.id !== id) return item
        const merged = { ...item, ...restOfKeys }
        // Deselect when the (re)loaded version is errored (e.g. after switching Original/Editada).
        if (merged.checked && (merged.sizeError || merged.aspectRatioError || merged.fetchError)) {
          hasNewError = true
          return { ...merged, checked: false, position: 0 }
        }
        return merged
      })
      return hasNewError ? refreshItemsPosition(updatedItems) : updatedItems
    })
  }

  // Single source of truth for the shown version: stored in `items` (for `onChange`) and reported via `onSwitchChange`.
  const handleSwitchChange = (targetItem, isEditedActive) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === targetItem.id ? { ...item, isEditedActive } : item
      )
    )
    onSwitchChange?.(targetItem, isEditedActive)
  }

  const handleDragStart = () => {
    setIsDraggingActive(true)
  }

  const handleDragEnd = ({ active, over }) => {
    setIsDraggingActive(false)
    // `over` is null when dropped outside a droppable zone: nothing to reorder.
    if (!over || active.id === over.id) return

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
      handleSwitchChange,
      handleDeselectAll,
      handleSelectAll,
      handleDragStart,
      handleDragEnd,
    },
  }
}

export default useGridImagePicker
