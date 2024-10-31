import React from 'react'
import { DndContext, closestCenter, MouseSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import { Box } from '@oneloop/box'
import ImageItem from './ImageItem'
import useGridImagePicker from '../hooks/useGridImagePicker'
import '../styles/GridImagePicker.css'

/**
 * A grid-based image picker component with sortable and selectable images.
 *
 * @param {Object} props - The props for GridImagePicker.
 * @param {string[]} props.listOfSrc - Array of image URLs to display in the grid.
 * @param {number} [props.maxSelectablePreferenceByUser=10] - Maximum number of images that can be selected by the user.
 *        Default is 10. This value is a preference; if there are fewer images available than this number, it will adjust accordingly.
 * @param {number} [props.maxSizeInMB=8] - Maximum size in megabytes for each image. Default is 8 MB. Images exceeding this limit will be marked as an error.
 * @param {number|null} [props.minAspectRatio=null] - Minimum aspect ratio allowed for the images. Images that don't meet this ratio will be marked as an error.
 * @param {number|null} [props.maxAspectRatio=null] - Maximum aspect ratio allowed for the images. Images that exceed this ratio will be marked as an error.
 * @param {Function} [props.onChange] - Optional callback function invoked whenever the internal state of images changes.
 *        Called with the updated list of items as `(items) => onChange(items)`.
 */
export const GridImagePicker = ({
  listOfSrc,
  maxSelectablePreferenceByUser = 10,
  maxSizeInMB = 8,
  minAspectRatio = null,
  maxAspectRatio = null,
  onChange,
}) => {
  const { attributes, methods } = useGridImagePicker({
    listOfSrc,
    maxSelectablePreferenceByUser,
    maxSizeInMB,
    minAspectRatio,
    maxAspectRatio,
    onChange,
  })
  const { items, config, status } = attributes
  const {
    handleClickItem,
    handleUpdateItem,
    handleDeselectAll,
    handleSelectAll,
    handleDragStart,
    handleDragEnd,
  } = methods

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  )
  return (
    <Box className="gridImagePickerContainer">
      <Box className="gridButtonsWrapper">
        <Box
          as="button"
          className="gridButton gridButtonSelect"
          onClick={handleSelectAll}
          disabled={status.itemsCheckedCount === config.maxSelectable || !status.itemsAreReady}
        >
          Select {status.itemsAreReady ? config.maxSelectable : 0}
        </Box>
        <Box
          as="button"
          className="gridButton gridButtonDeselect"
          onClick={handleDeselectAll}
          disabled={status.itemsCheckedCount === 0}
        >
          Deselect all
        </Box>
      </Box>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Box as="section" className="gridImagePicker">
            {items.map((item) => (
              <ImageItem
                key={item.id}
                item={item}
                status={status}
                config={config}
                handleClick={handleClickItem}
                handleUpdateItem={handleUpdateItem}
              />
            ))}
          </Box>
        </SortableContext>
      </DndContext>
    </Box>
  )
}

export default GridImagePicker
