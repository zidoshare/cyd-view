import React from 'react'
import PropTypes from 'prop-types'

import {Carousel} from 'antd'

import InFolder from '../../components/InFolder'
import SampleArrow from '../../components/SampleArrow'
import pic1 from '../../../image/pic1.jpg'
import pic2 from '../../../image/pic3.jpg'
import pic3 from '../../../image/pic4.jpg'
import pic10 from '../../../image/pic10.jpg'
import './Home.less'



export default class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {isMode} = this.props
    return (
      <div>
        <Carousel 
          className="banner-item" 
          draggable 
          pauseOnHover
          arrows = {!isMode}
          prevArrow={<SampleArrow type="left"/>} 
          nextArrow={<SampleArrow type="right"/>}
        >
          <div style={{backgroundImage:'url("http://odp22tnw6.bkt.clouddn.com/banner0.jpg")'}}></div>
          <div style={{backgroundImage:'url("http://oow7renvm.bkt.clouddn.com/cyd2.jpg")'}}></div>
          <div style={{backgroundImage:'url("http://odp22tnw6.bkt.clouddn.com/banner1.jpg")'}}></div>
          <div  style={{backgroundImage:'url("http://odp22tnw6.bkt.clouddn.com/banner2.jpg")'}}></div>
        </Carousel>
        <div className="bg-center folder">
          <h1 className="text-center folder-title">
            创源地的企业优势
            <img className="bottom-align" src={pic10}/>
          </h1>
          <InFolder className="pic-item" dataSource={[{
            img:pic1,
            title:'行业优势',
            msg:'  我国“十三五规划”提出，到2020年我国文化产业在GDP占比将从现在的5%提高到15%，而目前在西欧、北美地区这一比例达到了25%左右'
          },{
            img:pic2,
            title:'资源优势',
            msg:'  公司和钱币协会长期合作收藏业务，奠定了深厚的资源基础，同时和多个平台强化互联合作。拥有精准的市场数据分析能力和参考公共信息平台及时反馈能力'
          },{
            img:pic3,
            title:'运营优势',
            msg:'  新型运营模式，权衡线上线下利弊，适时调整各项运营策略。严谨的培训体系，让职员更快的融入工作；默契的团队协作，让工作过程变得简单高效。'
          }]}/>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  isMode:PropTypes.bool.isRequired,
}