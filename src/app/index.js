import React from 'react'
// import PropTypes from 'prop-types'
// import { BrowserRouter as Router,Route} from 'react-router-dom'
// import enquire from 'enquire.js'
import {Layout} from 'antd'

// import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import createStore from './reducers'
// AppContainer is a necessary wrapper component for HMR

import {NavLink, Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {history} from './reducers'
import Nav, {Item} from './components/Nav'
import Auction from './routes/Auction'
import Home from './routes/Home'
import Footer from './components/Footer'
import Commodities from './routes/Commodities'
import Article from './routes/Article'
import News from './routes/News'
import Careers from './routes/Careers'
import AboutUs from './routes/AboutUs'
import Login from './routes/Login'
import Register from './routes/Register'

import logo from '../image/cyd-logo.png'
import './style/core.less'
// import {createStore} from 'redux'
const store = createStore()
const {Content} = Layout
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMode: false
    }
  }

  componentDidMount() {

  }

  // componentDidMount() {
  //   // 适配手机屏幕;
  //   this.enquireScreen((isMode) => {
  //     this.setState({
  //       isMode
  //     })
  //   })
  // }
  // enquireScreen(cb) {
  //   /* eslint-disable no-unused-expressions */
  //   enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
  //     match: () => {
  //       cb && cb(true)
  //     },
  //     unmatch: () => {
  //       cb && cb()
  //     },
  //   })
  //   /* eslint-enable no-unused-expressions */
  // }
  render() {
    const {isMode} = this.state
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Nav logo={logo} mark="创源地文化传播有限公司" isMode={isMode}>
              <Item key="index"><NavLink exact to="/">首页</NavLink></Item>
              <Item key="produce"><NavLink to="/produce">商城</NavLink></Item>
              <Item key="auction"><NavLink to="/auction">拍卖</NavLink></Item>
              <Item key="news"><NavLink to="/news">时讯速览</NavLink></Item>
              <Item key="careers"><NavLink to="/career">招贤纳士</NavLink></Item>
              <Item key="aboutus"><NavLink to="/aboutus">关于我们</NavLink></Item>
            </Nav>
            <Content style={{marginTop: 64}}>
              <Switch>
                <Route exact path="/" render={props => <Home {...props} isMode={isMode}/>}/>
                <Route path="/auction"
                       render={props => <Auction {...props} isMode={isMode}/>}/>
                <Route path="/produce" render={(props) => <Commodities {...props} isMode={isMode}/>}/>
                <Route path="/news/:id" render={props => <Article {...props} isMode={isMode}/>}/>
                <Route path="/news" render={props => <News {...props} isMode={isMode}/>}/>
                <Route path="/career" render={props => <Careers {...props} isMode={isMode}/>}/>
                <Route path="/aboutus" render={props => <AboutUs {...props} isMode={isMode}/>}/>
                <Route path="/login" render={props => <Login {...props} isMode={isMode}/>}/>
                <Route path="/register" render={props => <Register {...props} isMode={isMode}/>}/>
              </Switch>
            </Content>
            <Footer isMode={isMode}/>
          </Layout>
        </ConnectedRouter>
      </Provider>
    )
  }
}