export const createMockImageUrl = (width, height, format = 'image/jpeg') => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  context.fillStyle = 'grey'
  context.fillRect(0, 0, width, height)

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(URL.createObjectURL(blob))
    }, format)
  })
}
