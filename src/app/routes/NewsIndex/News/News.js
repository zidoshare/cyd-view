import React from 'react'
import { Layout,Affix } from 'antd'
import { NavLink,Route,Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import NewsList from './routes/NewsList'
import NoticeList from './routes/NoticeList'
import PageNotFound from '../../PageNotFount'
import Article from '../Article'
const Content = Layout.Content
import './News.less'
export default class News extends React.Component {
  render() {
    return (
      <Content className="cyd-content-wrapper">
        <Affix offsetTop={64} className="left-card">
          <div >
            <div className="title-container">
              <h1>时讯头条</h1>
            </div>
            <ul className="menu-list">
              <li><NavLink exact to="/news/list">新闻中心</NavLink></li>
              <li><NavLink to="/news/list/notice">通知公告</NavLink></li>
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
          <div style={{ minHeight: 600 }} className="clear-fix">
            <Switch>
              <Route path="/news/list" exact component={NewsList}/>
              <Route path="/news/list/info/:id" component={Article} />
              <Route path="/news/list/notice/info/:id" component={Article} />
              <Route path="/news/list/notice" component={NoticeList} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          
        
      </Content>
    )
  }
}

News.propTypes = {
  id: PropTypes.string,
  history:PropTypes.object.isRequired,
  match:PropTypes.object.isRequired,
}

News.defaultProps = {
  className: 'content7',
}
