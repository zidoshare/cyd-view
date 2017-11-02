/**
 * description
 * <p>fill description</p>
 * @author zido
 * @since 2017/6/3 0003
 */

import get from './get'
import isEmpty from './isEmpty'
import post from './post'
import checkBankNum from './checkBankNum'
import patterns from './patterns'
import checkIdCard from './checkIdCard'
import toRoute from './toRoute.js'
import cookieUtil from './cookieUtil.js'
import handlePage from './handlePage'
import formartData from './formartData'
const Util = {
  get,
  isEmpty,
  post,
  checkBankNum,
  patterns,
  checkIdCard,
  toRoute,
  cookieUtil,
  handlePage,
  formartData,
}
export {
  Util as default,
  get,
  isEmpty,
  post,
  checkBankNum,
  patterns,
  checkIdCard,
  toRoute,
  cookieUtil,
  handlePage,
  formartData,
}


export function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg) //获取url中'?'符后的字符串并正则匹配
  var context = ''
  if (r != null)
    context = r[2]
  reg = null
  r = null
  return context == null || context == '' || context == 'undefined' ? '' : context
}