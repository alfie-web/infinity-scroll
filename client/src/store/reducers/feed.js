import {
  GET_FEED,
  FEED_UNLOAD,
  FEED_IS_FETCHING,
  FEED_SET_ERROR,
} from '../actions/feed'

const defaultState = {
  docs: [],
  page: 0,
  pages: 0,
  total: 0,
  isLastPage: false,
  isFetching: false,
  error: false,
}

const feedReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_FEED:
      return {
        ...state,
        ...payload,
        docs: state.docs.length
          ? [
            ...state.docs,
            ...payload.docs,
          ]
          : payload.docs,
        isFetching: false,
      }
    case FEED_IS_FETCHING:
      return {
        ...state,
        isFetching: payload,
      }
    case FEED_SET_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false,
      }
    case FEED_UNLOAD:
      return defaultState
    default:
      return state
  }
}

export default feedReducer
