import React from 'react'
// import PropTypes from 'prop-types'
// import { BrowserRouter as Router,Route} from 'react-router-dom'
// import enquire from 'enquire.js'
import { Layout } from 'antd'

// import {connect} from 'react-redux'
// AppContainer is a necessary wrapper component for HMR

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './routes/Home'
import Footer from './components/Footer'
import Careers from './routes/Careers'
import AboutUs from './routes/AboutUs'

import logo from '../image/cyd-logo.png'
import './style/core.less'
import PageNotFount from './routes/PageNotFount/PageNotFound'
import ContactUs from './routes/ContactUs'
import News from './routes/NewsIndex'
// import {createStore} from 'redux'
const { Content } = Layout
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMode: false
    }
  }

  componentDidMount() {

  }
  render() {
    const { isMode } = this.state
    return (
      <Router>
        <Layout>
          <Nav
            logo={logo}
            mark="创源地文化传播有限公司"
            isMode={isMode}
            menus={[{
              path: '/',
              title: '首页'
            }, {
              path: '/news',
              title: '实讯头条'
            }, {
              title: '关于我们',
              path: '/abus',
              children: [{
                path: '/aboutus',
                title: '官方简介',
              }, {
                path: '/career',
                title: '招贤纳士'
              }, {
                path: '/contact',
                title: '联系地址'
              }]
            }]}>
          </Nav>
          <Content style={{ marginTop: 64 }}>

            <Switch>
              <Route exact path="/" render={props => <Home {...props} isMode={isMode} />} />
              <Route path="/news" render={props => <News {...props} isMode={isMode} />} />
              <Route path="/career" render={props => <Careers {...props} isMode={isMode} />} />
              <Route path="/aboutus" render={props => <AboutUs {...props} isMode={isMode} />} />
              <Route path="/contact" component={ContactUs} />
              <Route component={PageNotFount} />
            </Switch>

          </Content>
          <Footer isMode={isMode} />
        </Layout>
      </Router>
    )
  }
}