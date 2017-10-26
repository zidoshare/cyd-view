import React from 'react'
import {Form, Icon, Button, Input, Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const FormItem = Form.Item

export class PhoneForm extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSendCode() {
    const {getFieldValue} = this.props.form
    const {sendCode} = this.props
    const phoneNumber = getFieldValue('phone')
    sendCode(phoneNumber)
  }

  handleLogin(e) {
    const {form, loginByCode, getUserInfo} = this.props
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        loginByCode(values).then((json) => {
          if (json.success) {
            getUserInfo()
          }
        })
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {loadingRemaining, sendLoading} = this.props.auth
    return (
      <Form onSubmit={this.handleLogin.bind(this)} className="login-form">
        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{required: true, message: '请填写手机号！'}],
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="手机号"/>
          )}
        </FormItem>
        <FormItem>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('code', {
                rules: [{required: true, message: '请填写验证码！'}],
              })(
                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} placeholder="验证码"/>
              )}
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={this.handleSendCode.bind(this)}
                      loading={sendLoading}>{(sendLoading && loadingRemaining) ? (loadingRemaining + '后重新发送') : '获取验证码'}</Button>
            </Col>
          </Row>


        </FormItem>
        <FormItem>
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          还没有账号？ <Link to="/register">立即注册</Link>
        </FormItem>
      </Form>
    )
  }
}

PhoneForm.propTypes = {
  form: PropTypes.object,
  loginByCode: PropTypes.func,
  getUserInfo: PropTypes.func,
  sendCode: PropTypes.func,
  auth: PropTypes.any,
}

export default Form.create()(PhoneForm)