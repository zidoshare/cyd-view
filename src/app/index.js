import React from 'react'
// import { BrowserRouter as Router,Route} from 'react-router-dom'
import enquire from 'enquire.js'
import { Layout } from 'antd'
import {NavLink,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav,{Item} from './components/Nav'
const { Content } = Layout

import Home from './routes/Home'
import Auction from './routes/Auction'
import Footer from './components/Footer'
import Commodities from './routes/Commodities'
import Article from './routes/Article'
import News from './routes/News'
import Careers from './routes/Careers'
import AboutUs from './routes/AboutUs'
import Login from './routes/Login'

import logo from '../image/cyd-logo.png'
import './style/core.less'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isMode : false
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({
        isMode
      })
    })
  }
  enquireScreen(cb) {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true)
      },
      unmatch: () => {
        cb && cb()
      },
    })
    /* eslint-enable no-unused-expressions */
  }
  render(){
    const {isMode} = this.state
    return (
      <Router>
        <Layout>
          <Nav logo={logo} mark="创源地文化传播有限公司" isMode={isMode}>
            <Item key="index"><NavLink exact to="/">首页</NavLink></Item>
            <Item key="produce"><NavLink to="/produce">商城</NavLink></Item> 
            <Item key="auction"><NavLink to="/auction">拍卖</NavLink></Item>
            <Item key="news"><NavLink to="/news">时讯速览</NavLink></Item>
            <Item key="careers"><NavLink to="/career">招贤纳士</NavLink></Item>
            <Item key="aboutus"><NavLink to="/aboutus">关于我们</NavLink></Item>
          </Nav>
          <Content style={{marginTop:64}}>
            <Switch>
              <Route exact path="/" render={props => <Home {...props} isMode={isMode}/>}/>
              <Route path="/auction" 
                render={props => <Auction {...props} isMode={isMode}/>}/>
              <Route path="/produce" render = {props => <Commodities {...props} isMode={isMode}/>}/>
              <Route path="/news/:id" render = {props => <Article {...props} isMode={isMode}/> }/>
              <Route path="/news" render = {props => <News {...props} isMode={isMode}/> }/>
              <Route path="/career" render = {props => <Careers {...props} isMode={isMode} />}/>
              <Route path="/aboutus" render = {props => <AboutUs {...props} isMode={isMode} />}/>
              <Route path="/login/:state?" render = {props => <Login {...props} isMode={isMode}/>}/>
            </Switch>
          </Content>
          <Footer isMode={isMode}/>
        </Layout>
      </Router>  
    )
  }
}