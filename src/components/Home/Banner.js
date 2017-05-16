import React, {PropTypes} from 'react'
import {Button, Icon, Anchor} from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne, {TweenOneGroup} from 'rc-tween-one'
import BannerAnim, {Element} from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './Content0.scss'

const BgElement = Element.BgElement
const Link = Anchor.Link
class Banner extends React.Component {
  render() {
    const props = {...this.props}
    delete props.isMode
    let temp = 60
    const childrenData = [
      {
        title: '<span style="font-size: 65px;color:white;line-height: 350px;">&nbsp;</span><span style="font-size: 18px;color:white;line-height: 100px;">&nbsp;</span>',
        content: <span
         style={{color: 'white'}}>&nbsp;&nbsp;</span>,
        button: [<a href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-16086531040.27.3jc4D9&id=546334109345" key="href1">了解详情</a>,<a href="http://www.chuangyuandi.net.cn/news/23" key="href2">了解更多</a>]
      },
      {
        title: null,
        content: <QueueAnim type={['bottom','top']} className="word-vertical banner-text pull-right" style={{position:'relative',left:200,top:60}}>
        {[
          <div key="text-1" style={{marginTop:temp}}>讓我們壹起來發現財富，尋找世界！</div>,
          <div key="text-2" style={{marginTop:temp-30}}>妳不了解的財富！</div>,
          <div key="text-3" style={{marginTop:temp-60}}>被遺忘的世界！</div>
        ]}
        </QueueAnim>,
        button: null,
      },
      {
        title: '<span style="font-size: 65px;color:white;line-height: 200px;">创源地</span><span style="font-size: 18px;color:white;line-height: 100px;">文化传播有限公司</span>',
        content: <span
          style={{color: 'white'}}>致力于钱币、纪念币、金银贵金属纪念品及邮票等收藏品的日常鉴定与回收，努力构建诚信收藏品平台，提供中高档收藏品的大宗批发、零售及投资。</span>,
        button: 'learn more',
      }
    ]
    const childrenToRender = childrenData.map((item, i) => {
      const title = item.title
      const content = item.content
      const button = item.button
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${i}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${i}`}
        >{title == null ? null : <span
          className="logo"
          key="logo"
          id={`${props.id}-titleBlock${i}`}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />}
          {content == null ? null : <div
            key="content"
            id={`${props.id}-contentBlock${i}`}
          >{content}</div>}
          {(typeof button == 'string' || React.isValidElement(button)) && button != null?
            <Link href="#content_9_0" key="button"
              title={<Button type="ghost" id={`${props.id}-buttonBlock${i}`}>{button}</Button>}
            />:button
          }
        </QueueAnim>
      </Element>)
    })
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{opacity: 0, type: 'from'}}
          leave={{opacity: 0}}
          component=""
        >
          <BannerAnim
            key="banner"
            autoPlay
            autoPlaySpeed={3000}
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{y: '-=20', yoyo: true, repeat: -1, duration: 1000}}
          className={`${props.className}-icon`}
          style={{bottom: 40}}
          key="icon"
        >
          <Icon type="down"/>
        </TweenOne>
      </OverPack>
    )
  }
}
Banner.propTypes = {
  className: PropTypes.string
}
Banner.defaultProps = {
  className: 'banner1',
}
export default Banner