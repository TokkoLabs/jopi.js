import React, { useEffect, useRef, useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '@oneloop/box'
import { Check, Icon } from '@oneloop/icons'
import useSize from './hooks/useSize'
import useAspectRatio from './hooks/useAspectRatio'
import { getTooltipErrorText } from './utils/getTooltipErrorText'
import { isItemClickable } from './utils/manageItem'
import '../styles/ImageItem.css'
import '../styles/ImageItemBlanket.css'
import '../styles/ImageItemCover.css'
import '../styles/ImageItemSmallElements.css'
import '../styles/ImageItemTooltip.css'

const ImageItem = ({
  item,
  handleClick,
  handleUpdateItem,
  onEdit,
  status,
  config,
  texts,
  sizeFetcher,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })
  const [size, isLoadingSize, isErrorSize] = useSize(item.src, sizeFetcher)
  const [height, width, aspectRatio, isLoadingAspectRatio, isErrorAspectRatio] = useAspectRatio(item.src)
  const wrapperRef = useRef(null)
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 })
  const [isTooltipShowable, setIsTooltipShowable] = useState(false)

  const { isDraggingActive, isMaxSelectableReached, itemsAreReady } = status
  const { maxSizeInMB, minAspectRatio, maxAspectRatio } = config
  const isLoading = item.loading
  const isError = item.sizeError || item.aspectRatioError || item.fetchError
  const isFizableError = !item.fetchError && onEdit

  const tooltipErrorText = getTooltipErrorText(item, texts, onEdit)
  const backgroundImage =
    item.loading || item.fetchError ? '' : `url(${item.src})`
  const unclickable = !isItemClickable(
    item,
    isMaxSelectableReached,
    itemsAreReady
  )

  useEffect(() => {
    const handleHideTooltip = () => {
      setIsTooltipShowable(false)
    }

    document.addEventListener('wheel', handleHideTooltip)
    document.addEventListener('scroll', handleHideTooltip)

    return () => {
      document.removeEventListener('wheel', handleHideTooltip)
      document.removeEventListener('scroll', handleHideTooltip)
    }
  }, [])

  useEffect(() => {
    const id = item.id
    const sizeError = !isNaN(maxSizeInMB) && (size > maxSizeInMB)
    const aspectRatioError = (!isNaN(maxAspectRatio) && aspectRatio > maxAspectRatio) || (!isNaN(minAspectRatio) && aspectRatio < minAspectRatio)
    const fetchError = isErrorSize || isErrorAspectRatio
    const loading = isLoadingSize || isLoadingAspectRatio

    handleUpdateItem({ id, size, sizeError, height, width, aspectRatio, aspectRatioError, fetchError, loading })
  }, [size, isLoadingSize, isErrorSize, aspectRatio, isLoadingAspectRatio, isErrorAspectRatio])

  const calculateTooltipPosition = () => {
    const parent = document.querySelector('.gridImagePickerContainer')

    const parentRects = parent.getBoundingClientRect()
    const imageRects = wrapperRef.current.getBoundingClientRect()

    const left = imageRects.left - parentRects.left + imageRects.width / 2
    const top = imageRects.top - parentRects.top

    setTooltipPosition({ left, top })
  }

  const handleMouseMove = () => {
    const shouldShowTooltip = Boolean(tooltipErrorText)
    calculateTooltipPosition()
    setIsTooltipShowable(shouldShowTooltip)
  }

  const handleEdit = (e) => {
    e.stopPropagation()
    onEdit(item)
  }

  return (
    <Box className="imageItemOuterWrapper">
      <Box
        ref={(node) => {
          setNodeRef(node)
          wrapperRef.current = node
        }}
        as="button"
        className="imageItemWrapper"
        onClick={() =>
          isFizableError && isError ? onEdit(item) : handleClick(item)
        }
        onMouseMove={handleMouseMove}
        data-dragging={isDraggingActive}
        __css={{ backgroundImage }}
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
        }}
        { ...attributes }
        {...listeners }
      >
        <Box
          className="imageItemBlanket"
          data-light={unclickable}
          data-dark={item.checked}
          data-grey={isError}
        />

        <Box className="imageItemCount" data-visible={item.checked}>
          {item.position}
        </Box>

        <Box className="imageItemCover" data-visible={item.position === 1}>
          <Box className="imageItemCoverText"> {texts.cover} </Box>
        </Box>

        <Box className="imageItemCheckbox" data-active={item.checked} data-visible={!unclickable}>
          <Check className="imageItemIconCheck" color="white" />
        </Box>

        <Box className="imageItemError" data-visible={isError && !isLoading}>
          <Icon icon="icon-error" className="imageItemIconError" />
        </Box>
        <Box
          className="imageItemEdit"
          data-visible={isFizableError && !isLoading}
          onClick={(e) => handleEdit(e)}
        >
          <Icon icon="icon-editar" className="imageItemIconEdit" />
        </Box>
      </Box>

      <Box
        className="imageItemTooltip"
        data-showable={isTooltipShowable}
        __css={{ left: tooltipPosition.left, top: tooltipPosition.top }}
      >
        {tooltipErrorText}
      </Box>
    </Box>
  )
}

export default ImageItem
