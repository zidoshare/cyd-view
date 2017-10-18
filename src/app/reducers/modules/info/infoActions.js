import { post } from '../../../Util'
import {GET_INFO_LOADING,GET_INFO_OVER} from './info'
import apiUrl from '../../../apiUrl'

const loginLoading = () => {
  return {
    type: GET_INFO_LOADING,
  }
}

const loginOver = (json) => {
  return {
    type: GET_INFO_OVER,
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