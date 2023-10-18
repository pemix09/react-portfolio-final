import { useLayoutEffect, useState } from 'react';

export class WindowSize {
  public windowWidth: number;
  public windowHeight: number;

  constructor(width: number, height: number) {
    this.windowHeight = height;
    this.windowWidth = width;
  }
}

export function useWindowSize() {
  const [size, setSize] = useState(new WindowSize(0, 0));
  useLayoutEffect(() => {
    function updateSize() {
      let size = new WindowSize(window.innerWidth, window.innerHeight);
      setSize(size);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}