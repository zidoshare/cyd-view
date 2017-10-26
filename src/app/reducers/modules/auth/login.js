export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_OVER = 'LOGIN_OVER'
export const SEND_LOADING = 'SEND_LOGIN'
export const SEND_LOGIN_OUT = 'SEND_LOGIN_OUT'
export const SEND_LOGIN_OVER = 'SEND_LOGIN_OVER'
const ACTION_HANDLERS = {
  [LOGIN_LOADING]: (state) => {
    return ({...state,loginLoading: true})
  },
  [LOGIN_OVER]: (state) => {
    return ({...state,loginLoading: false})
  },
  [SEND_LOADING]: (state,action) => ({...state,sendLoading:action.loading,loadingRemaining:action.loadingRemaining}),
  [SEND_LOGIN_OUT]: (state) => ({...state,outLoading:true}),
  [SEND_LOGIN_OVER]: (state) => ({...state,outLoading:false}),
}
const initialState = {
  loginLoading: false
}


export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}