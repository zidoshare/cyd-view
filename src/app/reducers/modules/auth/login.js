export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_OVER = 'LOGIN_OVER'


const ACTION_HANDLERS = {
  [LOGIN_LOADING]: (state) => {
    return ({...state, loginLoading: true})
  },
  [LOGIN_OVER]: (state, action) => {
    return ({...state, loginLoading: false, data: action.data})
  }
}
const initialState = {
  loginLoading: false
}


export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}