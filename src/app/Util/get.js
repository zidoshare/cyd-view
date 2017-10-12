/**
 * http ajax get方法
 * @author zido
 * @since 2017/6/3 0003
 */
import {createHttpPromise} from './post'

export default (url, paramsObject, headers = require('./HttpHeader'))=>{
  if (paramsObject) {
    let paramsArray = []
    Object.keys(paramsObject).forEach(key => {
      if(paramsObject[key] == null)
        return 
      if(!(paramsObject[key] instanceof Array)){
        paramsArray.push(key + '=' + paramsObject[key])
        return 
      }
      const array = paramsObject[key]
      for(let i = 0; i < array.length; i++){
        if(array instanceof Object){
          const item = array[i]
          for(let k in item){
            paramsArray.push(key+'.'+k + `[${i}]`+'='+ item[k])
          }
        }else{
          paramsArray.push(key+`[${i}]`+'='+array[i])
        }
      }
    })
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return createHttpPromise(url,null,headers,'GET')
}