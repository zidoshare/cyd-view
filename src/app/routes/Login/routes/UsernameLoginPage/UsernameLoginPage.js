import {connect} from 'react-redux'
import UsernameLogin from '../../../../components/UsernameLogin'
import * as loginActions from '../../../../reducers/modules/auth/loginActions'

const mapStateToProps = (state) => ({
  auth: state.login
})

const mapDispatchToProps = {
  ...loginActions
}

export default connect(mapStateToProps, mapDispatchToProps)(UsernameLogin)