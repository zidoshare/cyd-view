import React from 'react'
import './Title.scss'
class Title extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="content-title">
    <div className="content-text">
      {this.props.text}
    </div>
  </div>
    )
  }
}
Title.propTypes = {
  text: React.PropTypes.string
}
export default Title
