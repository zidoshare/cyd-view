import React from 'react'
import PropTypes from 'prop-types'
import {Form, Tooltip, Icon, Input,Button} from 'antd'
import ImageUper from '../ImageUper'
import moment from 'moment'
const FormItem = Form.Item

export class Info extends React.Component {
  componentDidMount() {
    this.props.getUserInfo()
  }

  render() {
    // const {updateUserInfo,infoState} = this.props
    const {getFieldDecorator} = this.props.form
    const {userData} = this.props
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
    return <div className="person-info-container">
      <h1>个人信息</h1>
      <Form>
        <FormItem {...formItemLayout}
                  label="头像">
          {getFieldDecorator('headportrait', {
            initialValue:userData?userData.headportrait:null,
          })(
            <ImageUper count={1}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              昵称&nbsp;
              <Tooltip title="我们应该怎么称呼您？">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('nickname', {
            initialValue:userData?userData.nickname:null,
            rules: [{required: true, message: '请输入你的昵称!', whitespace: true}],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              注册时间<Tooltip title="注册时间由系统生成，不可编辑">
                <Icon type="exclamation-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          <span>{userData?moment(userData.registerTime).format('L'):'暂无相关信息'}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入正确的邮箱',
              initialValue:userData?userData.email:null,
            }],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...tailFormItemLayout}
        >
          <Button type="primary" htmlType="submit">
            提交修改
          </Button>
        </FormItem>
      </Form>
    </div>
  }

}

Info.propTypes = {
  updateUserInfo: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  userData:PropTypes.object.isRequired,
  form: PropTypes.any,
  infoLoading:PropTypes.bool.isRequired,
}

export default Form.create()(Info)