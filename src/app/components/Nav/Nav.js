import React from 'react'
import PropTypes from 'prop-types'
import {Menu} from 'antd'
const {Item} = Menu

import './Nav.scss'
export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isMode:this.props.isMode,
    }
  }
  render(){
    const {children,logo,mark} = this.props
    return (
      <div>
        <ul className="nav-logo">
          <li>
            <img src={logo}/>
          </li>
          <li>
            {mark}
          </li>
        </ul>
        <nav className="nav">
          <Menu 
            selectedKeys={[null]}
            mode="horizontal"
            theme="dark"
          >
            {children}
          </Menu>
        </nav>
      </div>
    )
  }
}

Nav.defaultProps = {
  isMode:false,
}

Nav.propTypes = {
  children:PropTypes.array.isRequired,
  logo:PropTypes.string.isRequired,
  mark:PropTypes.string.isRequired,
  isMode:PropTypes.bool.isRequired,
}

export {
  Item
}