import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import AppLayout from 'Layouts/AppLayout'
import Home from 'Components/Home'
import News from 'Components/News'
import Article from 'Components/Article'
import Partner from './Partner'
import Commodities from './Commodities'
import CommodityPage from './CommodityPage'
import Careers from './Careers'
export const createRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home}/>
      <Route path="news" component={News}/>
      <Route path="news/:id" component ={Article}/>
      <Route path="partner" component = {Partner}/>
      <Route path="commodities" component={Commodities}/>
      <Route path="commodity/:id" component={CommodityPage}/>
      <Route path="careers" component={Careers}/>
    </Route>
  </Router>
)

export default createRoutes
