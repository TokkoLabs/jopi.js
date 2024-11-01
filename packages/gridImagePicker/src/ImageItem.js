import React, { useEffect } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '@oneloop/box'
import { Check, Icon } from '@oneloop/icons'
import useSize from '../hooks/useSize'
import useAspectRatio from '../hooks/useAspectRatio'
import { getTooltipErrorText } from '../utils/getTooltipErrorText'
import '../styles/ImageItem.css'

const ImageItem = ({
  item,
  handleClick,
  handleUpdateItem,
  status,
  config,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })
  const [size, isLoadingSize, isErrorSize] = useSize(item.src)
  const [aspectRatio, isLoadingAspectRatio, isErrorAspectRatio] = useAspectRatio(item.src)
  const { isDraggingActive, isMaxSelectableReached, itemsAreReady } = status
  const { maxSizeInMB, minAspectRatio, maxAspectRatio } = config
  const isLoading = item.loading
  const isError = item.sizeError || item.aspectRatioError || item.fetchError

  const tooltipErrorText = getTooltipErrorText(item)
  const backgroundImage = item.loading || item.fetchError ? '' : `url(${item.src})`
  const unclickable = (isMaxSelectableReached && !item.checked) || isError || isLoading || !itemsAreReady

  useEffect(() => {
    const id = item.id
    const sizeError = !isNaN(maxSizeInMB) && (size > maxSizeInMB)
    const aspectRatioError = (!isNaN(maxAspectRatio) && aspectRatio > maxAspectRatio) || (!isNaN(minAspectRatio) && aspectRatio < minAspectRatio)
    const fetchError = isErrorSize || isErrorAspectRatio
    const loading = isLoadingSize || isLoadingAspectRatio

    handleUpdateItem({ id, size, sizeError, aspectRatio, aspectRatioError, fetchError, loading })
  }, [size, isLoadingSize, isErrorSize, aspectRatio, isLoadingAspectRatio, isErrorAspectRatio])

  return (
    <Box
      ref={setNodeRef}
      as="button"
      className="imageItemWrapper"
      onClick={() => handleClick(item)}
      data-disabled={unclickable}
      data-error={isError}
      data-dragging={isDraggingActive}
      __css={{ backgroundImage }}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      { ...attributes }
      {...listeners }
    >
      <Box className="imageItemCount" data-visible={item.checked}>
        {item.position}
      </Box>

      <Box className="imageItemCover" data-visible={item.position === 1}>
        <Box className="imageItemCoverText"> Cover </Box>
      </Box>

      <Box className="imageItemCheckbox" data-active={item.checked} data-visible={!unclickable}>
        <Check className="imageItemIconCheck" color="white" />
      </Box>

      <Box className="imageItemError" data-visible={isError && !isLoading}>
        <Icon icon="icon-error" className="imageItemIconError" />
      </Box>

      <Box className="imageItemAspectRatioTooltip">
        {tooltipErrorText}
      </Box>
    </Box>
  )
}

export default ImageItem