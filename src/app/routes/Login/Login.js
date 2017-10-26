import React from 'react'
import PropTypes from 'prop-types'
import './Login.less'
import {NavLink,Route} from 'react-router-dom'
import UsernameLoginPage from './routes/UsernameLoginPage/UsernameLoginPage'
import CodeLoginPage from './routes/CodeLoginPage/CodeLoginPage'
export class Login extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="login-container">
        
        <div className="login-primary-form">
        <img className="login-bg" src={'http://odp22tnw6.bkt.clouddn.com/login-bg.png'}/>
          <div className="login-tile">
            <div className="clear-fix">
              <span className="top-title">登录</span>
              <div className="pull-right">
                <a className="login-icon" target="blank" href="/api/auth/user/qqLogin">
                  <img src="http://odp22tnw6.bkt.clouddn.com/qq-login-icon.png"/>
                </a>
                <a className="login-icon" target="blank" href="/api/v1/oauth/wechaturl?operate=http://www.chuangyuandi.net.cn">
                  <img src="http://odp22tnw6.bkt.clouddn.com/weixin-login-icon.png"/>
                </a>
              </div>
            </div>
            <div className="login-content">
              <div className="login-tab">
                <NavLink to={'/login'} exact >用户名登录</NavLink>
                <NavLink to={'/login/code'}>验证码登录</NavLink>
              </div>
              <div className="login-page">
                <Route path="/login" exact component={UsernameLoginPage}/>
                <Route path="/login/code" component={CodeLoginPage} />
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