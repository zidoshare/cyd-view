import React from 'react'
import PropTypes from 'prop-types'
export default class Timer extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const {style,className,endTime} = this.props
    return (
      <span style={style} className={className}>

      </span>
    )
  }
}

Timer.propTypes = {
  style : PropTypes.object,
  className:PropTypes.string,
}