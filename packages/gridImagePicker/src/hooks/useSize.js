import { useEffect, useState } from 'react'

const defaultFetcher = async (url) => fetch(url)

function useSize (src, sizeFetcher = defaultFetcher) {
  const [data, setData] = useState({
    size: 0,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const fetchImageSize = async (src) => {
      try {
        setData({ size: 0, loading: true, error: false })
        const response = await sizeFetcher(src)

        const blob = await response.blob()
        const sizeInMegaBytes = (blob.size / 1024) / 1024

        setData({ size: sizeInMegaBytes, loading: false, error: false })
      } catch (error) {
        console.error(error)
        setData({ size: 0, loading: false, error: true })
      }
    }

    if (src) {
      fetchImageSize(src)
    }
  }, [src])

  return [data.size, data.loading, data.error]
}

export default useSize
