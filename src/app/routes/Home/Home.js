import React from 'react'
import PropTypes from 'prop-types'

import {Carousel} from 'antd'

import SampleArrow from '../../components/SampleArrow'
import './Home.scss'



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
        
      </div>
    )
  }
}

Home.propTypes = {
  isMode:PropTypes.bool.isRequired,
}