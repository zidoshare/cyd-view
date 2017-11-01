import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './nav.less'
import { getUserInfo, logOut } from '../../reducers/modules/auth/loginActions'
import {push} from 'react-router-redux'

const { Item, SubMenu } = Menu

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: [],
    }
  }
  componentDidMount() {
    const { location } = this.props
    this.setState({
      selectedKeys: [location.pathname]
    })
    //移除 .no-link下的所有链接跳转
    document.querySelector('.no-link').addEventListener('click', function (e) {
      e.preventDefault()
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedKeys: [nextProps.location.pathname]
      })
    }
  }
  linkTo(e) {
    const { push } = this.props
    push(e.key)
    this.setState({
      selectedKeys: e.key,
    })
  }

  resolveMenu(menus, deep = 0, block) {
    let sub = null
    if (!Array.isArray(menus)) {
      sub = menus
      menus = menus.children || []
    }
    const menuItems = menus.map((value, index) => {
      if (value.children) {
        return this.resolveMenu(value, deep + 1, index)
      }
      return <Item key={value.path}>
        {value.component ? value.component : <Link to={value.path}>
          {(typeof value.icon === 'string') ? <Icon type={value.icon} /> : value.icon}
          {(typeof value.title === 'string') ? <span>{value.title}</span> : value.title}
        </Link>}
      </Item>
    })
    if (deep > 0) {
      return <SubMenu key={block + 'sub' + deep} {...sub}>
        {menuItems}
      </SubMenu>
    }
    return menuItems
  }

  render() {
    const { logo, mark, className } = this.props
    const menus = this.resolveMenu(this.props.menus, 0, 0)
    console.log(menus)
    const { selectedKeys } = this.state
    return (
      <header className={className}>
        <Link to='/'>
          <ul
            className={`${className}-logo`}
          >
            <li>
              <img src={logo} />
            </li>
            <li>
              {mark}
            </li>
          </ul>
        </Link>
        <div
          className={`${className}-nav`}
        >
          <Menu theme="light" mode="horizontal" className="no-link" selectedKeys={selectedKeys}
            onClick={this.linkTo.bind(this)}>
            {menus}
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
  location: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  menus: PropTypes.array.isRequired,
}
const mapStateToProps = (state) => ({
  ...state.auth.info
})

const mapDispatchToProps = ({
  getUserInfo,
  logOut,
  push,
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))