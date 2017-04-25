import React from 'react'
import './Commodity.scss'
import { Carousel } from 'antd'
import TweenOne from 'rc-tween-one'

export class Commodity extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      current: 2,
      show: false
    }
  }
  handleClick() {
    this.setState( Object.assign( {}, this.state, {
      show: !this.state.show
    } ) )
  }

  render() {
    const images = this.props.images
    console.log( images )
    const banner = images.map( ( img, index ) => (
      <div className="img-container" key={this.props.title + index}>
        <div>
          <img src={img.url}/>
        </div>
      </div>
    ) )
    const animation = {
      left: -100,
      duration: 1000
    }
    return (
    <TweenOne animation={animation} paused={!this.state.show}>
      <div className="com-item" onClick={this.handleClick.bind( this )}>
        <Carousel ref="commodity" className="item-bg" draggable autoplay infinite>
          {banner}
        </Carousel>
        <div className="item-text">
          <h3>{this.props.title}</h3>
          <nobr>
            {this.props.description}
          </nobr>
          <a className="my-link" href={this.props.url} target="_blank">点击购买>></a>
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
  url: React.PropTypes.string.isRequired
}
export default Commodity
