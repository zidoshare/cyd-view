import React from 'react'
import PropTypes from 'prop-types'
import {Icon,Upload,Modal,message} from 'antd'
import {get} from '../../Util'
export default class ImageUper extends React.Component{
  constructor(props){
    super(props)
    const value = this.props.value
    let fileList = []
    if(value instanceof Array && value.length > 0)
      fileList = value.map((v,index) => ({
        uid:index,
        url:v
      }))
    else if(typeof(value) === 'string')
      fileList = [{uid:'-1',url:value}]
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList,
      uploadToken:{},
      value,
    }
  }
  handleCancel(){
    this.setState({ previewVisible: false })
  }
  handlePreview(file){
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }
  handleChange({ fileList }){
    const {onChange} = this.props
    this.setState({ fileList },() => {
      if(fileList.length == 1){
        if(fileList[0].error){
          message.error('上传发生错误，请重新尝试或联系管理员')
        }else if(fileList[0].response != null){
          onChange(fileList[0].response.key)
        }
      }else if(fileList.length > 1){
        const array = fileList.map((value) => {
          if(value.error)
            return 
          return value.response.key
        })
        onChange(array)
      }else {
        onChange(null)
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value
      let fileList = []
      if(value instanceof Array && value.length > 0)
        fileList = value.map((v,index) => ({
          uid:index,
          url:v
        }))
      else if(typeof(value) === 'string')
        fileList = [{uid:'-1',url:value}]
      this.setState({value,fileList})
    }
  }
  getUploadToken(file){
    const hide = message.loading('等待上传凭证')
    return new Promise((resolve) => {
      get('/api/v1/other/qiniu/getUploadToken?filename='+file.name).then(result => {
        hide()
        this.setState({
          uploadToken:result.data.token,
        },resolve())
      },()=>{
        hide()
      })
    })
  }
  render(){
    const { previewVisible, previewImage, fileList ,uploadToken} = this.state
    const {count} = this.props
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">点击上传</div>
      </div>
    )
    return (
      <div className="clearfix">
        <Upload
          name='file'
          action='http://upload.qiniu.com'
          data={{
            token:uploadToken.token,
            key:uploadToken.key,
          }}
          beforeUpload={this.getUploadToken.bind(this)}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview.bind(this)}
          onChange={this.handleChange.bind(this)}
        >
          {fileList.length >= count ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}

ImageUper.defaultProps = {
  count:1,
}

ImageUper.propTypes = {
  value:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  onChange:PropTypes.func,
  count:PropTypes.number.isRequired,
}