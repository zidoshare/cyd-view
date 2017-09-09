import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'antd'

import './imgGroup.less'
export default class ImgGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  changeCurrent(current) {
    this.setState({
      current,
    })
  }

  render() {
    const { imgs } = this.props
    const { current } = this.state
    const length = imgs.length
    return (
      <div className="img-group-container">
        <div className="large-container">
          {imgs.map((value, index) => (
            <div className="img-block" key={`group-${index}`}  style={{ backgroundImage: `url(${value.head}${value.url})`, display: current == index ? 'block' : 'none' }}></div>
          ))}
        </div>
        <div className="sm-container">
          <div className={'group-control-btn' + ((current <= 0) ? ' over' : '')} onClick={() => current > 0 ?this.changeCurrent(current-1):null}>
            <Icon type="left" />
          </div>
          {imgs.map((value, index) => (
            <div className={'sm-img-block' + ((current == index) ? ' active' : '')} onMouseEnter={() => this.changeCurrent(index)} key={`group-${index}`} style={{ backgroundImage: `url(${value.head}${value.url})` }}></div>
          ))}
          <div className={'group-control-btn' + ((current >= length - 1) ? ' over' : '')} onClick={() => current < length - 1 ?this.changeCurrent(current+1):null}>
            <Icon type="right" />
          </div>
        </div>
      </div>
    )
  }
}

ImgGroup.propTypes = {
  imgs:[{
    head:'http://odp22tnw6.bkt.clouddn.com/v1/',
    url:'commodity/loading.jpg',
  }]
}

ImgGroup.propTypes = {
  imgs: PropTypes.array,
}