import { post } from '../../../Util'
import apiUrl from '../../../apiUrl'
import {LOGIN_LOADING,LOGIN_OVER} from './login'

const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  }
}

const loginOver = (json) => {
  return {
    type: LOGIN_OVER,
    data:json,
  }
}

//异步actionCreator
export const login = (data) => {
  return dispatch => {
    dispatch(loginLoading(data))
    return post(apiUrl.loginUrl, data, {
      'Content-Type': 'application/x-www-form-urlencoded'
    }).then(json =>dispatch(loginOver(json)))
  }
}