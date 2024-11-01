import { useEffect, useState } from 'react'

function useAspectRatio (src) {
  const [data, setData] = useState({
    aspectRatio: 0,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const fetchAspectRatio = async (src) => {
      try {
        setData({ aspectRatio: 0, loading: true, error: false })

        const img = new window.Image()
        img.src = src

        img.onload = () => {
          const aspectRatio = img.width / img.height
          setData({ aspectRatio, loading: false, error: false })
        }

        img.onerror = (error) => {
          console.error(error)
          setData({ aspectRatio: 0, loading: false, error: true })
        }
      } catch (error) {
        console.error(error)
        setData({ aspectRatio: 0, loading: false, error: true })
      }
    }

    if (src) {
      fetchAspectRatio(src)
    }
  }, [src])

  return [data.aspectRatio, data.loading, data.error]
}

export default useAspectRatio
