import React from 'react'
import PropTypes from 'prop-types'
import { get, handlePage,formartData } from '../../../../Util'
import apiUrl from '../../../../apiUrl'
import { Link } from 'react-router-dom'
import { Spin, Pagination } from 'antd'
export default class NoticeList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: null,
      loading: true,
      middle: true,
      page: null,
    }
  }
  componentDidMount() {
    const {p} = this.props.match.params
    this.onPageChange(p)
  }

  onPageChange(pageNum) {
    this.setState({
      loading: true
    })
    if(pageNum){
      const {history} = this.props
      history.push(`/news/list/${pageNum}`)
    }
    get(apiUrl.noticeUrl, {
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
  render(){
    const list = []
    const { data, loading, page } = this.state
    if (data) {
      const content = data.records
      for (let i = 0; i < content.length; i++) {
        let element = content[i]
        let li = <div><span>{element.title}</span><span className="after-foot">{formartData(new Date(element.createTime),'MM-dd')}</span></div>
        let dom = (<li className="custom" key={'card' + i}>
          {element.linkUrl == null ?
            <Link to={'/news/list/notice/info/' + element.id}>{li}</Link> :
            <a target="_blank" href={element.linkUrl} style={{ display: 'block' }}>{li}</a>}</li>)
        list.push(dom)
      }
    }
    return (
      <Spin spinning={loading} delay={500} tip={'正在加载...'}>
        <ul className="custom-container clear-fix">
        <h1>
          <span>Notice center&nbsp;&nbsp;&nbsp;</span>
          <span>通知公告</span>
        </h1>
        {list}
        {data != null ? <Pagination showQuickJumper {...page} onChange={this.onPageChange.bind(this)} /> : null}
        </ul>
      </Spin>
    )
  }
}

NoticeList.propTypes = {
  history:PropTypes.object.isRequired,
  match:PropTypes.object.isRequired,
}