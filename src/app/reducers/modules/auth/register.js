export const REGISTER_LOADING = 'REGISTER_LOADING'
export const REGISTER_OVER = 'REGISTER_OVER'
export const SEND_REGISTER_CODE_LOADING = 'SEND_REGISTER_CODE_LOADING'
const ACTION_HANDLERS = {
  [REGISTER_LOADING]: (state) => {
    return ({...state,registerLoading: true})
  },
  [REGISTER_OVER]: (state) => {
    return ({...state,registerLoading: false})
  },
  [SEND_REGISTER_CODE_LOADING]: (state,action) => ({...state,sendLoading:action.loading,loadingRemaining:action.loadingRemaining}),
}

const initialState = {
  registerLoading: false
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}