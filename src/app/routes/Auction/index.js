import React from 'react'
import PropTypes from 'prop-types'
import { Carousel, Layout, Breadcrumb } from 'antd'
const Item = Breadcrumb.Item
import { Link, NavLink, Route } from 'react-router-dom'
import AuctionComponent from './AuctionComponent'
import TypesPage from './routes/TypesPage'
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
      }
    }
  }
  render() {
    const { location, isMode, match } = this.props
    const { auctionMap } = this.state
    const pathSnippets = location.pathname.split('/').filter((value,index) => index <= 2?value:null )
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Item key={url}>
          <Link to={url}>
            {auctionMap[url]}
          </Link>
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
            <Route path={`${match.url}`} exact render={props => <AuctionComponent {...props} isMode={isMode} />} />
            <Route path={`${match.url}/types/:root?/:type?`} render={props => <TypesPage {...props} isMode={isMode} changeMap={(key, name) => {
              this.setState({
                auctionMap: Object.assign(auctionMap, { [key]: name })
              })
            }} />} />
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