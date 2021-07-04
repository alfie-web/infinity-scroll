import { useEffect, useCallback } from 'react'

export default (callback) => {
  const checkOnlineState = useCallback(() => {
    if (navigator.onLine) {
      // console.log('сеть возобновлёна')
      callback()
    }
  }, [callback])

  useEffect(() => {
    window.addEventListener('online', checkOnlineState)

    return () => window.removeEventListener('online', checkOnlineState)
  }, [checkOnlineState])
}
