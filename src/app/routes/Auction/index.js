import React from 'react'
import PropTypes from 'prop-types'
import { Carousel, Layout, Breadcrumb } from 'antd'
const Item = Breadcrumb.Item
import { Link, NavLink, Route,Switch } from 'react-router-dom'
import AuctionComponent from './AuctionComponent'
import TypesPage from './routes/TypesPage'
import CommodityPage from './routes/CommodityPage'
import SendPage from './routes/SendPage'
import BroadPage from './routes/BroadPage'
import NoticePage from './routes/NoticePage'
const { Content } = Layout
import './auction.less'

export default class Auction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auctionMap: {
        '/auction': '拍卖',
        '/auction/types': '拍卖分类',
        '/auction/send': '我要送拍',
        '/auction/broadcast': '通知公告',
        '/auction/broadcast/notice': '公告内容',
        '/auction/types/commodity': '竞拍',
        '/auction/auctions': '拍卖会',
        '/auction/auctions/commodity': '竞拍',
      }
    }
  }
  render() {
    const { location, isMode, match } = this.props
    const { auctionMap } = this.state
    const pathSnippets = location.pathname.split('/').filter((value, index) => (index <= 2 || value =='commodity' || value=='notice') ? value : null)
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Item key={url}>
          {index < pathSnippets.length - 1?<Link to={url}>
            {auctionMap[url]}
          </Link>:<span>{auctionMap[url]}</span>}
        </Item>
      )
    })
    return (
      <div>
        <Carousel
          className="top-item"
          draggable
          pauseOnHover
          autoplay
        >
          <div style={{ backgroundImage: 'url("http://oow7renvm.bkt.clouddn.com/cyd2.jpg")' }}></div>
          <div style={{ backgroundImage: 'url("http://odp22tnw6.bkt.clouddn.com/banner1.jpg")' }}></div>
          <div style={{ backgroundImage: 'url("http://odp22tnw6.bkt.clouddn.com/banner2.jpg")' }}></div>
        </Carousel>
        <Content className="cyd-content-wrapper">
          <div className="sub-auction-item item-wrapper">
            <NavLink exact to={`${match.url}`}>拍卖首页</NavLink>
            <NavLink to={`${match.url}/types`}>拍品分类</NavLink>
            <NavLink to={`${match.url}/auctions`}>拍卖会</NavLink>
            <NavLink to={`${match.url}/send`}>我要送拍</NavLink>
            <NavLink to={`${match.url}/broadcast`}>通知公告</NavLink>
          </div>
          <div className="path-list-wrapper">
            <div>当前位置：</div>
            <Breadcrumb separator=">">
              {breadcrumbItems}
            </Breadcrumb>
          </div>
          <div className="auction-content-wrapper">
            <Switch>
              <Route path={`${match.url}`} exact render={props => <AuctionComponent {...props} isMode={isMode} />} />
              <Route path={`${match.url}/types/commodity/:id?`} render={props => <CommodityPage {...props} isMode={isMode}/>} />
              <Route path={`${match.url}/auctions/commodity/:id?`} render={props => <CommodityPage {...props} isMode={isMode}/>} />
              <Route path={`${match.url}/auctions`} key={'auctions'} render={props => <TypesPage {...props} isMode={isMode} auctions/>} />
              <Route path={`${match.url}/types/:root?/:type?`}  key={'types'} render={props => <TypesPage {...props} isMode={isMode}/>} />
              <Route path={`${match.url}/send`} render= {props => <SendPage {...props} isMode={isMode}/>}/>
              <Route path={`${match.url}/broadcast`} exact render= {props => <BroadPage {...props} isMode={isMode}/>}/>
              <Route path={`${match.url}/broadcast/notice/:id`} render = {props => <NoticePage {...props} isMode={isMode}/>}/>
            </Switch>
          </div>
        </Content>

      </div>
    )
  }
}

Auction.defaultProps = {
  isMode: false,
}
Auction.propTypes = {
  isMode: PropTypes.bool.isRequired,
  location: PropTypes.string,
  match: PropTypes.object,
}