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
import Home2 from 'Components/Home2'
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
    <Route path="home2" component={Home2}/>
  </Router>
)

export default createRoutes
