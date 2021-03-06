import React from 'react'
import { Form, Icon,Button, Input, Checkbox } from 'antd'
const FormItem = Form.Item
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export class NormalForm extends React.Component{
  constructor(props){
    super(props)
  }
  
  login(e){
    const {form,login,getUserInfo} = this.props
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        login(values).then((json)=>{
          if(json.success){
            getUserInfo()
          }
        })
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form
    const {loginLoading} = this.props.auth
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
        <Link className="login-form-forgot" to="/login">忘记密码</Link>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login.bind(this)} loading={loginLoading}>
            登录
        </Button>
        还没有账号？ <Link to="/register">立即注册</Link>
      </FormItem>
    </Form>
    )
  }
}

NormalForm.propTypes = {
  form:PropTypes.object,
  login:PropTypes.func,
  getUserInfo:PropTypes.func,
  auth:PropTypes.any,
}

export default Form.create()(NormalForm)