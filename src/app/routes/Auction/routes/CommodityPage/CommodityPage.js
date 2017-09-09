import React from 'react'
import ImgGroup from './components/ImgGroup'
import PriceAdd from './components/PriceAdd'
import PropTypes from 'prop-types'
import './commodityPage.less'
import InfoPage from './InfoPage'
import Timer from '../../../../components/Timer'
import { get } from '../../../../Util'
import {NavLink,Route,Switch} from 'react-router-dom'
import { Spin,Tooltip,Icon,InputNumber } from 'antd'
import moment from 'moment'

export default class CommodityPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      dataLoading: false,
    }
  }

  componentWillMount() {
    const { match } = this.props
    this.setState({
      dataLoading: true,
    })
    get('/api/v1/commodity', { id: match.params.id }).then(json => this.setState({
      dataLoading: false,
      data: json.data
    }))
  }
  render() {
    const { data, dataLoading } = this.state
    const {match} = this.props
    const labels = data || {
      name: '加载中...',
      state: 1,
      endTime: new Date(),
      startTime: new Date(),
      currentPrice: 'XXXXX',
      basePrice: '100,200,300',
      competition: 0,
      images:[{
        head:'http://odp22tnw6.bkt.clouddn.com/v1/',
        url:'commodity/loading.jpg',
      }]
    }

    switch (labels.state) {
    case 0:
      labels.state = '暂未开始'
      break
    case 1:
      labels.state = '拍卖中'
      break
    case 2:
      labels.state = '已结束'
      break
    }
    return (
      <div className="commodity-wrapper">
        <Spin spinning={dataLoading}>
          <div className="prev">
            <div className="img-prev">
              <ImgGroup imgs={labels.images} />
            </div>
            <div className="info-prev">
              <h1>{labels.name}</h1>
              <div className="info-status">
                <div className="status-label">
                  {labels.state}
                </div>
                <div className="status-other">
                  <p>距结束： <Timer endTime={new Date(labels.endTime)} /></p>
                  <p>开始时间: {(moment(new Date(labels.startTime))).format('YYYY年MMMMDo，hh:mm:ss a')}</p>
                </div>
              </div>
              <div className="fr">
                <span>当前价： <span className="red">￥{labels.currentPrice}</span></span>
                <span style={{marginLeft:30}}>出价：<span className="red">{labels.competition}</span>次</span>
              </div>
              <div className="fr">保证金： <span>￥100</span><Tooltip title="需要交纳保证金"><Icon style={{fontWeight:'500',marginLeft:10,cursor:'pointer'}} type="question-circle-o" /></Tooltip></div>
              <div className="fr">
                加价：
                <PriceAdd data = {labels.basePrice}/>
                <InputNumber placeholder="输入金额" />
              </div>
              <div style={{marginTop:10}}>
                <div className="hor-btn">
                  缴纳并加价
              </div>
              </div>
            </div>
          </div>
        </Spin>
        <h2 style={{margin:20,color:'#EA6234'}}>
          竞拍流程：登录<Icon type="arrow-right" />出价成功<Icon type="arrow-right" />竞拍成功<Icon type="arrow-right" />支付货款<Icon type="arrow-right" />完成收货
        </h2>
        <div className="info-detail-wrapper">
          <div className="info-menu-bar">
            <NavLink to={`${match.url}`} exact>拍品信息</NavLink>
            <NavLink to={`${match.url}/detail`}>细节展示</NavLink>
            <NavLink to={`${match.url}/notice`}>注意事项</NavLink>
            <NavLink to={`${match.url}/ownerInfo`}>藏友信息</NavLink>
          </div>
          <Switch>
            <Route path={`${match.url}`} exact render = {(props) => <InfoPage key={'commodity-1'} {...props} col = "info" id = {match.params.id}/>}/>
            <Route path={`${match.url}/detail`} render = {(props) => <InfoPage key={'commodity-2'} {...props} col = "detail" id = {match.params.id}/>}/>  
            <Route path={`${match.url}/notice`} render = {(props) => <InfoPage key={'commodity-2'} {...props} col = "notice" id = {match.params.id}/>}/> 
            <Route path={`${match.url}/ownerInfo`} render = {(props) => <InfoPage key={'commodity-2'} {...props} col = "ownerInfo" id = {match.params.id}/>}/> 
          </Switch>
        </div>
      </div>
    )
  }
}

CommodityPage.propTypes = {
  match: PropTypes.object,
}