import React from 'react'
import PropTypes from 'prop-types'
import './Login.less'
import {Link} from 'react-router-dom'
import { Form, Icon,Button, Input, Checkbox,Row,Col } from 'antd'
import {post} from '../../Util'
const FormItem = Form.Item

export class NormalForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading:false,
    }
  }
  
  login(e){
    const {form} = this.props
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading:true
        })
        console.log('Received values of form: ', values)
        post('/api/auth/login',values,{
          'content-type':'application/x-www-form-urlencoded'
        }).then(() => {
          this.setState({
            loading:false
          })
        })
      }
      
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '请填写用户名或手机号！' }],
        })(
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账号/手机号" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请填写密码！' }],
        })(
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember-me', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>记住我</Checkbox>
        )}
        <a className="login-form-forgot" href="">忘记密码</a>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login.bind(this)} loading={this.state.loading}>
            登录
        </Button>
        还没有账号？ <Link to="/login">立即注册</Link>
      </FormItem>
    </Form>
    )
  }
}

NormalForm.propTypes = {
  form:PropTypes.object,
}

export class PhoneForm extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '请填写手机号！' }],
        })(
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="手机号" />
        )}
      </FormItem>
      <FormItem>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请填写验证码！' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="验证码" />
              )}
            </Col>
            <Col span={12}>
            <Button type="primary">获取验证码</Button>
            </Col>
          </Row>
        
        
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember-me', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>记住我</Checkbox>
        )}
        <a className="login-form-forgot" href="">忘记密码</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
            登录
        </Button>
        还没有账号？ <Link to="/login">立即注册</Link>
      </FormItem>
    </Form>
    )
  }
}

PhoneForm.propTypes = {
  form:PropTypes.object,
}
const PhonePage = Form.create()(PhoneForm)
const NormalPage = Form.create()(NormalForm)

export class Login extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      type : props.match.params.state == null
    }
  }
  toOtherTab(){
    const {type} = this.state
    if(type == false)
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
                {type?<NormalPage/>:<PhonePage/>}
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