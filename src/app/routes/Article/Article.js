import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Layout } from 'antd'
import { Link } from 'react-router-dom'
import Title from './components/Title'
import { get } from '../../Util'
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
    const { match } = this.props
    if (match.params.id === null) {
      return
    }
    get('/api/v0/news/getNew', {
      id: match.params.id
    }).then(data => this.setState({
      response: data,
      loading: false,
    }))
  }
  render() {
    const response = this.state.response
    return (
      <Content style={{ padding: '10px 200px', background: 'white' }}>
        <div className="tools"><Link to="/news">&lt;&lt;返回上一级</Link></div>
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
}