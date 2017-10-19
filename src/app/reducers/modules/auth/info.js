export const GET_INFO_LOADING = 'GET_INFO_LOADING'
export const GET_INFO_OVER = 'GET_INFO_OVER'

const ACTION_HANDLERS = {
  [GET_INFO_LOADING]: (state) => {
    return ({...state, infoLoading: true})
  },
  [GET_INFO_OVER]: (state, action) => {
    return ({...state, infoLoading: false, userData: action.data})
  }
}

const initialState = {
  infoLoading: false,
}


export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}