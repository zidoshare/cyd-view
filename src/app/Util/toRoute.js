import { browserHistory } from 'react-router-dom'
export default (path) => {
  browserHistory.push(path)
}