import {connect} from 'react-redux'
import CodeLogin from '../../../../components/CodeLogin'

const mapStateToProps = (state) => {
  return ({
    state
  })
}

export default connect(mapStateToProps)(CodeLogin)