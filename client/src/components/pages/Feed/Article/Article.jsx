import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './Article.sass'

const Article = ({ data }) => (
  <div className="article">
    <h3>{data.title}</h3>
  </div>
)

Article.propTypes = {
  data: PropTypes.object,
}

export default memo(Article)
