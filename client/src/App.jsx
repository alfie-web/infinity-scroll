import { hot } from 'react-hot-loader'
import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import FeedContainer from './components/pages/Feed/FeedContainer'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/feed" component={FeedContainer} />

      <Redirect from="*" to="/" />
    </Switch>
  </div>
)

export default hot(module)(App)
