export const isItemClickable = (item, isMaxSelectableReached, itemsAreReady) => {
  const { loading, sizeError, fetchError, aspectRatioError, checked } = item
  // easier to corroborate the opposite
  const isUnclickable = loading || sizeError || fetchError || aspectRatioError || (!checked && isMaxSelectableReached) || !itemsAreReady

  return !isUnclickable
}

export const isDisabledCheckbox = (item, isMaxSelectableReached) => {
  const { sizeError, fetchError, aspectRatioError, checked } = item
  const isDisabled = !sizeError && !fetchError && !aspectRatioError && !checked && isMaxSelectableReached

  return isDisabled
}
