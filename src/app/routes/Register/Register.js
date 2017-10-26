import {connect} from 'react-redux'
import RegisterForm from '../../components/RegisterForm'
import * as registerAction from '../../reducers/modules/auth/registerActions'
const mapStateToProps = (state) => ({
  state: state.auth.register
})

const mapDispatchToProps = {
  ...registerAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)