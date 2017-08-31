import React from 'react'
import PropTypes from 'prop-types'
import { Carousel, Layout, Breadcrumb,Row,Col,Button } from 'antd'
import { Link, NavLink, withRouter } from 'react-router-dom'
import SampleArrow from '../../components/SampleArrow'
const { Content } = Layout
import './auction.less'

const auctionMap = {
  '/auction': '拍卖',
  '/auction/types': '拍卖分类',
  '/auction/send': '我要送拍',
  '/auction/broadcast': '通知公告',
}
// import meetingBg from '../../../image/auction/画卷.png'
import recommendBg from '../../../image/auction/bg.png'
import goodImg from '../../../image/auction/good.jpg'
import hotImg from '../../../image/auction/今日热拍.png'
import hLeft from '../../../image/auction/h-left.png'
import hCenter from '../../../image/auction/h-center.png'
import hRight from '../../../image/auction/h-right.png'

const tempGoods = [{
  img:goodImg,
  title:'名称介绍',
  time:'',
  price:'￥100',
},{
  img:goodImg,
  title:'名称介绍',
  time:'',
  price:'￥100',
},{
  img:goodImg,
  title:'名称介绍',
  time:'',
  price:'￥100',
},{
  img:goodImg,
  title:'名称介绍',
  time:'',
  price:'￥100',
}]
export class AuctionComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { location, isMode } = this.props

    const pathSnippets = location.pathname.split('/').filter(i => i)
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {auctionMap[url]}
          </Link>
        </Breadcrumb.Item>
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
          <div style={{ backgroundImage: 'url("http://odp22tnw6.bkt.clouddn.com/banner0.jpg")' }}></div>
          <div style={{ backgroundImage: 'url("http://oow7renvm.bkt.clouddn.com/cyd2.jpg")' }}></div>
          <div style={{ backgroundImage: 'url("http://odp22tnw6.bkt.clouddn.com/banner1.jpg")' }}></div>
          <div style={{ backgroundImage: 'url("http://odp22tnw6.bkt.clouddn.com/banner2.jpg")' }}></div>
        </Carousel>
        <Content className="cyd-content-wrapper">
          <div className="sub-auction-item item-wrapper">
            <NavLink exact to="/auction">拍卖首页</NavLink>
            <NavLink to="/auction/types">拍品分类</NavLink>
            <NavLink to="/auction/send">我要送拍</NavLink>
            <NavLink to="/auction/broadcast">通知公告</NavLink>
          </div>
          <div className="path-list-wrapper">
            <div>当前位置：</div>
            <Breadcrumb separator=">">
              {breadcrumbItems}
            </Breadcrumb>
          </div>
          <div className="item-wrapper" style={{ textAlign: 'center', lineHeight: '260px', fontSize: '24px', border: '1px solid #000', background: 'white' }}>
            公开征集
          </div>
          
          <div className="item-wrapper">
            <div style={{ borderBottom: '1px solid #000' }}>
                <div style={{ float: 'left' }}><strong style={{ fontSize: 26 }}>精品推荐</strong></div>
                <div style={{ float: 'right' }}><Link to="/auction/types"><strong style={{ fontSize: 26, color: '#000' }}>更多&gt;&gt;&gt;</strong></Link></div>
                <div style={{ clear: 'both' }}></div>
            </div>
            <div style={{height:260,position:'relative'}}>
            <div style={{position:'absolute',height:'260px',left:0,top:0,zIndex:100}}>
              <img src={hLeft} style={{height:'100%'}}/>
            </div>
            <div className="h-center" style={{backgroundImage:`url(${hCenter})`}}>
              <Carousel
                slidesToShow={3}
                autoplay
                swipeToSlide
                arrows={!isMode}
                prevArrow={<SampleArrow type="left" />}
                nextArrow={<SampleArrow type="right" />}
                vertical={isMode}
                draggable={!isMode}
                dots={false}>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                </div>
              </Carousel>
            </div>
            <div style={{position:'absolute',height:'260px',right:0,top:0,zIndex:100}}>
              <img src={hRight} style={{height:'100%'}}/>
            </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="bg-center" style={{ backgroundImage: `url(${recommendBg})` }}>
              <div style={{ borderBottom: '1px solid #000' }}>
                <div style={{ float: 'left' }}><strong style={{ fontSize: 26 }}>精品推荐</strong></div>
                <div style={{ float: 'right' }}><Link to="/auction/types"><strong style={{ fontSize: 26, color: '#000' }}>更多&gt;&gt;&gt;</strong></Link></div>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ padding: 20 }}>
                <Carousel
                  slidesToShow={3}
                  autoplay
                  swipeToSlide
                  arrows={!isMode}
                  prevArrow={<SampleArrow type="left" />}
                  nextArrow={<SampleArrow type="right" />}
                  vertical={isMode}
                  draggable={!isMode}
                  dots={false}>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div className="bg-center" style={{ backgroundImage: `url(${goodImg})`, height: 220 }} />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="bg-center" style={{backgroundImage:`url(${hotImg})`,height:80}}/>
            <Row gutter={20} style={{marginTop:20}}>
              {tempGoods.map((value,index)=>{
                return (
                  <Col span={12} key={index}>
                    <Row gutter={20}>
                      <Col span={12}>
                        <img src={value.img} style={{width:'100%'}}/>
                      </Col>
                      <Col span={12}>
                        <h1 style={{lineHeight:'56px'}}>{value.title}</h1>
                        <div style={{fontSize:20,marginTop:20,lineHeight:'36px'}} >
                          <p>倒计时：{value.time}</p>
                          <p>起始价：{value.price}</p>
                        </div>
                        <div style={{marginTop:'20px'}}>
                          <Button size={'large'} disabled>立即竞拍</Button>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                )
              })}
            </Row>
          </div>
        </Content>

      </div>
    )
  }
}

AuctionComponent.defaultProps = {
  isMode: false,
}
AuctionComponent.propTypes = {
  isMode: PropTypes.bool.isRequired,
  location: PropTypes.string,
}

export default withRouter(AuctionComponent)