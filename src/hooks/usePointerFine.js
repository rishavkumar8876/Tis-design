import { useSyncExternalStore } from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

const subscribe = (onChange) => {
  const media = window.matchMedia(QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

const getSnapshot = () => window.matchMedia(QUERY).matches

// True for mouse/trackpad users, false on touch devices.
export function usePointerFine() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
