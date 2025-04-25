const tooltipSizeErrorDefaultText = 'The file size exceeds the allowed limit'
const tooltipAspectRatioErrorDefaultText =
  'The aspect ratio of this image is not within the allowed range'
const tooltipFetchErrorDefaultText = 'The image cannot be loaded'
const tooltipImageEditionSuggestionText = 'Crop the image to publish it'

export const getTooltipErrorText = (item, texts, editable) => {
  if (item.fetchError) {
    return texts.fetchError ?? tooltipFetchErrorDefaultText
  }
  if (item.sizeError && !editable) {
    return texts.sizeError ?? tooltipSizeErrorDefaultText
  }
  if (item.aspectRatioError && !editable) {
    return texts.aspectRatioError ?? tooltipAspectRatioErrorDefaultText
  }
  if ((item.aspectRatioError || item.sizeError) && editable) {
    return texts.cropImageSuggestion ?? tooltipImageEditionSuggestionText
  }

  return null
}
