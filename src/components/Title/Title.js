import React from 'react'
import './Title.scss'
export const Title = ( props ) => (
  <div className="content-title">
    <div className="content-text">
      {props.text}
    </div>
  </div>
)

Title.propTypes = {
  text:React.PropTypes.string
}

export default Title