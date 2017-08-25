import React from 'react'
import {Carousel} from 'antd'

import SampleArrow from '../../components/SampleArrow'
import './Home.scss'



export default class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Carousel 
          className="banner-item" 
          draggable 
          pauseOnHover
          arrows
          prevArrow={<SampleArrow type="left"/>} 
          nextArrow={<SampleArrow type="right"/>}
        >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
    )
  }
}