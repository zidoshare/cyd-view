export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_OVER = 'LOGIN_OVER'
export const SEND_LOADING = 'SEND_LOGIN'
const ACTION_HANDLERS = {
  [LOGIN_LOADING]: () => {
    return ({loginLoading: true})
  },
  [LOGIN_OVER]: () => {
    return ({loginLoading: false})
  },
  [SEND_LOADING]: (state,action) => ({sendLoading:action.loading,loadingRemaining:action.loadingRemaining}),
}
const initialState = {
  loginLoading: false
}


export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}