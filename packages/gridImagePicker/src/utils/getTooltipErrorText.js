const tooltipSizeErrorDefaultText = 'The file size exceeds the allowed limit'
const tooltipAspectRatioErrorDefaultText = 'The aspect ratio of this image is not within the allowed range'
const tooltipFetchErrorDefaultText = 'The image cannot be loaded'

export const getTooltipErrorText = (item, texts) => {
  if (item.fetchError) return texts.fetchError ?? tooltipFetchErrorDefaultText
  if (item.sizeError) return texts.sizeError ?? tooltipSizeErrorDefaultText
  if (item.aspectRatioError) return texts.aspectRatioError ?? tooltipAspectRatioErrorDefaultText

  return null
}
