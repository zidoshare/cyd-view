import React from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon, Spin, Avatar} from 'antd'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './nav.less'
import {getUserInfo, logOut} from '../../reducers/modules/auth/loginActions'

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

                  <span
                    className="nickName">{userData.nickname.length > 4 ? userData.nickname.slice(0, 4) + '...' : userData.nickname}</span>
                  <Avatar shape="circle"
                          src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/default-avatar.png"/>
                  {userData ?
                    <div className="info-panel">
                      <div className="info-top clear-fix">
                        <div className="pull-left">
                          <div className="pull-left mod-panel">
                            <Avatar shape="circle" size="large"
                                    src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/default-avatar.png"/>
                          </div>
                          <div className="pull-left mod-panel">
                            <p>{userData.nickname}</p>
                            <p>创建时间</p>
                          </div>
                        </div>
                        <span onClick={
                          this.props.logOut()
                        }><Icon type="logout"/>登出</span>
                      </div>
                      <div className="info-footer clear-fix">
                        <Link to="/auction/send">
                          <div className="action-item">
                            <div><Icon type="cloud-upload-o"/></div>
                            上传拍品
                          </div>
                        </Link>
                        <div className="action-item">
                          <div><Icon type="home"/></div>
                          我的主页
                        </div>
                        <div className="action-item">
                          <div><img src="http://odp22tnw6.bkt.clouddn.com/v1/commodity/my-action.png"/></div>
                          我的拍卖
                        </div>
                      </div>
                    </div> : null}
                </div>
                :
                <div className="menu-link-container">
                  <Icon type='login' style={{color: 'white'}}/>
                  <NavLink to={'/login'} style={{padding: 0}}>登录</NavLink>
                  <span style={{color: 'white'}}>&nbsp;/&nbsp;</span>
                  <NavLink to={'/register'} style={{padding: 0}}>注册</NavLink>
                </div>}
              </Spin>

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
  getUserInfo: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  ...state.auth.info
})

const mapDispatchToProps = ({
  getUserInfo,
  logOut,
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
export {
  Item
}