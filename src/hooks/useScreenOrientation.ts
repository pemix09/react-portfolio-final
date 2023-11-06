import { useState, useEffect } from 'react'

function getScreenOrientation(): ScreenOrientationType {
  if (window.innerWidth > window.innerHeight) {
    return 'landscape';
  } else {
    return 'portait';
  }
}

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<ScreenOrientationType>(getScreenOrientation());

  const updateOrientation = (event: Event) => {
    setOrientation(getScreenOrientation());
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