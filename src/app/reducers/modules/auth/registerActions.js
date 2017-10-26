import {post} from '../../../Util'
import apiUrl from '../../../apiUrl'
import {push} from 'react-router-redux/actions'
import {REGISTER_LOADING, REGISTER_OVER,SEND_REGISTER_CODE_LOADING} from './register'

export const sendRegisterCode = (phoneNumber) => {
  return dispatch => {
    dispatch({
      type: SEND_REGISTER_CODE_LOADING,
      loading: true,
    })
    return post(apiUrl.sendRegisterCodeUrl + '?phone=' + phoneNumber).then((json) => {
      if (!json.success) {
        dispatch({
          type: SEND_REGISTER_CODE_LOADING,
          loading: false,
        })
        return
      }
      let remaining = 30
      let timer = setInterval(() => {
        if (remaining === 0) {
          dispatch({
            type: SEND_REGISTER_CODE_LOADING,
            loading: false,
          })
          clearInterval(timer)
          return
        }
        dispatch({
          type: SEND_REGISTER_CODE_LOADING,
          loading: true,
          loadingRemaining: remaining--,
        })
      }, 1000)
    })
  }
}

export const register = (data) => {
  return dispatch => {
    dispatch({
      type: REGISTER_LOADING,
    })
    post('/api/auth/user/register', data).then((json) => {
      dispatch({
        type: REGISTER_OVER,
      })
      if (json.success)
        dispatch(push('/login'))
    })
  }
}