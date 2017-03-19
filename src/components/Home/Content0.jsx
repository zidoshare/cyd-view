import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner2 extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'banner2',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const follow = !isMode ? {
        delay: 1000,
        minMove: 0.1,
        data: [
          { id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX'] },
          { id: `${props.id}-wrapperBlock0`, value: -15, type: 'x' },
        ],
      } : null;
    const childrenToRender = (<Element
      key="0"
      prefixCls="banner-user-elem"
      followParallax={follow}
    >
      <BgElement
        className="bg bg0"
        key="bg"
        id="bg$0"
        scrollParallax={{ y: 300 }}
      />
      <QueueAnim
        type={['bottom', 'top']} delay={200}
        className={`${props.className}-title`}
        key="text"
        id={`${props.id}-wrapperBlock0`}
      >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock0`}
          >
            创源地
          </span>
        <p
          key="content"
          id={`${props.id}-contentBlock0`}
        >
          致力于钱币、纪念币、金银贵金属纪念品及邮票等收藏品的日常鉴定与回收，努力构建诚信收藏品平台，提供中高档收藏品的大宗批发、零售及投资。
        </p>
        <Button
          type="ghost"
          key="button"
          id={`${props.id}-buttonBlock0`}
        >
          Learn More
        </Button>
      </QueueAnim>
    </Element>);

    return (
      <OverPack
        {...props}
        hideProps={{ icon: { reverse: true } }}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="banner"
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

export default Banner2;

