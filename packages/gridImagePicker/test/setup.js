export const mockFetch = () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
      blob: () => Promise.resolve(new window.Blob(['mock image data'], { type: 'image/jpeg' })),
    })
  )
}

export const restoreFetch = () => {
  delete global.fetch
}
