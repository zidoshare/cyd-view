import Nav from 'Components/Nav'
import React from 'react'
import 'antd/dist/antd.min.css'
import enquire from 'enquire.js'

class AppLayout extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      isMode: false
    }
  }
  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen( ( isMode ) => {
      this.setState( {
        isMode
      } )
    } )
  }

  enquireScreen( cb ) {
    /* eslint-disable no-unused-expressions */
    enquire.register( 'only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb( true )
      },
      unmatch: () => {
        cb && cb()
      },
    } )
  /* eslint-enable no-unused-expressions */
  }
  render() {
    return (
    <div className="templates-wrapper">
      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode}/>
      {this.props.children}
    </div>
    )
  }
}
AppLayout.propTypes = {
  children: React.PropTypes.any
}
export default AppLayout
