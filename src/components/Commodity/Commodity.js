import React from 'react'
import './Commodity.scss'
import {Carousel} from 'antd'
import TweenOne from 'rc-tween-one'

export class Commodity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 2,
      show:false
    }
  }
  handleClick(){
    this.setState(Object.assign({},this.state,{show:!this.state.show}))
  }
  
  render() {
    const images = this.props.images
    const banner = images.map((img, index) => (
      <div key={this.props.title + index}>
        <img src={img}/>
      </div>
    ))
    const animation = { left:-100, duration: 1000}
    return (
      <TweenOne animation={animation} paused={!this.state.show}>
          <div className="com-item" onClick={this.handleClick.bind(this)}>
            <Carousel
              ref="commodity"
              className="item-bg"
              draggable
              autoplay
              infinite>
              {banner}
            </Carousel>
            <div className="item-text">
              <h3>魅族手机魅族手机魅族手机魅族手机魅族手机魅族手机</h3>
              <nobr>简介简介简介简介简介简介简介简介简介简介</nobr>
              <a className="my-link" href={this.props.url} target="_blank">点击购买&gt;&gt;</a>
            </div>
          </div>
      </TweenOne>
    )
  }
}

Commodity.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  images: React.PropTypes.array,
  url:React.PropTypes.string.isRequired
}

export default Commodity