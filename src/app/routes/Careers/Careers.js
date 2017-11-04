/**
 * $
 * cyd_view AddCommodity.js build on Windows
 * @authors wuhongxu (wuhongxu1208@gmail.com)
 * @date    2017-01-09 14:27:26
 * @version $
 * @link <a>https://userwu.github.io/</a>
 *
 */

import React, { PropTypes } from 'react'
import { Layout,Row,Col } from 'antd'
const Content = Layout.Content
import {Spin } from 'antd'
import {get} from '../../Util'
import apiUrl from '../../apiUrl'
import './Careers.scss'
class Careers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: null,
      loading: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    this.setState(Object.assign({}, this.state, { loading: true }))
    get(apiUrl.careerUrl).then(data => this.setState({
      response: data,
      loading: false,
    }))
  }

  render() {
    const { response } = this.state
    let infoList = []
    if (response !== null) {
      infoList = response.data.map((value, index) => (
        <li key={'info' + index} id={'info' + index}>
          <div className="careers-info">
            <div className="careers-title">
              {value.name}:
            </div>
            <div className="careers-content">
              <div dangerouslySetInnerHTML={{ __html: value.description }} />
            </div>
          </div>
        </li>
      ))
    }
    return (
      <Content className="car-container">
        <img src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/career-banner-1.jpg"/>
          <div className="nr" >
            <img className="nr-ins" src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/career-person-1.png"/>
            <Spin  spinning={this.state.loading} delay={500} tip={'正在加载...'}>
              <ul style={{ padding: 20 }}>
                {infoList}
              </ul>
            </Spin>
            <div className="car-panel">
            <h1>公司福利</h1>
              <h1>CORPORATE WELFARE</h1>
            <Row gutter={10} className="car-panel-ins">
              
              <Col span={6}>
                <div style={{background:'#566E86',height:215,marginBottom:10}}>
                  <h1>薪资</h1>
                  <p>3000~8000元<br/>无责任底薪+提成+奖金+福利</p>
                </div>
                <div style={{background:'#52908F',height:215}}>
                  <h1>晋升</h1>
                  <p>季度晋升职务<br/>薪资福利调整</p>
                </div>
              </Col>
              <Col span={6}>
                <div style={{background:'#138EEC',height:440}}>
                <br/><br/><br/>
                  <h1>社会保障</h1>
                  <p>养老保险<br/>生育保险<br/>工伤保险<br/>失业保险<br/>医疗保险</p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{background:'#9A8B52',height:215,marginBottom:10}}>
                  <h1>员工关怀</h1>
                  <p>餐补、房补、话补<br/>绩效奖金、旅游奖励、年度红包</p>
                </div>
                <div style={{background:'#F7702E',height:215}}>
                  <h1>工作待遇</h1>
                  <p>朝九晚六、周末单休<br/>享国家法定节假日</p>
                </div>
              </Col>
            </Row>
            <p>如果你对我们的职位感兴趣，并且符合我们公司的基本要求</p>
            <p>欢迎拨打公司招聘热线与我们联系</p>
            <p>联系电话：028-69290213   李妍</p>
            </div>
        </div>
      </Content>
    )
  }
}
Careers.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
}
Careers.defaultProps = {
  className: 'banner2',
}

export default Careers

