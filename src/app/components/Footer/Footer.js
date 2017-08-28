import React from 'react'
import PropTypes from 'prop-types'
import './footer.less'
import {Row,Col,Icon} from 'antd'

const erweim = 'http://odp22tnw6.bkt.clouddn.com//v1/erweim.jpg'
export default function Footer(props){
  const temp = {...props}
  const {isMode} = temp
  delete props.isMode
  return (
    <footer {...props} className="cyd-footer ant-layout-footer">
      <Row gutter={20}>
        <Col sm={16} style={{borderRight:isMode?null:'2px solid #eee'}}>
          <h1 className="text-center" style={{color:'#eee'}}>
            我们在这
          </h1>
          <div style={{textAlign:'center',padding:'0 100px'}}>
            <img style={{width:'100%'}} src="http://oow7renvm.bkt.clouddn.com/jnmap.jpg"/>
          </div>
          <Row>
            <Col sm={12} style={{verticalAlign:'center'}}>
              <h2 style={{color:'white'}}>公司地址：成都市金牛区人民北路万达甲级写字楼B座702—703</h2>
            </Col>
            <Col sm={12} className="text-center">
              <h3 style={{color:'white'}}>Copyright © 2017 成都创源地文化传播有限公司 All Rights Reserved</h3>
              <h3 style={{color:'white'}}>备案号：蜀ICP备17010963号-1</h3>
            </Col>
          </Row>
        </Col>
        <Col sm={8} style={{paddingLeft:10,height:'100%'}}>
          <div className="text-center">
            <img src={erweim} style={{maxWidth:'100%'}}/>
          </div>
          <h1 className="text-center" style={{color:'white'}}>微信公众号</h1>
          <div style={{marginTop:20}}>
            <h1 style={{color:'orangered'}}>全国统一服务热线</h1>
            <h1 style={{textAlign:'right',color:'orangered'}}><Icon type="phone" />400-866-563</h1>
          </div>
        </Col>
      </Row>
    </footer>
  )
}

Footer.propTypes = {
  isMode:PropTypes.bool,
}