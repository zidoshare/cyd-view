import React from 'react'
import { Spin, Card, Layout, Pagination, Affix } from 'antd'
import { Link } from 'react-router-dom'
import {get} from '../../Util'
const Content = Layout.Content
import './News.scss'
export default class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: null,
      loading: true,
      middle: true,
    }
  }

  componentDidMount() {
    get('/api/v0/pub/news/index').then(data => this.setState({
      response: data,
      loading: false,
    }))
  }

  onPageChange(pageNum) {
    this.setState({
      response: null,
      loading: true
    })
    get('/api/v0/pub/news/index',{
      p:pageNum
    }).then(data => this.setState({
      response: data,
      loading: false,
    }))
  }
  render() {

    const list = []
    const { response } = this.state
    /*if(this.state.middle)
      list.push(<div className="clear-fix">
                        <div className="pull-right">
                          <p>用微信客户端扫一扫,</p>
                          <p>了解更多关于钱币的知识</p>
                        </div>
                        <div className="wx-min pull-right"/>
                        </div>)*/
    if (response != null) {
      const { content } = response.data
      for (let i = 0; i < content.length; i++) {
        let element = content[i]
        let card = <Card style={{ width: 360 }} bodyStyle={{ padding: 0 }} bordered={false}>
          <div className="custom-image">
            <img alt="example" width="100%" src={element.imageUrl} />
          </div>
          <div className="custom-card">
            <h3>{element.title}</h3>
            <nobr>
              {element.description}
            </nobr>
          </div>
        </Card>

        let dom = (<div className="custom" key={'card' + i}>
          {element.linkUrl == null ?
            <Link to={'/news/' + element.id}>{card}</Link> :
            <a target="_blank" href={element.linkUrl} style={{ display: 'block' }}>{card}</a>}</div>)
        list.push(dom)
      }
    }
    return (
      <Content  className="cyd-content-wrapper">
        <Spin spinning={this.state.loading} delay={500} tip={'正在加载...'}>
          <div style={{ minHeight: 600 }}>

            {list.length > 0 ? <div style={{ width: this.state.middle ? 1200 : 1020, margin: 'auto' }}>
              {this.state.middle ? <div className={'custom-container clear-fix'}>{list}</div> :
                <div className="clear-fix">
                  <div className="custom-container-info">
                    {list}
                    <div style={{ clear: 'both' }}></div>
                  </div>
                  <Affix className="pull-left">
                    <div>
                      <p>用微信客户端扫一扫</p>
                      <p>了解更多关于钱币的知识</p>
                      <div className="wx" />
                    </div>
                  </Affix>
                </div>
              }
            </div> : <div></div>}

          </div>
          {response != null ? <Pagination showQuickJumper defaultCurrent={response.data.number + 1} total={response.data.totalElements} onChange={this.onPageChange.bind(this)} /> : null}
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
