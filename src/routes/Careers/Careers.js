/**
 * $
 * cyd_view AddCommodity.js build on Windows
 * @authors wuhongxu (wuhongxu1208@gmail.com)
 * @date    2017-01-09 14:27:26
 * @version $
 * @link <a>https://userwu.github.io/</a>
 *
 */

import React, {PropTypes} from 'react'
import {Layout, Row, Col} from 'antd'
const Content = Layout.Content
import QueueAnim from 'rc-queue-anim'
import Animate from 'rc-animate'
import {Anchor, Spin} from 'antd'
const {Link} = Anchor
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
    this.setState(Object.assign({}, this.state, {loading: true}))
    fetch('/api/pub/careers/index', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => this.setState({
      response: data,
      loading: false,
    }))
  }
  
  render() {
    const {response} = this.state
    console.log(response)
    let linkList = []
    let infoList = []
    if (response !== null) {
      linkList = response.data.map((value, index) => (
        <Link key={'link' + index} href={'#info' + index} title={value.name}/>
      ))
      infoList = response.data.map((value, index) => (
        <li key={'info' + index} id={'info' + index}>
          <div className="careers-info">
            <div className="careers-title">
              销售人员
            </div>
            <div className="careers-content">
              <h3>岗位职责</h3>
              1、结合公司的产品战略，参与制定产品规划及产品发展方向；<br/>
              2、收集各方需求，分析线上运营产品情况，结合市场情况设计产品方案，撰写产品需求书，推动和协调开发部门开发，推动运营部门的产品运营及市场推广以及关注产品销售数据；<br/>
              3、负责公司线上产品的完善和持续优化改进；<br/>
              4、定期进行市场分析、竞品分析和用户研究，为产品改进提供指导；<br/>
              5、负责培养下属产品人员的专业技能、职业化水准。<br/>
            </div>
          </div>
        </li>
      ))
    }
    return (
      <Content style={{padding: '0 100px', minHeight: 600}}>
        <Spin spinning={this.state.loading}>
          <div className="car-title"><h1>招贤纳士</h1></div>
          <div>
            <Row>
              <Col span={3}>
                <Animate
                  transitionName="fade"
                  transitionAppear
                >
                    <Anchor>
                      {linkList}
                    </Anchor>
                </Animate>
              </Col>
              <Col span={21}>
                
                <QueueAnim component="ul" type="bottom">
                  {infoList}
                </QueueAnim>
              
              </Col>
            </Row>
          </div>
        </Spin>
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

