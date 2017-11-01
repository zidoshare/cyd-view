import Info from '../../../../components/Info'
import {getUserInfo} from '../../../../reducers/modules/auth/loginActions'
import {connect} from 'react-redux'
const mapStateToProps = (state) => ({
  ...state.auth.info
})

const mapDispatchToProps = ({
  getUserInfo,
})

export default connect(mapStateToProps,mapDispatchToProps)(Info)