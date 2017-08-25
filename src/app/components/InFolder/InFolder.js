import React from 'react'
import PropTypes from 'prop-types'

export default class InFolder extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {children} = this.props

    return (
      <div className="in-folder-container">
        <ul className="in-folder-list">
          {children.map(child => (
            <li>{child}</li>
          ))}
        </ul>
      </div>
    )
  }
}

InFolder.propTypes = {
  children:PropTypes.array,
}