import React from 'react'
import PropTypes from 'prop-types'
import './footer.less'
import {Row,Col,Icon} from 'antd'


export default class Footer extends React.Component{
  componentDidMount(){
    var cnzz_protocol = (('https:' == document.location.protocol) ? ' https://' : ' http://')
    document.write(unescape('%3Cscript src="' + cnzz_protocol + 's19.cnzz.com/z_stat.php%3Fid%3D1264513279%26show%3Dpic1" type="text/javascript"%3E%3C/script%3E'))
  }
  render(){
    const {props} = this
    const temp = {...props}
    const {isMode} = temp
    // delete props.isMode
    return (
      <footer {...props} className='cyd-footer ant-layout-footer'>
        <Row gutter={20}>
          <Col sm={16} style={{borderRight:isMode?null:'2px solid #eee'}}>
            <Row>
              <Col sm={12} style={{verticalAlign:'center'}}>
                <h3 style={{color:'white'}}>公司地址：成都市金牛区人民北路万达甲级写字楼B座702—703</h3>
              </Col>
              <Col sm={12} className='text-center'>
                <h3 style={{color:'white'}}>Copyright © 2017 成都创源地文化传播有限公司 All Rights Reserved</h3>
                <h3 style={{color:'white'}}>备案号：蜀ICP备17010963号-1<span id='cnzz_stat_icon_1264513279'></span></h3>
              </Col>
            </Row>
          </Col>
          <Col sm={8} style={{paddingLeft:10,height:'100%'}}>
            
            <div style={{marginTop:20}}>
              <h2 style={{color:'orangered'}}>全国统一服务热线：<span style={{textAlign:'right',color:'orangered'}}><Icon type='phone' />400-8866-563</span></h2>
              
            </div>
          </Col>
        </Row>
      </footer>
    )
  }
}

Footer.propTypes = {
  isMode:PropTypes.bool,
}