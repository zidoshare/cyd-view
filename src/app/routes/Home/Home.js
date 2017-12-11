import React from 'react'
import PropTypes from 'prop-types'

import {Carousel} from 'antd'

import InFolder from '../../components/InFolder'
import SampleArrow from '../../components/SampleArrow'
const pic1 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic1.jpg'
const pic2 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic3.jpg'
const pic3 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic4.jpg'
const pic10 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic10.jpg'
const humPic = 'http://odp22tnw6.bkt.clouddn.com/v1/humanities.png'
const serverPic = 'http://odp22tnw6.bkt.clouddn.com/v1/pic4.png'
const mindPic = 'http://odp22tnw6.bkt.clouddn.com/v1/mind.png'
const pic7 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic7.png'
const folder2bg = 'http://odp22tnw6.bkt.clouddn.com/v1/folder-2-bg.jpg'
const culturePic = 'http://odp22tnw6.bkt.clouddn.com/v1/culture.png'


const p1 = 'http://odp22tnw6.bkt.clouddn.com/v1/angui.jpg'
const p2 = 'http://odp22tnw6.bkt.clouddn.com/v1/gsbank.jpg'
const p3 = 'http://odp22tnw6.bkt.clouddn.com/v1/jsbank.jpg'
const p4 = 'http://odp22tnw6.bkt.clouddn.com/v1/jtbank.jpg'
const p5 = 'http://odp22tnw6.bkt.clouddn.com/v1/msbank.jpg'
const p6 = 'http://odp22tnw6.bkt.clouddn.com/v1/njwjs.jpg'
const p7 = 'http://odp22tnw6.bkt.clouddn.com/v1/nybank.jpg'
const p8 = 'http://odp22tnw6.bkt.clouddn.com/v1/pabank.jpg'
const p9 = 'http://odp22tnw6.bkt.clouddn.com/v1/pabx.jpg'
import './Home.less'



export default class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {isMode} = this.props
    return (
      <div className="home-content-wrapper">
        <Carousel 
          className="banner-item" 
          draggable 
          pauseOnHover
          autoplay
          autoplaySpeed={2000}
          arrows = {!isMode}
          prevArrow={<SampleArrow type="left"/>} 
          nextArrow={<SampleArrow type="right"/>}
        >
          <div>
            <img src="http://oow7renvm.bkt.clouddn.com/%E4%BC%81%E4%B8%9A%E6%96%87%E5%8C%96banner.jpg"/>
          </div>
          <div>
            <img src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/banner6.jpg"/>
          </div>
          <div>
            <img src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/banner8.jpg"/>
          </div>
          <div>
            <img src="http://oow7renvm.bkt.clouddn.com/banner%E6%9C%AA%E4%BF%AE%E6%94%B92.jpg"/>
          </div>
          <div>
            <img src="http://oow7renvm.bkt.clouddn.com/%E5%92%8C%E5%AD%97%E5%B8%81.jpg"/>
          </div>
        </Carousel>
        <div className="folder">
          <h1 className="text-center folder-title">
            企业优势
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
        <div className="bg-center folder" style={!isMode?{backgroundImage:`url(${folder2bg})`}:{}}>
          <h1 className="bg-center text-center folder-title" style={{color:'white',...(isMode?{backgroundImage:`url(${folder2bg})`}:{})}} >
            企业文化
            <img className="bottom-align" src={pic10}/>
          </h1>
          <InFolder type="flip" dataSource = {[{
            img:humPic,
            title:'人文理念',
            msg:<div>
                <p>共创<br/>共赢<br/>共享</p>
                <p>（事业共创<br/>业绩共赢<br/>成果共享）</p>
              </div>
          },{
            img:culturePic,
            title:'文化核心',
            msg:<div>
                <p>信任、个性</p>
                <p>（因信任<br/>而包容、<br/>因个性<br/>而创造）</p>
              </div>,
          },{
            img:pic7,
            title:'收藏理念',
            msg:<div>
                <p>全民收藏<br/>（懂得收藏<br/>能够收藏）</p>
                <p>潜在价值<br/>（市场走向<br/>保值升值）</p>
              </div>,
          },{
            img:serverPic,
            title:'服务品质',
            msg:<div>
                <p>顾客至上<br/>（心系感受<br/>保障利益）</p>
                <p>优质精品<br/>（差异选择<br/>层级管理）</p>
              </div>,
          },{
            img:mindPic,
            title:'世局观',
            msg:<div>
            <p>空间拓展<br/>（一极多元<br/>融合发展）</p>
            <p>人文拓展<br/>（物质追求<br/>精神共享）</p>
          </div>,
          }]}/>
        </div>
        <div className="folder" style={{height:'auto'}}>
          <h1 className="text-center folder-title">
            合作伙伴
            <img className="bottom-align" src={pic10}/>
          </h1>
          <div>
            <Carousel 
              slidesToShow={5} 
              autoplay 
              swipeToSlide 
              arrows={!isMode} 
              style={{height:120}}
              prevArrow={<SampleArrow type="left"/>} 
              nextArrow={<SampleArrow type="right"/>} 
              vertical={isMode} 
              draggable={!isMode} 
              dots={false}>
              <div className="bg-center" style={{backgroundImage:`url(${p1})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p2})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p3})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p4})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p5})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p6})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p7})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p8})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p9})`,height:80}}/>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  isMode:PropTypes.bool.isRequired,
}