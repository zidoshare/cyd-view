import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'



class Content extends React.Component {
  getBlockChildren(item, i){
    return (
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>)
  }

  render() {
    const props = { ...this.props }
    delete props.isMode
    const dataSource = [
{ icon: 'http://odp22tnw6.bkt.clouddn.com/company.svg', title: '行业优势', content: '  我国“十三五规划”提出，到2020年我国文化产业在GDP占比将从现在的5%提高到15%，而目前在西欧、北美地区这一比例达到了25%左右' },
{ icon: 'http://odp22tnw6.bkt.clouddn.com/resource.svg', title: '资源优势', content: '  公司和钱币协会长期合作收藏业务，奠定了深厚的资源基础，同时和多个平台强化互联合作。拥有精准的市场数据分析能力和参考公共信息平台及时反馈能力' },
{ icon: 'http://odp22tnw6.bkt.clouddn.com/operate.svg', title: '运营优势', content: '  新型运营模式，权衡线上线下利弊，适时调整各项运营策略。严谨的培训体系，让职员更快的融入工作；默契的团队协作，让工作过程变得简单高效。' },
    ]
    const listChildren = dataSource.map(this.getBlockChildren.bind(this))
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
        style={{background:'#f1fbfa'}}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            企业优势 CORPORATE ADVANTAGE
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    )
  }
}
Content.propTypes = {
  id: React.PropTypes.string,
}
Content.defaultProps = {
  className: 'content7',
}
export default Content
