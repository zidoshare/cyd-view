/**
 * Created by zido on 2017/5/23 0023.
 */

import React from 'react'
import {Layout, Col, Row, Card } from 'antd'
import BannerAnim, { Element } from 'rc-banner-anim'
const Content = Layout.Content
import AbItem from '../../components/AbItem'
import './AboutUs.scss'
export default class AboutUs extends React.Component{

  render(){
    return (
      <Content style={{ padding: '10px 200px',background:'#eee' }}>
        <AbItem info="01" title="关于我们" desc="ABOUT US">
          <div>
            <Row>
              <Col span={14}>
                <BannerAnim prefixCls="banner-user" type="across" autoPlaySpeed={3000} dragPlay={true}>
                  <Element
                    prefixCls="about-banner"
                    key="0"
                  >
                    {/*图片写在这*/}
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495820005147&di=43f4ccd913d3ccc03085447463ba5e33&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F02%2F27%2F01300000309943128332273871776_s.jpg"/></Element>
                  <Element
                    prefixCls="about-banner"
                    key="1"
                  >
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495820005147&di=43f4ccd913d3ccc03085447463ba5e33&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F02%2F27%2F01300000309943128332273871776_s.jpg"/>
                  </Element>
                </BannerAnim>
              </Col>
              <Col span={10} className="about-info">
                <p>公司简介</p>
              </Col>
            </Row>
            <Row className="about-item-container" gutter={16}>
              <Col span={8}>
                <Card className="about-item">
                  <div className="about-item-img" style={{backgroundImage:'url(https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png)'}}>
                  </div>
                  <div className="about-item-desc">
                    <p>宽敞的会议室</p>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="about-item">
                  <div className="about-item-img" style={{backgroundImage:'url(https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png)'}}>
                  </div>
                  <div className="about-item-desc">
                    <p>宽敞的会议室</p>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="about-item">
                  <div className="about-item-img" style={{backgroundImage:'url(https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png)'}}>
                  </div>
                  <div className="about-item-desc">
                    <p>宽敞的会议室</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </AbItem>
        <AbItem info="02" title="企业人文环境" desc="ENTERPRISE ENVIRONMENT">
          <div>
            <BannerAnim prefixCls="banner-user" type="across" autoPlaySpeed={3000} dragPlay={true}>
              <Element
                prefixCls="about-banner"
                key="0"
              >
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495820005147&di=43f4ccd913d3ccc03085447463ba5e33&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F02%2F27%2F01300000309943128332273871776_s.jpg"/></Element>
              <Element
                prefixCls="about-banner"
                key="1"
              >
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495820005147&di=43f4ccd913d3ccc03085447463ba5e33&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F02%2F27%2F01300000309943128332273871776_s.jpg"/>
              </Element>
            </BannerAnim>
            <div>
              <h3>舒适的办公环境</h3>
              <p>舒适的办公环境舒适的办公环境舒适的办公环境舒适的办公环境舒适的办公环境舒适的办公环境舒适的办公环境</p>
            </div>
          </div>
        </AbItem>
        <AbItem info="03" title="诚聘英才" desc="TALENTS WANTED">
          <div><img src=""/></div>
        </AbItem>
        <AbItem info="04" title="联系方式" desc="CONTENT INFORMATION">
          <div><img src=""/></div>
        </AbItem>
      </Content>
    )
  }
}