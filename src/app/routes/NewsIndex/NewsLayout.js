import React from 'react'
import {Switch,Route} from 'react-router-dom'
import NewsIndex from './NewsIndex'
import News from './News'
const NewsLayout = () => (
  <Switch>
    <Route path="/news/list" component={News} />
    <Route exact component={NewsIndex}/>
  </Switch>
)

export default NewsLayout