import feedAPI from '../../api/feed'

export const GET_FEED = 'GET_FEED'
export const FEED_UNLOAD = 'FEED_UNLOAD'
export const FEED_IS_FETCHING = 'FEED_IS_FETCHING'
export const FEED_SET_ERROR = 'FEED_SET_ERROR'

const setFeed = (payload) => ({
  type: GET_FEED,
  payload,
})

const setIsFetching = (isFetching) => ({
  type: FEED_IS_FETCHING,
  payload: isFetching,
})

export const setError = (error) => ({
  type: FEED_SET_ERROR,
  payload: error,
})

export const fetchFeed = () => async (dispatch, getState) => {
  const { feed: { isLastPage, page } } = getState()

  if (isLastPage) return
  if (!Number.isInteger(page)) return dispatch(setError({ message: 'incorrect_data' }))

  dispatch(setIsFetching(true))

  try {
    const { data } = await feedAPI.getAll(page + 1)

    dispatch(setFeed(data))
  } catch (error) {
    dispatch(setError({ message: 'Ошибка сети' }))
  }
  // finally {
  //   dispatch(setIsFetching(false))
  // }
}
