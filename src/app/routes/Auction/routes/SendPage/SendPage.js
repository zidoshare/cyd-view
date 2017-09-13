import React from 'react'
import { Alert, Form, Input, Cascader, Button, Spin } from 'antd'
import PropTypes from 'prop-types'
import { get } from '../../../../Util'
import ImageUper from '../../../../components/ImageUper'
import './SendPage.less'
const FormItem = Form.Item
export class SendPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roots: null,
      inputValue: '',
    }
  }
  componentWillMount() {
    get('/api/v1/types').then(json => {
      this.setState({
        roots: json.data.map((value) => {
          value.value = value.id
          value.label = value.name
          value.isLeaf = false
          return value
        }),
      })
    })
  }
  loadData(selectedOptions) {
    const targetOption = selectedOptions[selectedOptions.length - 1]
    targetOption.loading = true

    get('/api/v1/types', {
      parent: targetOption.value,
    }).then(json => {
      targetOption.loading = false,
        targetOption.children = json.data.map((value) => {
          value.value = value.id
          value.label = value.name
          return value
        })
      this.setState({
        roots: [...this.state.roots]
      })
    })
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
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
    const { getFieldDecorator } = this.props.form
    return (<div>
      <Alert message={<h2>请填写拍品正确信息（标有<span style={{ color: 'red' }}>*</span>为必填）</h2>}></Alert>
      <div style={{textAlign:'center'}}>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1102612827&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1102612827:53" alt="点击联系客服" title="点击联系客服"/></a>
      </div>
      <Spin spinning>
        <Form className="large-container">
          <FormItem
            {...formItemLayout}
            label="拍品名称"
            hasFeedback>
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: '请填写拍品名称'
              }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="拍品分类"
          >
            {getFieldDecorator('type', {
              rules: [{
                required: true,
                message: '请填写拍品名称'
              }]
            })(<Cascader placeholder="选择拍品分类（下拉列表）" options={this.state.roots} loadData={this.loadData.bind(this)} />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="藏主姓名"
            hasFeedback>
            {getFieldDecorator('user.name', {
              rules: [{
                required: true,
                message: '请填写藏主姓名'
              }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="联系电话"
            hasFeedback>
            {getFieldDecorator('user.phone', {
              rules: [{
                required: true,
                message: '请填写联系电话'
              }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="联系地址"
            hasFeedback>
            {getFieldDecorator('user.address', {
              rules: [{
                required: true,
                message: '请填写联系地址'
              }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="拍品图片"
            hasFeedback>
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: '请填写拍品名称'
              }]
            })(<ImageUper />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="拍品名称"
            hasFeedback>
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: '请填写拍品名称'
              }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="自报价"
            hasFeedback>
            {getFieldDecorator('price', {
              rules: [{
                required: true,
                message: '请填写自报价'
              }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邮箱"
            hasFeedback>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '请填写正确的邮箱',
              }, {
                required: true,
                message: '请填写拍品名称'
              }]
            })(<Input />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="danger" htmlType="submit">确认提交</Button>
          </FormItem>
        </Form>
      </Spin>
    </div>)
  }
}

SendPage.propTypes = {
  form: PropTypes.object,
}
export default Form.create()(SendPage)