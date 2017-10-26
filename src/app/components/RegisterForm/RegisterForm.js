import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input, Select, Row, Col, Button} from 'antd'
import {Link} from 'react-router-dom'
import {patterns} from '../../Util'

const FormItem = Form.Item
import './registerForm.less'

export class RegisterForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    if(this.props.state.registerLoading){
      return
    }
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.register(values)
      }
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
    }
  }

  handleConfirmBlur(e) {
    const value = e.target.value
    this.setState({confirmDirty: this.state.confirmDirty || !!value})
  }

  checkPassword(rule, value, callback) {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('密码输入不一致!')
    } else {
      callback()
    }
  }

  checkConfirm(rule, value, callback) {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true})
    }
    callback()
  }

  handleSendCode() {
    const {sendLoading} = this.props.state
    if(sendLoading)
      return
    const {validateFieldsAndScroll} = this.props.form
    const {sendRegisterCode} = this.props
    validateFieldsAndScroll(['phone'], {}, (err, values) => {
      if(!err){
        const phoneNumber = values['phone']
        sendRegisterCode(phoneNumber)
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {sendLoading,loadingRemaining,registerLoading} = this.props.state
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{width: 60}}>
        <Option value="86">+86</Option>
      </Select>
    )
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    }
    const checkConfirm = this.checkConfirm
    const checkPassword = this.checkPassword
    return <div className="rg-container">
      <div className="rg-top clear-fix inline-container-bottom">
        <h1>立即注册</h1>
        <Link to="/login" className="right-inline">已有账号？立即登录</Link>
      </div>
      <div className="rg-form-container">
        <div className="rg-info">*为必填项，请如实填写注册信息</div>
        <Form prefixCls="rg-form" hideRequiredMark={false} layout={'vertical'} onSubmit={this.handleSubmit.bind(this)}>
          <FormItem
            {...formItemLayout}
            label="用户名"
            hasFeedback
          >
            {getFieldDecorator('username', {
              rules: [{
                min: 6, message: '用户名至少6位',
              }, {
                max: 20, message: '用户名最大20位',
              }, {
                whitespace: true, message: '请不要包含空格'
              }, {
                required: true, message: '请输入用户名!',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                validator: checkConfirm.bind(this),
              }, {
                required: true, message: '请输入密码!',
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码"
            hasFeedback
          >
            {getFieldDecorator('confirmPassword', {
              rules: [{
                validator: checkPassword.bind(this)
              }, {
                required: true, message: '请确认密码!',
              }],
            })(
              <Input onBlur={this.handleConfirmBlur.bind(this)} type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机号"
          >
            {getFieldDecorator('phone', {
              rules: [{
                required: true, message: '请输入电话号码!'
              },{
                pattern:patterns.phoneNumber,message:'请输入正确的手机号码'
              }],
            })(
              <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码"
            extra="我们必须确认手机号是你本人所持有"
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('code', {
                  rules: [{required: true, message: '请输入你收到的验证码'}],
                })(
                  <Input/>
                )}
              </Col>
              <Col span={12}>
                <Button type="primary" onClick={this.handleSendCode.bind(this)}
                        loading={sendLoading}>{(sendLoading && loadingRemaining) ? (loadingRemaining + '后重新发送') : '获取验证码'}</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邮箱"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '请输入正确的邮箱',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{width: 240}} loading={registerLoading}>注册</Button>
          </FormItem>
        </Form>
        <div>
          <div className="other-login-title">
            <h2>第三方合作账号登录</h2>
          </div>
          <div className="other-login-icon-container">
            <a className="login-icon">
              <img src="http://odp22tnw6.bkt.clouddn.com/qq-login-icon.png"/>
            </a>
            <a className="login-icon">
              <img src="http://odp22tnw6.bkt.clouddn.com/weixin-login-icon.png"/>
            </a>
          </div>
        </div>
      </div>

    </div>
  }
}

RegisterForm.propTypes = {
  form: PropTypes.object,
  state: PropTypes.any,
  register: PropTypes.func.isRequired,
  sendRegisterCode: PropTypes.func.isRequired,
}

export default Form.create()(RegisterForm)