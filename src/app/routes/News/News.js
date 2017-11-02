import React from 'react'
import { Spin, Layout, Pagination,Affix } from 'antd'
import { Link,NavLink } from 'react-router-dom'
import { get, handlePage,formartData } from '../../Util'
import apiUrl from '../../apiUrl'
const Content = Layout.Content
import './News.less'
export default class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      loading: true,
      middle: true,
      page: null,
    }
  }

  componentDidMount() {
    get(apiUrl.newsUrl).then(json => {
      if (json.success) {
        this.setState({
          data: json.data,
          loading: false,
          page: handlePage(json.data)
        })
      }
    })
  }

  onPageChange(pageNum) {
    this.setState({
      loading: true
    })
    get(apiUrl.newsUrl, {
      currentPage: pageNum
    }).then(json => {
      if (json.success) {
        this.setState({
          data: json.data,
          loading: false,
          page: handlePage(json.data)
        })
        document.documentElement.scrollTop = 0
      }
    })
  }
  render() {

    const list = []
    const { data, loading, page } = this.state
    if (data) {
      const content = data.records
      for (let i = 0; i < content.length; i++) {
        let element = content[i]
        let li = <div><span>{element.title}</span><span className="after-foot">{formartData(new Date(element.createTime),'MM-dd')}</span></div>
        let dom = (<li className="custom" key={'card' + i}>
          {element.linkUrl == null ?
            <Link to={'/news/' + element.id}>{li}</Link> :
            <a target="_blank" href={element.linkUrl} style={{ display: 'block' }}>{li}</a>}</li>)
        list.push(dom)
      }
    }
    return (
      <Content className="cyd-content-wrapper">
        <Affix offsetTop={80} className="left-card">
          <div >
            <div className="title-container">
              <h1>时讯头条</h1>
            </div>
            <ul className="menu-list">
              <li><NavLink to="/news/list">新闻中心</NavLink></li>
              <li><NavLink to="/notices/list">通知公告</NavLink></li>
            </ul>
            <div className="clear-fix chat-ins">
              <div className="pull-left">
                <img src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/chat-to-service.png"/>
              </div>
              <div className="pull-left chat-info">
                <h1>
                  联系我们
                </h1>
                <h1>
                  400-886-6563
                </h1>
              </div>
            </div>
          </div>
        </Affix>
        <Spin spinning={loading} delay={500} tip={'正在加载...'}>
          
          <div style={{ minHeight: 600 }}>
            
            <ul className="custom-container clear-fix">
            <h1>
              <span>Press center&nbsp;&nbsp;&nbsp;</span>
              <span>新闻中心</span>
            </h1>
            {list}
            {data != null ? <Pagination showQuickJumper {...page} onChange={this.onPageChange.bind(this)} /> : null}
            </ul>
          </div>
          
        </Spin>
      </Content>
    )
  }
}

News.propTypes = {
  id: React.PropTypes.string,
}

News.defaultProps = {
  className: 'content7',
}
