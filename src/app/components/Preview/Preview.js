import React from 'react'
import PropTypes from 'prop-types'
export default function Preview(props){
  const {className,style,imgUrl,name,endTime,currentPrice} = props
  return (
    <figure {...{className,style}}>
      <img src={imgUrl}/>
      <figcaption>
        <div>
        
        </div>
      </figcaption>
    </figure>
  )
}

Preview.propTypes = {
  className:PropTypes.string,
  style:PropTypes.object,
  imgUrl:PropTypes.string,
  name:PropTypes.string,
  endTime:PropTypes.string,
  currentPrice:PropTypes.number,
}