/**
 * 低版本浏览器适配
 * <p>暂时涵盖object.assign,promise,fetch</p>
 * @author zido
 * @since 2017/5/30 0030
 */
Object.assign = require('object-assign')

console.log('适配低端浏览器')

if(typeof Promise === 'undefined'){
  require('promise/lib/rejection-tracking').enable()
  window.Promise = require('promise/lib/es6-extensions')
}

if(typeof window.fetch === 'undefined'){
  require('whatwg-fetch')
}

let moment = require('moment')

moment.locale('zh-CN')