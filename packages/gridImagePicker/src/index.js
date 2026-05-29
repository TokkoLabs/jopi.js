import React from 'react'
import { DndContext, closestCenter, MouseSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import { Box } from '@quintoandar-tokko/box'
import ImageItem from './ImageItem'
import useGridImagePicker from './hooks/useGridImagePicker'
import '../styles/GridImagePicker.css'

/**
 * A grid-based image picker component with sortable and selectable images.
 *
 * @param {Object} props - The props for GridImagePicker.
 * @param {Array<{src: string, editedSrc?: string}>} props.listOfImages - Array of image objects to display in the grid.
 *        An image is considered editable/edited when it has an `editedSrc`; that enables the Original/Editada switch.
 * @param {number} [props.maxSelectablePreferenceByUser=10] - Maximum number of images that can be selected by the user.
 *        Default is 10. This value is a preference; if there are fewer images available than this number, it will adjust accordingly.
 * @param {number} [props.maxSizeInMB=8] - Maximum size in megabytes for each image. Default is 8 MB. Images exceeding this limit will be marked as an error.
 * @param {number} [props.minAspectRatio] - Minimum aspect ratio allowed for the images. Images that don't meet this ratio will be marked as an error.
 * @param {number} [props.maxAspectRatio] - Maximum aspect ratio allowed for the images. Images that exceed this ratio will be marked as an error.
 * @param {Function} [props.onChange] - Optional callback function invoked whenever the internal state of images changes.
 *        Called with the updated list of items as `(items) => onChange(items)`. Each item exposes `isEditedActive`
 *        (whether the edited version is currently being shown); combine it with `editedSrc` to know which version is in use.
 * @param {Function} [props.onSwitchChange] - Optional callback invoked when the Original/Editada switch changes, both on user
 *        toggle and on the automatic flip after an image is (re)edited. Called with `(item, isEditedActive)`.
 * @param {Function} [props.sizeFetcher] - Optional fetch function to get the size of the images. Default: (src) => fetch(src)
 * @param {Object} props.texts - Nested texts
 */
export const GridImagePicker = ({
  listOfImages,
  maxSelectablePreferenceByUser = 10,
  maxSizeInMB = 8,
  minAspectRatio,
  maxAspectRatio,
  onChange,
  onEdit = null,
  onSwitchChange,
  texts,
  sizeFetcher,
}) => {
  const { attributes, methods } = useGridImagePicker({
    listOfImages,
    maxSelectablePreferenceByUser,
    maxSizeInMB,
    minAspectRatio,
    maxAspectRatio,
    onChange,
    onSwitchChange,
  })
  const { items, config, status } = attributes
  const {
    handleClickItem,
    handleUpdateItem,
    handleSwitchChange,
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
          disabled={status.numberOfCheckedItems === config.maxSelectable || !status.itemsAreReady}
        >
          Seleccionar {status.itemsAreReady ? config.maxSelectable : 0}
        </Box>
        <Box
          as="button"
          className="gridButton gridButtonDeselect"
          onClick={handleDeselectAll}
          disabled={status.numberOfCheckedItems === 0}
        >
          Deseleccionar todos
        </Box>
      </Box>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        autoScroll={false}
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
                onEdit={onEdit}
                onSwitchChange={handleSwitchChange}
                handleUpdateItem={handleUpdateItem}
                texts={texts}
                sizeFetcher={sizeFetcher}
              />
            ))}
          </Box>
        </SortableContext>
      </DndContext>
    </Box>
  )
}

export default GridImagePicker
