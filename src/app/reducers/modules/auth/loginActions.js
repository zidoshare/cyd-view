import {post, get} from '../../../Util'
import apiUrl from '../../../apiUrl'
import {push } from 'react-router-redux/actions'
import {GET_INFO_OVER, GET_INFO_LOADING} from './info'
import {LOGIN_LOADING, LOGIN_OVER, SEND_LOADING} from './login'

const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  }
}
const sendGetInfo = () => {
  return {
    type: GET_INFO_LOADING,
  }
}

const receiveInfo = (json) => {
  return {
    type: GET_INFO_OVER,
    data: json,
  }
}

const loginOver = () => {
  return {
    type: LOGIN_OVER,
  }
}

//异步actionCreator
export const login = (data) => {
  return dispatch => {
    dispatch(loginLoading())
    return post(apiUrl.loginUrl, data, {
      'Content-Type': 'application/x-www-form-urlencoded'
    }).then((json) => {
      dispatch(loginOver())
      if (json.success) {
        // console.log(routerActions)
        dispatch(push('/'))
        return json
      }
    })
  }
}

export const loginByCode = (data) => {
  return dispatch => {
    dispatch(loginLoading())
    return get(apiUrl.codeLoginUrl, data).then((json) => {
      dispatch(loginOver())
      if (json.success)
        return json
    })
  }
}

export const sendCode = (phoneNumber) => {
  return dispatch => {
    dispatch({
      type: SEND_LOADING,
      loading: true,
    })
    return post(apiUrl.sendCodeUrl + '?phone=' + phoneNumber).then((json) => {
      if (!json.success) {
        dispatch({
          type: SEND_LOADING,
          loading: false,
        })
        return
      }
      let remaining = 30
      let timer = setInterval(() => {
        if (remaining === 0) {
          dispatch({
            type: SEND_LOADING,
            loading: false,
          })
          clearInterval(timer)
          return
        }
        dispatch({
          type: SEND_LOADING,
          loading: true,
          loadingRemaining: remaining--,
        })
      }, 1000)
    })
  }
}

export const getUserInfo = () => {
  return dispatch => {
    dispatch(sendGetInfo())
    get(apiUrl.infoUrl).then(json => {
      if (json.success)
        dispatch(receiveInfo(json.data))
    })
  }
}