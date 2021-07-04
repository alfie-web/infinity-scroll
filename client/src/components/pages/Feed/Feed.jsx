import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import useIsOnlineAgain from '../../hooks/useIsOnlineAgain'
import useInfinityScroll from '../../hooks/useInfinityScroll'

import Article from './Article/Article'

import './Feed.sass'

// TODO: А что, если инкапсулировать эту логику в компонент InfinityScroll? а? а? а?
const Feed = ({ feed, setError, onFetchFeed }) => {
  const observableRef = useRef(null)

  const handleFetchFeed = () => {
    if (!feed.isFetching && !feed.error) onFetchFeed()
  }

  useIsOnlineAgain(() => setError(null))

  useInfinityScroll(observableRef, handleFetchFeed)

  return (
    <div className="feed page">
      <div className="container">
        <h1 className="feed__title">Лента</h1>

        <div className="feed__list">
          {feed.docs.length ? feed.docs.map((item) => (
            <div className="feed__item" key={item._id}>
              <Article data={item} />
            </div>
          )) : null}
          {feed.isFetching ? <div className="preloader">Loading...</div> : null}
          <div ref={observableRef} className="observable"></div>
        </div>
      </div>
    </div>
  )
}

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
  setError: PropTypes.func.isRequired,
  onFetchFeed: PropTypes.func.isRequired,
}

export default Feed
