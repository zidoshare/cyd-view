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
import { Layout, Row, Col } from 'antd'
const Content = Layout.Content
import { Anchor, Spin } from 'antd'
import {get} from '../../Util'
const { Link } = Anchor
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
    let linkList = []
    let infoList = []
    if (response !== null) {
      linkList = response.data.map((value, index) => (
        <Link key={'link' + index} href={'#info' + index} title={value.name} />
      ))
      infoList = response.data.map((value, index) => (
        <li key={'info' + index} id={'info' + index}>
          <div className="careers-info">
            <div className="careers-title">
              {value.name}:
            </div>
            <div className="careers-content">
              <h3>岗位职责</h3>
              <div dangerouslySetInnerHTML={{ __html: value.description }} />
            </div>
          </div>
        </li>
      ))
    }
    return (
      <Content style={{ padding: '0 100px', minHeight: 600, }} className="nr">
        <div className="car-title"><h1>招贤纳士</h1></div>
        <Spin spinning={this.state.loading} delay={500} tip={'正在加载...'}>
          <Row>
            <Col span={3}>
              <Anchor style={{ background: 'url(http://oow7renvm.bkt.clouddn.com/bj.png)' }} className="car-link" offsetTop={64}>
                {linkList}
              </Anchor>
            </Col>
            <Col span={21}>

              <ul style={{ padding: 20 }}>
                {infoList}
              </ul>

            </Col>
          </Row>
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

