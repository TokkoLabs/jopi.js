import { useEffect, useState } from 'react'

function useAspectRatio (src) {
  const [data, setData] = useState({
    height: 0,
    width: 0,
    aspectRatio: 0,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const fetchAspectRatio = async (src) => {
      try {
        setData({ height: 0, width: 0, aspectRatio: 0, loading: true, error: false })

        const img = new window.Image()
        img.src = src

        img.onload = () => {
          const { height } = img
          const { width } = img
          const aspectRatio = img.width / img.height
          setData({ height, width, aspectRatio, loading: false, error: false })
        }

        img.onerror = (error) => {
          console.error(error)
          setData({ height: 0, width: 0, aspectRatio: 0, loading: false, error: true })
        }
      } catch (error) {
        console.error(error)
        setData({ height: 0, width: 0, aspectRatio: 0, loading: false, error: true })
      }
    }

    if (src) {
      fetchAspectRatio(src)
    }
  }, [src])

  return [
    data.height,
    data.width,
    data.aspectRatio,
    data.loading,
    data.error,
  ]
}

export default useAspectRatio
