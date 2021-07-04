import { connect } from 'react-redux'

import { fetchFeed, setError } from '../../../store/actions/index'

import Feed from './Feed'

const mapStateToProps = (state) => ({
  feed: state.feed,
})

const mapDispatchToProps = {
  setError: (error) => setError(error),
  onFetchFeed: () => fetchFeed(),
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
