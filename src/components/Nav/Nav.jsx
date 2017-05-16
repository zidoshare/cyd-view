import React, { PropTypes } from 'react'
import TweenOne from 'rc-tween-one'
import { Menu} from 'antd'
import {Link} from 'react-router'
import './Nav.scss'
const Item = Menu.Item

class Header extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      phoneOpen: false,
    }
  }

  phoneClick(){
    this.setState( {
      phoneOpen: !this.state.phoneOpen,
    } )
  }

  render() {
    const props = {
      ...this.props
    }
    const isMode = props.isMode
    delete props.isMode
    const navData = {
      menu1: <Link to="/">中心简介</Link>,
      menu2: <Link to="/commodities">产品专栏</Link>,
      menu3: <Link to="/partner">商业伙伴</Link>,
<<<<<<< HEAD
      menu4: <Link to="/news">时讯速览</Link>,
=======
      menu4: <Link to="/news">新闻动态</Link>,
>>>>>>> 736d08c9f7127501f22e1c8e483078b9b4637ab0
      menu5: <Link to="/careers">招贤纳士</Link>,
    }
    const navChildren = Object.keys( navData ).map( ( key, i ) => (<Item key={i} className="menu">
                                                                     {navData[ key ]}
                                                                   </Item>) )
    // navChildren.push(<SubMenu key={navChildren.length} title="关于我们">{abouts.map((value,index)=>(value))}</SubMenu>)
    return (<TweenOne component="header" animation={{ opacity: 0, type: 'from' }} {...props}>
              <TweenOne className={`${this.props.className}-logo`} animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }} id={`${this.props.id}-logo`}>
                <div className="main-logo">
                  <div><img width="100%" src="http://odp22tnw6.bkt.clouddn.com/cyd_logo.png"/></div>
                  <div>
<<<<<<< HEAD
                    <span>创源地文化传播有限公司</span>
=======
                    <span>创源地文化有限公司</span>
>>>>>>> 736d08c9f7127501f22e1c8e483078b9b4637ab0
                  </div>
                </div>
              </TweenOne>
              {isMode ? (<div className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`} id={`${this.props.id}-menu`}>
                           <div className={`${this.props.className}-phone-nav-bar`} onClick={() => {
                             this.phoneClick()
                           }}>
                           </div>
                         </div>) :
                 <TweenOne animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }} className={`${this.props.className}-nav`}>
                   <Menu theme="light" mode="horizontal" defaultSelectedKeys={[ '0' ]} id={`${this.props.id}-menu`}>
                     {navChildren}
                   </Menu>
                 </TweenOne>}
            </TweenOne>)
  }
}

Header.propTypes = {
  className: PropTypes.string,
  isMode: PropTypes.bool,
  id: PropTypes.string,
}

Header.defaultProps = {
  className: 'header1',
}

export default Header
