/**
 * description
 * <p>fill description</p>
 * @author zido
 * @since 2017/6/3 0003
 */
import React from 'react'
import './PageNotFound.scss'
import {Link} from 'react-router-dom'
const PageNotFount = ()=>(
  <div>
    <div className="page-not-found">
      <p><span>4</span><span>0</span><span>4</span></p>
      <p>未找到相关页面</p>
      <p><Link to="/">点击回到首页</Link></p>
    </div>
  </div>
)

export default PageNotFount