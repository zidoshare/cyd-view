/**
 * Created by zido on 2017/5/23 0023.
 */
import React from 'react'
import {Icon} from 'antd'
import './abItem.scss'
export default class AbItem extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    const {info,title,desc} = this.props
    return (
      <div className="ab-item">
        <div className="ab-header">
          <span className="ab-info">{info}</span>
          <span className="ab-title">{title}</span>
          <div className="ab-line">{desc}</div>
        </div>

        <div className="ab-content">
          {this.props.children}
        </div>
        <div style={{textAlign:'center'}}><Icon style={{fontSize:20,padding:10}} type="down-circle-o" /></div>
      </div>
    )
  }
}

AbItem.propTypes = {
  info:React.PropTypes.string.isRequired,
  title:React.PropTypes.string.isRequired,
  desc:React.PropTypes.string.isRequired,
  children:React.PropTypes.any,
}