import info from './info'
import login from './login'
import register from './register'
import {combineReducers} from 'redux'
export default combineReducers({
  login,
  info,
  register
})