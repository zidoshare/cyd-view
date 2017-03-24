import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import AppLayout from 'Layouts/AppLayout'
import Home from 'Components/Home'
import News from 'Components/News'
import Article from 'Components/Article'
export const createRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home}/>
      <Route path="news" component={News}/>
      <Route path="/news/:id" component ={Article}/>
    </Route>
  </Router>
)

export default createRoutes
