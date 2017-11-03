import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Layout } from 'antd'
import { Link } from 'react-router-dom'
import Title from './components/Title'
import { get } from '../../../Util'
import apiUrl from '../../../apiUrl'
import './Article.scss'
const Content = Layout.Content
export default class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: null,
      loading: true
    }
  }
  componentDidMount() {
    const { match,location } = this.props
    if (match.params.id === null) {
      return
    }
    let url = apiUrl.newUrl
    if(location.pathname.indexOf('notice') > 0){
      url = apiUrl.noticeInfoUrl
    }
    get(url, {
      id: match.params.id
    }).then(data => this.setState({
      response: data,
      loading: false,
    }))
  }

  onBack(e){
    e.preventDefault()
    const {history} = this.props
    history.goBack()
  }
  render() {
    const response = this.state.response
    return (
      <Content className="custom-container" style={{ background: 'white' }}>
        <div className="tools"><Link to="javascript:void(0)" onClick={this.onBack.bind(this)}>&lt;&lt;返回上一级</Link></div>
        <Spin spinning={this.state.loading}>
          {response != null ? <div style={{ background: 'white' }}>
            {[
              <Title text={response.data.title} key={'title'} />,
              <div style={{ minHeight: 500, padding: '20px 60px' }} key={'content'} className="ct">
                <div dangerouslySetInnerHTML={{ __html: response.data.content }} />
              </div>
            ]}
          </div> : <div></div>}
        </Spin>
      </Content>
    )
  }
}

Article.propTypes = {
  match: PropTypes.object,
  history:PropTypes.object.isRequired,
  location:PropTypes.object.isRequired,
}