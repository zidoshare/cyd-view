import React from 'react'
import PropTypes from 'prop-types'
import Timer from '../../../../../../components/Timer'
import './Preview.less'

import rp from '../../../../../../../image/auction/recommend.png'
import {Link} from 'react-router-dom'
export default function Preview(props) {
  const {style,auctions} = props
  const { id,head,url, name, endTime, currentPrice,focus } = props.dataSource
  return (
    <figure {...{style}} className={'c-item'}>
      {focus == 1 ?<div className="bg-center pre-mark" style={{backgroundImage:`url(${rp})`}}></div>:null}
      <div className="img-container"><img src={`${head}${url}`} /></div>
      <figcaption>
        <div className="pre-content">
          <h1>{name}</h1>
          <p style={{fontSize:16}}>距结束：<Timer style={{color:'red'}} endTime={endTime}/></p>
          <h3>当前价 <span style={{fontSize:16,color:'red'}}>￥{currentPrice}</span></h3>
        </div>
        <Link className="pre-btn" to={`/auction/${auctions?'auctions':'types'}/commodity/${id}`}>
          竞拍
        </Link>
      </figcaption>
    </figure>
  )
}

Preview.defaultProps = {
  auctions:false,
}
Preview.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  auctions:PropTypes.bool.isRequired,
  dataSource:PropTypes.shape({
    head: PropTypes.string,
    url:PropTypes.string,
    name: PropTypes.string,
    endTime: PropTypes.string,
    currentPrice: PropTypes.number,
    focus: PropTypes.array,
  })
}