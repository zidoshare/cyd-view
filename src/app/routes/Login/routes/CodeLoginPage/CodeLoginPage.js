import {connect} from 'react-redux'
import CodeLogin from '../../../../components/CodeLogin'
import * as loginActions from '../../../../reducers/modules/auth/loginActions'
const mapStateToProps = (state) => ({
  auth: state.auth.login
})

const mapDispatchToProps = {
  ...loginActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeLogin)