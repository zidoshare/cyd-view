import React from 'react'
import PropTypes from 'prop-types'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
const {Item} = Menu

import './Nav.scss'
export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isMode:this.props.isMode,
      open:false,
    }
  }
  handleClick(){
    this.setState({
      open:!this.state.open,
    })
  }
  render(){
    const {children,logo,mark,className,isMode} = this.props
    const {open} = this.state
    return (
      <header className="main-header">
        <Link to="/">
          <ul className="nav-logo">
            <li key="0">
              <img src={logo}/>
            </li>
            <li key="1">
              {mark}
            </li>
          </ul>
        </Link>
        
          {isMode?(
            <nav className={`${className}-nav` + (open?' open':'')}>
              <div className={'nav-btn'} onClick={this.handleClick.bind(this)}>
                <em/>
                <em/>
                <em/>
              </div>
              <div className={'nav-list'} onClick={this.handleClick.bind(this)}>
                <Menu 
                  selectedKeys={[null]}
                  mode="inline"
                  theme="dark"
                >
                  {children}
                </Menu>
              </div>
            </nav>
          ):
          <nav
          className={`${className}-nav`}>
            <Menu 
              selectedKeys={[null]}
              mode="horizontal"
              theme="dark"
            >
              {children}
            </Menu>
          </nav>}
        
      </header>
    )
  }
}

Nav.defaultProps = {
  isMode:false,
  className:'main-header',
}

Nav.propTypes = {
  children:PropTypes.array.isRequired,
  logo:PropTypes.string.isRequired,
  mark:PropTypes.string.isRequired,
  isMode:PropTypes.bool.isRequired,
  className:PropTypes.string.isRequired,
}

export {
  Item
}