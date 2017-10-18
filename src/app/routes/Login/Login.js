import React from 'react'
import PropTypes from 'prop-types'
import './Login.less'
import {Link,Route} from 'react-router-dom'
import UsernameLoginPage from './routes/UsernameLoginPage/UsernameLoginPage'
import CodeLoginPage from './routes/CodeLoginPage/CodeLoginPage'
export class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type : props.match.params.state === null
    }
  }
  toOtherTab(){
    const {type} = this.state
    if(type === false)
      this.setState({
        type : true
      })
    else
      this.setState({
        type : false
      })
  }
  render(){
    const {type} = this.state
    const handler = {
      onClick:this.toOtherTab.bind(this)
    }
    return(
      <div className="login-container">
        
        <div className="login-primary-form">
        <img className="login-bg" src={'http://odp22tnw6.bkt.clouddn.com/login-bg.png'}/>
          <div className="login-tile">
            <div className="clear-fix">
              <span className="top-title">登录</span>
              <div className="pull-right">
                <a className="login-icon">
                  <img src="http://odp22tnw6.bkt.clouddn.com/qq-login-icon.png"/>
                </a>
                <a className="login-icon">
                  <img src="http://odp22tnw6.bkt.clouddn.com/weixin-login-icon.png"/>
                </a>
              </div>
            </div>
            <div className="login-content">
              <div className="login-tab">
                <Link className={type?'active':''} to={'/login'} {...(type?{}:handler)}>用户名登录</Link>
                <Link className={!type?'active':''} to={'/login/code'} {...(!type?{}:handler)}>验证码登录</Link>
              </div>
              <div className="login-page">
                <Route path="/login" exact component={UsernameLoginPage}/>
                <Route path="/login/code" exact component={CodeLoginPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  match:PropTypes.object,
}

export default Login