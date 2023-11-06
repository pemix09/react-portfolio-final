import { useState, useEffect } from 'react'

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<ScreenOrientationType>('landscape');

  const updateOrientation = (event: Event) => {
    if (window.innerWidth > window.innerHeight) {
      setOrientation('landscape');
    } else {
      setOrientation('portait');
    }
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      updateOrientation
    )
    return () => {
      window.removeEventListener(
        'resize',
        updateOrientation
      )
    }
  }, [])

  return orientation
}

export type ScreenOrientationType = 'portait' | 'landscape';

export default useScreenOrientation