import React from 'react'
import PropTypes from 'prop-types'
import { Carousel, Row, Col, Button, Spin } from 'antd'
import { Link } from 'react-router-dom'
import SampleArrow from '../../components/SampleArrow'
import { get } from '../../Util'
import Timer from '../../components/Timer'
import './auction.less'

import recommendBg from '../../../image/auction/bg.png'
import hotImg from '../../../image/auction/今日热拍.png'
import hLeft from '../../../image/auction/h-left.png'
import hCenter from '../../../image/auction/h-center.png'
import hRight from '../../../image/auction/h-right.png'

export class AuctionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auctionCommodities: [],
      recommends: [],
      hots: [],
      types: null,
    }
  }

  componentDidMount() {
    this.getCurrentAction()
    this.getHots()
    this.getRecommends()
  }

  render() {
    const { isMode } = this.props
    const { auctionCommodities, recommends, hots } = this.state
    console.log(hots)
    return (
      <div>
        <div className="item-wrapper" style={{ textAlign: 'center', lineHeight: '260px', fontSize: '24px', border: '1px solid #000', background: 'white' }}>
              公开征集
            </div>

            <div className="item-wrapper">
              <div style={{ borderBottom: '1px solid #000' }}>
                <div style={{ float: 'left' }}><strong style={{ fontSize: 26 }}>专场拍卖</strong></div>
                <div style={{ float: 'right' }}><Link to="/auction/auctions"><strong style={{ fontSize: 26, color: '#000' }}>更多&gt;&gt;&gt;</strong></Link></div>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ height: 160, position: 'relative' }}>
                <div style={{ position: 'absolute', height: '166px', left: 0, top: -3, zIndex: 100 }}>
                  <img src={hLeft} style={{ height: '100%' }} />
                </div>
                <div className="h-center" style={{ backgroundImage: `url(${hCenter})`, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
                  <Carousel
                    slidesToShow={5}
                    autoplay
                    swipeToSlide
                    arrows={!isMode}
                    prevArrow={<SampleArrow type="left" />}
                    nextArrow={<SampleArrow type="right" />}
                    vertical={isMode}
                    draggable={!isMode}
                    dots={false}>
                    {auctionCommodities.length > 0 ? auctionCommodities.map((value, index) =>
                      (<div style={{ padding: 9 }} key={`to-${index}`}>
                        <div className="bg-center" style={{ backgroundImage: `url(${value.head}${value.url})`, height: 140 }} />
                      </div>)
                    ) : this.getSpins()}
                  </Carousel>
                </div>
                <div style={{ position: 'absolute', height: '166px', right: 0, top: -3, zIndex: 100 }}>
                  <img src={hRight} style={{ height: '100%' }} />
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
                    slidesToShow={5}
                    autoplay
                    swipeToSlide
                    arrows={!isMode}
                    prevArrow={<SampleArrow type="left" />}
                    nextArrow={<SampleArrow type="right" />}
                    vertical={isMode}
                    draggable={!isMode}
                    dots={false}>
                    {recommends.length > 0 ? recommends.map((value, index) => (
                      <div style={{ padding: 20 }} key={`goo${index}`}>
                        <div className="bg-center" style={{ backgroundImage: `url(${value.head}${value.url})`, height: 160 }} />
                      </div>
                    )) : this.getSpins()}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="item-wrapper">
              <div className="bg-center" style={{ backgroundImage: `url(${hotImg})`, height: 80 }} />
              <Row gutter={20} style={{ marginTop: 20 }}>
                {hots.length > 0 ? hots.map((value, index) => {
                  return (
                    <Col span={12} key={index}>
                      <Row gutter={20}>
                        <Col span={12}>
                          <img src={`${value.head}${value.url}`} style={{ width: '100%', height: 220 }} />
                        </Col>
                        <Col span={12}>
                          <h1 style={{ lineHeight: '56px' }}>{value.name}</h1>
                          <div style={{ fontSize: 20, marginTop: 20, lineHeight: '36px' }} >
                            <p>倒计时：<Timer endTime={new Date(value.endTime)} callback={() => {
                              hots[index].disabled = true
                              this.setState({
                                hots: [...hots]
                              })
                            }} /></p>
                            <p>起始价：￥{value.price}</p>
                          </div>
                          <div style={{ marginTop: '20px' }}>
                            <Button size={'large'} disabled={hots[index].disabled}>立即竞拍</Button>
                          </div>
                        </Col>
                      </Row>

                    </Col>
                  )
                }) : [1, 2, 3, 4].map((value, index) => {
                  return (
                    <Col span={12} key={index}>
                      <Spin>
                        <Row gutter={20}>
                          <Col span={12}>
                            <img style={{ width: '100%', height: 220 }} />
                          </Col>
                          <Col span={12}>
                            <h1 style={{ lineHeight: '56px' }}>加载中</h1>
                            <div style={{ fontSize: 20, marginTop: 20, lineHeight: '36px' }} >
                              <p>倒计时：……</p>
                              <p>起始价：……</p>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                              <Button size={'large'} disabled>立即竞拍</Button>
                            </div>
                          </Col>

                        </Row>
                      </Spin>
                    </Col>
                  )
                })}
              </Row>
            </div>
      </div>
    )
  }

  getSpins() {
    return [
      <div style={{ padding: 9 }} key={'spin-1'}>
        <Spin>
          <div className="bg-center" style={{ height: 140 }} />
        </Spin>
      </div>,
      <div style={{ padding: 9 }} key={'spin-2'}>
        <Spin>
          <div className="bg-center" style={{ height: 140 }} />
        </Spin>
      </div>
    ]
  }

  getCurrentAction() {
    get('/api/v1/commodities/pages', {
      auction: 1,
    }).then(json => this.setState({ auctionCommodities: json.data.records }))
  }
  getTypes() {
    get('/api/v1/types').then(json => this.setState({
      types: json.data,
    }))
  }

  getRecommends() {
    get('/api/v1/commodities/pages').then(json => this.setState({
      recommends: json.data.records,
    }))
  }

  getHots() {
    get('/api/v1/commodities/pages', {
      pageSize: 4,
      focus: 1,
      sorters: [{
        sortIndex: 1,
      }, {
        sortIndex: 2,
      }]
    }).then(json => this.setState({
      hots: json.data.records
    }))
  }
}

AuctionComponent.defaultProps = {
  isMode: false,
}
AuctionComponent.propTypes = {
  isMode: PropTypes.bool.isRequired,
  location: PropTypes.string,
}

export default AuctionComponent