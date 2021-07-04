import { useEffect } from 'react'

export default (observableRef, callback) => {
  useEffect(() => {
    // когда прокрутили на 80% высоты страницы
    const offset = (+document.documentElement.offsetHeight * 20) / 100

    const options = {
      root: null,
      // rootMargin: '100px 0px',
      rootMargin: `${offset}px 0px`,
      threshold: 1,
    };

    const observer = new IntersectionObserver((entires) => {
      // console.log('entires[0].intersectionRatio', Math.floor(entires[0].intersectionRatio))
      if (entires[0].isIntersecting) {
        callback()
      }
    }, options)

    observableRef.current && observer.observe(observableRef.current)

    return () => observer.disconnect()
  }, [callback, observableRef])
}
