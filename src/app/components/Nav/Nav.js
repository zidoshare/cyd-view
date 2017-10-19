import React from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon, Spin, Avatar} from 'antd'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './nav.less'
import {getUserInfo} from '../../reducers/modules/auth/loginActions'

const {Item} = Menu

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMode: this.props.isMode,
      phoneOpen: false,
    }
  }

  componentWillMount() {
    this.props.getUserInfo()
  }

  render() {
    const {children, logo, mark, className, infoLoading, userData} = this.props
    return (
      <header className={className}>
        <Link to='/'>
          <ul
            className={`${className}-logo`}
          >
            <li>
              <img src={logo}/>
            </li>
            <li>
              {mark}
            </li>
          </ul>
        </Link>
        <div
          className={`${className}-nav`}
        >
          <Menu
            selectedKeys={[null]}
            mode='horizontal'
            theme='dark'
          >
            {children}
            <Item>

              <Spin spinning={infoLoading}>{userData ?
                <div className="avatar-container">

                  <span className="nickName">{userData.nickname.length > 4 ? userData.nickname.slice(0, 4) + '...' : userData.nickname}</span>
                  <Avatar shape="circle"
                          src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/default-avatar.png"/>
                </div>
                :
                <NavLink to={'/login'} style={{padding: 0}}><Icon type='login'/>登录/注册</NavLink>}</Spin>
              {userData ? <div className="info-panel">

                <span>{userData.nickname}</span>
              </div> : null}
            </Item>
          </Menu>
        </div>

      </header>
    )
  }
}

Nav.defaultProps = {
  isMode: false,
  className: 'header0',
}

Nav.propTypes = {
  children: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  mark: PropTypes.string.isRequired,
  isMode: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  infoLoading: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  getUserInfo: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  ...state.auth.info
})

const mapDispatchToProps = ({
  getUserInfo
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
export {
  Item
}