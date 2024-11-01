const tooltipSizeErrorText = 'The weight of this image exceeds the limit allowed by Instagram (8MB)'
const tooltipAspectRatioErrorText = 'The aspect ratio of this image does not fit within the ratios allowed by Instagram'
const tooltipFetchErrorText = 'The image cannot be loaded'

export const getTooltipErrorText = item => {
  if (item.fetchError) return tooltipFetchErrorText
  if (item.sizeError) return tooltipSizeErrorText
  if (item.aspectRatioError) return tooltipAspectRatioErrorText

  return null
}
