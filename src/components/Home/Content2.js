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
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
        style={{background:'#e0faf9'}}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="http://oow7renvm.bkt.clouddn.com/1.png" />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              <b>企业文化</b>
            </h1>
            <div key="p" id={`${props.id}-content`}>
              <p>
                核心价值观：共创、共赢、共享<br/>
                &nbsp;&nbsp;事业共创 &nbsp;业绩共赢&nbsp;成果共享
              </p>
              <p>
                文化核心：信任与个性<br/>
                &nbsp;&nbsp;因信任而包容&nbsp;因个性而创造
              </p>
            </div>

          </QueueAnim>
        </OverPack>
      </div>
    )
  }
}

Content.defaultProps = {
  className: 'content0',
}

export default Content
