/**
 * http ajax post方法
 * @author zido
 * @since 2017/6/3 0003
 */
import {message as Message} from 'antd'
import isEmpty from './isEmpty'
export const defaultReject = ({message = '服务器异常，请尝试刷新重试'}) => {
  Message.error(message)
}

export const resolveJson = (data, cb) => {
  if (data.success !== null && data.success === false) {
    if (!isEmpty(data.message)) {
      cb({status: -1, info: data.message})
    } else if (!isEmpty((data.data))) {
      return data
    }
    cb({status: -1})
    return
  }
  if (data.success !== null && data.success === true)
    return data
}

export const createHttpPromise = (url, data = {}, headers = require('./HttpHeader'), method = 'POST') => {
  return fetch(url, {
    method: method,
    headers: headers,
    body: data && JSON.stringify(data),
  }).then((response) => {
    if(!response.ok){
      return {
        success:false,
      }
    }
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1)
      return response.json()
    return {
      success:false,
      message:'服务器未返回相应数据，请联系管理员',
    }
  },(err) => {
    console.error(err)
  }).then((json) => {
    if(json.success !== null && json.success === false){
      const err = new Error()
      err.data = json
      throw err
    }
    else{
      if(!isEmpty(json.message))
        Message.success(json.message)
      return json
    }
  }).catch((err) => {
    defaultReject(err.data)
    return err.data
  })
}
export default createHttpPromise