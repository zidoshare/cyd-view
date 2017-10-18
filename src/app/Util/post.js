/**
 * http ajax post方法
 * @author zido
 * @since 2017/6/3 0003
 */
import { message as Message } from 'antd'
import objToQuery from './objToQuery'
import isEmpty from './isEmpty'
export const defaultReject = (err) => {
  Message.error(err.message || '服务器异常')
}

function AjaxError(message){
  this.success = false
  this.message = message
}
AjaxError.prototype = new Error()

export const resolveJson = (data, cb) => {
  if (data.success !== null && data.success === false) {
    if (!isEmpty(data.message)) {
      cb({ status: -1, info: data.message })
    } else if (!isEmpty((data.data))) {
      return data
    }
    cb({ status: -1 })
    return
  }
  if (data.success !== null && data.success === true)
    return data
}

export const createHttpPromise = (url, data = {}, headers = require('./HttpHeader'), method = 'POST') => {
  if(headers['Content-Type'] && headers['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1){
    data = objToQuery(data)
  }else {
    data = data && JSON.stringify(data)
  }
  return fetch(url, {
    method: method,
    headers: headers,
    body: data,
  }).then((response) => {
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1)
      return response.json()
    return {
      success: false,
      message: '服务器未返回相应数据，请联系管理员',
    }
  }).then((json) => {
    if (json.success !== null && json.success === false) {
      throw new AjaxError(json.message)
    }
    else {
      if (!isEmpty(json.message))
        Message.success(json.message)
      return json
    }
  }).catch((err) => {
    defaultReject(err)
    return err
  })
}
export default createHttpPromise