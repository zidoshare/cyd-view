export const CHANGE_MODE = 'CHANGE_MODE'

export const MODE = {
  DEFAULT_MODE:'DEFAULT_MODE',
  CODE_MODE:'CODE_MODE'
}

/**
 * action创建函数
 */
export function changeMode(mode){
  return {
    type:CHANGE_MODE,
    mode,
  }
}