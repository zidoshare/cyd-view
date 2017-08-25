import React from 'react'
import PropTypes from 'prop-types'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import TweenOne from 'rc-tween-one'
const {Item} = Menu

import './nav.less'
export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isMode:this.props.isMode,
      phoneOpen:false,
    }
  }
  handleClick(){
    this.setState({
      phoneOpen:!this.state.phoneOpen,
    })
  }
  render(){
    //获取其他props
    const props = { ...this.props }
    console.log(props)
    const isMode = props.isMode
    delete props.isMode

    const {children,logo,mark,className} = this.props
    const {phoneOpen} = this.state
    return (
      <TweenOne 
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...props}>
        <Link to="/">
          <TweenOne
            component="ul"
            className={`${className}-logo`}
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            >
            <li>
              <img src={logo}/>
            </li>
            <li>
              {mark}
            </li>
          </TweenOne>
        </Link>
        
          {isMode?(
            <nav className={`${className}-phone-nav${phoneOpen ? ' open' : ''}`}>
              <div className={`${className}-phone-nav-bar`} onClick={this.handleClick.bind(this)}>
                <em/>
                <em/>
                <em/>
              </div>
              <div className={`${className}-phone-nav-text`} onClick={this.handleClick.bind(this)}>
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
          <TweenOne
            className={`${className}-nav`}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
          >
            <Menu 
              selectedKeys={[null]}
              mode="horizontal"
              theme="dark"
            >
              {children}
            </Menu>
          </TweenOne>}
        
      </TweenOne>
    )
  }
}

Nav.defaultProps = {
  isMode:false,
  className:'header0',
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