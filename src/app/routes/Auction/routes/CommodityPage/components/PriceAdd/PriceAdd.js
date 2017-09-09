import React from 'react'
import PropTypes from 'prop-types'
import {Tag} from 'antd'
import './PriceAdd.less'
export default function PriceAdd(props){
  let result = props.data
  if(typeof result === 'string')
    result = props.data.split(',')
  return (
    <div className="add-container">
      {result.map((value,index) => <Tag key={`add-${index}`} color="#FAC080">{value}</Tag>)}
    </div>
  )
}

PriceAdd.propTypes = {
  data:PropTypes.oneOfType([PropTypes.string,PropTypes.array]),
  callback:PropTypes.func,
}

