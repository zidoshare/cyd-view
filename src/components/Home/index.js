import React from 'react'
import enquire from 'enquire.js'

import Content0 from './Banner'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

import './less/antMotion_style.less'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMode: false
    }
  }

  componentDidMount() {
    // 适配手机屏幕
    this.enquireScreen((isMode) => {
      this.setState({ isMode })
    })
  }

  enquireScreen(cb){
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true)
      },
      unmatch: () => {
        cb && cb()
      },
    })
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Content0 id="content_1_0" key="content_10_0" isMode={this.state.isMode}/>,
      <Content1 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      <Content2 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>,
      <Content3 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>,
      // <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode}/>,
    ]
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    )
  }
}
