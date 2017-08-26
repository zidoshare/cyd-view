import React from 'react'
import PropTypes from 'prop-types'

import './inFolder.less'
export default function InFolder(props){
  const {className,dataSource} = props
  return (
    <div className="in-folder-list">
      {dataSource.map(obj => (
        <figure className = {className}>
          <img src={obj.img}/>
          <figcaption>
            <h2>{obj.title}</h2>       
            <p>{obj.msg}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
InFolder.propTypes = {
  dataSource:PropTypes.arrayOf(PropTypes.shape({
    img:PropTypes.string,
    title:PropTypes.string,
    msg:PropTypes.string,
  })),
  className:PropTypes.string,
}