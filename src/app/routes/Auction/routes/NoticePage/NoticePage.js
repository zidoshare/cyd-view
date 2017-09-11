import React from 'react'
import PropTypes from 'prop-types'
import { get } from '../../../../Util'
import { Spin } from 'antd'
import './NoticePage.less'
export default class NoticePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        content: '内容加载中'
      },
      loading: false,
    }
  }
  componentWillMount() {
    this.setState({
      loading: true,
    })
    const { match } = this.props
    const id = match.params.id
    get(`/api/v1/notice/${id}`).then(json => this.setState({
      data: json.data,
      loading: false
    }))
  }
  render() {
    const { data, loading } = this.state
    return (
      <Spin spinning={loading}>
        <div className="notice-content">
          <h1 className="notice-content-title">{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.content }}>
          </div>
        </div>
      </Spin>
    )
  }
}

NoticePage.propTypes = {
  match: PropTypes.object
}