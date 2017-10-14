import React from 'react'
import './Commodity.scss'
import { Carousel } from 'antd'

export class Commodity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 2,
      show: false
    }
  }
  handleClick() {
    this.setState(Object.assign({}, this.state, {
      show: !this.state.show
    }))
  }

  render() {
    const images = this.props.images
    const banner = images.map((img, index) => (
      <div className="img-container" key={this.props.title + index}>
        <div>
          <img src={img.url} />
        </div>
      </div>
    ))
    return (
      <div className="com-item" onClick={this.handleClick.bind(this)} title={this.props.description}>
        <Carousel ref="commodity" className="item-bg" draggable infinite>
          {banner}
        </Carousel>
        <div className="item-text">
          <h3>{this.props.title}</h3>

          <nobr>
            {this.props.description}
          </nobr>
          <p className="price">{this.props.price}</p>
          <a className="my-link" href={this.props.url} target="_blank">点击购买>></a>
        </div>
      </div>
    )
  }
}

Commodity.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  images: React.PropTypes.array,
  url: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
}
export default Commodity
