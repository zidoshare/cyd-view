import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

class Content extends React.Component {

  render() {
    const props = { ...this.props }
    const isMode = props.isMode
    delete props.isMode
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
        style={{background:'#e7fbf2'}}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              <strong>市场运营</strong>
            </h1>
            <p key="p" id={`${props.id}-content`}>
              &nbsp;&nbsp;公司主营钱币收藏、上市项目等。线下藏品就是大家熟知的面对面买卖收藏，收益周期较长，针对线下藏品爱好者，我们开展的有鉴定、挂价、兑换等业务。线上藏品就是借助于互联网构建的交易平台，继承了股票的基本架构，收益周期大为缩短，针对这部分藏品爱好者我们开展的有藏品上市和电子盘开户交易等业务。
            </p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="http://oow7renvm.bkt.clouddn.com/2.png" />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    )
  }
}
Content.defaultProps = {
  className: 'content1',
}
export default Content
